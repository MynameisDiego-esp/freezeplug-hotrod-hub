import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Info, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const OrderForm = () => {
  const { items, removeItem, getTotalItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    quantity: "",
    notes: ""
  });

  const formatCartItems = () => {
    if (items.length === 0) return "";
    
    let formatted = "\n\nProductos Seleccionados:\n-------------------\n";
    items.forEach(item => {
      formatted += `\n• ${item.name}\n`;
      formatted += `  Cantidad: ${item.quantity}\n`;
      if (item.details) {
        formatted += `  Detalles: ${item.details}\n`;
      }
    });
    formatted += `\nTotal de piezas: ${getTotalItems()}\n`;
    return formatted;
  };

  const handleSubmit = (tipo: 'cotizacion' | 'informacion') => (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = tipo === 'cotizacion' 
      ? `Solicitud de Cotización - ${formData.name}` 
      : `Solicitud de Información - ${formData.name}`;
    
    const cartItemsText = formatCartItems();
    
    const body = tipo === 'cotizacion'
      ? `SOLICITUD DE COTIZACIÓN
      
Datos del Cliente:
-------------------
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Empresa: ${formData.company}
${cartItemsText}
Detalles Adicionales:
-------------------
Producto adicional: ${formData.product}
Cantidad adicional: ${formData.quantity} unidades
Notas adicionales: ${formData.notes}

Por favor, envíe cotización formal con:
- Precio unitario y total
- Tiempo de entrega
- Condiciones de pago
- Disponibilidad en inventario`
      : `SOLICITUD DE INFORMACIÓN

Datos del Cliente:
-------------------
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Empresa: ${formData.company}
${cartItemsText}
Consulta:
-------------------
Producto de interés adicional: ${formData.product}
Cantidad estimada adicional: ${formData.quantity} unidades
Detalles: ${formData.notes}`;
    
    const mailtoLink = `mailto:orders@freezeplugs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast.success(tipo === 'cotizacion' ? "¡Cotización Solicitada!" : "¡Información Solicitada!", {
      description: "Se abrirá tu cliente de correo para completar el envío"
    });

    setFormData({ name: "", email: "", phone: "", company: "", product: "", quantity: "", notes: "" });
    clearCart();
  };

  return (
    <section id="order-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 mb-8">
            <p className="font-bold text-center text-lg">
              ⚠️ Pedido Mínimo: 500 piezas por orden
            </p>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Para pedidos menores, consulte disponibilidad
            </p>
          </div>

          {items.length > 0 && (
            <Card className="border-2 border-accent mb-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Productos Seleccionados ({getTotalItems()} piezas)</span>
                  <Button variant="ghost" size="sm" onClick={clearCart}>
                    Limpiar todo
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                        <p className="text-sm font-medium mt-1">Cantidad: {item.quantity}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-black">
                Solicita tu <span className="text-accent">Cotización o Información</span>
              </CardTitle>
              <CardDescription className="text-base">
                {items.length > 0 
                  ? "Tus productos seleccionados se incluirán automáticamente"
                  : "Elige el tipo de solicitud y completa el formulario"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="cotizacion" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="cotizacion">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cotización
                  </TabsTrigger>
                  <TabsTrigger value="informacion">
                    <Info className="w-4 h-4 mr-2" />
                    Información
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="cotizacion">
                  <form onSubmit={handleSubmit('cotizacion')} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="quote-name">Nombre *</Label>
                        <Input
                          id="quote-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Tu nombre"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quote-email">Correo Electrónico *</Label>
                        <Input
                          id="quote-email"
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
                        <Label htmlFor="quote-phone">Teléfono *</Label>
                        <Input
                          id="quote-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quote-company">Empresa</Label>
                        <Input
                          id="quote-company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-product">Producto *</Label>
                      <Select
                        required
                        value={formData.product}
                        onValueChange={(value) => setFormData({...formData, product: value})}
                      >
                        <SelectTrigger id="quote-product">
                          <SelectValue placeholder="Selecciona un producto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="set-chevrolet">Set Chevrolet Small Block</SelectItem>
                          <SelectItem value="set-ford">Set Ford Small Block</SelectItem>
                          <SelectItem value="set-mopar">Set Mopar</SelectItem>
                          <SelectItem value="individual">Tapones Individuales</SelectItem>
                          <SelectItem value="otro">Otro (especificar en notas)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-quantity">Cantidad (mín. 500 piezas) *</Label>
                      <Input
                        id="quote-quantity"
                        type="number"
                        min="500"
                        required
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        placeholder="Ej: 500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-notes">Notas Adicionales</Label>
                      <Textarea
                        id="quote-notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        placeholder="Especificaciones adicionales, aplicación, etc."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="racing" size="lg" className="w-full">
                      <ShoppingCart className="mr-2" />
                      Solicitar Cotización
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="informacion">
                  <form onSubmit={handleSubmit('informacion')} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="info-name">Nombre *</Label>
                        <Input
                          id="info-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Tu nombre"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="info-email">Correo Electrónico *</Label>
                        <Input
                          id="info-email"
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
                        <Label htmlFor="info-phone">Teléfono *</Label>
                        <Input
                          id="info-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="info-company">Empresa</Label>
                        <Input
                          id="info-company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="info-product">Producto de Interés *</Label>
                      <Select
                        required
                        value={formData.product}
                        onValueChange={(value) => setFormData({...formData, product: value})}
                      >
                        <SelectTrigger id="info-product">
                          <SelectValue placeholder="Selecciona un producto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="set-chevrolet">Set Chevrolet Small Block</SelectItem>
                          <SelectItem value="set-ford">Set Ford Small Block</SelectItem>
                          <SelectItem value="set-mopar">Set Mopar</SelectItem>
                          <SelectItem value="individual">Tapones Individuales</SelectItem>
                          <SelectItem value="consulta-general">Consulta General</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="info-quantity">Cantidad Estimada (opcional)</Label>
                      <Input
                        id="info-quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        placeholder="Ej: 100"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="info-notes">Tu Consulta *</Label>
                      <Textarea
                        id="info-notes"
                        required
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        placeholder="¿Qué necesitas saber?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="racing" size="lg" className="w-full">
                      <Info className="mr-2" />
                      Solicitar Información
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
