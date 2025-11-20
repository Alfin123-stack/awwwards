"use client";

import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";

export default function Contact() {
  const containerRef = useRef(null);
  const glyphsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // PAGE FADE
      gsap.from(".page-fade", {
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });

      // FLOATING GLYPHS - subtle
      glyphsRef.current.forEach((g, i) => {
        gsap.to(g, {
          y: -12 - i * 3,
          duration: 4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // FORM REVEAL
      gsap.from(".form-block", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="page-fade relative min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25">
        <source src="/videos/hero-3.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      {/* FLOATING GLYPHS */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-6 opacity-40 pointer-events-none">
        {["✦", "𐌂", "✸", "𐌑", "✹"].map((g, i) => (
          <span
            key={i}
            ref={(el) => (glyphsRef.current[i] = el)}
            className="font-zentry text-xl blur-[0.5px]">
            {g}
          </span>
        ))}
      </div>

      {/* CONTACT SECTION */}
      <section className="relative z-20 container mx-auto px-6 py-32 max-w-3xl text-center">
        {/* Soft Glow Behind Header */}
        <div className="absolute inset-0 mx-auto max-w-xl blur-[120px] bg-white/5 -z-10"></div>

        <p className="text-sm uppercase tracking-[0.25em] opacity-60 font-general">
          Join Zentry
        </p>

        <AnimatedTitle
          title={"let&#39;s b<b>u</b>ild the new era"}
          containerClass="mt-6 !text-white special-font"
        />

        <p className="mt-6 text-gray-400 max-w-xl mx-auto leading-relaxed">
          Interested in collaboration, press, or partnerships? Reach out.
        </p>

        {/* FORM */}
        <form className="form-block mt-12 grid gap-5 text-left">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 h-36">
            <textarea
              placeholder="Message"
              className="w-full h-full bg-transparent outline-none resize-none text-white placeholder-gray-400"
            />
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-xl transition font-robert-medium tracking-wide">
              Contact us
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
