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
import sellosImage from "@/assets/sellos13.jpeg";

const PlugsIndividuales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addItem, getItemQuantity, updateQuantity } = useCart();
  
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
    if (currentQty > 0) {
      updateQuantity(id, currentQty - 1);
    }
  };

  const handleQuantityChange = (id: string, value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 0) {
      updateQuantity(id, numValue);
    }
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
                  <img 
                    src={sellosImage} 
                    alt="Tapones de congelación individuales de alta calidad" 
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg object-cover h-74"
                  />
                </div>
                
                <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 max-w-2xl mx-auto mb-8">
                  <p className="font-bold text-lg">
                    ⚠️ Pedido Mínimo: 50 piezas por orden
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
                    getItemQuantity={getItemQuantity}
                    onAddToCart={handleAddToCart}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onQuantityChange={handleQuantityChange}
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
