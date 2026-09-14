"use client";

import { useState } from "react";
import { LeadFormSection } from "@/components/blocks";
import { PanelSelectionTool } from "@/components/tools/PanelSelectionTool";

export function PanelSelectionPageClient() {
  const [defaultProduct, setDefaultProduct] = useState<string | undefined>();
  const [defaultMessage, setDefaultMessage] = useState<string | undefined>();

  return (
    <>
      <PanelSelectionTool
        onRecommend={({ productSlug, message }) => {
          setDefaultProduct(productSlug);
          setDefaultMessage(message);
        }}
      />
      <LeadFormSection
        variant="quote"
        defaultProduct={defaultProduct}
        defaultMessage={defaultMessage}
        className="mt-12"
      />
    </>
  );
}
