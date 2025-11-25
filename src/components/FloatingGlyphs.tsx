interface FloatingGlyphsProps {
  glyphsRef: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  glyphs?: string[]; // optional custom glyph list
  size?: "sm" | "md" | "lg";
  gap?: string;
  className?: string;
  itemClassName?: string;
}

export default function FloatingGlyphs({
  glyphsRef,
  glyphs = ["✦", "𐌂", "✸", "𐌑", "✹", "𐌙"],
  size = "md",
  gap = "gap-8",
  className = "",
  itemClassName = "",
}: FloatingGlyphsProps) {
  const sizeMap = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  };

  return (
    <div className={`flex ${gap} ${className}`}>
      {glyphs.map((g, i) => (
        <span
          key={i}
          ref={(el) => { glyphsRef.current[i] = el }}
          className={`fade-in font-zentry tracking-wide opacity-60 select-none ${sizeMap[size]} ${itemClassName}`}>
          {g}
        </span>
      ))}
    </div>
  );
}
