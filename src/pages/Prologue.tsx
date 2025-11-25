"use client";

import { useRef } from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import TextureLayers from "../components/TextureLayers";

import { usePageAnimations } from "../hooks/usePageAnimations";

import ReusableCardsSection from "../components/ReusableCardsSection";
import FloatingGlyphs from "../components/FloatingGlyphs";
import ReusableHeader from "../components/ReusableHeader";
import EmberFX from "../components/EmberFX";

export default function Prologue() {
  const containerRef = useRef<HTMLElement | null>(null);
  const glyphsRef = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ⬇️ gunakan hooks animasi universal
  usePageAnimations({
    containerRef,
    glyphsRef,
    cardRefs,

    usePageFade: true,
    useHeaderFade: true,
    useGlyphFloat: true,
    useBgParallax: true,
    useGridReveal: true,
    useCardTilt: true,
    useClipScroll: false, // ga ada clip di halaman ini
  });

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white font-robert-regular">
      <BackgroundVideo />
      <TextureLayers />

      <section className="relative z-20 flex flex-col items-center pt-40 pb-32 px-6 text-center page-fade">
        <FloatingGlyphs
          glyphsRef={glyphsRef}
          size="lg"
          gap="gap-8"
          className="mb-10"
        />

        <ReusableHeader
          subtitle="Prologue"
          title="Where <b>Legends</b> Take Their First Breath"
          description="In the silence before creation, the realms stir — shadows awaken, echoes align, and the first spark of destiny rises."
          size="lg"
          className="head-fade"
        />
      </section>

      {/* Ember FX */}
      <EmberFX />

      <ReusableCardsSection
        cardRefs={cardRefs}
        items={[
          {
            title: "Entrance",
            img: "/img/entrance.webp",
            desc: "The threshold where forgotten realms begin to stir.",
          },
          {
            title: "Gallery of Echoes",
            img: "/img/gallery-4.webp",
            desc: "Fragments of ancient memories suspended between worlds.",
          },
          {
            title: "Swordsman",
            img: "/img/swordman.webp",
            desc: "Forged by silence, awakened by destiny.",
          },
        ]}
      />
    </main>
  );
}
