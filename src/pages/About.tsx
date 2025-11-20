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

      // FLOATING GLYPHS – softer, calmer
      glyphsRef.current.forEach((g, i) => {
        gsap.to(g, {
          y: -10 - i * 4,
          duration: 4 + i * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // HERO TEXT REVEAL
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-desc", {
        opacity: 0,
        y: 20,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.35,
      });

      // PORTAL CORE SCALE-IN
      gsap.from(".origin-portal", {
        opacity: 0,
        scale: 0.6,
        filter: "blur(40px)",
        duration: 1.8,
        ease: "power4.out",
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

      {/* FLOATING GLYPHS – refined */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-6 opacity-40 pointer-events-none">
        {["✦", "𐌂", "✸", "𐌑", "✹"].map((g, i) => (
          <span
            key={i}
            ref={(el) => (glyphsRef.current[i] = el)}
            className="font-zentry text-xl tracking-wide blur-[0.5px]">
            {g}
          </span>
        ))}
      </div>

      {/* HERO CONTENT */}
      <section className="relative z-20 text-center max-w-3xl mx-auto pt-48 px-6">
        {/* Soft Glow Behind Title */}
        <div className="absolute inset-0 mx-auto max-w-xl blur-[120px] bg-white/5 -z-10"></div>

        <p className="hero-sub text-sm uppercase tracking-[0.3em] opacity-50 font-general">
          Origin Chamber
        </p>

        <AnimatedTitle
          title={"Disc<b>o</b>ver the Origin — <b>Zentry</b>"}
          containerClass="mt-6 !text-white special-font"
        />

        <p className="hero-desc mt-6 text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
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
