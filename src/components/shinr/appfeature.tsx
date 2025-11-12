import { Bell, MapPin, Clock, Shield, Star, Calendar } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-6 h-6 text-[#00A878]" />,
    title: "Find Nearby Centers",
    desc: "Locate trusted car wash hubs closest to you in seconds.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-[#00A878]" />,
    title: "Book in Advance",
    desc: "Reserve your preferred time slot and skip waiting.",
  },
  {
    icon: <Bell className="w-6 h-6 text-[#00A878]" />,
    title: "Status Updates",
    desc: "Locate trusted car wash hubs closest to you in seconds.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#00A878]" />,
    title: "Secure Payments",
    desc: "Pay via UPI, cards, or wallets 100% safe and seamless.",
  },
  {
    icon: <Star className="w-6 h-6 text-[#00A878]" />,
    title: "Rate & Review",
    desc: "Share your experience and help us serve you better.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#00A878]" />,
    title: "Service History",
    desc: "Track all your past washes and payments in one place.",
  },
];

const AppFeatures = () => {
  return (
    <section id="features" className="relative py-16 lg:py-24 px-6 lg:px-20 font-[Poppins] bg-white overflow-hidden max-w-[1440px] mx-auto">

      {/* ✅ Curved background only for large screens */}
      <div
        className="
          absolute right-0 top-0 h-[520px] w-[100%] 
          bg-[#128C7E] rounded-tl-[230px] rounded-bl-[230px]
          hidden lg:block
          z-0
        "
      ></div>

      {/* ✅ Light decorative mobile background */}
      <div
        className="
          absolute top-[-40px] left-[-60px] w-[160%] h-[260px] 
          bg-[#f8f8f8] rounded-[50%] blur-3xl opacity-90 rotate-[-6deg]
          lg:hidden
          z-0
        "
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

        {/* ✅ Mobile + Tablet Section */}
        <div className="w-full lg:hidden flex flex-col gap-8">
          <h2 className="text-3xl font-semibold text-[#111]">
            App <span className="text-[#00A878]">Features</span>
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#EAF7F4] rounded-xl p-4 flex flex-col gap-2">
                <div>{feature.icon}</div>
                <h4 className="font-semibold text-[15px] text-[#111] leading-tight">{feature.title}</h4>
                <p className="text-[13px] text-gray-600 leading-snug">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Desktop (large screens only) */}
        <div className="hidden lg:flex w-full items-center justify-between gap-12">

          {/* Left Feature Grid */}
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div>{feature.icon}</div>
                <h4 className="font-semibold text-lg text-[#111]">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Description */}
          <div className="lg:w-2/5 text-white text-left space-y-4">
            <h2 className="font-semibold text-[40px] leading-tight">App Features</h2>
            <p className="text-base text-white/90">
              Shinr brings everything you need into one app — quick booking for
              customers, smart management tools for vendors, and exclusive offers
              that keep everyone happy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
