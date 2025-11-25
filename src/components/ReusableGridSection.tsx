"use client";

import type { MutableRefObject, RefCallback } from "react";
import ReusableGridCard from "./ReusableGridCard";

interface GridItem {
  title: string;
  media: string;
  subtitle?: string;
}

interface GridSectionProps {
  items: GridItem[];
  cardRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  innerSelector?: string;
  gridClass?: string;
}

export default function ReusableGridSection({
  items,
  cardRefs,
  innerSelector = "",
  gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10",
}: GridSectionProps) {
  return (
    <div className={`vault-grid ${gridClass}`}>
      {items.map((item, i) => {
        // Typed ref callback
        const setRef: RefCallback<HTMLDivElement> = (el) => {
          cardRefs.current[i] = el;
        };

        return (
          <ReusableGridCard
            key={item.title}
            item={item}
            innerSelector={innerSelector}
            cardRef={setRef}
          />
        );
      })}
    </div>
  );
}
