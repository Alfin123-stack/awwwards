import { type ReactNode, type MouseEvent } from "react";

export interface FeatureCardContainerProps {
  children: ReactNode;
  bgColor?: string;
  large?: boolean;
  transform?: string;
  onMouseMove?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
}

export default function FeatureCardContainer({
  children,
  bgColor,
  large,
  transform,
  onMouseMove,
  onMouseLeave,
}: FeatureCardContainerProps) {
  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform }}
      className={`
        relative overflow-hidden rounded-3xl w-full 
        border border-gray-600 transition-all duration-300 ease-out
        hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
        will-change-transform
        ${bgColor ?? ""}
        ${
          large
            ? "h-[400px] sm:h-[450px] md:h-[550px]"
            : "h-[200px] sm:h-[230px] md:h-[275px]"
        }
      `}>
      {children}
    </div>
  );
}
