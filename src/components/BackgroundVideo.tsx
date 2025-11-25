import { useMemo } from "react";

export default function BackgroundVideo() {
  // pilih video acak hanya sekali (useMemo agar tidak berubah tiap re-render)
  const randomVideo = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * 4) + 1; // 1–4
    return `/videos/hero-${randomIndex}.mp4`;
  }, []);

  return (
    <video
      src={randomVideo}
      autoPlay
      loop
      muted
      playsInline
      className="bg-video absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-[1.2]"
    />
  );
}
