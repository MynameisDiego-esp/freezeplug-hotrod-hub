import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import FloatingCart from "@/components/FloatingCart";

import Index from "./pages/Index";
import CatalogoSets from "./pages/CatalogoSets";
import PlugsIndividuales from "./pages/PlugsIndividuales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <BrowserRouter basename="/freezeplug-hotrod-hub">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catalogo-sets" element={<CatalogoSets />} />
              <Route path="/plugs-individuales" element={<PlugsIndividuales />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingCart />
          </BrowserRouter>

          {/* Notificaciones */}
          <Toaster />
          <Sonner />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
