import { Send } from "lucide-react";

export default function HeroText({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isLight = variant === "light";

  return (
    <div
      className={`absolute left-4 sm:left-6 md:left-10 
      top-20 sm:top-24 md:top-28 lg:top-32 xl:top-36 
      p-2 sm:p-3 md:p-4 font-circular-web
      ${
        isLight ? "text-white mix-blend-difference z-50" : "text-black -z-50"
      }`}>
      {/* Heading – LEBIH BESAR DARI TEXT */}
      <h1
        className="hero-heading uppercase font-extrabold tracking-widest font-zentry special-font
        text-[clamp(2.5rem,10vw,8rem)] leading-[0.9]">
        <b>redefine</b>
      </h1>

      {/* Subtitle – LEBIH KECIL DARI HEADING */}
      <p
        className="hero-text mt-3 leading-snug
        text-[clamp(1rem,2.5vw,1.8rem)]">
        Enter the metagame layer <br />
        Unleash the Play Economy
      </p>

      {/* CTA Button */}
      <button
        className={`hero-button group mt-6 flex items-center gap-2 cursor-pointer rounded-2xl
        px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3.5 lg:px-7 lg:py-4
        text-[clamp(0.75rem,1.5vw,1.1rem)] font-general
        transition-all duration-500 ease-in-out shadow-md
        ${
          isLight
            ? "bg-white text-black hover:bg-amber-400 hover:text-white hover:shadow-amber-200/50"
            : "bg-black text-white hover:bg-black hover:text-white hover:shadow-black/40"
        }`}>
        <Send
          className="transition-colors duration-500
          w-[clamp(1rem,2vw,1.5rem)] h-[clamp(1rem,2vw,1.5rem)]
          group-hover:text-inherit"
        />

        <span className="font-medium tracking-wide">Watch Trailer</span>
      </button>
    </div>
  );
}
