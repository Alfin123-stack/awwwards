import { Link } from "react-router-dom";
import { MessageCircle, Bird, Play, BookOpen } from "lucide-react";

const socialLinks = [
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
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold tracking-wide">Nova Studio</p>
            <p className="text-sm opacity-70">
              Building the future with creativity & technology.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
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
        </div>

        <div className="my-10 h-[1px] w-full bg-white/10"></div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Nova. All rights reserved.
          </p>

          <Link
            to="/privacy-policy"
            className="text-xs opacity-60 transition-all duration-300 hover:opacity-100 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
