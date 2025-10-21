import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { IndividualPlug } from "@/data/plugsData";

interface PlugCardProps {
  plug: IndividualPlug;
  quantity: number;
  onAddToCart: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onQuantityChange: (value: string) => void;
}

export const PlugCard = ({
  plug,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement,
  onQuantityChange
}: PlugCardProps) => {
  return (
    <Card className="border-2 hover:border-accent/50 transition-colors">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground text-xs">Número de Parte</p>
              <p className="font-bold text-primary">{plug.NumeroParte}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Diámetro</p>
              <p className="font-semibold">{plug.Tamaño_de_Sello}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Tipo</p>
              <p className="font-semibold">{plug.tipo ?? "-"}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Material</p>
              <p className="font-semibold">{plug.material ?? "-"}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Aplicación</p>
              <p className="font-semibold">{plug.aplicacion ?? "-"}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:w-64">
            {quantity === 0 ? (
              <Button
                variant="racing"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart();
                }}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Agregar
              </Button>
            ) : (
              <div 
                className="flex items-center gap-2 bg-muted rounded-md p-2 w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={onDecrement}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  min="0"
                  value={quantity}
                  onChange={(e) => onQuantityChange(e.target.value)}
                  className="w-16 text-center font-bold h-8 px-1"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={onIncrement}
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
};
