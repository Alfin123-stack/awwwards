import AnimatedTitle from "../AnimatedTitle";

const StoryHeading = () => {
  return (
    <AnimatedTitle
      title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
      containerClass="
        mt-5 pointer-events-none mix-blend-difference relative z-10
        text-center leading-tight font-general font-zentry special-font
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
      "
    />
  );
};

export default StoryHeading;
