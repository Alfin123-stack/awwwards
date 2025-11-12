import { useRef, useState } from "react";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const videosCount = 4;
  const nextVideoRef = useRef();

  const getVideoSrc = (index) => {
    return `/videos/hero-${index}.mp4`;
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prevIndex) => prevIndex + 1);
  };

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % videosCount) + 1);
  };
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative h-dvh w-screen overflow-hidden">
        {/* Background video */}
        <video
          // ref={bgVideoRef}
          src={getVideoSrc(currentIndex)}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover absolute top-0 left-0 z-0"
        />

        {/* Mini video di tengah */}
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <div
            className="size-64 rounded-lg overflow-hidden cursor-pointer shadow-lg opacity-0 scale-50 hover:opacity-100 hover:scale-100 transition-all duration-500 ease-in-out"
            onClick={handleMiniVideoClick}>
            <video
              // ref={miniVideoRef}
              src={getVideoSrc(currentIndex + 1)}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="absolute top-0 left-2 p-4">
          <h1 className="right-2 text-4xl text-white uppercase font-stretch-ultra-expanded font-extrabold">
            redefine
          </h1>
          <p className="text-white">
            Enter the metagame layer <br />
            Unleash the Play Economy
          </p>

          <button className="p-3 bg-white text-black rounded-2xl text-xs">
            Watch Trailer
          </button>
        </div>

        <h1 className="absolute bottom-0 right-2 text-4xl p-4 text-white uppercase font-stretch-ultra-expanded font-extrabold">
          g<b>a</b>ming
        </h1>
      </div>
    </div>
  );
}

export default Hero;
