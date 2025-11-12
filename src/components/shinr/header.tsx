import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/shinr-log.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Features", path: "#features" },
    { name: "Why Shinr", path: "#whyshinr" },
    { name: "Partner", path: "#partner" },
  ];

  // Function to scroll smoothly to a section
  const scrollToSection = (path: string) => {
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5F5] shadow-sm">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-10 lg:px-20 py-4 md:py-5">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-0 cursor-pointer"
          >
            <img src={logo} alt="Shinr Logo" className="w-8 h-8 object-contain" />
            <span className="text-2xl font-bold text-[#101010]">
              shinr<span className="text-[#128C7E]">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path)}
                  className="text-gray-600 hover:text-[#128C7E] font-medium transition"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Contact Button - scroll to footer */}
            <button
              onClick={() => scrollToSection("#footer")}
              className="hidden md:inline-block bg-[#128C7E] text-white px-5 py-2 rounded-full font-medium hover:bg-black transition"
            >
              Contact
            </button>

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
              {[...navLinks, { name: "Contact", path: "#footer" }].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.path);
                    setMenuOpen(false);
                  }}
                  className={`${
                    link.name === "Contact"
                      ? "bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition"
                      : "text-gray-600 hover:text-green-600 font-medium transition"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
