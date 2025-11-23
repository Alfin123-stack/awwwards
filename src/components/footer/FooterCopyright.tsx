import { Link } from "react-router-dom";

const FooterCopyright = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <p className="text-xs opacity-60">
        © {new Date().getFullYear()} Nova. All rights reserved.
      </p>

      <Link
        to="/privacy-policy"
        className="text-xs opacity-60 transition-all duration-300 
        hover:opacity-100 hover:underline">
        Privacy Policy
      </Link>
    </div>
  );
};

export default FooterCopyright;
