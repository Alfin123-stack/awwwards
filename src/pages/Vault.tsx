"use client";

import { useRef } from "react";

import { usePageAnimations } from "../hooks/usePageAnimations";
import PageContainer from "../components/PageContainer";
import BackgroundVideo from "../components/BackgroundVideo";
import TextureLayers from "../components/TextureLayers";
import FloatingGlyphs from "../components/FloatingGlyphs";
import ReusableHeader from "../components/ReusableHeader";
import ReusableGridSection from "../components/ReusableGridSection";
import EmberFX from "../components/EmberFX";

const vaultItems = [
  {
    title: "Relics",
    subtitle: "Rare items salvaged from worlds.",
    media: "/img/gallery-1.webp",
  },
  {
    title: "Archives",
    subtitle: "Lore and logs from old campaigns.",
    media: "/img/gallery-2.webp",
  },
  {
    title: "Blueprints",
    subtitle: "Tools for creators and builders.",
    media: "/img/gallery-3.webp",
  },
  {
    title: "Artifacts",
    subtitle: "Legendary gear and skins.",
    media: "/img/gallery-4.webp",
  },
];

export default function Vault() {
  const containerRef = useRef<HTMLElement | null>(null);
  const glyphsRef = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // universal animation hook
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
    gridSelector: ".vault-grid",
    cardInnerSelector: ".vault-inner",
  });

  return (
    <PageContainer containerRef={containerRef}>
      <BackgroundVideo />
      <TextureLayers />

      {/* HEADER */}
      <section className="relative z-20 flex flex-col items-center pt-40 pb-32 px-6 text-center page-fade">
        <FloatingGlyphs
          glyphsRef={glyphsRef}
          size="lg"
          gap="gap-8"
          className="mb-10"
        />

        <ReusableHeader
          subtitle="Vault"
          title="Unlock the <b>Hidden Archives</b>"
          description="A curated chamber of relics, artifacts, and long-lost echoes preserved beyond time."
          size="lg"
          className="head-fade"
        />
      </section>

      {/* Ember FX */}
      <EmberFX />

      {/* GRID */}
      <section className="relative z-20 container mx-auto px-6 pb-32">
        <ReusableGridSection
          items={vaultItems}
          cardRefs={cardRefs}
          innerSelector="vault-inner"
        />
      </section>

      {/* CTA */}
      <div className="relative z-20 text-center pb-24">
        <button className="px-12 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition text-sm tracking-wide uppercase">
          Enter the Archive
        </button>
      </div>
    </PageContainer>
  );
}
