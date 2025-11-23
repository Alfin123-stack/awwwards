// FeatureCardText.tsx
export default function FeatureCardText({
  title,
  text,
  textColor,
}: {
  title?: string;
  text?: string;
  textColor?: string;
}) {
  return (
    <div
      className={`
        absolute z-50
        top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10
        ${textColor ? textColor : "text-white mix-blend-difference"}
      `}>
      <h1
        className="
          uppercase font-zentry font-bold tracking-wide 
          text-2xl md:text-3xl lg:text-5xl xl:text-6xl
        ">
        {title}
      </h1>

      <p
        className="
          mt-2 sm:mt-3 max-w-[75%] sm:max-w-sm 
          text-[10px] sm:text-xs md:text-sm lg:text-base
          opacity-90 font-robert-regular leading-relaxed
        ">
        {text}
      </p>
    </div>
  );
}
