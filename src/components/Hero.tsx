import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import engineblock from "@/assets/engine-2.jpg";
import freezePlugsHero from "@/assets/inicio1.jpg";
import freezePlugsCollection from "@/assets/inicio2.jpg";
import heroEngine from "@/assets/hero-engine.jpg";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [heroEngine, freezePlugsHero, freezePlugsCollection, engineblock];

  // Cambiar automáticamente cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrusel de fondo tipo slide */}
      <div className="absolute inset-0 flex transition-transform duration-[2000ms] ease-in-out" style={{
      transform: `translateX(-${currentImageIndex * 100}%)`,
      width: `${backgroundImages.length * 27}%`
    }}>
        {backgroundImages.map((image, index) => <div key={index} className="w-full h-full flex-shrink-0 relative" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />)}
      </div>

      {/* Botones de navegación manual */}
      <button onClick={prevImage} className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-background/70 hover:bg-background/90 text-foreground p-2 rounded-full transition backdrop-blur-sm" aria-label="Imagen anterior">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextImage} className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-background/70 hover:bg-background/90 text-foreground p-2 rounded-full transition backdrop-blur-sm" aria-label="Siguiente imagen">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center md:text-left">
        <div className="max-w-3xl bg-background/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="text-primary text-sm font-bold uppercase tracking-widest px-4 py-2 bg-primary/10 border-2 border-primary rounded-full">
              Ingeniería Premium
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground animate-fade-in-up">
            Sellos para {" "}
            <span className="text-primary">Monoblock
          </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>ESPECIALISTAS EN SELLOS PARA MOTOR CON CALIDAD INTERNACIONAL DESDE 1967</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="racing" size="xl" onClick={scrollToProducts} className="group">
              Ver Productos
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" onClick={() => document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-24 right-8 z-30 flex flex-col space-y-3">
        {backgroundImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-3 h-3 rounded-full transition-all border-2 ${index === currentImageIndex ? "bg-primary border-primary scale-125" : "bg-transparent border-background/50 hover:border-background"}`} aria-label={`Ir a imagen ${index + 1}`} />)}
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30 bg-background/70 backdrop-blur-sm rounded-full p-3">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </section>;
};
export default Hero;