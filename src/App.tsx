import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
import { CartProvider } from "@/contexts/CartContext";
import FloatingCart from "@/components/FloatingCart";
=======

// Tus páginas importadas correctamente
>>>>>>> Stashed changes
import Index from "./pages/Index";
import CatalogoSets from "./pages/CatalogoSets";
import PlugsIndividuales from "./pages/PlugsIndividuales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

<<<<<<< Updated upstream
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
=======
function App() {
  return (
    // Proveedor para React Query
    <QueryClientProvider client={queryClient}>
      {/* Proveedor para los tooltips, si los usas */}
      <TooltipProvider>
>>>>>>> Stashed changes

        {/* El enrutador con la ruta base correcta */}
        <BrowserRouter basename="/freezeplug-hotrod-hub">
          <Routes>
            {/* Ruta raíz ("/") que ahora carga tu componente "Index" */}
            <Route path="/" element={<Index />} />

            {/* Rutas para tus otras páginas */}
            <Route path="/catalogo-sets" element={<CatalogoSets />} />
            <Route path="/plugs-individuales" element={<PlugsIndividuales />} />

            {/* Ruta comodín para cualquier otra URL (404 Not Found) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* Componentes de notificaciones (Toasters) */}
        <Toaster />
        <Sonner />

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App; // No olvides exportar el componente