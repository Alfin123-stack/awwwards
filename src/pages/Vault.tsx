"use client";

import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glyphsRef = useRef<HTMLElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const fxClusterRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade sequence
      gsap.from(".fade-in", {
        opacity: 0,
        y: 25,
        duration: 1.25,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Floating glyphs
      glyphsRef.current.forEach((g, i) => {
        gsap.to(g, {
          y: -18 - i * 4,
          duration: 3 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Background Parallax scale
      gsap.to(".vault-bg", {
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // FX Cluster floating
      gsap.to(".fx-dot", {
        y: -35,
        x: (i) => (Math.random() - 0.5) * 60,
        duration: 4,
        stagger: 0.03,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Card reveal (Prologue-style)
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 40,
        rotateX: -25,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".vault-grid",
          start: "top 85%",
        },
      });

      // GPU Tilt 3D hover
      cardRefs.current.forEach((card) => {
        const inner = card.querySelector(".vault-inner");

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden font-robert-regular">
      {/* BACKGROUND VIDEO */}
      <video
        ref={bgRef}
        autoPlay
        muted
        loop
        playsInline
        className="vault-bg absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-[1.2]">
        <source src="/videos/hero-1.mp4" type="video/mp4" />
      </video>

      {/* TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/img/stones.webp')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),rgba(0,0,0,0.9))]" />

      {/* EMBER / FX CLUSTER */}
      <div ref={fxClusterRef} className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="fx-dot absolute w-[4px] h-[4px] bg-white/40 rounded-full blur-[2px]"
            style={{
              top: `${20 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative z-20 text-center pt-40 pb-28 px-6 container mx-auto">
        {/* Floating Glyphs */}
        <div className="flex gap-6 justify-center mb-8">
          {["✦", "𐌂", "✸", "𐌑", "✹"].map((g, i) => (
            <span
              key={i}
              ref={(el) => (glyphsRef.current[i] = el!)}
              className="fade-in font-zentry text-3xl opacity-60 select-none">
              {g}
            </span>
          ))}
        </div>

        <p className="fade-in text-sm uppercase opacity-70 tracking-[0.3em]">
          The Archive
        </p>

        <div className="fade-in mt-6">
          <AnimatedTitle
            title="The <b>Vault</b> — curated relics"
            containerClass="!text-white text-5xl md:text-6xl font-zentry drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          />
        </div>

        <p className="fade-in mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Explore curated assets, lore, and creations preserved across
          universes.
        </p>
      </section>

      {/* GRID SECTION */}
      <section className="relative z-20 container mx-auto px-6 pb-32">
        <div className="vault-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {vaultItems.map((v, i) => (
            <div
              key={v.title}
              ref={(el) => el && (cardRefs.current[i] = el)}
              className="pro-card relative group cursor-pointer perspective-[1200px]">
              <div className="vault-inner bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl p-6 transition-all duration-300">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={v.media}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <h3 className="text-xl font-robert-medium">{v.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{v.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="relative z-20 text-center pb-24">
        <button className="px-12 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition text-sm tracking-wide uppercase">
          Enter the Archive
        </button>
      </div>
    </main>
  );
}
