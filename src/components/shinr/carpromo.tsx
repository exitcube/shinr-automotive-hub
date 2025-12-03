import React from "react";
import { motion } from "framer-motion";
import customersIcon from "../../assets/more customers.png";
import dashboardIcon from "../../assets/smart dashboard.png";
import promotionIcon from "../../assets/promo.png";
import loyaltyIcon from "../../assets/cust loyality.png";
import offersIcon from "../../assets/special offers.png";
import timeIcon from "../../assets/time saving.png";
import dashboard from "../../assets/dashboard.png";

const features = [
  {
    icon: customersIcon,
    title: "More Customers",
    desc: "Reach thousands of potential customers in your area",
  },
  {
    icon: promotionIcon,
    title: "Local Promotion",
    desc: "Get featured in local search results and recommendations",
  },
  {
    icon: offersIcon,
    title: "Special Offers",
    desc: "Create and manage promotional campaigns easily",
  },
  {
    icon: dashboardIcon,
    title: "Smart Dashboard",
    desc: "Manage bookings, payments, and analytics in one place",
  },
  {
    icon: loyaltyIcon,
    title: "Customer Loyalty",
    desc: "Build lasting relationships with repeat customers",
  },
  {
    icon: timeIcon,
    title: "Time-Saving",
    desc: "Automate scheduling and reduce administrative work",
  },
];

const CarWashPromo: React.FC = () => {
  return (
    <motion.section
      id="whyshinr"
      className="w-full bg-[#E7F4F2] px-6 sm:px-10 md:px-20 py-20 relative overflow-hidden rounded-tl-[120px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 flex flex-col xl:flex-row items-start justify-between gap-16 max-w-[1440px] mx-auto">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 space-y-6 max-w-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-[Poppins] font-semibold text-[28px] sm:text-[34px] md:text-[40px] xl:text-[48px] leading-[110%] text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Grow Your Car Wash <br />
            Business with{" "}
            <span className="text-[#128C7E]">Confidence</span>
          </motion.h2>

          <motion.p
            className="font-[Poppins] text-[14px] sm:text-[16px] text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            More bookings, smarter tools, and better visibility
          </motion.p>

          <motion.button
            className="hidden sm:block mt-4 px-7 py-3 bg-[#128C7E] hover:bg-black text-white font-[Poppins] font-medium text-[15px] rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>

          {/* ✅ MOBILE + TABLET FEATURES */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-x-20 mt-10"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative w-full"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* ✅ MOBILE SHADOW ONLY */}
                <div className="absolute inset-0 -translate-x-1 translate-y-1 bg-[#128C7E] rounded-[20px] md:hidden"></div>

                {/* ✅ MAIN CARD */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-[20px] p-5 flex flex-col gap-3 bg-[#0D4D44] md:bg-[#128C7E] md:w-[280px] md:h-[106px] md:rounded-[14.66px] md:p-[12px] md:gap-[4px]"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-7 h-7 object-contain"
                    />
                    <h4 className="font-[Poppins] font-semibold text-[18px] text-white">
                      {item.title}
                    </h4>
                  </div>

                  <p className="font-[Poppins] text-[14px] text-white leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="block sm:hidden mt-6 px-7 py-3 bg-[#128C7E] hover:bg-black text-white font-[Poppins] font-medium text-[15px] rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>

        {/* ✅ Dashboard Image with Zoom Animation */}
        <motion.div
          className="hidden xl:block absolute right-0 bottom-0 z-10 h-[100px]"
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={dashboard}
            alt="Dashboard Preview"
            className="object-contain rounded-xl"
            style={{
              width: "900px",
              position: "absolute",
              top: "-450px",
              right: "-150px",
              maxWidth: "50vw",
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CarWashPromo;
