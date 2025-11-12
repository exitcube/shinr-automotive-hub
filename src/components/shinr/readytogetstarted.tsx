import React from "react";
import { motion } from "framer-motion";
import playstore from "../../assets/play store.png";
import appstore from "../../assets/app store.png";

const ReadyToGetStarted: React.FC = () => {
  return (
    <section className="relative py-12 md:py-24 px-6 md:px-20 font-[Poppins] bg-white overflow-hidden max-w-[1440px] mx-auto">
      <motion.div
        className="max-w-[1100px] mx-auto bg-gradient-to-r from-[#128C7E] to-[#0D6657] rounded-[24px] text-center text-white py-16 px-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 leading-tight">
          Ready to Get Started?
        </h2>

        {/* Description */}
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-lg mx-auto">
          Join thousands of satisfied customers and experience the convenience of Shinr.
        </p>

        {/* Mobile: Single “Download Now” button */}
        <div className="sm:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-[#128C7E] font-semibold px-6 py-3 rounded-md shadow hover:bg-black transition-colors duration-300"
          >
            Download Now
          </motion.button>
        </div>

        {/* Desktop: Store badges */}
        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="transition-transform duration-300"
          >
            <img src={playstore} alt="Get it on Google Play" className="h-14 md:h-16" />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="transition-transform duration-300"
          >
            <img src={appstore} alt="Download on the App Store" className="h-14 md:h-16" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ReadyToGetStarted;
