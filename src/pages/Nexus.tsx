"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Nexus() {
  const containerRef = useRef(null);
  const portalsRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // PAGE FADE IN
      gsap.from(".page-fade", {
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
      });

      // PORTAL FADE + SCALE
      gsap.from(".portal-core", {
        opacity: 0,
        scale: 0.7,
        filter: "blur(40px)",
        duration: 1.6,
        ease: "power3.out",
      });

      // FLOATING SHARDS
      gsap.to(".shard", {
        y: -40,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // TEXT REVEAL
      gsap.from(".sub-text", {
        opacity: 0,
        y: 20,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.from(".desc-text", {
        opacity: 0,
        y: 20,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.4,
      });

      // CARD ENTRANCE
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.4,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards-section",
          start: "top 80%",
        },
      });

      // HOVER ZOOM WITH GSAP
      cardsRef.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.05, duration: 0.4, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="page-fade relative min-h-screen w-screen overflow-hidden text-white bg-black font-zentry">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-20">
        <source src="/videos/hero-2.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* PORTAL */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="portal-core relative w-[600px] h-[600px]">
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse blur-sm" />
          <div className="absolute inset-0 rounded-full border border-amber-300/10" />
          <div className="absolute inset-0 rounded-full bg-white/5 animate-ping" />
          <div className="absolute left-1/2 top-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-amber-300/10 blur-3xl"></div>
        </div>
      </div>

      {/* AMBER SHARDS */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="shard absolute w-10 h-10 bg-amber-300/10 backdrop-blur-xl rounded-xl border border-amber-300/20 shadow-lg"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
          }}></div>
      ))}

      {/* TEXT */}
      <div className="relative z-30 pt-24 text-center max-w-3xl mx-auto">
        <p className="sub-text text-sm uppercase tracking-wider opacity-60 font-general">
          Dimensional Layer
        </p>

        <AnimatedTitle
          title={"The <b>Nexus</b> — Dimensional Gateway System"}
          containerClass="mt-6 !text-white special-font"
        />

        <p className="desc-text mt-4 text-gray-300 max-w-xl mx-auto leading-relaxed font-general">
          A multidimensional access gate that controls transitions, identity,
          synchronization and movement between parallel universes.
        </p>
      </div>

      {/* CARDS */}
      <div className="cards-section relative z-30 grid grid-cols-1 md:grid-cols-3 gap-16 mt-32 px-10">
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
            className="group relative flex flex-col items-center cursor-pointer">
            {/* ENERGY RING */}
            <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl group-hover:bg-white/30 transition-all duration-700"></div>
              <div className="absolute inset-2 border border-white/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-6 border border-amber-300/20 rounded-full animate-spin-reverse-slow"></div>

              <div className="relative z-10 w-40 h-40 rounded-full overflow-hidden border border-white/40 shadow-[0_0_40px_#ffffff]">
                <img
                  src={item.img}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-500"
                />
              </div>

              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:animate-scan-round"></div>
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-6 text-center max-w-xs">
              <h3 className="text-xl font-bold tracking-wide text-amber-300 font-robert-medium">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed font-general">
                {item.desc}
              </p>

              <button className="mt-4 px-5 py-2 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 transition text-xs tracking-wider font-general">
                Enter
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-30 mt-20 text-center pb-16">
        <button className="px-10 py-4 rounded-2xl bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-xl transition text-lg tracking-wide font-robert-medium">
          Enter the Nexus
        </button>
      </div>
    </main>
  );
}
