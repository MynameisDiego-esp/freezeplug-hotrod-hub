import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlugCategory, IndividualPlug } from "@/data/plugsData";
import { PlugCard } from "./PlugCard";
import { translateCategory } from "@/lib/utils";

interface CategoryAccordionProps {
  category: PlugCategory;
  items: any[];
  getItemQuantity: (id: string) => number;
  onAddToCart: (plug: IndividualPlug, category: string) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onQuantityChange: (id: string, value: string) => void;
  onRemove: (id: string) => void;
}

export const CategoryAccordion = ({
  category,
  items,
  getItemQuantity,
  onAddToCart,
  onIncrement,
  onDecrement,
  onQuantityChange,
  onRemove
}: CategoryAccordionProps) => {
  return (
    <AccordionItem 
      value={category.categoria}
      className="bg-card rounded-lg shadow-lg border-2 border-border overflow-hidden"
    >
      <AccordionTrigger className="px-6 py-4 hover:bg-muted/50">
        <div className="flex-1 text-left pr-4">
          <h3 className="text-xl font-bold text-dark-yellow mb-1 drop-shadow-md">
            {translateCategory(category.categoria)}
          </h3>
          <p className="text-sm text-muted-foreground font-normal">
            {category.descripcion}
          </p>
          <p className="text-xs text-accent font-semibold mt-2">
            {category.items.length} productos disponibles
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-4 border-t border-border space-y-3">
        {category.items.map((plug, plugIndex) => {
          const id = plug.NumeroParte;
          const quantity = getItemQuantity(id);
          
          return (
            <PlugCard
              key={plugIndex}
              plug={plug}
              quantity={quantity}
              items={items}
              onAddToCart={() => onAddToCart(plug, category.categoria)}
              onIncrement={() => onIncrement(id)}
              onDecrement={() => onDecrement(id)}
              onQuantityChange={(value) => onQuantityChange(id, value)}
              onRemove={() => onRemove(id)}
            />
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};
