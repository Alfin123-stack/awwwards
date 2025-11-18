"use client";

import { Send, Play } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const Navbar = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasBg, setHasBg] = useState(false); // ← background toggle

  const { y } = useWindowScroll();
  const prevY = useRef(0);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // --- Scroll Logic (background + floating nav)
  useEffect(() => {
    if (!navRef.current) return;

    const currentY = y;

    // ========== BG LOGIC ==========
    if (currentY > 20) {
      setHasBg(true); // scroll down → show bg
    } else {
      setHasBg(false); // at top → transparent
    }

    // ========== FLOATING NAV LOGIC ==========
    if (currentY > prevY.current + 20) {
      // scroll down → hide
      gsap.to(navRef.current, {
        y: -120,
        opacity: 0,
        duration: 0.35,
        ease: "power3.out",
      });
    }

    if (currentY < prevY.current - 20) {
      // scroll up → show
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    }

    prevY.current = currentY;
  }, [y]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[99999] mx-auto max-w-[95%]
      flex justify-between items-center
      px-6 md:px-10 py-4 md:py-6
      transition-all duration-300
      ${hasBg ? "bg-black m-5 rounded-2xl" : "bg-transparent"}
      `}>
      {/* Logo + Button */}
      <div className="flex items-center gap-6 md:gap-10">
        <img
          src="/img/logo.png"
          className="w-10 h-10 object-contain"
          alt="logo"
        />

        <button
          className="group flex items-center gap-2 cursor-pointer rounded-xl
          px-4 py-2 text-xs md:text-sm font-general
          bg-white text-black shadow-md
          transition-all duration-300
          hover:bg-amber-400 hover:text-white hover:shadow-amber-200/50">
          <Send className="w-4 h-4 text-black group-hover:text-white" />
          <span className="font-medium tracking-wide">Watch Trailer</span>
        </button>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-8 text-white font-general">
          {["Nexus", "Vault", "Prologue", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-colors duration-300 hover:text-amber-400">
              {item}
            </li>
          ))}

          {/* 🔊 Audio Button */}
          <li>
            <button
              onClick={toggleAudio}
              className="relative w-9 h-9 flex items-center justify-center
              rounded-md border border-white/30
              hover:border-amber-400 hover:text-amber-400
              transition-all duration-300 cursor-pointer">
              <audio ref={audioRef} loop src="/audio/loop.mp3"></audio>

              {!isPlaying && <Play className="w-4 h-4 text-white" />}

              {isPlaying && (
                <div className="flex items-end gap-[3px]">
                  <span className="w-[3px] h-2 bg-amber-400 animate-eq1"></span>
                  <span className="w-[3px] h-4 bg-amber-400 animate-eq2"></span>
                  <span className="w-[3px] h-3 bg-amber-400 animate-eq3"></span>
                </div>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
