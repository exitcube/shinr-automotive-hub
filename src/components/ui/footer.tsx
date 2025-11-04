import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-[#322E2E] text-white font-[Poppins] w-full opacity-100"
    >
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-10 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo + App Download + Socials */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={logo}
              alt="Shinr Logo"
              className="w-[42px] h-[42px] object-contain"
            />
            <h2
              className="text-[32px] leading-[100%] font-bold text-white"
              style={{
                width: "123.83px",
                height: "42.81px",
                transform: "rotate(0deg)",
              }}
            >
              Shinr
            </h2>
          </div>

          {/* App Download */}
          <p className="text-[16px] font-normal leading-[100%] mb-3">
            Download app on:
          </p>
          {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 ">
          <a
            href="#"
            className="transition-transform duration-300 hover:scale-105 "
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 md:h-14 "
            />
          </a>

          <a
            href="#"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12 md:h-14"
            />
          </a>
        </div>

          {/* Social Links */}
          <p className="text-[16px] font-normal mb-2 leading-[100%]">
            Follow us on
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#00A878] transition-colors" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#00A878] transition-colors" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="hover:text-[#00A878] transition-colors" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-[20px] font-normal leading-[100%] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "How It Works", path: "/how-it-works" },
              { name: "Rewards", path: "/rewards" },
              { name: "Testimonials", path: "/testimonials" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-[16px] font-normal leading-[100%] hover:text-[#00A878] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-[20px] font-normal leading-[100%] mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Refund Policy", path: "/refund-policy" },
              { name: "Terms & Conditions", path: "/terms" },
              { name: "Help Center / Chat Support", path: "/help" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-[16px] font-normal leading-[100%] hover:text-[#00A878] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-[20px] font-normal leading-[100%] mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2">
            <li className="text-[16px] font-normal leading-[100%]">
              Address:{" "}
              <span className="hover:text-[#00A878] transition-colors">
                Kochi, Kerala, India
              </span>
            </li>
            <li className="text-[16px] font-normal leading-[100%]">
              Phone / WhatsApp:{" "}
              <a
                href="tel:+919876543210"
                className="hover:text-[#00A878] transition-colors"
              >
                +91 98765 43210
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-10 lg:px-20 pt-6 pb-4 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Shinr. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
