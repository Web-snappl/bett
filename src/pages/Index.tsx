import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OfferGrid from "@/components/OfferGrid";
import ProcessSection from "@/components/ProcessSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <Hero />
        <OfferGrid />
        <ProcessSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
