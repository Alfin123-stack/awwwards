export default function AboutSubtext() {
  return (
    <div
      className="
        about-subtext text-center
        text-[clamp(0.85rem,2vw,1.3rem)]
        flex flex-col gap-1
        px-4

        mt-6
        sm:mt-10
        md:mt-14
      ">
      <p>The Game of Games begins—your life, now an epic MMORPG</p>

      <p
        className="
          text-gray-500
          text-[clamp(0.75rem,1.8vw,1.1rem)]
        ">
        Zentry unites every player from countless games and platforms, both
        digital and physical, into a unified Play Economy
      </p>
    </div>
  );
}
