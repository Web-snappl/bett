import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OfferGrid from "@/components/OfferGrid";

const Oferta = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 font-inter">
              Pełna <span className="text-accent">oferta</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Poznaj wszystkie nasze produkty i usługi. Kompleksowa obsługa od doradztwa po montaż.
            </p>
          </div>
        </div>
        <OfferGrid />
      </main>
      <Footer />
    </>
  );
};

export default Oferta;