import muscleCar1 from "@/assets/muscle-car-1.jpg";
import muscleCar2 from "@/assets/muscle-car-2.jpg";
import engineDetail from "@/assets/engine-detail.jpg";

const Gallery = () => {
  const images = [
    { src: muscleCar1, alt: "Classic muscle car showcase" },
    { src: muscleCar2, alt: "Vintage American muscle car" },
    { src: engineDetail, alt: "High-performance engine detail" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Built for <span className="text-accent">Power</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our freeze plugs are trusted by muscle car enthusiasts and mechanics worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-background font-bold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
