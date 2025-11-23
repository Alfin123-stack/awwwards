import { MessageCircle, Bird, Play, BookOpen } from "lucide-react";
import FooterBrand from "./FooterBrand";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterCopyright from "./FooterCopyright";
import type { ReactNode } from "react";
type SocialLink = {
  href: string;
  icon: ReactNode;
};

const socialLinks: SocialLink[] = [
  { href: "/discord", icon: <MessageCircle size={18} /> },
  { href: "/twitter", icon: <Bird size={18} /> },
  { href: "/youtube", icon: <Play size={18} /> },
  { href: "/medium", icon: <BookOpen size={18} /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] text-white font-circular-web">
      <div className="h-[1px] w-full bg-white/20"></div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <FooterBrand />

          <FooterSocialLinks links={socialLinks} />
        </div>

        <div className="my-10 h-[1px] w-full bg-white/10"></div>

        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
