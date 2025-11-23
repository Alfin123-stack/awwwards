import { Link } from "react-router-dom";
import NavbarAudioButton from "./NavbarAudioButton";
import { navMenu } from "../../lib/data";

interface Props {
  menuRef: React.RefObject<HTMLDivElement | null>;
  isPlaying: boolean;
  toggleAudio: () => void;
  toggleMobileMenu: () => void;
}

const NavbarMobileMenu = ({
  menuRef,
  isPlaying,
  toggleAudio,
  toggleMobileMenu,
}: Props) => {
  return (
    <div
      ref={menuRef}
      className="fixed top-0 right-0 h-full w-[70%] xs:w-[60%] sm:w-[50%] 
      bg-black/90 backdrop-blur-lg text-white z-[99998]
      flex flex-col gap-8 p-8 pt-24 
      translate-x-full opacity-0">
      {navMenu.map((item) => (
        <Link
          key={item.label}
          onClick={toggleMobileMenu}
          to={item.path}
          className="text-lg sm:text-xl font-general tracking-wide 
          hover:text-amber-400 transition-colors">
          {item.label}
        </Link>
      ))}

      <NavbarAudioButton isPlaying={isPlaying} toggleAudio={toggleAudio} />
    </div>
  );
};

export default NavbarMobileMenu;
