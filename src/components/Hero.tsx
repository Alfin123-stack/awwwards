import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const videosCount = 4;
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  const getVideoSrc = (index) => {
    const safeIndex = ((index - 1 + videosCount) % videosCount) + 1;
    return `/videos/hero-${safeIndex}.mp4`;
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prevIndex) => prevIndex + 1);
  };

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % videosCount) + 1);
  };

  // Animations
  useGSAP(
    () => {
      gsap.from(".hero-text", {
        opacity: 0,
        y: 40,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      });

      gsap.from(".hero-heading", {
        opacity: 0,
        x: 60,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.4,
      });

      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1.2,
          ease: "power3.inOut",
          onStart: () => nextVideoRef.current?.play(),
        });

        gsap.from("#current-video", {
          scale: 1.3,
          opacity: 0,
          duration: 1.6,
          ease: "power2.out",
        });
      }
    },
    {
      dependencies: [currentIndex, hasClicked],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* Video frame */}
      <div id="video-frame" className="relative h-dvh w-screen overflow-hidden">
        {/* Background video */}
        <video
          src={getVideoSrc(currentIndex)}
          autoPlay
          muted
          loop
          id="current-video"
          playsInline
          className="h-full w-full object-cover absolute top-0 left-0"
        />

        {/* Mini video */}
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <div
            className="mini-video size-64 rounded-lg overflow-hidden cursor-pointer shadow-lg opacity-0 scale-50 
            hover:opacity-100 hover:scale-100 transition-all duration-500 ease-in-out"
            onClick={handleMiniVideoClick}>
            <video
              src={getVideoSrc(currentIndex + 1)}
              autoPlay
              loop
              muted
              playsInline
              id="next-video"
              ref={nextVideoRef}
              className="h-full w-full object-cover rounded-lg"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>

        {/* TEXT OVERLAY — SINGLE VERSION */}
        <div className="absolute top-15 left-4 p-4 font-circular-web text-white z-50 mix-blend-difference">
          <h1
            className="hero-heading uppercase font-extrabold tracking-widest
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            redefine
          </h1>

          <p
            className="hero-text mt-3 leading-snug
            text-sm sm:text-base md:text-lg lg:text-xl">
            Enter the metagame layer <br />
            Unleash the Play Economy
          </p>

          <button
            className="hero-button group mt-6 flex items-center gap-2 cursor-pointer rounded-2xl
            px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4
            text-xs sm:text-sm md:text-base lg:text-lg font-general
            bg-white text-black shadow-md
            transition-all duration-500 ease-in-out
            hover:bg-amber-400 hover:text-white hover:shadow-amber-200/50
            mix-blend-normal">
            <Send
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
              transition-colors duration-500 ease-in-out
              text-black group-hover:text-white"
            />
            <span className="font-medium tracking-wide">Watch Trailer</span>
          </button>
        </div>

        {/* HEADING BOTTOM RIGHT — SINGLE VERSION */}
        <h1
          className="hero-heading absolute bottom-10 right-4 p-4 
          text-white uppercase font-circular-web font-extrabold
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
          z-50 mix-blend-difference">
          g<b>a</b>ming
        </h1>
      </div>

      <div className="absolute top-15 left-4 p-4 font-circular-web text-black -z-50">
        <h1
          className="hero-heading uppercase font-extrabold tracking-widest
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          redefine
        </h1>

        <p
          className="hero-text mt-3 leading-snug
    text-sm sm:text-base md:text-lg lg:text-xl">
          Enter the metagame layer <br />
          Unleash the Play Economy
        </p>

        <button
          className="hero-button group mt-6 flex items-center gap-2 cursor-pointer rounded-2xl
  px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4
  text-xs sm:text-sm md:text-base lg:text-lg font-general
  bg-black text-white shadow-md
  transition-all duration-500 ease-in-out
  hover:bg-black hover:text-white hover:shadow-black/40">
          <Send
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
    transition-colors duration-500 ease-in-out
    text-white group-hover:text-amber-400"
          />

          <span className="font-medium tracking-wide">Watch Trailer</span>
        </button>
      </div>

      <h1
        className="hero-heading absolute bottom-10 right-4 p-4 text-black uppercase font-circular-web font-extrabold
  text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl -z-30">
        g<b>a</b>ming
      </h1>
    </div>
  );
}

export default Hero;
