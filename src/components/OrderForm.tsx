import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    quantity: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:orders@freezeplugs.com?subject=Order Request from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0AProduct: ${formData.product}%0D%0AQuantity: ${formData.quantity}%0D%0A%0D%0AAdditional Notes:%0D%0A${formData.notes}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Opening email client...", {
      description: "Complete your order via email"
    });

    setFormData({ name: "", email: "", phone: "", company: "", product: "", quantity: "", notes: "" });
  };

  return (
    <section id="order-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-3xl font-black">
                Place Your <span className="text-accent">Order</span>
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form and we'll process your order promptly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="order-name">Name *</Label>
                    <Input
                      id="order-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="order-email">Email *</Label>
                    <Input
                      id="order-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="order-phone">Phone *</Label>
                    <Input
                      id="order-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="order-company">Company</Label>
                    <Input
                      id="order-company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-product">Product *</Label>
                  <Select
                    required
                    value={formData.product}
                    onValueChange={(value) => setFormData({...formData, product: value})}
                  >
                    <SelectTrigger id="order-product">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FP-001">Standard Freeze Plug Set (FP-001)</SelectItem>
                      <SelectItem value="FP-002">Big Block Freeze Plug Kit (FP-002)</SelectItem>
                      <SelectItem value="FP-003">Performance Plug Set (FP-003)</SelectItem>
                      <SelectItem value="FP-004">Universal Plug Kit (FP-004)</SelectItem>
                      <SelectItem value="FP-005">Racing Grade Set (FP-005)</SelectItem>
                      <SelectItem value="FP-006">Classic Muscle Car Kit (FP-006)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-quantity">Quantity *</Label>
                  <Input
                    id="order-quantity"
                    type="number"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    placeholder="Enter quantity"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-notes">Additional Notes</Label>
                  <Textarea
                    id="order-notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Special requirements, shipping instructions, etc."
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="racing" size="lg" className="w-full">
                  <ShoppingCart className="mr-2" />
                  Submit Order
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
