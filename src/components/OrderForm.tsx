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
    
    const mailtoLink = `mailto:orders@freezeplugs.com?subject=Solicitud de Pedido de ${formData.name}&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.phone}%0D%0AEmpresa: ${formData.company}%0D%0AProducto: ${formData.product}%0D%0ACantidad: ${formData.quantity}%0D%0A%0D%0ANotas Adicionales:%0D%0A${formData.notes}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Abriendo cliente de correo...", {
      description: "Completa tu pedido vía correo electrónico"
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
                Realiza tu <span className="text-accent">Pedido</span>
              </CardTitle>
              <CardDescription className="text-base">
                Completa el formulario y procesaremos tu pedido rápidamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="order-name">Nombre *</Label>
                    <Input
                      id="order-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="order-email">Correo Electrónico *</Label>
                    <Input
                      id="order-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="order-phone">Teléfono *</Label>
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
                    <Label htmlFor="order-company">Empresa</Label>
                    <Input
                      id="order-company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-product">Producto *</Label>
                  <Select
                    required
                    value={formData.product}
                    onValueChange={(value) => setFormData({...formData, product: value})}
                  >
                    <SelectTrigger id="order-product">
                      <SelectValue placeholder="Selecciona un producto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FP-001">Set Estándar de Tapones (FP-001)</SelectItem>
                      <SelectItem value="FP-002">Kit Big Block (FP-002)</SelectItem>
                      <SelectItem value="FP-003">Set de Rendimiento (FP-003)</SelectItem>
                      <SelectItem value="FP-004">Kit Universal (FP-004)</SelectItem>
                      <SelectItem value="FP-005">Set Grado Competición (FP-005)</SelectItem>
                      <SelectItem value="FP-006">Kit Muscle Car Clásico (FP-006)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-quantity">Cantidad *</Label>
                  <Input
                    id="order-quantity"
                    type="number"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    placeholder="Ingresa cantidad"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-notes">Notas Adicionales</Label>
                  <Textarea
                    id="order-notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Requisitos especiales, instrucciones de envío, etc."
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="racing" size="lg" className="w-full">
                  <ShoppingCart className="mr-2" />
                  Enviar Pedido
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
