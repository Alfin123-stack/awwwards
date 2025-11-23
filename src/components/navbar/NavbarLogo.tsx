import { Send } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  isMobile: boolean;
}

const NavbarLogo = ({ isMobile }: Props) => {
  return (
    <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
      <Link to="/">
        <img
          src="/img/logo.png"
          className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          alt="logo"
        />
      </Link>

      {!isMobile && (
        <button
          className="group flex items-center gap-2 cursor-pointer rounded-xl
          px-3 sm:px-4 py-2 text-xs md:text-sm font-general
          bg-white text-black shadow-md
          transition-all duration-300
          hover:bg-amber-400 hover:text-white hover:shadow-amber-200/50">
          <Send className="w-4 h-4 text-black group-hover:text-white" />
          <span className="font-medium tracking-wide">Watch Trailer</span>
        </button>
      )}
    </div>
  );
};

export default NavbarLogo;
