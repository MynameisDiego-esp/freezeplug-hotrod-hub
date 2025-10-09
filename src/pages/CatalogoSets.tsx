import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SetsCatalog from "@/components/SetsCatalog";

const CatalogoSets = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <SetsCatalog />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CatalogoSets;
