import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlugCategory, IndividualPlug } from "@/data/plugsData";
import { PlugCard } from "./PlugCard";
import { translateCategory } from "@/lib/utils";

interface CategoryAccordionProps {
  category: PlugCategory;
  items: any[];
  getItemQuantity: (id: string) => number;
  onAddToCart: (plug: IndividualPlug, category: string, groupNumber: number) => void;
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
      <AccordionContent className="p-4 border-t border-border space-y-6">
        {category.items.reduce((acc, plug, plugIndex) => {
          const groupIndex = Math.floor(plugIndex / 5);
          if (!acc[groupIndex]) {
            acc[groupIndex] = [];
          }
          acc[groupIndex].push({ plug, plugIndex });
          return acc;
        }, [] as { plug: IndividualPlug; plugIndex: number }[][]).map((group, groupIndex) => {
          const groupNumber = groupIndex + 1;
          const isOddGroup = groupNumber % 2 === 1;
          
          return (
            <div key={groupIndex} className="space-y-3">
              <div className="flex items-center gap-2">
                <div className={`h-[2px] flex-1 bg-gradient-to-r rounded-full ${isOddGroup ? 'from-yellow-500/50' : 'from-primary/30'} to-transparent`} />
                <span className={`text-xs font-bold px-2 ${isOddGroup ? 'text-yellow-600' : 'text-primary/70'}`}>
                  Grupo {groupNumber} {isOddGroup ? '⚡' : ''}
                </span>
                <div className={`h-[2px] flex-1 bg-gradient-to-l rounded-full ${isOddGroup ? 'from-yellow-500/50' : 'from-primary/30'} to-transparent`} />
              </div>
              {group.map(({ plug, plugIndex }) => {
                const id = plug.NumeroParte;
                const quantity = getItemQuantity(id);
                
                return (
                  <PlugCard
                    key={plugIndex}
                    plug={plug}
                    quantity={quantity}
                    items={items}
                    onAddToCart={() => onAddToCart(plug, category.categoria, groupNumber)}
                    onIncrement={() => onIncrement(id)}
                    onDecrement={() => onDecrement(id)}
                    onQuantityChange={(value) => onQuantityChange(id, value)}
                    onRemove={() => onRemove(id)}
                  />
                );
              })}
            </div>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};
