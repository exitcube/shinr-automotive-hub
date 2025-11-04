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
      
      {/* ✅ Curved Background */}
      <div className="absolute right-0 top-0 h-[552px] w-[1285px] md:w-[90%] bg-[#128C7E] z-0 rounded-tl-[230px] rounded-bl-[230px]"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
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
          <h2 className="text-3xl md:text-4xl font-semibold">App Features</h2>
          <p className="text-base leading-relaxed text-white/90 max-w-md mx-auto md:mx-0">
            Shinr brings everything you need into one app — quick booking for
            customers, smart management tools for vendors, and exclusive offers
            that keep everyone happy.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AppFeatures;
