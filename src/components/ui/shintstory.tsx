import React from "react";
import { Users, Trophy, MapPin } from "lucide-react";
import succesimage from "@/assets/success.png";
import celebrate from "@/assets/celebrating.png";

const ShinrStory = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-emerald-500" />, value: "50k+", label: "Smiles Delivered" },
    { icon: <Trophy className="w-8 h-8 text-emerald-500" />, value: "500", label: "Partnered Centers" },
    { icon: <MapPin className="w-8 h-8 text-emerald-500" />, value: "24", label: "Cities We Serve" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Left image */}
        <div className="hidden md:block w-24 h-24 shrink-0">
          <img src={ succesimage} alt="Left Icon" className="w-full h-full object-contain" />
        </div>

        {/* Center content */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Shinr Story by the <span className="text-emerald-600">Numbers</span>
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Every number tells a story of growth, trust, and satisfied customers across India. From hundreds of partner car wash centers to thousands of happy car owners.
          </p>

          <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center ${
                  index !== stats.length - 1 ? "md:border-r border-gray-200 md:pr-8" : ""
                }`}
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900">{item.value}</h3>
                <p className="text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="hidden md:block w-24 h-24 shrink-0">
          <img src={ celebrate} alt="Right Icon" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ShinrStory;
