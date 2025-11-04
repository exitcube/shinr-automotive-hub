import { Link } from "react-router-dom";
import heroImage from "../../assets/home.jpg";
import designImage from "../../assets/design.png";

const HeroSection = () => {
  return (
    <section
      className="
        relative bg-white
        flex flex-col md:flex-row
        items-center justify-between
        mx-auto
        px-4 sm:px-8 md:px-16 lg:px-20
        py-16 md:py-24
        font-[Poppins]
        max-w-[1440px]
        min-h-[500px]
        gap-10 sm:gap-12 md:gap-16 lg:gap-20
        overflow-hidden
      "
    >
      {/* Left Text Section */}
      <div className="order-2 md:order-1 md:w-1/2 text-center md:text-left space-y-6 z-10">
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-semibold leading-tight text-black
          "
        >
          Why{" "}
          <span className="text-[#00A878] font-semibold">Wait</span> in Line?
          <br />
          Shine in{" "}
          <span className="text-[#00A878] font-semibold">No Time</span>
        </h1>

        <p
          className="
            text-[#555]
            text-sm sm:text-base md:text-lg
            leading-relaxed
            max-w-md
            mx-auto md:mx-0
          "
        >
          Find, book, and manage nearby car wash services anytime, anywhere.
          Trusted stations, easy scheduling, and real-time cleaning updates —
          all in one app.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/book"
            className="
              bg-[#128C7E]
              text-white
              px-6 sm:px-8 py-3
              rounded-full
              text-sm sm:text-base font-medium
              hover:bg-[#00956F]
              transition-all duration-200
            "
          >
            Book Now
          </Link>
          <Link
            to="/how-it-works"
            className="
              border border-[#128C7E]
              text-[#128C7E]
              px-6 sm:px-8 py-3
              rounded-full
              text-sm sm:text-base font-medium
              hover:bg-[#128C7E] hover:text-white
              transition-all duration-200
            "
          >
            How it Works
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="order-1 md:order-2 relative md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        {/* Decorative Design */}
        <img
          src={designImage}
          alt="Background Design"
          className="
            absolute
            object-contain
            pointer-events-none
            z-0
            opacity-40
            hidden sm:block
          "
          style={{
            width: "500px",
            height: "500px",
            top: "60px",
            right: "-130px",
            transform: "rotate(90deg)",
          }}
        />

        {/* Main Hero Image */}
        <img
          src={heroImage}
          alt="Car Wash Service"
          className="
            w-[85%] sm:w-[450px] md:w-[520px] lg:w-[560px]
            h-auto
            object-cover
            rounded-tl-[150px] sm:rounded-tl-[180px] md:rounded-tl-[200px]
            rounded-br-[150px] sm:rounded-br-[180px] md:rounded-br-[200px]
            shadow-xl
            relative
            z-10
          "
        />
      </div>
    </section>
  );
};

export default HeroSection;
