"use client";

import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const glyphsRef = useRef([]);
  const missionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // PAGE FADE
      gsap.from(".page-fade", {
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
      });

      // FLOATING GLYPHS (unified with Prologue)
      glyphsRef.current.forEach((g, i) => {
        gsap.to(g, {
          y: -20 - i * 4,
          duration: 3 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // HEADING FADE SEQUENCE
      gsap.from(".head-fade", {
        opacity: 0,
        y: 25,
        duration: 1.35,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      });

      // IMAGE MORPH SCROLL
      gsap.to(".clip-reveal", {
        borderRadius: 0,
        scale: 1.1,
        scrollTrigger: {
          trigger: ".clip-section",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1.1,
        },
      });

      // MISSION BLOCK SLIDE
      gsap.from(missionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="page-fade relative min-h-screen w-full overflow-hidden bg-black text-white font-robert-regular">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="/videos/hero-3.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      {/* FLOATING GLYPHS – UNIFIED STYLE */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 flex gap-8 opacity-50 pointer-events-none">
        {["✦", "𐌂", "✸", "𐌑", "✹", "𐌙"].map((g, i) => (
          <span
            key={i}
            ref={(el) => (glyphsRef.current[i] = el)}
            className="head-fade font-zentry text-3xl tracking-wide opacity-60 select-none">
            {g}
          </span>
        ))}
      </div>

      {/* HERO CONTENT */}
      <section className="relative z-20 text-center max-w-3xl mx-auto pt-48 px-6">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 mx-auto max-w-xl blur-[120px] bg-white/5 -z-10"></div>

        {/* SUBTITLE */}
        <p className="head-fade text-sm uppercase tracking-[0.35em] opacity-70 font-general">
          Origin Chamber
        </p>

        {/* TITLE */}
        <div className="head-fade mt-6">
          <AnimatedTitle
            title={"Disc<b>o</b>ver the Origin — <b>Zentry</b>"}
            containerClass="!text-white text-5xl md:text-6xl font-zentry special-font drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          />
        </div>

        {/* DESCRIPTION */}
        <p className="head-fade mt-6 text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
          The foundation of a meta-universe where worlds, identities, and
          experiences converge into a single evolving reality.
        </p>
      </section>

      {/* IMAGE CLIP SCROLL SECTION */}
      <section className="clip-section relative z-20 w-full h-[70vh] mt-28 overflow-hidden px-8">
        <div className="clip-reveal absolute inset-0 rounded-[36px] overflow-hidden scale-100">
          <img
            src="/img/about.webp"
            className="w-full h-full object-cover"
            alt="About section image"
          />
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        ref={missionRef}
        className="relative z-30 container mx-auto px-6 py-28 max-w-4xl">
        <h3 className="text-3xl font-zentry tracking-wide">Mission</h3>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          To craft a persistent, interconnected world where players, creators,
          and narratives merge across realities — enabling a shared ecosystem
          powered by imagination, identity, and limitless expression.
        </p>

        <button className="mt-10 px-10 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl transition font-robert-medium tracking-wide">
          Learn More
        </button>
      </section>
    </main>
  );
}
