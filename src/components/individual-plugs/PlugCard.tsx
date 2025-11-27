import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Plus, Minus, X } from "lucide-react";
import { IndividualPlug } from "@/data/plugsData";
import { translatePlugType } from "@/lib/utils";

interface PlugCardProps {
  plug: IndividualPlug;
  quantity: number;
  items: any[];
  onAddToCart: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onQuantityChange: (value: string) => void;
  onRemove: () => void;
}

export const PlugCard = ({
  plug,
  quantity,
  items,
  onAddToCart,
  onIncrement,
  onDecrement,
  onQuantityChange,
  onRemove
}: PlugCardProps) => {
  return (
    <Card className="border-2 hover:border-accent/50 transition-colors shadow-none">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <div>
              <p className="text-muted-foreground text-xs">Número de Parte</p>
              <p className="font-bold text-golden-yellow">{plug.NumeroParte}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Diámetro</p>
              <p className="font-semibold">{plug.Tamaño_de_Sello}</p>
            </div>
            {plug.tipo && (
              <div>
                <p className="text-muted-foreground text-xs">Tipo</p>
                <p className="font-semibold">{translatePlugType(plug.tipo)}</p>
              </div>
            )}
            {plug.Diametro_recomendado_del_cilindro && plug.Diametro_recomendado_del_cilindro > 0 && (
              <div>
                <p className="text-muted-foreground text-xs">Diámetro Recomendado</p>
                <p className="font-semibold">{plug.Diametro_recomendado_del_cilindro}"</p>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3 md:w-64">
            {!items.some(item => item.id === plug.NumeroParte) ? (
              <Button
                variant="racing"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart();
                }}
              >
                <Send className="w-4 h-4 mr-2" />
                Información
              </Button>
            ) : (
              <div 
                className="flex flex-col gap-2 w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <Input
                    type="number"
                    min="0"
                    value={quantity}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Prevenir números negativos
                      if (value === '' || parseInt(value) >= 0) {
                        onQuantityChange(value);
                      }
                    }}
                    onKeyDown={(e) => {
                      // Prevenir el signo menos y la letra 'e'
                      if (e.key === '-' || e.key === 'e' || e.key === 'E' || e.key === '+') {
                        e.preventDefault();
                      }
                    }}
                    placeholder="Ingrese cantidad"
                    className="w-full text-center font-bold h-10 pr-8"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-0 top-0 h-10 w-10 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={onRemove}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={onDecrement}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={onIncrement}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
