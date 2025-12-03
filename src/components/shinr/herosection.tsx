import { Link } from "react-router-dom";
import heroImage from "../../assets/cargif.gif";
import designImage from "../../assets/design.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="
        relative bg-white
        flex flex-col md:flex-row
        items-center justify-between
        mx-auto
        px-4 sm:px-8 md:px-16 lg:px-20
        py-10 sm:py-12 md:py-16 lg:py-24
        font-[Poppins]
        max-w-[1440px]
        gap-10 sm:gap-12 md:gap-16 lg:gap-20
        overflow-hidden
      "
    >
      {/* Left Text Section */}
      <motion.div
        className="order-2 md:order-1 md:w-1/2 text-center md:text-left space-y-6 z-10 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* design.png visible at left on mobile */}
        <img
          src={designImage}
          alt="Decorative Background"
          className="
            absolute
            left-[-40px] top-[-40px]
            w-[140px] sm:w-[200px]
            opacity-50
            md:hidden
            pointer-events-none
            object-contain
          "
        />

        <motion.h1
          className="
            text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px]
            font-semibold
            text-black
            leading-[100%]
            tracking-[0]
            relative z-10
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Why <span className="text-[#128C7E] font-semibold">Wait</span> in Line?
          <br />
          Shine in <span className="text-[#128C7E] font-semibold">No Time</span>
        </motion.h1>

        <motion.p
          className="
            hidden md:block
            text-[#000000]
            text-[16px]
            leading-[120%]
            tracking-[0]
            max-w-[360px]
            sm:max-w-[420px]
            md:max-w-[460px]
            lg:max-w-[500px]
            mx-auto md:mx-0
            text-justify
            relative z-10
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Find, book, and manage nearby car wash services anytime, anywhere — trusted
          stations, easy scheduling, and real-time updates all in one app.
        </motion.p>

        <motion.div
          className="
            flex flex-row
            flex-wrap
            items-center justify-center md:justify-start
            gap-3 sm:gap-4
            relative z-10
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link
            to="/book"
            className="
              bg-[#128C7E]
              text-white
              px-6 sm:px-8 py-3
              rounded-full
              text-sm sm:text-base
              font-medium
              hover:bg-black
              transition-all duration-200
              flex items-center gap-2
              shadow-md
            "
          >
            Book Now
            <span className="text-white text-lg">➜</span>
          </Link>

          <Link
            to="/how-it-works"
            className="
              border border-[#128C7E]
              text-[#128C7E]
              px-6 sm:px-8 py-3
              rounded-full
              text-sm sm:text-base
              font-medium
              hover:bg-[#128C7E] hover:text-white
              transition-all duration-200
              flex items-center justify-center
              shadow-md
            "
          >
            How it Works
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="order-1 md:order-2 relative md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Dotted Design (desktop only) */}
        <motion.img
          src={designImage}
          alt="Decorative Background"
          className="
            absolute
            object-contain
            pointer-events-none
            z-0
            opacity-50
            hidden md:block
            w-[520px] sm:w-[600px] md:w-[700px] lg:w-[780px]
          "
          style={{
            bottom: "-60px",
            right: "-160px",
            transform: "rotate(0deg)",
          }}
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        {/* Main Hero Image */}
        <motion.img
          src={heroImage}
          alt="Car Wash Service"
          className="
            relative z-[1]
            w-[85%] sm:w-[450px] md:w-[520px] lg:w-[560px]
            h-auto
            object-cover
            rounded-tl-[150px] sm:rounded-tl-[180px] md:rounded-tl-[200px]
            rounded-br-[150px] sm:rounded-br-[180px] md:rounded-br-[200px]
            shadow-xl
          "
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
