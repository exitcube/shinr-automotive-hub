import { Download, MapPin, Calendar, Settings, Gift, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    icon: <Download className="w-6 h-6 text-white" />,
    title: "Download Shinr",
    desc: "Get the app from Play Store or App Store and create your account in seconds.",
  },
  {
    id: "02",
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Find Nearby Car Wash Center",
    desc: "Use our smart location finder to discover trusted car wash centers near you.",
  },
  {
    id: "03",
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: "Book Your Slot",
    desc: "Choose your preferred time slot and service type with real-time availability.",
  },
  {
    id: "04",
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "Choose Your Service",
    desc: "Select from various wash packages tailored to your needs.",
  },
  {
    id: "05",
    icon: <Gift className="w-6 h-6 text-white" />,
    title: "Unlock Deals",
    desc: "Apply exclusive discounts and loyalty rewards.",
  },
  {
    id: "06",
    icon: <CreditCard className="w-6 h-6 text-white" />,
    title: "Quick Checkout",
    desc: "Complete your payment securely with multiple options.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-20 font-[Poppins] bg-white overflow-hidden max-w-[1440px] mx-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111]">
            How It <span className="text-[#128C7E]">Works</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Follow quick steps and enjoy a smooth car wash experience without the hassle
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1100px] mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
              className="relative bg-[#F5F5F5] rounded-[14px] p-6 text-left shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-4 bg-[#128C7E] text-white font-semibold text-sm px-3 py-1 rounded-md shadow-lg">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mb-4 group-hover:bg-[#128C7E] transition-colors duration-300">
                {step.icon}
              </div>

              {/* Text */}
              <h4 className="text-lg font-semibold text-[#128C7E] mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
