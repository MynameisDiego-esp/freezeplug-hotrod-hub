import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-foreground/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-black text-primary">PROKAR</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-background hover:text-primary transition-colors font-medium"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('catalogo-sets')}
              className="text-background hover:text-primary transition-colors font-medium"
            >
              Catálogo Sets
            </button>
            <button 
              onClick={() => scrollToSection('order-form')}
              className="text-background hover:text-primary transition-colors font-medium"
            >
              Pedidos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-background hover:text-primary transition-colors font-medium"
            >
              Contacto
            </button>
            <Button 
              variant="racing" 
              size="sm"
              onClick={() => scrollToSection('order-form')}
            >
              Cotizar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-background"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-primary/20">
            <button 
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('catalogo-sets')}
              className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2"
            >
              Catálogo Sets
            </button>
            <button 
              onClick={() => scrollToSection('order-form')}
              className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2"
            >
              Pedidos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2"
            >
              Contacto
            </button>
            <Button 
              variant="racing" 
              size="sm"
              className="w-full"
              onClick={() => scrollToSection('order-form')}
            >
              Cotizar
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
