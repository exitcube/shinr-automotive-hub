import React from "react";
import {
  Users,
  LayoutDashboard,
  Megaphone,
  Heart,
  Gift,
  Clock,
} from "lucide-react";
import dashboard from "../../assets/dashboard.png";

const CarWashPromo: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "More Customers",
      desc: "Reach thousands of potential customers in your area",
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-white" />,
      title: "Smart Dashboard",
      desc: "Manage bookings, payments, and analytics in one place",
    },
    {
      icon: <Megaphone className="w-5 h-5 text-white" />,
      title: "Local Promotion",
      desc: "Get featured in local search results and recommendations",
    },
    {
      icon: <Heart className="w-5 h-5 text-white" />,
      title: "Customer Loyalty",
      desc: "Build lasting relationships with repeat customers",
    },
    {
      icon: <Gift className="w-5 h-5 text-white" />,
      title: "Special Offers",
      desc: "Create and manage promotional campaigns easily",
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: "Time-Saving",
      desc: "Automate scheduling and reduce administrative work",
    },
  ];

  return (
    <section className="w-full bg-[#E7F4F2] px-6 sm:px-10 md:px-20 py-20 relative overflow-hidden rounded-tl-[120px]">
      {/* Decorative Background */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[0px]"
        style={{ zIndex: 0 }}
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-16 max-w-[1440px] mx-auto">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 max-w-lg">
          <h2 className="font-[Poppins] font-semibold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-[110%] text-gray-900">
            Grow Your Car Wash <br />
            Business with <span className="text-[#128C7E]">Confidence</span>
          </h2>

          <p className="font-[Poppins] text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
            More bookings, smarter tools, and better visibility
          </p>

          {/* Button - Hidden on mobile, shown on larger screens */}
          <button className="hidden sm:block mt-4 px-7 py-3 bg-[#128C7E] hover:bg-black text-white font-[Poppins] font-medium text-[15px] rounded-lg shadow hover:opacity-90 transition-all">
            Register Now
          </button>

          {/* FEATURE BOXES */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-2
              lg:grid-cols-2 
              xl:grid-cols-2
              gap-x-4
              sm:gap-x-6
              md:gap-x-12
              lg:gap-x-40
              gap-y-6
              mt-10
              justify-items-center
              sm:justify-items-start
            "
          >
            {features.map((item, idx) => (
              <div
                key={idx}
                className="
                  w-full 
                  sm:w-[250px]
                  md:w-[300px]
                  lg:w-[322px]
                  bg-[#0D4D44] 
                  sm:bg-[#128C7E]
                  md:bg-[#128C7E]
                  rounded-[18px]
                  md:rounded-[15px]
                  shadow-md 
                  hover:shadow-lg 
                  transition-all 
                  flex 
                  flex-col 
                  justify-center 
                  p-5 
                  sm:p-4 
                  md:p-4
                  h-[180px] 
                  sm:h-[150px] 
                  md:h-[120px]
                  lg:h-[106px]
                "
              >
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h4 className="font-[Poppins] font-semibold text-[18px] sm:text-[20px] text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="font-[Poppins] text-[14px] sm:text-[15px] text-white opacity-90 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Button - Shown on mobile, hidden on larger screens */}
          <button className="block sm:hidden mt-6 px-7 py-3 bg-[#128C7E] hover:bg-black text-white font-[Poppins] font-medium text-[15px] rounded-lg shadow hover:opacity-90 transition-all">
            Register Now
          </button>
        </div>

        {/* RIGHT IMAGE (unchanged for laptop) */}
        <div className="hidden lg:flex flex-shrink-0 items-end justify-end">
          <img
            src={dashboard}
            alt="Dashboard Preview"
            className="max-w-[600px] w-auto h-auto rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CarWashPromo;
