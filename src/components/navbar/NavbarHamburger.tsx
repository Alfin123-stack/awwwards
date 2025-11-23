import { Menu, X } from "lucide-react";

interface Props {
  openMenu: boolean;
  toggleMobileMenu: () => void;
}

const NavbarHamburger = ({ openMenu, toggleMobileMenu }: Props) => {
  return (
    <button onClick={toggleMobileMenu}>
      {openMenu ? (
        <X className="w-7 h-7 text-white" />
      ) : (
        <Menu className="w-7 h-7 text-white" />
      )}
    </button>
  );
};

export default NavbarHamburger;
