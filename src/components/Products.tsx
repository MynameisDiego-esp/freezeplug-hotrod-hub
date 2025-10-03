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
  price: string;
  description: string;
}

const products: Product[] = [
  {
    id: "FP-001",
    name: "Standard Freeze Plug Set",
    size: "1.5\" - 2.0\"",
    material: "Steel",
    price: "$45.00",
    description: "Complete set for small block engines"
  },
  {
    id: "FP-002",
    name: "Big Block Freeze Plug Kit",
    size: "2.0\" - 2.5\"",
    material: "Brass",
    price: "$65.00",
    description: "Heavy-duty brass construction for big block V8"
  },
  {
    id: "FP-003",
    name: "Performance Plug Set",
    size: "Various",
    material: "Stainless Steel",
    price: "$89.00",
    description: "Premium stainless steel for high-performance builds"
  },
  {
    id: "FP-004",
    name: "Universal Plug Kit",
    size: "1.0\" - 2.5\"",
    material: "Steel",
    price: "$55.00",
    description: "Versatile kit for various engine applications"
  },
  {
    id: "FP-005",
    name: "Racing Grade Set",
    size: "2.0\" - 2.25\"",
    material: "Aluminum",
    price: "$95.00",
    description: "Lightweight aluminum for racing applications"
  },
  {
    id: "FP-006",
    name: "Classic Muscle Car Kit",
    size: "1.75\" - 2.5\"",
    material: "Brass",
    price: "$75.00",
    description: "Specifically designed for 60s-70s muscle cars"
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
    toast.success(`Added ${product.name} to order form`, {
      description: "Please complete the order form below"
    });
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium freeze plugs engineered for performance and reliability
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
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
                  <span className="text-accent font-bold text-lg">{product.price}</span>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Size:</span>
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
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found. Try a different search term.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
