import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black text-primary mb-4">TAPONES MONOBLOQUE</h3>
            <p className="text-background/80 mb-4">
              Tapones de congelación monobloque premium para muscle cars y motores de alto rendimiento. Calidad diseñada
              para confiabilidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Realizar Pedido
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="w-5 h-5 text-primary" />
                <span>Prokarplug@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="w-5 h-5 text-primary" />
                <span>(+++) ****-****</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span> *********</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Fábrica de Tapones Monobloque. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
