import React from "react";
import dashboard from "../../assets/dashboard.png";


const CarWashPromo: React.FC = () => {
return (
<section className="w-full bg-[#E7F4F2] px-6 sm:px-10 md:px-20 py-20 relative overflow-hidden rounded-tl-[120px] ">
{/* Large Green Background Shape */}
<div
className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[200px]"
style={{
background: "rgba(31,210,183,0.35)",
zIndex: 0,
}}
></div>


<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-[1440px] mx-auto">
{/* Left Text Section */}
<div className="flex-1 space-y-6 max-w-lg">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
Grow Your Car Wash <br /> Business with <span className="text-[#1FD2B7]">Confidence</span>
</h2>


<p className="text-gray-600 text-lg sm:text-xl">
More bookings, smarter tools, and better visibility
</p>


<button className="mt-4 px-7 py-3 bg-[#1FD2B7] text-white font-semibold rounded-lg shadow hover:opacity-90 transition-all">
Register Now
</button>


{/* Feature Boxes */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
{[
{ title: "More Customers", desc: "Reach thousands of potential customers in your area" },
{ title: "Smart Dashboard", desc: "Manage bookings, payments, and analytics in one place" },
{ title: "Local Promotion", desc: "Get featured in local search results and recommendations" },
{ title: "Customer Loyalty", desc: "Build lasting relationships with repeat customers" },
{ title: "Special Offers", desc: "Create and manage promotional campaigns easily" },
{ title: "Time-Saving", desc: "Automate scheduling and reduce administrative work" }
].map((item, idx) => (
<div
key={idx}
className="p-5 bg-[#1FD2B7] text-white rounded-xl shadow-md hover:shadow-lg transition-all"
>
<h4 className="font-semibold text-lg">{item.title}</h4>
<p className="text-sm mt-1 opacity-90">{item.desc}</p>
</div>
))}
</div>
</div>


{/* Right Dashboard Image */}
<div className="flex-1 flex justify-center">
<img
src={dashboard} /* Replace with actual image */
alt="Dashboard Preview"
className="w-full max-w-2xl rounded-xl shadow-lg object-contain"
/>
</div>
</div>
</section>
);
};


export default CarWashPromo;