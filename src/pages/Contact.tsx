"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BackgroundVideo from "../components/BackgroundVideo";
import TextureLayers from "../components/TextureLayers";
import FloatingGlyphs from "../components/FloatingGlyphs";
import ReusableHeader from "../components/ReusableHeader";
import ContactForm from "../components/ContactForm";
import EmberFX from "../components/EmberFX";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const glyphsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in stagger
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

      // Parallax background video
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

      // Ember floating
      gsap.to(".fx-dot", {
        y: -40,
        x: () => (Math.random() - 0.5) * 80,
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
      {/* Background */}
      <BackgroundVideo />
      <TextureLayers />

      {/* Ember FX */}
      <EmberFX />

      {/* CONTENT */}
      <section className="relative z-20 flex flex-col items-center pt-40 pb-32 px-6 text-center">
        <FloatingGlyphs
          glyphsRef={glyphsRef}
          size="lg"
          gap="gap-8"
          className="mb-10"
        />

        <ReusableHeader
          subtitle="Contact"
          title="Let the <b>realms</b> reach back to you"
          description="Partnerships, alliances, inquiries — the gates are open."
          size="lg"
        />
      </section>

      {/* CONTACT FORM */}
      <ContactForm />
    </main>
  );
}
