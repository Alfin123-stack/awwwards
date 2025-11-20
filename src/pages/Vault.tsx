// pages/vault.tsx
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
  const containerRef = useRef<HTMLElement | null>(null);
  const glyphsRef = useRef<HTMLElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const bgRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page fade in
      gsap.from(".vault-page", {
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });

      // Floating glyphs
      glyphsRef.current.forEach((g, i) => {
        gsap.to(g, {
          y: -10 - i * 2,
          duration: 4 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Background subtle scale/parallax
      gsap.to(bgRef.current, {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Cards enter reveal
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".vault-grid",
          start: "top 85%",
        },
      });

      // Better GPU-tilt
      cardRefs.current.forEach((card) => {
        const inner = card.querySelector<HTMLElement>(".vault-card-inner");
        if (!inner) return;

        let raf: number | null = null;

        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;

          const rx = -y * 12;
          const ry = x * 12;

          if (raf) cancelAnimationFrame(raf);

          raf = requestAnimationFrame(() => {
            inner.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
          });
        };

        const onLeave = () => {
          if (raf) cancelAnimationFrame(raf);
          gsap.to(inner, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="vault-page relative min-h-screen w-full text-white overflow-hidden bg-black font-robert-regular">
      {/* BACKGROUND VIDEO */}
      <video
        ref={bgRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="/videos/hero-1.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* TEXTURE OVERLAY */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none -z-10"
        style={{
          backgroundImage:
            "url('/mnt/data/222744f8-4cf8-4a8a-95a7-a2ab0a2585c5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* FLOATING GLYPHS */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-6 opacity-40 pointer-events-none z-40">
        {["✦", "𐌂", "✸", "𐌑"].map((g, i) => (
          <span
            key={i}
            ref={(el) => el && (glyphsRef.current[i] = el)}
            className="font-zentry text-xl blur-[0.4px] select-none">
            {g}
          </span>
        ))}
      </div>

      {/* HERO */}
      <section className="relative z-30 container mx-auto px-6 pt-28 pb-12 text-center">
        <p className="text-sm uppercase opacity-60 tracking-widest">
          The Archive
        </p>

        <AnimatedTitle
          title={"The <b>Vault</b> — curated relics"}
          containerClass="mt-6 !text-white special-font"
        />

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Explore curated assets, lore, and creations preserved across
          universes.
        </p>
      </section>

      {/* GRID */}
      <section className="relative z-30 container mx-auto px-6 pb-28">
        <div className="vault-grid mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {vaultItems.map((v, i) => (
            <div
              key={v.title}
              ref={(el) => el && (cardRefs.current[i] = el)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer transform-gpu">
              <div className="vault-card-inner bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl transition-all duration-300">
                {/* image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={v.media}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* text */}
                <div className="p-5">
                  <h3 className="font-zentry uppercase text-lg tracking-wide">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">{v.subtitle}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <button className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/20 transition">
                      View
                    </button>
                    <div className="text-xs text-gray-400">Details</div>
                  </div>
                </div>
              </div>

              {/* rim light */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-300/25 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="relative z-30 mb-24 text-center">
        <button className="px-10 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl transition text-sm tracking-wide">
          Enter the Archive
        </button>
      </div>
    </main>
  );
}
