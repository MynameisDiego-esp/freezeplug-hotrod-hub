import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SetsCatalog from "@/components/SetsCatalog";
import Gallery from "@/components/Gallery";
import OrderForm from "@/components/OrderForm";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Products />
        <SetsCatalog />
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
