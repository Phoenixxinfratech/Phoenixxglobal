/**
 * Working-hours maths in IST. SLA clocks pause overnight and on Sundays.
 */
import { WORKING_HOURS_IST } from "./config";

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

function toIstParts(date: Date) {
  const ist = new Date(date.getTime() + IST_OFFSET_MS);
  return {
    year: ist.getUTCFullYear(),
    month: ist.getUTCMonth(),
    day: ist.getUTCDate(),
    hour: ist.getUTCHours(),
    minute: ist.getUTCMinutes(),
    weekday: ist.getUTCDay(),
  };
}

function istDateUtc(year: number, month: number, day: number, hour: number, minute: number): Date {
  return new Date(Date.UTC(year, month, day, hour, minute) - IST_OFFSET_MS);
}

export function isWorkingInstant(date: Date): boolean {
  const parts = toIstParts(date);
  if (!(WORKING_HOURS_IST.workingDays as readonly number[]).includes(parts.weekday)) return false;
  const minutes = parts.hour * 60 + parts.minute;
  const start = WORKING_HOURS_IST.startHour * 60 + WORKING_HOURS_IST.startMinute;
  const end = WORKING_HOURS_IST.endHour * 60 + WORKING_HOURS_IST.endMinute;
  return minutes >= start && minutes < end;
}

/** Advance `from` by `minutes` of working time. */
export function addWorkingMinutes(from: Date, minutes: number): Date {
  let remaining = minutes;
  let cursor = new Date(from);

  if (!isWorkingInstant(cursor)) {
    cursor = nextOpen(cursor);
  }

  while (remaining > 0) {
    const parts = toIstParts(cursor);
    const end = istDateUtc(
      parts.year,
      parts.month,
      parts.day,
      WORKING_HOURS_IST.endHour,
      WORKING_HOURS_IST.endMinute,
    );
    const available = Math.max(0, (end.getTime() - cursor.getTime()) / 60000);
    if (remaining <= available) {
      return new Date(cursor.getTime() + remaining * 60000);
    }
    remaining -= available;
    cursor = nextOpen(end);
  }

  return cursor;
}

export function nextOpen(from: Date): Date {
  let cursor = new Date(from);
  for (let i = 0; i < 14; i += 1) {
    const parts = toIstParts(cursor);
    const open = istDateUtc(
      parts.year,
      parts.month,
      parts.day,
      WORKING_HOURS_IST.startHour,
      WORKING_HOURS_IST.startMinute,
    );
    const close = istDateUtc(
      parts.year,
      parts.month,
      parts.day,
      WORKING_HOURS_IST.endHour,
      WORKING_HOURS_IST.endMinute,
    );
    const workingDay = (WORKING_HOURS_IST.workingDays as readonly number[]).includes(parts.weekday);

    if (workingDay && cursor < open) return open;
    if (workingDay && cursor >= open && cursor < close) return cursor;

    cursor = new Date(open.getTime() + 24 * 60 * 60 * 1000);
    cursor = istDateUtc(
      toIstParts(cursor).year,
      toIstParts(cursor).month,
      toIstParts(cursor).day,
      WORKING_HOURS_IST.startHour,
      WORKING_HOURS_IST.startMinute,
    );
  }
  return cursor;
}

/** Minutes of working time elapsed between two instants. */
export function workingMinutesBetween(from: Date, to: Date): number {
  if (to <= from) return 0;
  let minutes = 0;
  let cursor = isWorkingInstant(from) ? from : nextOpen(from);
  while (cursor < to) {
    const parts = toIstParts(cursor);
    const close = istDateUtc(
      parts.year,
      parts.month,
      parts.day,
      WORKING_HOURS_IST.endHour,
      WORKING_HOURS_IST.endMinute,
    );
    const sliceEnd = to < close ? to : close;
    if (sliceEnd > cursor) {
      minutes += (sliceEnd.getTime() - cursor.getTime()) / 60000;
    }
    cursor = nextOpen(close);
    if (cursor <= close) break;
  }
  return Math.floor(minutes);
}
