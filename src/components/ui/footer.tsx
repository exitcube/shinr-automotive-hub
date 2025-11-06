import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#322E2E] text-white font-[Poppins] w-full opacity-100">
      {/* ====== Desktop View ====== */}
      <div className="hidden sm:grid max-w-[1440px] mx-auto w-full px-8 md:px-10 lg:px-20 py-12 grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & App Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Shinr Logo" className="w-[42px] h-[42px]" />
            <h2 className="text-[32px] font-bold text-white">Shinr</h2>
          </div>

          <p className="text-[16px] mb-3">Download app on:</p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
          </div>

          <p className="text-[16px] mt-4 mb-2">Follow us on</p>
          <div className="flex space-x-4">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/rewards">Rewards</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/help">Help Center / Chat Support</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>Kochi, Kerala, India</li>
            <li>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
          </ul>
        </div>
      </div>

      {/* ====== Mobile View ====== */}
      <div className="sm:hidden flex flex-col px-6 pb-10 text-left">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-6">
          <img src={logo} alt="Shinr Logo" className="w-[36px] h-[36px]" />
          <h2 className="text-[26px] font-semibold">Shinr</h2>
        </div>

        {/* Quick Links & Support - horizontal */}
        <div className="flex justify-between mb-6">
          <div className="w-1/2">
            <h3 className="font-semibold mb-2 text-[16px]">Quick Links</h3>
            <ul className="space-y-1 text-[14px]">
              <li>Home</li>
              <li>Services</li>
              <li>How It Works</li>
              <li>Rewards</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="font-semibold mb-2 text-[16px]">Support</h3>
            <ul className="space-y-1 text-[14px]">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

        {/* Contact & Follow Us - horizontal */}
        <div className="flex justify-between mb-6">
          <div className="w-1/2 text-[14px]">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <p>Kochi, Kerala</p>
            <p>+91 98765 43210</p>
          </div>
          <div className="w-1/2 text-[14px]">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-3">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
            </div>
          </div>
        </div>

        {/* Centered Bottom Section */}
        <div className="text-center">
          <p className="text-[14px] mb-4 leading-snug font-medium">
            Get the <span className="font-semibold">Shinr</span> app now
          </p>

          <div className="flex justify-center items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1440px] mx-auto px-6 py-4 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Shinr. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
