import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  size: string;
  material: string;
  description: string;
}

const products: Product[] = [
  {
    id: "FP-001",
    name: "Set Estándar de Tapones",
    size: "1.5\" - 2.0\"",
    material: "Acero",
    description: "Set completo para motores small block"
  },
  {
    id: "FP-002",
    name: "Kit Big Block",
    size: "2.0\" - 2.5\"",
    material: "Latón",
    description: "Construcción robusta de latón para V8 big block"
  },
  {
    id: "FP-003",
    name: "Set de Rendimiento",
    size: "Varios",
    material: "Acero Inoxidable",
    description: "Acero inoxidable premium para construcciones de alto rendimiento"
  },
  {
    id: "FP-004",
    name: "Kit Universal",
    size: "1.0\" - 2.5\"",
    material: "Acero",
    description: "Kit versátil para varias aplicaciones de motor"
  },
  {
    id: "FP-005",
    name: "Set Grado Competición",
    size: "2.0\" - 2.25\"",
    material: "Aluminio",
    description: "Aluminio ligero para aplicaciones de carreras"
  },
  {
    id: "FP-006",
    name: "Kit Muscle Car Clásico",
    size: "1.75\" - 2.5\"",
    material: "Latón",
    description: "Diseñado específicamente para muscle cars de los 60s-70s"
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.material.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrder = (product: Product) => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
    toast.success(`${product.name} agregado al formulario de pedido`, {
      description: "Por favor completa el formulario de pedido a continuación"
    });
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Nuestros <span className="text-primary">Productos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tapones de congelación premium diseñados para rendimiento y confiabilidad
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tamaño:</span>
                    <span className="font-medium">{product.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">SKU:</span>
                    <span className="font-medium">{product.id}</span>
                  </div>
                </div>
                <Button 
                  variant="racing" 
                  className="w-full"
                  onClick={() => handleOrder(product)}
                >
                  <ShoppingCart className="mr-2" />
                  Ordenar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No se encontraron productos. Intenta con otro término de búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
