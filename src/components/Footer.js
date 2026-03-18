import { LOGO } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* 🔴 LEFT (LOGO + TEXT) */}
        <div className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="Netflix Logo"
            className="w-24 md:w-28"
          />
          <p className="text-sm hidden sm:block">
            © 2026 Netflix Clone
          </p>
        </div>

        {/* 🔗 RIGHT LINKS */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="hover:text-white cursor-pointer transition">Home</span>
          <span className="hover:text-white cursor-pointer transition">Movies</span>
          <span className="hover:text-white cursor-pointer transition">About</span>
          <span className="hover:text-white cursor-pointer transition">Contact</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;