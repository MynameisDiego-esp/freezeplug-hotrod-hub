import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Accordion } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { plugsData, IndividualPlug } from "@/data/plugsData";
import { usePlugsFilter } from "@/hooks/usePlugsFilter";
import { CategoryAccordion } from "@/components/individual-plugs/CategoryAccordion";
import pipeImage from "@/assets/pipe.png";
import aceroInoxidableImage from "@/assets/acero-inoxidable.png";
import oroYZincImage from "@/assets/oro-y-zinc.png";
import aceroImage from "@/assets/acero.png";
import cobreImage from "@/assets/cobre.png";

const PlugsIndividuales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addItem, getItemQuantity, updateQuantity, items, removeItem } = useCart();
  
  const filteredCategories = usePlugsFilter(plugsData, searchTerm);

  const handleAddToCart = (plug: IndividualPlug) => {
    const details = [
      plug.tipo,
      plug.Diametro_recomendado_del_cilindro && plug.Diametro_recomendado_del_cilindro > 0 
        ? `Ø ${plug.Diametro_recomendado_del_cilindro}"` 
        : null
    ].filter(Boolean).join(" | ");
    
    addItem({
      id: plug.NumeroParte,
      name: `${plug.NumeroParte} - ${plug.Tamaño_de_Sello}`,
      type: 'individual',
      details: details || plug.Tamaño_de_Sello
    });
    toast.success("Agregado al carrito", {
      description: `${plug.NumeroParte} - ${plug.Tamaño_de_Sello}`
    });
  };

  const handleIncrement = (id: string) => {
    const currentQty = getItemQuantity(id);
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrement = (id: string) => {
    const currentQty = getItemQuantity(id);
    updateQuantity(id, currentQty - 1);
  };

  const handleQuantityChange = (id: string, value: string) => {
    const numValue = parseInt(value);
    if (value === '' || isNaN(numValue)) {
      updateQuantity(id, 0);
    } else if (numValue >= 0) {
      updateQuantity(id, numValue);
    }
    // Si es negativo, no hacemos nada (ignoramos el valor)
  };

  const handleRemoveFromCart = (id: string) => {
    removeItem(id);
    toast.info("Eliminado del carrito");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black mb-4">
                  Tapones de Congelación <span className="text-primary">Individuales</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Selección completa de freeze plugs individuales para todas tus necesidades de reparación.
                </p>
                
                <div className="mb-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {[
                      { src: pipeImage, name: "Pipe" },
                      { src: aceroInoxidableImage, name: "Acero Inoxidable" },
                      { src: oroYZincImage, name: "Oro y Zinc" },
                      { src: aceroImage, name: "Acero" },
                      { src: cobreImage, name: "Cobre" }
                    ].map((material, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-lg aspect-square shadow-none">
                        <img 
                          src={material.src} 
                          alt={`Tapones de ${material.name}`} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent flex items-end p-3">
                          <p className="text-background font-bold text-sm">{material.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 max-w-2xl mx-auto mb-8">
                  <p className="font-bold text-lg">
                    ⚠️ Pedido Mínimo: 500 piezas por orden
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Para pedidos menores, consulte disponibilidad
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar por número de parte, diámetro, tipo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {filteredCategories.map((category, categoryIndex) => (
                  <CategoryAccordion
                    key={categoryIndex}
                    category={category}
                    items={items}
                    getItemQuantity={getItemQuantity}
                    onAddToCart={handleAddToCart}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveFromCart}
                  />
                ))}
              </Accordion>

              {filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No se encontraron productos que coincidan con tu búsqueda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PlugsIndividuales;
