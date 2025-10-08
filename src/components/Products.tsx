import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

// Importaciones de imágenes
import fzb1Image from "@/assets/FZB-12.jpg";
import fzb2Image from "@/assets/FZB-2.jpg";
import fzb3And4Image from "@/assets/FZB-3-AND-4-2.jpg";
import fss1Image from "@/assets/FSS-1-2.jpg";
import fzb10Image from "@/assets/doble-storage-cart-2.jpg";

interface Product {
  id: string;
  name: string;
  size: string;
  material: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: "FZB-1",
    name: "Brass Dodge Assortment Case",
    size: "1.5\" - 2.0\"",
    material: "Latón",
    description: "Set completo para motores small block",
    image: fzb1Image
  },
  {
    id: "FZB-2",
    name: "Brass Toyota Assortment Case",
    size: "2.0\" - 2.5\"",
    material: "Latón",
    description: "Construcción robusta de latón para V8 big block",
    image: fzb2Image
  },
  {
    id: "FZB-3",
    name: "Brass Chevrolet Assortment Case",
    size: "Varios",
    material: "Latón",
    description: "Acero inoxidable premium para construcciones de alto rendimiento",
    image: fzb3And4Image
  },
  {
    id: "FZB-4",
    name: "Brass Ford Assortment Case",
    size: "1.0\" - 2.5\"",
    material: "Latón",
    description: "Kit versátil para varias aplicaciones de motor",
    image: fzb3And4Image
  },
  {
    id: "FSS-1",
    name: "Stainless Steel Assortment Case",
    size: "2.0\" - 2.25\"",
    material: "Acero Inoxidable",
    description: "Aluminio ligero para aplicaciones de carreras",
    image: fss1Image
  },
  {
    id: "FZB-10",
    name: "Brass Complete Shop Stock Cart",
    size: "1.75\" - 2.5\"",
    material: "Latón",
    description: "Este carro completo de tapones de latón está diseñado para cubrir todas tus necesidades en el taller.",
    image: fzb10Image
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
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {product.id}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
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