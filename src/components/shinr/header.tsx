import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/shinr-log.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Why Shinr", path: "/why-shinr" },
    { name: "Partner", path: "/partner" },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        bg-[#F5F5F5]
        shadow-sm
        opacity-100
      "
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-10 lg:px-20 py-4 md:py-5">
        <div className="flex items-center justify-between w-full">
        {/* Logo + Brand Name */}
        <Link to="/" className="flex items-center space-x-0">
          <img
            src={logo}
            alt="Shinr Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl font-bold text-[#101010]">shinr<span className="text-[#128C7E]">.</span></span>
        </Link>

        {/* Right side - NavLinks + Contact */}
        <div className="flex items-center space-x-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-[#128C7E] font-medium transition ${
                    isActive ? "text-[#128C7E]" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-[#128C7E] text-white px-5 py-2 rounded-full font-medium hover:bg-black transition"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5F5F5] border-t">
          <nav className="flex flex-col items-center py-3 space-y-3">
            {[...navLinks, { name: "Contact", path: "/contact" }].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`${
                  link.name === "Contact"
                    ? "bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition"
                    : "text-gray-600 hover:text-green-600 font-medium transition"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
