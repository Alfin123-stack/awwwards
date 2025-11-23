import StoryDiscoverButton from "./StoryDiscoverButton";


const StoryDescription = () => {
  return (
    <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
      <div className="flex h-full w-fit flex-col items-center md:items-start">
        <p
          className="
            mt-3 max-w-sm font-circular-web text-violet-50
            text-center md:text-start
            text-sm sm:text-base md:text-lg
            leading-relaxed
          ">
          Where realms converge, lies Zentry and the boundless pillar. Discover
          its secrets and shape your fate amidst infinite opportunities.
        </p>

        <StoryDiscoverButton />
      </div>
    </div>
  );
};

export default StoryDescription;
