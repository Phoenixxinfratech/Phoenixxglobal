"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import { Button } from "@/components/ui";
import type { HeroSlide } from "@/content/hero";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 6500;
const SWIPE_THRESHOLD = 50;
const HERO_WIDTH = 1600;
const HERO_HEIGHT = 900;

const focalPointClass = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
} as const;

type HeroSliderProps = {
  slides: HeroSlide[];
  className?: string;
};

export function HeroSlider({ slides, className }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [manualChange, setManualChange] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const progressStart = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const slideCount = slides.length;
  const activeSlide = slides[activeIndex];

  const goTo = useCallback(
    (index: number, fromManual = false) => {
      if (slideCount === 0) return;
      const next = ((index % slideCount) + slideCount) % slideCount;
      setActiveIndex(next);
      setProgress(0);
      progressStart.current = Date.now();
      if (fromManual) {
        setManualChange(true);
        setPaused(true);
      }
    },
    [slideCount],
  );

  const goNext = useCallback(
    (fromManual = false) => goTo(activeIndex + 1, fromManual),
    [activeIndex, goTo],
  );

  const goPrev = useCallback(
    (fromManual = false) => goTo(activeIndex - 1, fromManual),
    [activeIndex, goTo],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    progressStart.current = Date.now();
  }, [activeIndex]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) {
        setPaused(true);
      } else if (!manualChange) {
        setPaused(false);
        progressStart.current = Date.now();
        setProgress(0);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [manualChange]);

  useEffect(() => {
    if (slideCount <= 1 || paused || reducedMotion) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = () => {
      const elapsed = Date.now() - progressStart.current;
      const pct = Math.min(100, (elapsed / AUTOPLAY_MS) * 100);
      setProgress(pct);

      if (elapsed >= AUTOPLAY_MS) {
        goNext(false);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex, goNext, paused, reducedMotion, slideCount]);

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchStartY.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    const endX = event.changedTouches[0]?.clientX;
    const endY = event.changedTouches[0]?.clientY;

    touchStartX.current = null;
    touchStartY.current = null;

    if (startX == null || startY == null || endX == null || endY == null) return;

    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX < 0) goNext(true);
    else goPrev(true);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext(true);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev(true);
    }
  }

  if (!activeSlide || slideCount === 0) return null;

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-graphite",
        "min-h-[min(78vh,620px)] md:min-h-[min(88vh,760px)]",
        className,
      )}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (!manualChange) setPaused(false);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          if (!manualChange) setPaused(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className="relative mx-auto aspect-[1920/760] w-full max-h-[620px] md:max-h-[760px]"
        aria-live={manualChange ? "polite" : "off"}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <article
              key={slide.id}
              className={cn(
                "absolute inset-0",
                !reducedMotion && "transition-opacity duration-500",
                isActive ? "opacity-100" : "pointer-events-none opacity-0",
              )}
              aria-roledescription="slide"
              aria-hidden={!isActive}
              aria-label={`Slide ${index + 1} of ${slideCount}: ${slide.headline}`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  width={HERO_WIDTH}
                  height={HERO_HEIGHT}
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? undefined : "lazy"}
                  quality={70}
                  className={cn(
                    "h-full w-full object-cover",
                    focalPointClass[slide.image.focalPoint],
                    !reducedMotion && isActive && "animate-hero-scale",
                  )}
                  sizes="100vw"
                />
              </div>

              <div
                className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/55 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-0 flex items-end">
                <div className="w-full px-6 pb-16 pt-24 md:px-12 md:pb-20 lg:max-w-3xl">
                  {slide.eyebrow ? (
                    <p className="text-sm font-medium text-white/80">{slide.eyebrow}</p>
                  ) : null}
                  <h2 className="font-display text-3xl font-semibold text-white md:text-5xl lg:text-6xl">
                    {slide.headline}
                  </h2>
                  <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">{slide.subline}</p>

                  {slide.stat ? (
                    <dl className="mt-6">
                      <dt className="font-display text-2xl font-semibold text-white">
                        {slide.stat.value}
                      </dt>
                      <dd className="text-sm text-white/80">{slide.stat.label}</dd>
                    </dl>
                  ) : null}

                  {isActive ? (
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button href={slide.primaryCta.href} variant="primary" size="lg">
                        {slide.primaryCta.label}
                      </Button>
                      {slide.secondaryCta ? (
                        <Button
                          href={slide.secondaryCta.href}
                          variant="secondary"
                          size="lg"
                          className="border-white bg-transparent text-white hover:border-white hover:bg-white/10"
                        >
                          {slide.secondaryCta.label}
                        </Button>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {slideCount > 1 ? (
        <>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 md:left-12 md:right-12">
            <div className="flex gap-2" role="tablist" aria-label="Slide indicators">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to slide ${index + 1}`}
                  className="relative h-1 w-10 overflow-hidden rounded-none bg-white/30"
                  onClick={() => goTo(index, true)}
                >
                  <span
                    className={cn(
                      "absolute inset-y-0 left-0 bg-white",
                      index === activeIndex && !reducedMotion && "transition-[width] duration-100",
                    )}
                    style={{
                      width:
                        index === activeIndex
                          ? `${progress}%`
                          : index < activeIndex
                            ? "100%"
                            : "0%",
                    }}
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
                aria-label="Previous slide"
                onClick={() => goPrev(true)}
              >
                <span aria-hidden="true">&lsaquo;</span>
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
                aria-label="Next slide"
                onClick={() => goNext(true)}
              >
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
}
