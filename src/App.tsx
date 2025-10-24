// src/App.tsx

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

// **CRÍTICO:** Define el basename usando la variable de entorno de Vite
// Esto será "/" en desarrollo y "/freezeplug-hotrod-hub/" en producción
const BASE_NAME = import.meta.env.BASE_URL;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        {/* Usa la variable BASE_NAME: En local es '/', en Pages es '/repo-name/' */}
        <BrowserRouter basename={BASE_NAME}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo-sets" element={<CatalogoSets />} />
            <Route path="/plugs-individuales" element={<PlugsIndividuales />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingCart />
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;