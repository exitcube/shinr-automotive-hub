import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import riys from "@/assets/riys.png";
import vikram from "@/assets/vikram.png";
import neha from "@/assets/neha.png";

const CommunitySection: React.FC = () => {
  const testimonials = [
    {
      name: "Riya S, Designer",
      text: "Affordable, eco-friendly, and quick. The real-time updates were awesome! I knew exactly when my car would be ready.",
      image: riys,
    },
    {
      name: "Vikram K, Business Owner",
      text: "Super convenient! Booked a wash at 8 AM before office, and my car was sparkling in 30 minutes.",
      image: vikram,
    },
    {
      name: "Neha M, College Lecturer",
      text: "Booking in advance is a game-changer. No more waiting in queues — my car is always ready on time!",
      image: neha,
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative pt-10 pb-0 md:pb-10 lg:pb-20 bg-gradient-to-b from-white to-emerald-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-5 gap-30 relative">
        {/* Heading for Mobile */}
        <div className="block lg:hidden text-center mb-10">
          <h2 className="font-[Poppins] font-bold text-[30px] leading-[100%] tracking-[0%] text-gray-900">
            Hear from Our <span className="text-emerald-600">Community</span>
          </h2>
        </div>

        {/* Testimonials */}
        <motion.div
          className="relative w-full lg:w-2/3 min-h-[650px] flex flex-col items-center lg:block gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`
                flex items-start gap-4 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                p-5 md:p-6 lg:p-8 rounded-xl
                w-[90%] sm:w-[85%] md:w-[80%] lg:w-[400px]
                h-auto lg:h-[150px]
                relative lg:absolute
                ${i === 0 ? "lg:top-[0px] lg:left-[42px]" : ""}
                ${i === 1 ? "lg:top-[215px] lg:left-[280px]" : ""}
                ${i === 2 ? "lg:top-[430px] lg:left-[44px]" : ""}
                lg:rounded-none lg:rounded-tr-[10px] lg:rounded-br-[10px]
              `}
            >
              {/* Vertical Accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 rounded-l-xl" />

              {/* User Image */}
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center relative">
                <h4 className="text-gray-900 font-semibold text-sm md:text-base mb-1">
                  {t.name}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-[260px]">
                  {t.text}
                </p>
                <Quote className="absolute right-3 top-3 text-emerald-400 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Section - Only for Laptop */}
        <div className="hidden lg:block text-left w-full lg:w-1/3 lg:ml-auto lg:pl-16 xl:pl-400">
          <h2 className="font-[Poppins] font-semibold text-[40px] leading-[100%] tracking-[0%] text-gray-900 mb-3">
            Hear from Our <span className="text-[#128C7E]">Community</span>
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Hear directly from our community of happy car owners and thriving
            vendors who are experiencing the Shinr difference every day.
          </p>
          <button className="bg-[#128C7E] hover:bg-black text-white font-medium px-6 py-2 rounded-full transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
