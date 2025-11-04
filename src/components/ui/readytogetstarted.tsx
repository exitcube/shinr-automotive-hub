import React from "react";

const ReadyToGetStarted: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-20 font-[Poppins] bg-white overflow-hidden max-w-[1440px] mx-auto">
      <div className="max-w-[1100px] mx-auto bg-[#128C7E] rounded-[20px] text-center text-white py-14 px-8 shadow-md">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-6">
          Join thousands of satisfied customers and experience the convenience of Shinr.
        </p>

        <p className="text-sm md:text-base mb-4">Download app on:</p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 md:h-14"
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
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
