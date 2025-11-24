export default function HeroBottomTitle({ variant = "light" }) {
  const isLight = variant === "light";

  return (
    <h1
      className={`
        hero-heading 
        absolute 
        bottom-4 right-4

        font-zentry
        special-font

        sm:bottom-6 sm:right-4
        md:bottom-8 md:right-6
        lg:bottom-10 lg:right-8

        p-1 sm:p-2 md:p-3 lg:p-4
        uppercase font-extrabold tracking-widest

        /* 🔥 Scale heading besar seperti HeroText */
        text-[clamp(2.5rem,10vw,8rem)]
        leading-[0.9]
        tracking-tight

        ${isLight ? "text-white mix-blend-difference z-50" : "text-black -z-30"}
      `}>
      <b>gaming</b>
    </h1>
  );
}
