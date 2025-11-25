import AnimatedTitle from "./AnimatedTitle";

interface ReusableHeaderProps {
  subtitle?: string;
  title: string; // Supports <b> tags
  description?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ReusableHeader({
  subtitle,
  title,
  description,
  size = "lg",
  className = "",
}: ReusableHeaderProps) {
  const sizeMap = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
  };

  return (
    <div className={className}>
      {subtitle && (
        <p className="fade-in text-sm uppercase opacity-70 tracking-[0.35em] font-general">
          {subtitle}
        </p>
      )}

      <div className="fade-in mt-6">
        <AnimatedTitle
          title={title}
          containerClass={`!text-white font-zentry special-font drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] ${sizeMap[size]}`}
        />
      </div>

      {description && (
        <p className="fade-in mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto font-robert-regular">
          {description}
        </p>
      )}
    </div>
  );
}
