import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroEngine from "@/assets/hero-engine.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroEngine})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-primary text-sm font-bold uppercase tracking-widest px-4 py-2 bg-foreground/50 backdrop-blur-sm rounded-full">
              Premium Engineering
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-background">
            Monoblock <span className="text-primary">Freeze Plugs</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-background/90 max-w-2xl">
            High-performance engine components built for muscle car enthusiasts and professional mechanics. Quality you can trust, power you can feel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              variant="racing" 
              size="xl"
              onClick={scrollToProducts}
              className="group"
            >
              View Products
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
