"use client";

import { useRef } from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import TextureLayers from "../components/TextureLayers";
import FloatingGlyphs from "../components/FloatingGlyphs";

import AboutHero from "../components/pages/about/AboutHero";
import ClipRevealSection from "../components/pages/about/ClipRevealSection";
import MissionSection from "../components/pages/about/MissionSection";

import ReusableCardsSection from "../components/ReusableCardsSection";

import { usePageAnimations } from "../hooks/usePageAnimations";
import EmberFX from "../components/EmberFX";

export default function About() {
  const containerRef = useRef<HTMLElement | null>(null);

  const glyphsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const missionRef = useRef<HTMLElement | null>(null);

  usePageAnimations({
    containerRef,
    glyphsRef,
    cardRefs,
    missionRef,

    usePageFade: true,
    useHeaderFade: true,
    useGlyphFloat: true,
    useBgParallax: true,
    useGridReveal: true,
    useCardTilt: true,
    useClipScroll: true,
  });

  const items = [
    {
      title: "Innovation",
      img: "/images/cards/innovation.jpg",
      desc: "We consistently push boundaries through new creative approaches.",
    },
    {
      title: "Vision",
      img: "/images/cards/vision.jpg",
      desc: "Crafting a future designed with purpose and intention.",
    },
    {
      title: "Execution",
      img: "/images/cards/execution.jpg",
      desc: "Bringing ideas into reality through precision and care.",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="page-fade relative min-h-screen w-full overflow-hidden bg-black text-white font-robert-regular">
      <BackgroundVideo />
      <TextureLayers />

      <FloatingGlyphs
        glyphsRef={glyphsRef}
        size="md"
        className="absolute top-32 left-1/2 -translate-x-1/2 opacity-50 pointer-events-none"
        itemClassName="head-fade text-3xl"
      />

      {/* Ember FX */}
      <EmberFX />

      <AboutHero />

      <ClipRevealSection />

      {/* CARD SECTION — sudah ekuip animasi */}
      <ReusableCardsSection items={items} cardRefs={cardRefs} />

      <MissionSection refObj={missionRef} />
    </main>
  );
}
