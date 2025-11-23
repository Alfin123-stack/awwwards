// FeatureCardAction.tsx
import { ArrowRight, Send } from "lucide-react";

export default function FeatureCardAction({
  bgColor,
  textColor,
}: {
  bgColor?: string;
  textColor?: string;
}) {
  const isSolid = bgColor && textColor;

  if (isSolid) {
    return (
      <Send
        className="
          absolute bottom-6 right-4 sm:bottom-8 sm:right-6
          w-7 h-7 sm:w-10 sm:h-10
        "
      />
    );
  }

  return (
    <button
      className="
        absolute bottom-6 left-4 sm:bottom-8 sm:left-6
        group flex items-center gap-2 
        text-gray-700 
        px-3 py-1.5 sm:px-4 sm:py-2 
        rounded-2xl bg-black backdrop-blur-md
        transition-all duration-300
        hover:bg-black/40 hover:border-white 
        hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
      ">
      <ArrowRight
        className="
          w-3 h-3 sm:w-4 sm:h-4 
          transition-all group-hover:translate-x-2 ease-in duration-200
        "
      />
      <span
        className="
          text-[9px] sm:text-xs md:text-sm 
          font-robert-regular uppercase
        ">
        coming soon
      </span>
    </button>
  );
}
