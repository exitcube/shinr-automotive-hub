import React from "react";
import { Quote } from "lucide-react";
import riys from "@/assets/riys.png";
import vikram from "@/assets/vikram.png";
import neha from "@/assets/neha.png";

const CommunitySection: React.FC = () => {
  const testimonials = [
    {
      name: "Riya S, Designer",
      text: "Affordable, eco-friendly, and quick. The real-time updates were awesome! I knew exactly when my car would be ready.",
      image:  riys,
    },
    {
      name: "Vikram K, Business Owner",
      text: "Super convenient! Booked a wash at 8 AM before office, and my car was sparkling in 30 minutes.",
      image:  vikram,
    },
    {
      name: "Neha M, College Lecturer",
      text: "Booking in advance is a game-changer. No more waiting in queues — my car is always ready on time!",
      image:  neha,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        {/* Left Testimonials */}
        <div className="flex flex-col gap-8 w-full md:w-2/3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-4 bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg ${
                i === 1 ? "ml-8" : i === 2 ? "ml-16" : ""
              }`}
            >
              {/* Vertical line accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 rounded-l-xl" />

              {/* User Image */}
              <div className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h4 className="text-gray-900 font-semibold mb-1">{t.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.text}
                </p>
                <Quote className="absolute right-3 top-3 text-emerald-400 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Text Section */}
        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Hear from Our{" "}
            <span className="text-emerald-600">Community</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Hear directly from our community of happy car owners and thriving
            vendors who are experiencing the Shinr difference every day.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-full transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
