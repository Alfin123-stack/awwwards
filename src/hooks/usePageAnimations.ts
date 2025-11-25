"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PageAnimationConfig {
  containerRef: React.RefObject<HTMLElement | null>;

  // optional refs
  glyphsRef?: React.MutableRefObject<(HTMLElement | null)[]>;
  cardRefs?: React.MutableRefObject<(HTMLDivElement | null)[]>;
  missionRef?: React.RefObject<HTMLElement | null>;

  // optional features
  usePageFade?: boolean;
  useHeaderFade?: boolean;
  useGlyphFloat?: boolean;
  useBgParallax?: boolean;
  useGridReveal?: boolean;
  useCardTilt?: boolean;
  useClipScroll?: boolean;

  // selectors
  bgSelector?: string;
  gridSelector?: string;
  clipSelector?: string;
  clipTrigger?: string;
  cardInnerSelector?: string;
}

export const usePageAnimations = ({
  containerRef,
  glyphsRef,
  cardRefs,
  missionRef,

  usePageFade = true,
  useHeaderFade = true,
  useGlyphFloat = true,
  useBgParallax = false,
  useGridReveal = false,
  useCardTilt = false,
  useClipScroll = false,

  bgSelector = ".bg-video",
  gridSelector = ".cards-section",
  clipSelector = ".clip-reveal",
  clipTrigger = ".clip-section",
  cardInnerSelector = ".card-inner",
}: PageAnimationConfig) => {
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      // PAGE FADE -------------------------
      if (usePageFade) {
        gsap.from(".page-fade", {
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
        });
      }

      // HEADER FADE ------------------------
      if (useHeaderFade) {
        gsap.from(".head-fade", {
          opacity: 0,
          y: 25,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
        });
      }

      // FLOATING GLYPHS --------------------
      if (useGlyphFloat && glyphsRef) {
        glyphsRef.current.forEach((g, i) => {
          if (!g) return;
          gsap.to(g, {
            y: -20 - i * 4,
            duration: 3 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }

      // BACKGROUND PARALLAX ----------------
      if (useBgParallax) {
        gsap.to(bgSelector, {
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // GRID REVEAL ------------------------
      if (useGridReveal && cardRefs) {
        gsap.from(cardRefs.current, {
          opacity: 0,
          y: 40,
          rotateX: -25,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridSelector,
            start: "top 85%",
          },
        });
      }

      // IMAGE CLIP SCROLL ------------------
      if (useClipScroll) {
        gsap.to(clipSelector, {
          borderRadius: 0,
          scale: 1.1,
          scrollTrigger: {
            trigger: clipTrigger,
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1.1,
          },
        });
      }

      // MISSION SECTION ---------------------
      if (missionRef?.current) {
        gsap.from(missionRef.current, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
          },
        });
      }

      // CARD TILT ---------------------------
      if (useCardTilt && cardRefs) {
        cardRefs.current.forEach((card) => {
          if (!card) return;

          const inner = card.querySelector(cardInnerSelector) as HTMLElement;
          if (!inner) return;

          card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;

            const rx = (y / r.height - 0.5) * -16;
            const ry = (x / r.width - 0.5) * 16;

            gsap.to(inner, {
              rotateX: rx,
              rotateY: ry,
              duration: 0.35,
              ease: "power3.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(inner, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.45,
              ease: "power3.out",
            });
          });
        });
      }
    }, containerRef?.current ?? undefined);

    return () => ctx.revert();
  }, [
    bgSelector,
    cardInnerSelector,
    clipSelector,
    clipTrigger,
    gridSelector,
    containerRef,
    glyphsRef,
    cardRefs,
    missionRef,
    usePageFade,
    useHeaderFade,
    useGlyphFloat,
    useBgParallax,
    useGridReveal,
    useCardTilt,
    useClipScroll,
  ]);
};
