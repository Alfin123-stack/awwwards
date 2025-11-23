interface Props {
  navRef: React.RefObject<HTMLDivElement | null>;
  hasBg: boolean;
  children: React.ReactNode;
}

const NavbarContainer = ({ navRef, hasBg, children }: Props) => {
  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[99999] mx-auto 
        max-w-[95%] flex justify-between items-center
        px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6
        transition-all duration-300
        ${
          hasBg
            ? "bg-black/90 backdrop-blur-md m-3 rounded-xl"
            : "bg-transparent"
        }`}>
      {children}
    </header>
  );
};

export default NavbarContainer;
