import React from "react";

interface MissionSectionProps {
  refObj: React.RefObject<HTMLElement | null>;
}
export default function MissionSection({ refObj }: MissionSectionProps) {
  return (
    <section
      ref={refObj}
      className="relative z-30 container mx-auto px-6 py-28 max-w-4xl">
      <h3 className="text-3xl font-zentry tracking-wide">Mission</h3>

      <p className="mt-6 text-gray-300 text-lg leading-relaxed">
        To craft a persistent, interconnected world where players, creators, and
        narratives merge across realities — enabling a shared ecosystem powered
        by imagination, identity, and limitless expression.
      </p>

      <button className="mt-10 px-10 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl transition font-robert-medium tracking-wide">
        Learn More
      </button>
    </section>
  );
}
