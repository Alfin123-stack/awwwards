"use client";

import { useEffect, useState } from "react";

interface EmberFXProps {
  count?: number; // default 45
}

export default function EmberFX({ count = 45 }: EmberFXProps) {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    []
  );

  useEffect(() => {
    // Generate once on mount to avoid hydration errors
    const arr = Array.from({ length: count }, () => ({
      top: `${20 + Math.random() * 70}%`,
      left: `${10 + Math.random() * 80}%`,
    }));
    setPositions(arr);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="fx-dot absolute w-[4px] h-[4px] bg-white/40 rounded-full blur-[2px]"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}
    </div>
  );
}
