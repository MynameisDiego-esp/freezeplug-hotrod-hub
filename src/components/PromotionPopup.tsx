import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import sellosImage from "@/assets/freeze-plugs-variety.jpg";

export const PromotionPopup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem("promoSeen");
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("promoSeen", "true");
  };

  const handleViewCatalog = () => {
    handleClose();
    navigate("/plugs-individuales");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            🎉 ¡Promoción Especial!
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            <div className="space-y-4">
              <img 
                src={sellosImage} 
                alt="Tapones de congelación - Promoción especial" 
                className="w-full rounded-lg shadow-md object-cover h-48"
              />
              <p className="text-lg font-semibold">
                Descuentos en Tapones Individuales
              </p>
              <p className="text-muted-foreground">
                Aprovecha nuestras ofertas especiales en tapones individuales.
                ¡Contacta con nosotros para más información!
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button onClick={handleViewCatalog} className="w-full">
            Ver Catálogo
          </Button>
          <Button 
            variant="outline" 
            onClick={handleClose}
            className="w-full"
          >
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
