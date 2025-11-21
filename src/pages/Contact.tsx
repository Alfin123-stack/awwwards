"use client";

import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const glyphsRef = useRef([]);
  const fxClusterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger Fade-in
      gsap.from(".fade-in", {
        opacity: 0,
        y: 25,
        duration: 1.25,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      });

      // Floating glyphs
      glyphsRef.current.forEach((g, i) => {
        gsap.to(g, {
          y: -18 - i * 4,
          duration: 3 + i * 0.4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });

      // Background parallax
      gsap.to(".bg-video", {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.25,
        },
      });

      // Ember FX movement
      gsap.to(".fx-dot", {
        y: -40,
        x: (i) => (Math.random() - 0.5) * 80,
        duration: 4,
        repeat: -1,
        yoyo: true,
        stagger: 0.03,
        ease: "sine.inOut",
      });

      // Form cinematic reveal
      gsap.from(".form-block", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".form-section",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white font-robert-regular">
      {/* Background video */}
      <video
        src="/videos/hero-3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="bg-video absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-[1.2]"
      />

      {/* Texture layers */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/img/stones.webp')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.95))]" />

      {/* Ember FX */}
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
      <section className="relative z-20 flex flex-col items-center pt-40 pb-32 px-6 text-center">
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

        {/* Header */}
        <p className="fade-in text-sm uppercase opacity-70 tracking-[0.35em] font-general">
          Contact
        </p>

        <div className="fade-in mt-6">
          <AnimatedTitle
            title="Let the <b>realms</b> reach back to you"
            containerClass="!text-white text-5xl md:text-6xl font-zentry drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          />
        </div>

        <p className="fade-in mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto font-robert-regular">
          Partnerships, alliances, inquiries — the gates are open.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="form-section relative z-30 px-6 pb-40 max-w-3xl mx-auto grid gap-8">
        {/* Name */}
        <div className="form-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div className="form-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Message */}
        <div className="form-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-40">
          <textarea
            placeholder="Message"
            className="w-full h-full bg-transparent outline-none resize-none text-white placeholder-gray-400"
          />
        </div>

        {/* Submit */}
        <button className="form-block mt-4 px-12 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-robert-medium hover:bg-white/20 transition-all duration-300 tracking-wide uppercase">
          Send Message
        </button>
      </section>
    </main>
  );
}
