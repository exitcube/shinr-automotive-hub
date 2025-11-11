import React from "react";
import { Users, Trophy, MapPin } from "lucide-react";
import succesimage from "@/assets/success.png";
import celebrate from "@/assets/celebrating.png";

const ShinrStory = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      value: "50k+",
      label: "Smiles Delivered",
    },
    {
      icon: <Trophy className="w-6 h-6 text-emerald-600" />,
      value: "500",
      label: "Partnered Centers",
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
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
          <h2
            className="
              text-[26px] sm:text-[30px] lg:text-4xl font-bold font-[Poppins]
              text-gray-900 mb-4
            "
          >
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
              p-5 sm:p-6 md:p-8 lg:p-[32px_64px]
              shadow-md
              flex flex-col md:flex-row
              items-center justify-center
              md:justify-between
              gap-6 md:gap-4
              text-center
              transition-all duration-300
            "
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-center text-center gap-2 md:gap-3 w-full md:w-auto
                  ${
                    index !== stats.length - 1
                      ? "md:border-r border-gray-200 md:pr-6 lg:pr-8"
                      : ""
                  }
                `}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                  {item.icon}
                  <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg md:text-2xl font-semibold text-gray-900 leading-tight">
                      {item.value}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-lg whitespace-normal break-words">
                      {item.label}
                    </p>
                  </div>
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
