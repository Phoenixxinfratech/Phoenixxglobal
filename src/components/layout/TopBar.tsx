import { site } from "@/config/site";
import { confirmed } from "@/lib/confirmed";
import { Container } from "@/components/ui";

export function TopBar() {
  const exportEmail = confirmed(site.contact.exportEmail);
  const phone = confirmed(site.contact.phonePrimary);
  const linkedin = confirmed(site.social.linkedin);
  const indiamart = confirmed(site.social.indiamart);

  const hasLeft = Boolean(exportEmail || phone);
  const hasRight = Boolean(linkedin || indiamart);

  if (!hasLeft && !hasRight) {
    return null;
  }

  return (
    <div className="hidden bg-graphite text-sm text-zinc md:block print:hidden">
      <Container>
        <div className="flex h-9 items-center justify-between gap-4">
          {hasLeft ? (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {exportEmail ? (
                <a
                  href={`mailto:${exportEmail}`}
                  className="transition-colors hover:text-white"
                >
                  Export: {exportEmail}
                </a>
              ) : null}
              {phone ? (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {phone}
                </a>
              ) : null}
            </div>
          ) : (
            <span aria-hidden="true" />
          )}

          {hasRight ? (
            <div className="flex items-center gap-4">
              {indiamart ? (
                <a
                  href={indiamart}
                  className="transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IndiaMART
                </a>
              ) : null}
              {linkedin ? (
                <a
                  href={linkedin}
                  className="transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
