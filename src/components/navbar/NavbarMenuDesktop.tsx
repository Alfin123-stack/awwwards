import { NavLink } from "react-router-dom";
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
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer transition-colors duration-300 
                 ${isActive ? "text-amber-400" : "hover:text-amber-400"}`
              }>
              {item.label}
            </NavLink>
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
