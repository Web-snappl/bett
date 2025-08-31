import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/90"></div>
      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-inter">
              Masz pytania? Zadzwoń lub odwiedź salon
            </h2>
            <p className="text-xl text-white/90">
              Doradztwo, pomiar i wycena bez zobowiązań. Zapraszamy do salonu w Tryńczy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-elevated hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="tel:+48733633507" className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6" />
                Zadzwoń: 733 633 507
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white/30 text-black hover:bg-white hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="/salon#mapa" className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6" />
                Sprawdź dojazd
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/80">
              <strong>Salon BETT</strong> • Tryńcza 120 (budynek Sanitex) • 37-204 Tryńcza
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CTABanner;
