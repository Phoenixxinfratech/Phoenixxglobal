"use client";

import { useMemo, useState } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Input,
} from "@/components/ui";
import type { FaqCategory } from "@/content/types";
import { faqPageSchema } from "@/lib/schema";
import { InlineLink } from "@/components/blocks";

type FaqHubClientProps = {
  categories: FaqCategory[];
};

const ALL = "all";

export function FaqHubClient({ categories }: FaqHubClientProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const visibleFaqs = useMemo(() => {
    const pool =
      activeCategory === ALL
        ? categories.flatMap((cat) =>
            cat.faqs.map((faq) => ({ ...faq, categoryId: cat.id })),
          )
        : categories
            .filter((cat) => cat.id === activeCategory)
            .flatMap((cat) =>
              cat.faqs.map((faq) => ({ ...faq, categoryId: cat.id })),
            );

    const normalized = query.trim().toLowerCase();
    if (!normalized) return pool;

    return pool.filter(
      (faq) =>
        faq.question.toLowerCase().includes(normalized) ||
        faq.answer.toLowerCase().includes(normalized),
    );
  }, [categories, activeCategory, query]);

  const faqSchema = faqPageSchema(
    visibleFaqs.map(({ question, answer }) => ({ question, answer })),
  );

  return (
    <>
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(ALL)}
            className={`rounded-[2px] border px-3 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === ALL
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-steel hover:border-ink"
            }`}
          >
            All topics
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-[2px] border px-3 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-steel hover:border-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="w-full md:max-w-sm">
          <Input
            label="Search FAQs"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g. cam-lock, CIF, thickness"
            aria-controls="faq-list"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc" aria-live="polite">
        {visibleFaqs.length} question{visibleFaqs.length === 1 ? "" : "s"} shown
      </p>

      {visibleFaqs.length === 0 ? (
        <p className="mt-8 text-base text-steel">
          No questions match your search. Try a different keyword or browse all
          topics.
        </p>
      ) : (
        <Accordion id="faq-list" className="mt-6" type="single">
          {visibleFaqs.map((faq, index) => (
            <AccordionItem key={`${faq.categoryId}-${faq.question}`} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionPanel>
                <p>{faq.answer}</p>
                {faq.linkHref && faq.linkLabel ? (
                  <p className="mt-3">
                    <InlineLink href={faq.linkHref}>{faq.linkLabel} →</InlineLink>
                  </p>
                ) : null}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </>
  );
}
