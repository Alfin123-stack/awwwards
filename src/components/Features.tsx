import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";

const featureData = [
  {
    title: "Radiant",
    video: "/videos/feature-1.mp4",
    text: `Step into the metagame dimension—where creativity, identity, and
    technology merge into a seamless universe. Discover a new layer of play
    that empowers expression and unlocks boundless opportunities.`,
  },
  {
    title: "Nexus",
    video: "/videos/feature-2.mp4",
    text: `Where worlds converge and players evolve. Nexus redefines the way
    communities connect, innovate, and expand across the digital frontier.`,
  },
  {
    title: "Odyssey",
    video: "/videos/feature-3.mp4",
    text: `Traverse uncharted realms built for storytelling, exploration, and
    immersive engagement. Your journey becomes the core of the experience.`,
  },
  {
    title: "Vanguard",
    video: "/videos/feature-4.mp4",
    text: `A system built to empower creators with new tools, new perspectives,
    and new ways to shape the metaverse through innovation.`,
  },
  {
    title: "Echo",
    video: "/videos/feature-5.mp4",
    text: `Every action reverberates across worlds. Echo translates identity,
    motion, and presence into a unified layer of digital expression.`,
  },
];

const Features = () => {
  return (
    <section className="w-screen bg-black p-10 grid grid-cols-1 gap-10">
      {/* FEATURE 1 — Full Width */}
      <div className="w-full h-[350px] flex flex-col items-start justify-center font-zentry text-sm gap-2">
        <p className="text-white">Step into the next dimension.</p>
        <p className="text-gray-600">
          In this evolving digital frontier, every interaction, motion, and{" "}
          <br />
          choice you make becomes part of a living universe crafted by <br />
          imagination and powered by technology. Here, identity transforms into{" "}
          <br />
          presence, creativity becomes influence, and the boundaries between{" "}
          <br />
          worlds begin to dissolve into limitless possibility.
        </p>
      </div>

      <div className="w-full">
        <FeatureCard
          large
          title={featureData[0].title}
          text={featureData[0].text}
          video={featureData[0].video}
        />
      </div>

      {/* FEATURE 2–4 CUSTOM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* FEATURE 2 (setengah kiri) */}
        <FeatureCard
          large
          title={featureData[1].title}
          text={featureData[1].text}
          video={featureData[1].video}
        />

        {/* FEATURE 3 + 4 (stacked vertically on the right) */}
        <div className="flex flex-col gap-2">
          <FeatureCard
            title={featureData[2].title}
            text={featureData[2].text}
            video={featureData[2].video}
          />
          <FeatureCard
            title={featureData[3].title}
            text={featureData[3].text}
            video={featureData[3].video}
          />
        </div>
      </div>

      {/* FEATURE 5 — Full Width */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-purple">
        <FeatureCard
          large
          bgColor="bg-purple-950"
          textColor="text-black"
          title="more coming soon"
        />
        <FeatureCard
          large
          title={featureData[4].title}
          text={featureData[4].text}
          video={featureData[4].video}
        />
      </div>
    </section>
  );
};

export default Features;

const FeatureCard = ({
  title,
  bgColor,
  textColor,
  text,
  video,
  large = false,
}: {
  title?: string;
  bgColor?: string;
  textColor?: string;
  text?: string;
  video?: string;
  large?: boolean;
}) => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // posisi X relatif
    const y = e.clientY - rect.top; // posisi Y relatif

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // kemiringan sumbu X
    const rotateY = ((x - centerX) / centerX) * 10; // kemiringan sumbu Y

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={`relative overflow-hidden rounded-3xl w-full border border-gray-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] ${
        bgColor ? bgColor : ""
      }
        transition-all duration-300 ease-out will-change-transform
        ${large ? "h-[550px]" : "h-[275px]"}
      `}>
      {/* VIDEO */}
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover"
      />

      {/* TEXT */}
      <div
        className={`absolute top-10 left-6 z-50 ${
          textColor ? textColor : "text-white mix-blend-difference"
        }`}>
        <h1 className="uppercase font-zentry font-bold tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-3 max-w-sm text-[11px] sm:text-xs md:text-sm opacity-90 font-robert-regular leading-relaxed">
          {text}
        </p>
      </div>

      {bgColor && textColor ? (
        <Send className="w-10 h-10 text-black absolute bottom-10 right-6" />
      ) : (
        <button
          className="absolute bottom-10 left-6 group flex items-center gap-2 text-gray-700 
        px-4 py-2 rounded-2xl bg-black backdrop-blur-md
        transition-all duration-300
        hover:bg-black/40 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-all group-hover:translate-x-2 ease-in duration-200" />
          <span className="text-[10px] sm:text-xs md:text-sm font-robert-regular uppercase">
            coming soon
          </span>
        </button>
      )}
    </div>
  );
};
