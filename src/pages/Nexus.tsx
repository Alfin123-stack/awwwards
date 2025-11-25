"use client";

import { useRef } from "react";

import PageContainer from "../components/PageContainer";
import BackgroundVideo from "../components/BackgroundVideo";
import TextureLayers from "../components/TextureLayers";
import FloatingGlyphs from "../components/FloatingGlyphs";
import ReusableHeader from "../components/ReusableHeader";

import { usePageAnimations } from "../hooks/usePageAnimations";
import EmberFX from "../components/EmberFX";
import NexusGrid from "../components/NexusGrid";

export default function Nexus() {
  const containerRef = useRef<HTMLElement | null>(null);
  const glyphsRef = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP universal system
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
    useClipScroll: false,
    gridSelector: ".nexus-grid",
    cardInnerSelector: ".nexus-inner",
  });

  const items = [
    {
      title: "Quantum Core",
      desc: "A rotating singularity reactor creating controlled dimensional ruptures.",
      img: "/img/gallery-1.webp",
    },
    {
      title: "Central Nexus Node",
      desc: "An amber-encoded awareness hub stabilizing multi-plane existence.",
      img: "/img/gallery-3.webp",
    },
    {
      title: "Temporal Exchange Gate",
      desc: "A harmonic nexus of trade and entropy balancing through pulsating energy layers.",
      img: "/img/gallery-5.webp",
    },
  ];

  return (
    <PageContainer containerRef={containerRef}>
      <BackgroundVideo />
      <TextureLayers />

      {/* HEADER */}
      <section className="relative z-20 flex flex-col items-center pt-40 pb-24 px-6 text-center page-fade">
        <FloatingGlyphs
          glyphsRef={glyphsRef}
          size="lg"
          gap="gap-6"
          className="mb-10"
        />

        <ReusableHeader
          subtitle="Cross-Dimensional Gate"
          title="The <b>Nexus</b> — Core Bridge Between Parallel Realities"
          description="A central convergence node that stabilizes timelines, synchronizes identities, and enables traversal across boundless universes."
          size="lg"
          className="head-fade"
        />
      </section>

      {/* Ember FX */}
      <EmberFX />

      <NexusGrid items={items} cardRefs={cardRefs} />

      {/* CTA */}
      <div className="relative z-20 text-center pb-24">
        <button className="px-12 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition text-lg tracking-wide uppercase">
          Enter the Nexus
        </button>
      </div>
    </PageContainer>
  );
}
