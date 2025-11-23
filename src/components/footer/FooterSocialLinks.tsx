import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type SocialLink = {
  href: string;
  icon: ReactNode;
};

type FooterSocialLinksProps = {
  links: SocialLink[];
};

const FooterSocialLinks: React.FC<FooterSocialLinksProps> = ({ links }) => {
  return (
    <div className="flex items-center gap-3">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className="flex h-10 w-10 items-center justify-center rounded-full 
           bg-white/10 backdrop-blur-md transition-all duration-300
           hover:bg-white hover:text-black hover:scale-105">
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default FooterSocialLinks;
