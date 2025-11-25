"use client";

import React, { forwardRef } from "react";

type NexusCardProps = {
  title: string;
  desc: string;
  img: string;
};

// forwardRef → untuk dihubungkan dengan GSAP animasi (cardRefs)
const NexusCard = forwardRef<HTMLDivElement, NexusCardProps>(
  ({ title, desc, img }, ref) => {
    return (
      <div
        ref={ref}
        className="group relative flex flex-col items-center cursor-pointer w-full max-w-xs nexus-inner">
        <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
          {/* Outer blur glow */}
          <div className="absolute inset-0 rounded-full bg-white/6 blur-3xl group-hover:bg-white/10 transition-all duration-700" />

          {/* Outer rotating ring */}
          <div className="absolute inset-2 border border-white/20 rounded-full animate-spin-slow" />

          {/* Inner rotating ring */}
          <div className="absolute inset-6 border border-amber-300/20 rounded-full animate-spin-reverse-slow" />

          {/* Main image */}
          <div className="relative z-10 w-40 h-40 rounded-full overflow-hidden border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500"
            />
          </div>

          {/* Vertical glossy effect */}
          <div className="absolute inset-0 rounded-full pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-800" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 text-center max-w-xs">
          <h3 className="text-xl font-robert-medium tracking-wide text-amber-300">
            {title}
          </h3>

          <p className="text-sm text-gray-300 mt-2 leading-relaxed">{desc}</p>

          <button className="mt-4 px-5 py-2 rounded-full border border-white/20 bg-white/6 hover:bg-white/12 transition text-xs tracking-wider">
            Enter
          </button>
        </div>
      </div>
    );
  }
);

NexusCard.displayName = "NexusCard";
export default NexusCard;
