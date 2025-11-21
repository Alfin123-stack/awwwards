"use client";

import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Nexus() {
  const containerRef = useRef(null);
  const glyphsRef = useRef([]);
  const cardsRef = useRef([]);
  const fxClusterRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Overall page fade / stagger for .fade-in elements
      gsap.from(".fade-in", {
        opacity: 0,
        y: 25,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });

      // Glyph float (subtle)
      glyphsRef.current.forEach((g, i) => {
        if (!g) return;
        gsap.to(g, {
          y: -14 - i * 3,
          duration: 3 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Background parallax scale (scroll)
      gsap.to(bgRef.current, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // FX cluster subtle drift
      gsap.to(".fx-dot", {
        y: -30,
        x: (i) => (Math.random() - 0.5) * 90,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.02,
        ease: "sine.inOut",
      });

      // Portal core pop (single reveal)
      gsap.from(".portal-core", {
        opacity: 0,
        scale: 0.72,
        filter: "blur(36px)",
        duration: 1.6,
        ease: "power4.out",
        delay: 0.25,
      });

      // Shards float (individual)
      gsap.to(".shard", {
        y: -36,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Cards enter with scroll trigger
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 48,
        rotateX: -18,
        duration: 1.15,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".cards-section",
          start: "top 82%",
        },
      });

      // Card hover subtle scale (and reset)
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.03, duration: 0.36, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.36, ease: "power2.out" });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white font-robert-regular">
      {/* Background Video (parallax target) */}
      <video
        ref={bgRef}
        src="/videos/hero-2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="vault-bg absolute inset-0 w-full h-full object-cover brightness-[0.32] contrast-[1.1]"
      />

      {/* Gradient / Texture Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),rgba(0,0,0,0.95))]" />
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/img/stones.webp')" }}
      />

      {/* FX Cluster (embers/dust) */}
      <div
        ref={fxClusterRef}
        className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(42)].map((_, i) => (
          <div
            key={i}
            className="fx-dot absolute w-[4px] h-[4px] bg-white/35 rounded-full blur-[2px]"
            style={{
              top: `${12 + Math.random() * 76}%`,
              left: `${6 + Math.random() * 88}%`,
            }}
          />
        ))}
      </div>

      {/* Floating glyphs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-6 opacity-60 pointer-events-none z-40">
        {["✦", "𐌂", "✸", "𐌑", "✹", "𐌙"].map((g, i) => (
          <span
            key={i}
            ref={(el) => (glyphsRef.current[i] = el)}
            className="font-zentry text-2xl tracking-wide select-none fade-in">
            {g}
          </span>
        ))}
      </div>

      {/* Portal center visual (big) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
        <div className="portal-core relative w-[560px] h-[560px]">
          <div className="absolute inset-0 rounded-full border border-white/10 blur-[8px] animate-pulse" />
          <div className="absolute inset-0 rounded-full border-amber-300/10" />
          <div className="absolute left-1/2 top-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 bg-amber-300/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/40" />
        </div>
      </div>

      {/* Amber shards */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="shard absolute w-10 h-10 bg-amber-300/10 backdrop-blur-xl rounded-xl border border-amber-300/20 shadow-lg"
          style={{
            top: `${8 + Math.random() * 84}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
          }}
        />
      ))}

      {/* Page content */}
      <section className="relative z-40 pt-24 pb-8 text-center px-6">
        <p className="fade-in sub-text text-sm uppercase tracking-wider opacity-60 font-general">
          Dimensional Layer
        </p>

        <div className="fade-in mt-6 max-w-3xl mx-auto">
          <AnimatedTitle
            title={"The <b>Nexus</b> — Dimensional Gateway System"}
            containerClass="!text-white special-font text-4xl md:text-5xl lg:text-6xl"
          />
        </div>

        <p className="fade-in desc-text mt-4 text-gray-300 max-w-xl mx-auto leading-relaxed">
          A multidimensional access gate that controls transitions, identity,
          synchronization and movement between parallel universes.
        </p>
      </section>

      {/* Cards section (interactive nodes) */}
      <section className="cards-section relative z-40 px-6 pb-28">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center">
          {[
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
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative flex flex-col items-center cursor-pointer w-full max-w-xs">
              {/* energy ring / portal node */}
              <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-white/6 blur-3xl group-hover:bg-white/10 transition-all duration-700" />
                <div className="absolute inset-2 border border-white/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-6 border border-amber-300/20 rounded-full animate-spin-reverse-slow" />

                <div className="relative z-10 w-40 h-40 rounded-full overflow-hidden border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500"
                  />
                </div>

                <div className="absolute inset-0 rounded-full pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-800" />
                </div>
              </div>

              {/* text */}
              <div className="mt-6 text-center max-w-xs">
                <h3 className="text-xl font-robert-medium tracking-wide text-amber-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-4 px-5 py-2 rounded-full border border-white/20 bg-white/6 hover:bg-white/12 transition text-xs tracking-wider">
                  Enter
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="relative z-40 pb-24 text-center">
        <button className="px-12 py-4 rounded-2xl bg-white/12 hover:bg-white/20 border border-white/20 backdrop-blur-xl transition text-lg tracking-wide">
          Enter the Nexus
        </button>
      </div>
    </main>
  );
}
