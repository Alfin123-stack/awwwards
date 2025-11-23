import AnimatedTitle from "../AnimatedTitle";
import AboutSubtext from "./AboutSubtext";

export default function AboutIntro() {
  return (
    <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
      <p
        className="
          font-general 
          uppercase
          text-[clamp(0.7rem,1.8vw,1rem)]
        ">
        Welcome to Zentry
      </p>

      <AnimatedTitle
        title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
        containerClass="
          mt-5 !text-black text-center
          leading-[0.95]
          font-zentry special-font
          text-[clamp(2rem,7vw,8rem)]
        "
      />

      <AboutSubtext />
    </div>
  );
}
