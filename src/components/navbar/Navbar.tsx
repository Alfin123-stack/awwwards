import { useRef, useState, useEffect } from "react";
import { useWindowScroll, useWindowSize } from "react-use";
import gsap from "gsap";

import NavbarLogo from "./NavbarLogo";
import NavbarMenuDesktop from "./NavbarMenuDesktop";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarContainer from "./NavbarContainer";
import NavbarHamburger from "./NavbarHamburger";

const Navbar = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasBg, setHasBg] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { y } = useWindowScroll();
  const { width } = useWindowSize();
  const prevY = useRef(0);

  const isMobile = width < 768;

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // NAVBAR SCROLL
  useEffect(() => {
    if (!navRef.current) return;

    setHasBg(y > 20);

    if (y > prevY.current + 20) {
      gsap.to(navRef.current, { y: -120, opacity: 0, duration: 0.3 });
    } else if (y < prevY.current - 20) {
      gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.3 });
    }

    prevY.current = y;
  }, [y]);

  // HAMBURGER
  const toggleMobileMenu = () => {
    setOpenMenu((prev) => !prev);

    if (!mobileMenuRef.current) return;

    if (!openMenu) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.35,
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  return (
    <>
      <NavbarContainer navRef={navRef} hasBg={hasBg}>
        <NavbarLogo isMobile={isMobile} />

        {!isMobile && (
          <NavbarMenuDesktop isPlaying={isPlaying} toggleAudio={toggleAudio} />
        )}

        {isMobile && (
          <NavbarHamburger
            openMenu={openMenu}
            toggleMobileMenu={toggleMobileMenu}
          />
        )}

        <audio ref={audioRef} loop src="/audio/loop.mp3" />
      </NavbarContainer>

      <NavbarMobileMenu
        menuRef={mobileMenuRef}
        isPlaying={isPlaying}
        toggleAudio={toggleAudio}
        toggleMobileMenu={toggleMobileMenu}
      />
    </>
  );
};

export default Navbar;
