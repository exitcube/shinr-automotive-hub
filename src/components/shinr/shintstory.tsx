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
      <div className="absolute top-60 sm:top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-20 md:h-20">
        <img
          src={succesimage}
          alt="Success Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-20 md:h-20">
        <img
          src={celebrate}
          alt="Celebration Icon"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          {/* Heading */}
          <h2
            className="
              text-[30px] leading-[100%] font-bold font-[Poppins]
              md:text-4xl md:leading-snug md:font-bold text-gray-900 mb-4
            "
          >
            The Shinr Story by the{" "}
            <span className="text-emerald-600">Numbers</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-sm md:text-base">
            Every number tells a story of growth, trust, and satisfied customers
            across India. From hundreds of partner car wash centers to thousands
            of happy car owners.
          </p>

          {/* Stats Card */}
          <div
            className="
              bg-[#F5F5F5] w-[200px] h-[300px]
              md:bg-[#F5F5F5] md:w-[1184px] md:h-[207px]
              md:rounded-[50px] rounded-2xl
              md:p-[32px_64px] p-4
              shadow-md
              flex flex-col md:flex-row
              items-center justify-center
              md:justify-between
              gap-6 md:gap-0
              text-center
              transition-all duration-300
            "
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-center text-center md:text-center gap-2 md:gap-3 w-full
                  ${index !== stats.length - 1 ? "md:border-r border-gray-200 md:pr-8" : ""}
                `}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                  {item.icon}
                  <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg md:text-2xl font-semibold text-gray-900 leading-tight whitespace-nowrap">
                      {item.value}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-lg whitespace-nowrap">
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
