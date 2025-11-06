import HeroSection from "@/components/ui/herosection";
import AboutApp from "@/components/ui/aboutapp";
import AppFeatures from "@/components/ui/appfeature";
import HowItWorks from "@/components/ui/howitworks";
import ReadyToGetStarted from "@/components/ui/readytogetstarted";
import CarWashPromo from "@/components/ui/carpromo";
import ShinrStory from "@/components/ui/shintstory";
import CommunitySection from "@/components/ui/community";

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
