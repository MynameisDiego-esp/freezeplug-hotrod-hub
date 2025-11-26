import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoProkar from "@/assets/logo-prokar-new.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const scrollToSection = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };
  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-40 bg-foreground/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logoProkar} alt="PROKAR Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHome ? <>
                <button onClick={() => scrollToSection('products')} className="text-background hover:text-primary transition-colors font-medium">
                  Productos
                </button>
                <Link to="/catalogo-sets" className="text-background hover:text-primary transition-colors font-medium">
                  Catálogo Sets
                </Link>
                <Link to="/plugs-individuales" className="text-background hover:text-primary transition-colors font-medium">
                  Plugs Individuales
                </Link>
                <button onClick={() => scrollToSection('order-form')} className="text-background hover:text-primary transition-colors font-medium">
                  Pedidos
                </button>
                
              </> : <>
                <Link to="/" className="text-background hover:text-primary transition-colors font-medium">
                  Inicio
                </Link>
                <Link to="/catalogo-sets" className="text-background hover:text-primary transition-colors font-medium">
                  Catálogo Sets
                </Link>
                <Link to="/plugs-individuales" className="text-background hover:text-primary transition-colors font-medium">
                  Plugs Individuales
                </Link>
                <Link to="/#order-form" className="text-background hover:text-primary transition-colors font-medium">
                  Pedidos
                </Link>
                <Link to="/#contact" className="text-background hover:text-primary transition-colors font-medium">
                  Contacto
                </Link>
              </>}
            <Button variant="racing" size="sm" onClick={() => isHome ? scrollToSection('contact') : window.location.href = '/#contact'}>
              CONTACTO
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-background" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 space-y-4 border-t border-primary/20">
            {isHome ? <>
                <button onClick={() => scrollToSection('products')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Productos
                </button>
                <Link to="/catalogo-sets" onClick={() => handleNavigation('/catalogo-sets')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Catálogo Sets
                </Link>
                <Link to="/plugs-individuales" onClick={() => handleNavigation('/plugs-individuales')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Plugs Individuales
                </Link>
                <button onClick={() => scrollToSection('order-form')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Pedidos
                </button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Contacto
                </button>
              </> : <>
                <Link to="/" onClick={() => handleNavigation('/')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Inicio
                </Link>
                <Link to="/catalogo-sets" onClick={() => handleNavigation('/catalogo-sets')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Catálogo Sets
                </Link>
                <Link to="/plugs-individuales" onClick={() => handleNavigation('/plugs-individuales')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Plugs Individuales
                </Link>
                <Link to="/#order-form" onClick={() => handleNavigation('/#order-form')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Pedidos
                </Link>
                <Link to="/#contact" onClick={() => handleNavigation('/#contact')} className="block w-full text-left text-background hover:text-primary transition-colors font-medium py-2">
                  Contacto
                </Link>
              </>}
            <Button variant="racing" size="sm" className="w-full" onClick={() => isHome ? scrollToSection('contact') : window.location.href = '/#contact'}>
              CONTACTO
            </Button>
          </div>}
      </div>
    </header>;
};
export default Header;