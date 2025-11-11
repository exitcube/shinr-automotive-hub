import React from "react";
import customersIcon from "../../assets/more customers.png";
import dashboardIcon from "../../assets/smart dashboard.png";
import promotionIcon from "../../assets/promo.png";
import loyaltyIcon from "../../assets/cust loyality.png";
import offersIcon from "../../assets/special offers.png";
import timeIcon from "../../assets/time saving.png";
import dashboard from "../../assets/dashboard.png";

const CarWashPromo: React.FC = () => {
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

  return (
    <section className="w-full bg-[#E7F4F2] px-6 sm:px-10 md:px-20 py-20 relative overflow-hidden rounded-tl-[120px]">

      <div className="relative z-10 flex flex-col xl:flex-row items-start justify-between gap-16 max-w-[1440px] mx-auto">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 max-w-lg">

          <h2 className="font-[Poppins] font-semibold text-[28px] sm:text-[34px] md:text-[40px] xl:text-[48px] leading-[110%] text-gray-900">
            Grow Your Car Wash <br />
            Business with <span className="text-[#128C7E]">Confidence</span>
          </h2>

          <p className="font-[Poppins] text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
            More bookings, smarter tools, and better visibility
          </p>

          <button className="hidden sm:block mt-4 px-7 py-3 bg-[#128C7E] hover:bg-black text-white font-[Poppins] font-medium text-[15px] rounded-lg transition-all">
            Register Now
          </button>

          {/* ✅ MOBILE + TABLET FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-x-20 mt-10 ">

            {features.map((item, idx) => (
              <div key={idx} className="relative w-full">

                {/* ✅ MOBILE SHADOW ONLY */}
                <div className="absolute inset-0 -translate-x-1 translate-y-1 bg-[#128C7E] rounded-[20px] md:hidden"></div>

                {/* ✅ MAIN CARD */}
                <div
                  className={`
                    relative rounded-[20px] p-5 flex flex-col gap-3 
                    bg-[#0D4D44] md:bg-[#128C7E]

                    /* ✅ Desktop card size */
                    md:w-[280px]
                    md:h-[106px]
                    md:rounded-[14.66px]
                    md:p-[12px]
                    md:gap-[4px]
        
                  `}
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
                </div>

              </div>
            ))}

          </div>

          <button className="block sm:hidden mt-6 px-7 py-3 bg-[#128C7E] hover:bg-black text-white font-[Poppins] font-medium text-[15px] rounded-lg transition-all">
            Register Now
          </button>
        </div>

        {/* Desktop image */}
        <div className="hidden xl:block absolute right-0 bottom-0 z-10 h-[100px]">
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
        </div>

      </div>
    </section>
  );
};

export default CarWashPromo;
