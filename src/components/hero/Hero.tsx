import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { getVideoSrc } from "../../lib/utlis";
import MiniVideo from "./MiniVideo";
import HeroText from "./HeroText";
import HeroBottomTitle from "./HeroBottomTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const nextVideoRef = useRef<HTMLVideoElement>(null!);

  const handleMiniClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev % 4) + 1);
  };

  useGSAP(
    () => {
      gsap.from(".hero-text", {
        opacity: 0,
        y: 40,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.15,
      });

      gsap.from(".hero-heading", {
        opacity: 0,
        x: 60,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.2,
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
          onStart: () => {
            // invoke play() but don't return its Promise so the callback type remains void,
            // and handle potential rejection to avoid unhandled promise rejections
            const p = nextVideoRef.current?.play();
            if (p) p.catch(() => {});
          },
        });

        gsap.from("#current-video", {
          scale: 1.3,
          opacity: 0,
          duration: 1.6,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [currentIndex, hasClicked], revertOnUpdate: true }
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
      <div id="video-frame" className="relative h-dvh w-screen overflow-hidden">
        <video
          src={getVideoSrc(currentIndex)}
          id="current-video"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover"
        />

        <MiniVideo
          currentIndex={currentIndex}
          nextVideoRef={nextVideoRef}
          onClick={handleMiniClick}
          onLoad={() => {}}
        />

        <HeroText variant="light" />
        <HeroBottomTitle variant="light" />
      </div>

      {/* Dark mirrored layer */}
      <HeroText variant="dark" />
      <HeroBottomTitle variant="dark" />
    </div>
  );
}
