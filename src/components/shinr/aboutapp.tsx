import aboutPhone from "../../assets/phone.png";
import { motion } from "framer-motion";

const AboutApp = () => {
  return (
    <section
      id="about"
      className="
        relative 
        bg-white
        flex flex-col md:flex-row
        items-center justify-between
        mx-auto
        px-6 sm:px-10 md:px-20
        pt-8 md:pt-12 pb-16 md:pb-20
        font-[Poppins]
        max-w-[1440px]
        gap-16 md:gap-20
        overflow-visible
      "
    >
      {/* Left Phone Section */}
      <motion.div
        className="
          relative w-full md:w-1/2
          flex justify-center md:justify-start items-center
        "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, type: "spring" }}
      >
        {/* Background glow only behind phone */}
        <div className="absolute inset-0 flex justify-center md:justify-start items-center">
          <div
            className="rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(31,210,183,0.3) 50%, transparent -0%)",
              width: "600px",
              height: "600px",
            }}
          />
        </div>

        {/* Desktop / Tablet Image */}
        <motion.img
          src={aboutPhone}
          alt="Shinr App Preview"
          className="relative z-10 w-[320px] sm:w-[480px] md:w-[620px] lg:w-[680px] h-auto object-contain opacity-95 drop-shadow-lg hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Mobile Image */}
        <motion.img
          src={aboutPhone}
          alt="Shinr App Mobile Preview"
          className="relative z-10 w-[260px] sm:w-[320px] h-auto object-contain opacity-95 drop-shadow-lg block md:hidden"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="
          w-full md:w-1/2
          text-center md:text-left
          space-y-6
          -mt-[40px] md:-mt-[100px]
          md:ml-[40px] lg:ml-[60px]
          px-4 sm:px-0
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          About <span className="text-[#128C7E]">App</span>
        </h2>

        <h3 className="text-lg font-medium text-[#333]">
          Shinr – Smart Car Wash at Your Fingertips
        </h3>

        <p className="text-[#000000] text-[16px] leading-[151%] font-normal max-w-[600px] mx-auto md:mx-0 text-justify">
          Shinr is your reliable companion for discovering, booking, and
          managing car wash services nearby. Whether you’re relaxing at home,
          busy at work, or traveling around, Shinr helps you find trusted
          washing stations, pick your ideal time slot, and monitor your car’s
          cleaning progress — all directly from your phone.
        </p>

        <motion.button
          className="
            bg-[#128C7E]
            text-white
            px-8 py-3
            rounded-full
            text-base font-medium
            hover:bg-black
            transition-all duration-200
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutApp;
