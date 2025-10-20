import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-bold">Número de Parte</TableHead>
                        <TableHead className="font-bold">Diámetro</TableHead>
                        <TableHead className="font-bold">Tipo</TableHead>
                        <TableHead className="font-bold">Material</TableHead>
                        <TableHead className="font-bold">Aplicación</TableHead>
                        <TableHead className="font-bold">Precio</TableHead>
                        <TableHead className="font-bold text-center">Seleccionar</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPlugs.map((plug, index) => {
                        const quantity = getItemQuantity(plug.numeroParte);
                        return (
                          <TableRow key={index} className="hover:bg-muted/30">
                            <TableCell className="font-medium">{plug.numeroParte}</TableCell>
                            <TableCell>{plug.diametro}</TableCell>
                            <TableCell>{plug.tipo}</TableCell>
                            <TableCell>{plug.material}</TableCell>
                            <TableCell>{plug.aplicacion}</TableCell>
                            <TableCell>{plug.precio}</TableCell>
                            <TableCell>
                              <div className="flex items-center justify-center gap-2">
                                {quantity === 0 ? (
                                  <Button
                                    size="sm"
                                    variant="racing"
                                    onClick={() => handleAddToCart(plug)}
                                  >
                                    <ShoppingCart className="w-4 h-4 mr-1" />
                                    Agregar
                                  </Button>
                                ) : (
                                  <div className="flex items-center gap-2 bg-muted rounded-md p-1">
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      className="h-8 w-8"
                                      onClick={() => handleDecrement(plug.numeroParte)}
                                    >
                                      <Minus className="w-4 h-4" />
                                    </Button>
                                    <span className="font-bold min-w-[2rem] text-center">{quantity}</span>
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
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>

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
