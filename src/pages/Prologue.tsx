"use client";

import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Prologue() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glyphsRef = useRef<HTMLElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const fxClusterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade sequence
      gsap.from(".fade-in", {
        opacity: 0,
        y: 25,
        duration: 1.35,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });

      // Glyph float
      glyphsRef.current.forEach((g, i) => {
        gsap.to(g, {
          y: -20 - i * 5,
          duration: 3 + i * 0.4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });

      // Background Parallax
      gsap.to(".bg-video", {
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // FX Cluster (embers, dust)
      gsap.to(".fx-dot", {
        y: -40,
        x: (i) => (Math.random() - 0.5) * 80,
        duration: 4,
        stagger: 0.03,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Cards cinematic entrance
      gsap.from(".pro-card", {
        opacity: 0,
        y: 40,
        rotateX: -25,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".cards-section",
          start: "top 85%",
        },
      });

      // Card hover 3D tilt
      cardRefs.current.forEach((card) => {
        const inner = card.querySelector(".card-inner");
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
      className="relative min-h-screen w-full overflow-hidden bg-black text-white font-robert-regular">
      {/* Background Video Swapper */}
      <video
        src="/videos/hero-4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="bg-video absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-[1.2]"
      />

      {/* Texture Layers */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/img/stones.webp')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.95))]" />

      {/* Dust / Embers FX Cluster */}
      <div ref={fxClusterRef} className="absolute inset-0 pointer-events-none">
        {[...Array(45)].map((_, i) => (
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

      {/* CONTENT */}
      <section className="relative z-20 flex flex-col items-center pt-40 pb-40 px-6 text-center">
        {/* Floating Glyph Row */}
        <div className="flex gap-8 mb-10">
          {["✦", "𐌂", "✸", "𐌑", "✹", "𐌙"].map((g, i) => (
            <span
              key={i}
              ref={(el) => el && (glyphsRef.current[i] = el)}
              className="fade-in font-zentry text-4xl tracking-wide opacity-60 select-none">
              {g}
            </span>
          ))}
        </div>

        {/* Title */}
        <p className="fade-in text-sm uppercase opacity-70 tracking-[0.35em] font-general">
          Prologue
        </p>

        <div className="fade-in mt-6">
          <AnimatedTitle
            title="Where <b>Legends</b> Awaken — the first echo"
            containerClass="!text-white text-5xl md:text-6xl font-zentry drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          />
        </div>

        <p className="fade-in mt-6 text-gray-300 text-lg font-robert-regular leading-relaxed max-w-2xl mx-auto">
          In the quiet before the storm, the realms shift — shadows remember,
          steel whispers, and forgotten gods rise once more.
        </p>

        <button className="fade-in mt-20 px-12 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-robert-medium hover:bg-white/20 transition-all duration-300 tracking-wide uppercase">
          Begin the Journey
        </button>
      </section>

      {/* CARDS SECTION */}
      <section className="cards-section relative z-30 px-6 py-32 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {[
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
        ].map((card, i) => (
          <div
            key={i}
            ref={(el) => el && (cardRefs.current[i] = el)}
            className="pro-card relative group cursor-pointer perspective-[1200px]">
            <div className="card-inner bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-xl transition-all duration-300">
              <div className="overflow-hidden rounded-xl mb-5">
                <img
                  src={card.img}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <h3 className="text-xl font-robert-medium mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
