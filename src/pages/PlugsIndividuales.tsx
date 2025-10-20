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

interface PlugCategory {
  categoria: string;
  descripcion: string;
  items: IndividualPlug[];
}

const plugsData: PlugCategory[] = [
  {
    categoria: "Cup Type - Tapones de Copa",
    descripcion: "Tapones tipo copa para aplicaciones generales y universales. Ideales para reparaciones estándar.",
    items: [
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
        numeroParte: "FP-108",
        diametro: '1.875"',
        tipo: "Cup Type",
        material: "Latón",
        aplicacion: "Universal",
        precio: "Consultar"
      }
    ]
  },
  {
    categoria: "Expansion Type - Tapones de Expansión",
    descripcion: "Tapones de expansión para aplicaciones de servicio pesado. Mayor resistencia y durabilidad.",
    items: [
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
        numeroParte: "FP-109",
        diametro: '2.125"',
        tipo: "Expansion Type",
        material: "Acero",
        aplicacion: "Heavy Duty",
        precio: "Consultar"
      },
      {
        numeroParte: "FP-110",
        diametro: '2.250"',
        tipo: "Expansion Type",
        material: "Acero",
        aplicacion: "Heavy Duty",
        precio: "Consultar"
      }
    ]
  },
  {
    categoria: "Dish Type - Tapones Cóncavos",
    descripcion: "Tapones tipo plato para aplicaciones de alto rendimiento. Ligeros y resistentes.",
    items: [
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
      },
      {
        numeroParte: "FP-111",
        diametro: '2.375"',
        tipo: "Dish Type",
        material: "Aluminio",
        aplicacion: "Performance",
        precio: "Consultar"
      }
    ]
  },
  {
    categoria: "Stainless Steel - Acero Inoxidable",
    descripcion: "Tapones de acero inoxidable para máxima resistencia a la corrosión. Perfectos para ambientes extremos.",
    items: [
      {
        numeroParte: "FP-112",
        diametro: '1.500"',
        tipo: "Cup Type",
        material: "Acero Inoxidable",
        aplicacion: "Marina/Corrosivo",
        precio: "Consultar"
      },
      {
        numeroParte: "FP-113",
        diametro: '1.750"',
        tipo: "Cup Type",
        material: "Acero Inoxidable",
        aplicacion: "Marina/Corrosivo",
        precio: "Consultar"
      },
      {
        numeroParte: "FP-114",
        diametro: '2.000"',
        tipo: "Expansion Type",
        material: "Acero Inoxidable",
        aplicacion: "Marina/Corrosivo",
        precio: "Consultar"
      }
    ]
  },
  {
    categoria: "Specialty - Aplicaciones Especiales",
    descripcion: "Tapones especializados para aplicaciones específicas y motores de alto rendimiento.",
    items: [
      {
        numeroParte: "FP-115",
        diametro: '1.125"',
        tipo: "Mini Cup",
        material: "Latón",
        aplicacion: "Small Engine",
        precio: "Consultar"
      },
      {
        numeroParte: "FP-116",
        diametro: '2.625"',
        tipo: "Oversized",
        material: "Acero",
        aplicacion: "Diesel/Heavy Equipment",
        precio: "Consultar"
      },
      {
        numeroParte: "FP-117",
        diametro: '2.750"',
        tipo: "Oversized",
        material: "Acero",
        aplicacion: "Diesel/Heavy Equipment",
        precio: "Consultar"
      }
    ]
  }
];

const PlugsIndividuales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { items, addItem, updateQuantity } = useCart();

  const filteredCategories = plugsData.map(category => ({
    ...category,
    items: category.items.filter(plug =>
      plug.numeroParte.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plug.diametro.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plug.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plug.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plug.aplicacion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

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

              <Accordion type="single" collapsible className="space-y-4">
                {filteredCategories.map((category, categoryIndex) => (
                  <AccordionItem 
                    key={categoryIndex} 
                    value={category.categoria}
                    className="bg-card rounded-lg shadow-lg border-2 border-border overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-muted/50">
                      <div className="flex-1 text-left pr-4">
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {category.categoria}
                        </h3>
                        <p className="text-sm text-muted-foreground font-normal">
                          {category.descripcion}
                        </p>
                        <p className="text-xs text-accent font-semibold mt-2">
                          {category.items.length} productos disponibles
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-3 pt-4">
                        {category.items.map((plug, plugIndex) => {
                          const quantity = getItemQuantity(plug.numeroParte);
                          return (
                            <Card key={plugIndex} className="border-2 hover:border-accent/50 transition-colors">
                              <CardContent className="p-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                  <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                                    <div>
                                      <p className="text-muted-foreground text-xs">Número de Parte</p>
                                      <p className="font-bold text-primary">{plug.numeroParte}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground text-xs">Diámetro</p>
                                      <p className="font-semibold">{plug.diametro}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground text-xs">Tipo</p>
                                      <p className="font-semibold">{plug.tipo}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground text-xs">Material</p>
                                      <p className="font-semibold">{plug.material}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground text-xs">Aplicación</p>
                                      <p className="font-semibold">{plug.aplicacion}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center gap-3 md:w-64">
                                    {quantity === 0 ? (
                                      <Button
                                        variant="racing"
                                        className="w-full"
                                        onClick={() => handleAddToCart(plug)}
                                      >
                                        <ShoppingCart className="w-4 h-4 mr-2" />
                                        Agregar
                                      </Button>
                                    ) : (
                                      <div className="flex items-center gap-2 bg-muted rounded-md p-2 w-full">
                                        <Button
                                          size="icon"
                                          variant="ghost"
                                          className="h-8 w-8"
                                          onClick={() => handleDecrement(plug.numeroParte)}
                                        >
                                          <Minus className="w-4 h-4" />
                                        </Button>
                                        <Input
                                          type="number"
                                          min="0"
                                          value={quantity}
                                          onChange={(e) => handleQuantityChange(plug.numeroParte, e.target.value)}
                                          className="w-16 text-center font-bold h-8 px-1"
                                        />
                                        <Button
                                          size="icon"
                                          variant="ghost"
                                          className="h-8 w-8"
                                          onClick={() => handleIncrement(plug.numeroParte)}
                                        >
                                          <Plus className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
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
