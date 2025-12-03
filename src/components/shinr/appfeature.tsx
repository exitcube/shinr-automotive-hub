import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Bell, Shield, Star, Clock } from "lucide-react";

const features = [
  {
    icon: <MapPin size={28} className="text-emerald-600" />,
    title: "Find Nearby Centers",
    desc: "Locate trusted car wash hubs closest to you in seconds.",
  },
  {
    icon: <Calendar size={28} className="text-emerald-600" />,
    title: "Book in Advance",
    desc: "Reserve your preferred time slot and skip waiting.",
  },
  {
    icon: <Bell size={28} className="text-emerald-600" />,
    title: "Status Updates",
    desc: "Locate trusted car wash hubs closest to you in seconds.",
  },
  {
    icon: <Shield size={28} className="text-emerald-600" />,
    title: "Secure Payments",
    desc: "Pay via UPI, cards, or wallets 100% safe and seamless.",
  },
  {
    icon: <Star size={28} className="text-emerald-600" />,
    title: "Rate & Review",
    desc: "Share your experience and help us serve you better.",
  },
  {
    icon: <Clock size={28} className="text-emerald-600" />,
    title: "Service History",
    desc: "Track all your past washes and payments in one place.",
  },
];

const AppFeatures: React.FC = () => {
  return (
    <section className="relative w-full bg-transparent py-12 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* ✅ Background for mobile - top-right curve only */}
      <div className="absolute inset-0 bg-[#F5F5F5] md:hidden rounded-tr-[100px]"></div>

      {/* ✅ Background for desktop - right-side curved green block */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute right-0 top-0 bottom-0 w-[85%] bg-[#0E8B7A] rounded-l-[200px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 items-center justify-between">
        {/* ✅ Feature Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 w-full lg:w-2/3 z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {features.map((f, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-[#B3F0E7] md:bg-white rounded-[9.83px] md:rounded-2xl shadow-md flex flex-col gap-2 sm:gap-3 justify-center items-start p-3 sm:p-5
                         w-[179px] h-[124px] md:w-auto md:h-auto"
            >
              <div>{f.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                {f.title}
              </h3>
              <p className="text-gray-600 text-[11px] sm:text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ Title and Description */}
        <motion.div
          className="text-gray-900 md:text-white w-full lg:w-1/3 text-left z-10 mb-4 md:mb-0"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            App <span className="text-emerald-600 md:text-white">Features</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 md:text-white/90 max-w-md">
            Shinr brings everything you need into one app — quick booking for
            customers, smart management tools for vendors, and exclusive offers
            that keep everyone happy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeatures;
