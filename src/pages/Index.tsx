import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import OrderForm from "@/components/OrderForm";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Products />
        <Gallery />
        <OrderForm />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
