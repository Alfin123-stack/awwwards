"use client";

import React from "react";
import NexusCard from "./NexusCard";

interface NexusGridItem {
  title: string;
  desc: string;
  img: string;
}

interface NexusGridProps {
  items: NexusGridItem[];
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const NexusGrid: React.FC<NexusGridProps> = ({ items, cardRefs }) => {
  return (
    <section className="cards-section relative z-40 px-6 pb-28">
      <div className="nexus-grid container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center">
        {items.map((item, i) => (
          <NexusCard
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default NexusGrid;
