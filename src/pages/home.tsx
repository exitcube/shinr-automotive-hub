import HeroSection from "@/components/shinr/herosection";
import AboutApp from "@/components/shinr/aboutapp";
import AppFeatures from "@/components/shinr/appfeature";
import HowItWorks from "@/components/shinr/howitworks";
import ReadyToGetStarted from "@/components/shinr/readytogetstarted";
import CarWashPromo from "@/components/shinr/carpromo";
import ShinrStory from "@/components/shinr/shintstory";
import CommunitySection from "@/components/shinr/community";

const Home = () => {
  return (
    <>
     <div className="w-full bg-white space-y-12">
      <HeroSection />
      <AboutApp />
      <AppFeatures />
      <HowItWorks />
      <ReadyToGetStarted />
      <CarWashPromo/>
      <ShinrStory />
      <CommunitySection />
     </div>
    </>
  );
};

export default Home;
