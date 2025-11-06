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
        px-6 sm:px-10 md:px-20
        pt-8 md:pt-12 pb-16 md:pb-20
        font-[Poppins]
        max-w-[1440px]
        gap-16 md:gap-20
        overflow-hidden
      "
    >
      {/* Left Side with Background + Image */}
      <div
        className="
          relative w-full md:w-1/2
          flex justify-center md:justify-start items-center
          -mt-[40px] md:-mt-[80px]   // 👈 lift phone image up (more on desktop)
        "
      >
        {/* Soft background shape */}
        <div
          className="absolute rounded-[50%] blur-3xl"
          style={{
            backgroundColor: "#1FD2B733",
            width: "686px",
            height: "580px",         
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
            w-[320px] sm:w-[480px] md:w-[620px] lg:w-[680px]
            h-auto
            object-contain
            opacity-95
            drop-shadow-lg
            md:ml-0
          "
        />
      </div>

      {/* Right Text Section */}
      <div
        className="
          w-full md:w-1/2
          text-center md:text-left
          space-y-6
          -mt-[40px] md:-mt-[100px]  // 👈 lift content up
          md:ml-[40px] lg:ml-[60px]  // 👈 move right only on desktop
          px-4 sm:px-0
        "
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          About <span className="text-[#00A878]">App</span>
        </h2>

        <h3 className="text-lg font-medium text-[#333]">
          Shinr – Smart Car Wash at Your Fingertips
        </h3>

        <p
  className="
    text-[#000000]
    text-[16px]
    leading-[151%]
    tracking-[0]
    font-normal
    max-w-[600px]
    mx-auto md:mx-0
    text-justify
  "
  style={{
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
  }}
>
  Shinr is your reliable companion for discovering, booking, and managing car wash services nearby. 
  Whether you’re relaxing at home, busy at work, or traveling around, Shinr helps you find trusted 
  washing stations, pick your ideal time slot, and monitor your car’s cleaning progress — all directly 
  from your phone.
</p>

        <button
          className="
            bg-[#00A878]
            text-white
            px-8 py-3
            rounded-full
            text-base font-medium
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
