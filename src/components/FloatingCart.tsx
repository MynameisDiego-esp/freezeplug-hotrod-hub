import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const FloatingCart = () => {
  const { getTotalItems, getTotalPlugs } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const totalItems = getTotalItems();
  const totalPlugs = getTotalPlugs();

  // No mostrar en la página principal
  if (location.pathname === '/') return null;

  if (totalItems === 0) return null;

  const handleClick = () => {
    navigate('/', { state: { scrollTo: 'order-form' } });
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        size="lg"
        variant="racing"
        onClick={handleClick}
        className="rounded-full shadow-2xl h-16 w-16 relative group hover:w-auto transition-all duration-300"
      >
        <ShoppingCart className="w-6 h-6 group-hover:mr-2" />
        <span className="hidden group-hover:inline-block whitespace-nowrap">
          Ver Carrito
        </span>
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-7 w-7 flex items-center justify-center rounded-full p-0"
          >
            {totalItems}
          </Badge>
        )}
      </Button>
      {totalPlugs > 0 && (
        <div className="mt-2 bg-accent text-accent-foreground text-xs font-bold rounded-full px-3 py-1 text-center shadow-lg">
          🎯 {totalPlugs} Plugs
        </div>
      )}
    </div>
  );
};

export default FloatingCart;