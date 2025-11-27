import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import engineblock from "@/assets/engine-2.jpg";
import freezePlugsHero from "@/assets/inicio1.jpg";
import freezePlugsCollection from "@/assets/inicio2.jpg";
import heroEngine from "@/assets/hero-engine.jpg";
import componentHero from "@/assets/component-hero.png";
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
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrusel de fondo tipo slide */}
      <div
        className="absolute inset-0 flex transition-transform duration-[2000ms] ease-in-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          width: `${backgroundImages.length * 27}%`,
        }}
      >
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100%",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Botones de navegación manual */}
      <button
        onClick={prevImage}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-background/70 hover:bg-background/90 text-foreground p-2 rounded-full transition backdrop-blur-sm"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-background/70 hover:bg-background/90 text-foreground p-2 rounded-full transition backdrop-blur-sm"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl ml-0 mr-auto bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/10">
          <div className="grid md:grid-cols-5 min-h-[300px] md:min-h-[360px]">
            {/* Columna izquierda - Texto */}
            <div className="md:col-span-2 flex flex-col justify-center p-4 md:p-5 text-center md:text-left border-r border-white/10">
              <div className="inline-block mb-2.5 animate-fade-in">
                <span className="text-primary text-s font-bold uppercase tracking-widest px-3.5 py-1 bg-primary/10 border-2 border-primary rounded-full">
                  Ingeniería PROKAR
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-5xl font-black mb-2.5 text-white leading-tight animate-fade-in-up">
                Sellos para
                <br />
                <span className="text-primary">Monoblock</span>
              </h1>

              <p
                className="text-base md:text-lg lg:text-xl mb-4 text-gray-300 leading-relaxed animate-fade-in-up"
                style={{
                  animationDelay: "0.2s",
                }}
              >
                ESPECIALISTAS EN SELLOS PARA MOTOR
                <br />
                CON CALIDAD INTERNACIONAL
                <br />
                DESDE 1967
              </p>

              <div
                className="flex justify-center md:justify-start animate-fade-in-up"
                style={{
                  animationDelay: "0.4s",
                }}
              >
                <Button
                  variant="racing"
                  size="lg"
                  onClick={scrollToProducts}
                  className="group text-lg px-8 py-6 h-auto animate-flash"
                >
                  Ver Productos
                  <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Columna derecha - Imagen */}
            <div className="md:col-span-3 relative h-full min-h-[240px] md:min-h-[300px] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-3 md:p-4">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50"></div>
                <img
                  src={componentHero}
                  alt="Componente esencial para motores reconstruidos"
                  className="relative w-full h-full object-contain drop-shadow-2xl"
                  style={{ filter: "contrast(1.2) brightness(1.1)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-24 right-8 z-30 flex flex-col space-y-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all border-2 ${index === currentImageIndex ? "bg-primary border-primary scale-125" : "bg-transparent border-background/50 hover:border-background"}`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
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
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-flash { animation: flash 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};
export default Hero;
