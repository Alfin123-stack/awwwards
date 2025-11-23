import StoryDescription from "./StoryDescription";
import StoryFloatingImage from "./StoryFloatingImage";
import StoryHeading from "./StoryHeading";


const Story = () => {
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        {/* SUBTITLE */}
        <p
          className="
            font-general uppercase tracking-wider opacity-80
            text-xs sm:text-sm md:text-[10px]
          ">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          <StoryHeading />

          <StoryFloatingImage />
        </div>

        <StoryDescription />
      </div>
    </section>
  );
};

export default Story;
