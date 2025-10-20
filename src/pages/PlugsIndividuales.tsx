import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { Search, ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface IndividualPlug {
  numeroParte: string;
  diametro: string;
  tipo: string;
  material: string;
  aplicacion: string;
  precio: string;
}

const plugsData: IndividualPlug[] = [
  {
    numeroParte: "FP-100",
    diametro: '1.250"',
    tipo: "Cup Type",
    material: "Acero",
    aplicacion: "Universal",
    precio: "Consultar"
  },
  {
    numeroParte: "FP-101",
    diametro: '1.375"',
    tipo: "Cup Type",
    material: "Acero",
    aplicacion: "Universal",
    precio: "Consultar"
  },
  {
    numeroParte: "FP-102",
    diametro: '1.500"',
    tipo: "Cup Type",
    material: "Latón",
    aplicacion: "Universal",
    precio: "Consultar"
  },
  {
    numeroParte: "FP-103",
    diametro: '1.625"',
    tipo: "Cup Type",
    material: "Latón",
    aplicacion: "Universal",
    precio: "Consultar"
  },
  {
    numeroParte: "FP-104",
    diametro: '1.750"',
    tipo: "Expansion Type",
    material: "Acero",
    aplicacion: "Heavy Duty",
    precio: "Consultar"
  },
  {
    numeroParte: "FP-105",
    diametro: '2.000"',
    tipo: "Expansion Type",
    material: "Acero",
    aplicacion: "Heavy Duty",
    precio: "Consultar"
  },
  {
    numeroParte: "FP-106",
    diametro: '2.250"',
    tipo: "Dish Type",
    material: "Aluminio",
    aplicacion: "Performance",
    precio: "Consultar"
  },
  {
    numeroParte: "FP-107",
    diametro: '2.500"',
    tipo: "Dish Type",
    material: "Aluminio",
    aplicacion: "Performance",
    precio: "Consultar"
  }
];

const PlugsIndividuales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { items, addItem, updateQuantity } = useCart();

  const filteredPlugs = plugsData.filter(plug =>
    plug.numeroParte.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plug.diametro.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plug.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plug.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plug.aplicacion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getItemQuantity = (id: string) => {
    const item = items.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (plug: IndividualPlug) => {
    addItem({
      id: plug.numeroParte,
      name: `${plug.numeroParte} - ${plug.diametro}`,
      type: 'individual',
      details: `${plug.tipo} | ${plug.material} | ${plug.aplicacion}`
    });
    toast.success("Agregado al carrito", {
      description: `${plug.numeroParte} - ${plug.diametro}`
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

              <Accordion type="single" collapsible className="space-y-3">
                {filteredPlugs.map((plug, index) => {
                  const quantity = getItemQuantity(plug.numeroParte);
                  return (
                    <AccordionItem 
                      key={index} 
                      value={plug.numeroParte}
                      className="bg-card rounded-lg shadow-md border-2 border-border overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-muted/50">
                        <div className="flex items-center justify-between w-full pr-4">
                          <div className="flex items-center gap-4">
                            <span className="font-bold text-primary text-lg">{plug.numeroParte}</span>
                            <span className="text-muted-foreground">|</span>
                            <span className="font-medium">{plug.diametro}</span>
                            <span className="text-sm text-muted-foreground hidden md:inline">
                              {plug.material}
                            </span>
                          </div>
                          {quantity > 0 && (
                            <div className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mr-2">
                              {quantity} en carrito
                            </div>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <Card className="border-0 shadow-none">
                          <CardContent className="pt-4 space-y-4">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Diámetro</p>
                                <p className="font-semibold">{plug.diametro}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Tipo</p>
                                <p className="font-semibold">{plug.tipo}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Material</p>
                                <p className="font-semibold">{plug.material}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Aplicación</p>
                                <p className="font-semibold">{plug.aplicacion}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Precio</p>
                                <p className="font-semibold">{plug.precio}</p>
                              </div>
                            </div>
                            
                            <div className="pt-4 border-t">
                              {quantity === 0 ? (
                                <Button
                                  variant="racing"
                                  className="w-full"
                                  onClick={() => handleAddToCart(plug)}
                                >
                                  <ShoppingCart className="w-4 h-4 mr-2" />
                                  Agregar al Carrito
                                </Button>
                              ) : (
                                <div className="flex items-center justify-center gap-3 bg-muted rounded-md p-3">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => handleDecrement(plug.numeroParte)}
                                  >
                                    <Minus className="w-4 h-4" />
                                  </Button>
                                  <Input
                                    type="number"
                                    min="0"
                                    value={quantity}
                                    onChange={(e) => handleQuantityChange(plug.numeroParte, e.target.value)}
                                    className="w-20 text-center font-bold text-lg h-10"
                                  />
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => handleIncrement(plug.numeroParte)}
                                  >
                                    <Plus className="w-4 h-4" />
                                  </Button>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>

              {filteredPlugs.length === 0 && (
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
