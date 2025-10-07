import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Kontakt = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="pt-20">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Kontakt;