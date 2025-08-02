import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Wrench, Sparkles, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import shinrHero from "@/assets/shinr-hero.jpg";

const ComingSoonBanner = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when SHINR launches.",
      });
      setEmail("");
    }
  };

  const features = [
    {
      icon: Phone,
      title: "24/7 Roadside Assistance",
      description: "Emergency support whenever and wherever you need it"
    },
    {
      icon: Sparkles,
      title: "Maintain", 
      description: "Access trusted car washes and detailing services"
    },
    {
      icon: Wrench,
      title: "Service",
      description: "Connect with verified mechanics and diagnostics"
    },
    {
      icon: Shield,
      title: "Manage",
      description: "All-in-one automotive care platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-automotive-dark via-automotive-gray to-automotive-dark relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${shinrHero})` }}
      />
      
      {/* Premium Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-premium-gold/10" />
      
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Logo/Brand */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-premium-gold to-premium-gold-dark bg-clip-text text-transparent mb-6 tracking-tight">
            SHINR
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-premium-gold to-premium-gold-dark mx-auto rounded-full" />
        </div>

        {/* Coming Soon Badge */}
        <Card className="bg-automotive-gray/50 border-premium-gold/20 backdrop-blur-sm px-6 py-3 mb-12">
          <p className="text-premium-gold font-semibold tracking-wide">COMING SOON</p>
        </Card>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Premium Mobile Platform for 
            <span className="bg-gradient-to-r from-premium-gold to-premium-gold-dark bg-clip-text text-transparent"> Automotive Excellence</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            SHINR redefines the way you care for, maintain, and manage your vehicle. From discovering your next car to accessing trusted car washes, mechanics, detailing, and diagnostics — experience an all-in-one automotive platform designed for the modern, discerning driver.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full max-w-6xl">
          {features.map((feature, index) => (
            <Card key={index} className="bg-automotive-gray/30 border-premium-gold/20 backdrop-blur-sm p-6 text-center hover:bg-automotive-gray/50 transition-all duration-300 hover:shadow-premium group">
              <feature.icon className="w-8 h-8 text-premium-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Notify Me Form */}
        <Card className="bg-automotive-gray/50 border-premium-gold/20 backdrop-blur-sm p-8 w-full max-w-md mb-16">
          <div className="text-center mb-6">
            <Mail className="w-8 h-8 text-premium-gold mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Get Notified</h3>
            <p className="text-muted-foreground text-sm">Be the first to experience SHINR</p>
          </div>
          
          <form onSubmit={handleNotifyMe} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-automotive-dark border-premium-gold/30 focus:border-premium-gold text-foreground"
              required
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-premium-gold to-premium-gold-dark hover:from-premium-gold-dark hover:to-premium-gold text-automotive-dark font-semibold py-3 transition-all duration-300 shadow-premium">
              Notify Me at Launch
            </Button>
          </form>
        </Card>

        {/* Contact Section */}
        <Card className="bg-automotive-gray/30 border-premium-gold/20 backdrop-blur-sm p-6 text-center">
          <h4 className="text-lg font-semibold text-foreground mb-3">Questions? Get in Touch</h4>
          <a 
            href="mailto:info@shinrtech.com" 
            className="text-premium-gold hover:text-premium-gold-dark transition-colors duration-300 font-medium"
          >
            info@shinrtech.com
          </a>
        </Card>
      </div>
    </div>
  );
};

export default ComingSoonBanner;