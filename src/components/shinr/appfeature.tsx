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
    <section className="relative py-16 md:py-24 px-6 md:px-20 font-[Poppins] bg-white overflow-hidden max-w-[1440px] mx-auto">
      
      {/* ✅ Curved Background for Desktop */}
      <div
        className="
          absolute right-0 top-0 h-[552px] w-[1285px] md:w-[90%] bg-[#128C7E]
          z-0 rounded-tl-[230px] rounded-bl-[230px]
          hidden md:block
        "
      ></div>

{/* ✅ Light Off-White Decorative Shape for Mobile */}
<div
  className="
    absolute top-[-40px] left-[-60px] 
    w-[160%] h-[280px] 
    bg-[#f8f8f8]
    md:hidden
    z-0
    rounded-[50%]
    blur-3xl
    opacity-90
    rotate-[-6deg]
  "
></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* ✅ Mobile layout */}
        <div className="w-full md:hidden flex flex-col gap-8">
          <div className="text-left">
            <h2 className="text-3xl font-semibold text-[#111]">
              App <span className="text-[#00A878]">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#EAF7F4] rounded-xl p-4 flex flex-col gap-2"
              >
                <div>{feature.icon}</div>
                <h4 className="font-semibold text-[15px] text-[#111] leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[13px] text-gray-600 leading-snug">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Desktop layout (unchanged) */}
        <div className="hidden md:flex w-full items-center justify-between gap-12">
          {/* Left side - Feature cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-md transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-start">{feature.icon}</div>
                <h4 className="font-semibold text-lg text-[#111]">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Right side - App Feature description */}
          <div className="md:w-2/5 text-white text-center md:text-left space-y-4">
          <h2
  className="
    font-[Poppins]
    font-semibold
    text-[32px] sm:text-[36px] md:text-[40px]
    leading-[100%]
    tracking-[0]
  "
>
  App Features
</h2>
            <p className="text-base leading-relaxed text-white/90 max-w-md mx-auto md:mx-0">
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
