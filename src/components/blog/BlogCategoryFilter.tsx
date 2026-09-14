"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";

type Props = {
  categories: readonly string[];
  activeCategory: string | null;
};

export function BlogCategoryFilter({ categories, activeCategory }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setCategory(category: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    const query = params.toString();
    router.push(query ? `/blog/?${query}` : "/blog/", { scroll: false });
  }

  return (
    <div className="mt-8 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => setCategory(null)}
        className={cn(
          "rounded-[2px] border px-3 py-1.5 text-sm font-medium transition-colors",
          !activeCategory
            ? "border-ember bg-ember text-white"
            : "border-line bg-white text-steel hover:border-ember hover:text-ink",
        )}
      >
        All topics
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setCategory(category)}
          className={cn(
            "rounded-[2px] border px-3 py-1.5 text-sm font-medium transition-colors",
            activeCategory === category
              ? "border-ember bg-ember text-white"
              : "border-line bg-white text-steel hover:border-ember hover:text-ink",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
