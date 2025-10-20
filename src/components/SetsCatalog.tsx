import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import freezePlugSetsImage from "@/assets/sellos1.jpg";

interface SetItem {
  numeroParte: string;
  ano: string;
  cilindros: string;
  aplicacion: string;
  usTool: string;
  pioneer: string;
  locacion: string;
  cantidad: string;
}

interface BrandCatalog {
  marca: string;
  items: SetItem[];
}

const catalogData: BrandCatalog[] = [
  {
    marca: "CHEVROLET",
    items: [
      {
        numeroParte: "FPS-CH-001",
        ano: "1955-1979",
        cilindros: "V8",
        aplicacion: "Small Block 265-400",
        usTool: "8215",
        pioneer: "PE-101",
        locacion: "Block lateral",
        cantidad: "12 piezas"
      },
      {
        numeroParte: "FPS-CH-002",
        ano: "1965-1990",
        cilindros: "V8",
        aplicacion: "Big Block 396-454",
        usTool: "8220",
        pioneer: "PE-105",
        locacion: "Block lateral",
        cantidad: "14 piezas"
      },
      {
        numeroParte: "FPS-CH-003",
        ano: "1975-1995",
        cilindros: "V6",
        aplicacion: "90° V6 200-229",
        usTool: "8225",
        pioneer: "PE-108",
        locacion: "Block lateral",
        cantidad: "10 piezas"
      }
    ]
  },
  {
    marca: "FORD",
    items: [
      {
        numeroParte: "FPS-FD-001",
        ano: "1962-1985",
        cilindros: "V8",
        aplicacion: "Small Block 260-302",
        usTool: "8230",
        pioneer: "PE-115",
        locacion: "Block lateral",
        cantidad: "12 piezas"
      },
      {
        numeroParte: "FPS-FD-002",
        ano: "1968-1997",
        cilindros: "V8",
        aplicacion: "Windsor 351",
        usTool: "8235",
        pioneer: "PE-118",
        locacion: "Block lateral",
        cantidad: "13 piezas"
      },
      {
        numeroParte: "FPS-FD-003",
        ano: "1958-1976",
        cilindros: "V8",
        aplicacion: "FE Series 390-428",
        usTool: "8240",
        pioneer: "PE-120",
        locacion: "Block lateral",
        cantidad: "15 piezas"
      }
    ]
  },
  {
    marca: "DODGE/CHRYSLER",
    items: [
      {
        numeroParte: "FPS-DC-001",
        ano: "1964-1978",
        cilindros: "V8",
        aplicacion: "Small Block 273-360",
        usTool: "8245",
        pioneer: "PE-125",
        locacion: "Block lateral",
        cantidad: "12 piezas"
      },
      {
        numeroParte: "FPS-DC-002",
        ano: "1959-1978",
        cilindros: "V8",
        aplicacion: "Big Block 383-440",
        usTool: "8250",
        pioneer: "PE-130",
        locacion: "Block lateral",
        cantidad: "14 piezas"
      },
      {
        numeroParte: "FPS-DC-003",
        ano: "1966-1971",
        cilindros: "V8",
        aplicacion: "Hemi 426",
        usTool: "8255",
        pioneer: "PE-135",
        locacion: "Block lateral",
        cantidad: "16 piezas"
      }
    ]
  },
  {
    marca: "PONTIAC",
    items: [
      {
        numeroParte: "FPS-PT-001",
        ano: "1955-1979",
        cilindros: "V8",
        aplicacion: "287-455",
        usTool: "8260",
        pioneer: "PE-140",
        locacion: "Block lateral",
        cantidad: "13 piezas"
      },
      {
        numeroParte: "FPS-PT-002",
        ano: "1961-1966",
        cilindros: "I4",
        aplicacion: "Tempest 195",
        usTool: "8265",
        pioneer: "PE-142",
        locacion: "Block lateral",
        cantidad: "8 piezas"
      }
    ]
  },
  {
    marca: "OLDSMOBILE",
    items: [
      {
        numeroParte: "FPS-OL-001",
        ano: "1964-1990",
        cilindros: "V8",
        aplicacion: "Small Block 260-307",
        usTool: "8270",
        pioneer: "PE-145",
        locacion: "Block lateral",
        cantidad: "12 piezas"
      },
      {
        numeroParte: "FPS-OL-002",
        ano: "1965-1976",
        cilindros: "V8",
        aplicacion: "Big Block 400-455",
        usTool: "8275",
        pioneer: "PE-148",
        locacion: "Block lateral",
        cantidad: "14 piezas"
      }
    ]
  },
  {
    marca: "BUICK",
    items: [
      {
        numeroParte: "FPS-BK-001",
        ano: "1964-1980",
        cilindros: "V8",
        aplicacion: "Small Block 300-350",
        usTool: "8280",
        pioneer: "PE-150",
        locacion: "Block lateral",
        cantidad: "12 piezas"
      },
      {
        numeroParte: "FPS-BK-002",
        ano: "1967-1976",
        cilindros: "V8",
        aplicacion: "Big Block 400-455",
        usTool: "8285",
        pioneer: "PE-153",
        locacion: "Block lateral",
        cantidad: "14 piezas"
      }
    ]
  }
];

const SetsCatalog = () => {
  const { items, addItem, updateQuantity } = useCart();

  const getItemQuantity = (id: string) => {
    const item = items.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item: SetItem, marca: string) => {
    addItem({
      id: item.numeroParte,
      name: `${marca} - ${item.aplicacion}`,
      type: 'set',
      details: `${item.ano} | ${item.cilindros} | ${item.cantidad}`
    });
    toast.success("Agregado al carrito", {
      description: `${item.numeroParte} - ${item.aplicacion}`
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
    <section id="catalogo-sets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header con imagen y descripción */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Catálogo de <span className="text-primary">Sets de Sellos</span>
            </h2>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img 
              src={freezePlugSetsImage} 
              alt="Sets de tapones de congelación" 
              className="w-full h-auto"
            />
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Acerca de Nuestros Sets</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ofrecemos una amplia gama de sets completos de tapones de congelación (freeze plugs) 
              para las marcas y modelos de motores más populares. Cada set está cuidadosamente 
              seleccionado para incluir todas las piezas necesarias para su aplicación específica.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestros sets son compatibles con las referencias de US Tool y Pioneer, garantizando 
              calidad y precisión en cada instalación. Todos los productos están fabricados con 
              materiales de primera calidad: acero, latón y aluminio según la aplicación.
            </p>
          </div>
        </div>

        {/* Listados por marca */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Listados por <span className="text-accent">Marca de Auto</span>
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {catalogData.map((brand) => (
              <AccordionItem 
                key={brand.marca} 
                value={brand.marca}
                className="bg-card rounded-lg shadow-md border-2 border-border overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 text-xl font-bold">
                  {brand.marca}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-bold">Número de Parte</TableHead>
                          <TableHead className="font-bold">Año</TableHead>
                          <TableHead className="font-bold">Cilindros</TableHead>
                          <TableHead className="font-bold">Aplicación</TableHead>
                          <TableHead className="font-bold">US Tool</TableHead>
                          <TableHead className="font-bold">Pioneer</TableHead>
                          <TableHead className="font-bold">Locación</TableHead>
                          <TableHead className="font-bold">Cantidad</TableHead>
                          <TableHead className="font-bold text-center">Seleccionar</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {brand.items.map((item, index) => {
                          const quantity = getItemQuantity(item.numeroParte);
                          return (
                            <TableRow key={index} className="hover:bg-muted/30">
                              <TableCell className="font-medium">{item.numeroParte}</TableCell>
                              <TableCell>{item.ano}</TableCell>
                              <TableCell>{item.cilindros}</TableCell>
                              <TableCell>{item.aplicacion}</TableCell>
                              <TableCell>{item.usTool}</TableCell>
                              <TableCell>{item.pioneer}</TableCell>
                              <TableCell>{item.locacion}</TableCell>
                              <TableCell>{item.cantidad}</TableCell>
                              <TableCell>
                                <div className="flex items-center justify-center gap-2">
                                  {quantity === 0 ? (
                                    <Button
                                      size="sm"
                                      variant="racing"
                                      onClick={() => handleAddToCart(item, brand.marca)}
                                    >
                                      <ShoppingCart className="w-4 h-4 mr-1" />
                                      Agregar
                                    </Button>
                                   ) : (
                                     <div className="flex items-center gap-1 bg-muted rounded-md p-1">
                                       <Button
                                         size="icon"
                                         variant="ghost"
                                         className="h-8 w-8"
                                         onClick={() => handleDecrement(item.numeroParte)}
                                       >
                                         <Minus className="w-4 h-4" />
                                       </Button>
                                       <Input
                                         type="number"
                                         min="0"
                                         value={quantity}
                                         onChange={(e) => handleQuantityChange(item.numeroParte, e.target.value)}
                                         className="w-14 text-center font-bold h-8 px-1"
                                       />
                                       <Button
                                         size="icon"
                                         variant="ghost"
                                         className="h-8 w-8"
                                         onClick={() => handleIncrement(item.numeroParte)}
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
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SetsCatalog;