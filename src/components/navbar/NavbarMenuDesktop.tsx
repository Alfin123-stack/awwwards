import { Link } from "react-router-dom";
import NavbarAudioButton from "./NavbarAudioButton";
import { navMenu } from "../../lib/data";

interface Props {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const NavbarMenuDesktop = ({ isPlaying, toggleAudio }: Props) => {
  return (
    <nav>
      <ul className="flex items-center gap-6 lg:gap-10 text-white font-general">
        {navMenu.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="cursor-pointer transition-colors duration-300 hover:text-amber-400">
              {item.label}
            </Link>
          </li>
        ))}

        <li>
          <NavbarAudioButton isPlaying={isPlaying} toggleAudio={toggleAudio} />
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenuDesktop;
