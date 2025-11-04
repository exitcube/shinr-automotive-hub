import aboutPhone from "../../assets/phone.png";

const AboutApp = () => {
  return (
    <section
      className="
        relative
        bg-white
        flex flex-col md:flex-row
        items-center justify-between
        mx-auto
        px-8 md:px-20
        py-16 md:py-24
        font-[Poppins]
        max-w-[1440px]
        gap-16 md:gap-20
        overflow-hidden
      "
    >
      {/* Left Side with Background + Image */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start items-center">
        {/* Soft background shape */}
        <div
          className="absolute rounded-[50%] blur-3xl"
          style={{
            backgroundColor: "#1FD2B733",
            width: "686px",
            height: "658px",
            top: "0px",
            left: "-93px",
            opacity: 1,
            zIndex: 1,
          }}
        ></div>

        {/* Blended phone image */}
        <img
          src={aboutPhone}
          alt="Shinr App Preview"
          className="
            relative
            z-10
            left-61
            w-[682px]
            h-[844px]
            object-contain
            opacity-95
            drop-shadow-lg
          "
          style={{
            top: "0px",
            left: "61px",
          }}
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          About <span className="text-[#00A878]">App</span>
        </h2>

        <h3 className="text-lg font-medium text-[#333]">
          Shinr – Smart Car Wash at Your Fingertips
        </h3>

        <p className="text-[#555] text-base leading-relaxed max-w-md mx-auto md:mx-0">
          Shinr is your reliable companion for discovering, booking, and managing
          car wash services nearby. Whether you’re relaxing at home, busy at work,
          or traveling around, Shinr helps you find trusted washing stations,
          pick your ideal time slot, and monitor your car’s cleaning progress —
          all directly from your phone.
        </p>

        <button
          className="
            bg-[#00A878]
            text-white
            px-8 py-3
            rounded-full
            text-base
            font-medium
            hover:bg-[#00956F]
            transition-all duration-200
          "
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default AboutApp;
