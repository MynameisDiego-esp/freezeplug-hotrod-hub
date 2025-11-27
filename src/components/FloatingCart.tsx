import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const FloatingCart = () => {
  const { getTotalItems, getTotalPlugs, getBinarySegmentCount, canSubmitOrder } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const totalItems = getTotalItems();
  const totalPlugs = getTotalPlugs();
  const binarySegmentCount = getBinarySegmentCount();
  const orderStatus = canSubmitOrder();

  // No mostrar en la página principal
  if (location.pathname === '/') return null;

  if (totalItems === 0) return null;

  const handleClick = () => {
    if (!orderStatus.valid) {
      return; // No permitir navegar si no cumple requisitos
    }
    navigate('/', { state: { scrollTo: 'order-form' } });
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        size="lg"
        variant="racing"
        onClick={handleClick}
        disabled={!orderStatus.valid}
        className="rounded-full shadow-2xl h-16 w-16 relative group hover:w-auto transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-6 h-6 group-hover:mr-2" />
        <span className="hidden group-hover:inline-block whitespace-nowrap">
          Información
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
      <div className="mt-2 space-y-2">
        {totalPlugs > 0 && (
          <div className={`bg-accent text-accent-foreground text-xs font-bold rounded-lg px-3 py-2 text-center shadow-lg ${totalPlugs >= 500 ? 'border-2 border-green-500' : ''}`}>
            <div>🎯 Total: {totalPlugs}/500</div>
          </div>
        )}
        {binarySegmentCount > 0 && (
          <div className={`text-xs font-bold rounded-lg px-3 py-2 text-center shadow-lg ${binarySegmentCount >= 100 ? 'bg-green-600 text-white border-2 border-green-400' : 'bg-yellow-600 text-white'}`}>
            <div>⚡ Prioritarios: {binarySegmentCount}/100</div>
          </div>
        )}
        {!orderStatus.valid && orderStatus.message && (
          <div className="bg-red-600 text-white text-xs font-bold rounded-lg px-3 py-2 text-center shadow-lg max-w-[200px]">
            ⚠️ {orderStatus.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCart;