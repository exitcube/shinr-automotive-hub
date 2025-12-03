import React from "react";
import succesimage from "@/assets/success.png";
import celebrate from "@/assets/celebrating.png";

// Custom icons from your assets
import smileIcon from "@/assets/smiley.png";
import centersIcon from "@/assets/map.png";
import citiesIcon from "@/assets/thumb.png";

const ShinrStory = () => {
  const stats = [
    {
      icon: smileIcon,
      value: "50k+",
      label: "Smiles Delivered",
    },
    {
      icon: centersIcon,
      value: "500",
      label: "Partnered Centers",
    },
    {
      icon: citiesIcon,
      value: "24",
      label: "Cities We Serve",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-emerald-50 overflow-hidden flex items-center justify-center">
      {/* Corner Icons */}
      <div className="absolute top-6 left-3 sm:left-6 w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20">
        <img
          src={succesimage}
          alt="Success Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-6 right-3 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20">
        <img
          src={celebrate}
          alt="Celebration Icon"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          {/* Heading */}
          <h2 className="text-[26px] sm:text-[30px] lg:text-4xl font-bold font-[Poppins] text-gray-900 mb-4">
            The Shinr Story by the{" "}
            <span className="text-emerald-600">Numbers</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
            Every number tells a story of growth, trust, and satisfied customers
            across India. From hundreds of partner car wash centers to thousands
            of happy car owners.
          </p>

          {/* Stats Card */}
          <div
            className="
              bg-[#F5F5F5]
              w-full sm:w-[97%] md:w-[92%] lg:w-[90%] xl:w-[1184px]
              rounded-2xl lg:rounded-[50px]
              p-6 sm:p-8 md:p-10 lg:p-[32px_64px]
              shadow-md
              flex flex-col sm:flex-row
              items-center justify-center
              sm:justify-between
              gap-8 sm:gap-10 md:gap-12
              text-center
              transition-all duration-300
            "
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto
                  ${
                    index !== stats.length - 1
                      ? "sm:border-r border-gray-200 sm:pr-8 md:pr-12"
                      : ""
                  }
                `}
              >
                {/* Icon on left */}
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                />

                {/* Texts stacked vertically */}
                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-gray-900 leading-tight text-center sm:text-left">
                    {item.value}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center sm:text-left">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShinrStory;
