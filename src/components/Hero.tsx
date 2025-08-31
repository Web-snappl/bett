import { Phone, Calculator, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-inter">
              Okna, drzwi, rolety i bramy garażowe
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Sprzedaż i montaż. Doradztwo, pomiar, profesjonalny montaż. 
              <br />
              <span className="font-semibold text-white">Salon: Tryńcza 120</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-elevated hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="tel:+48733633507" className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6" />
                Zadzwoń: 733 633 507
              </a>
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white transition-colors backdrop-blur-sm"
                asChild
              >
                <a href="/kontakt#wycena" className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Darmowa wycena
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white transition-colors backdrop-blur-sm"
                asChild
              >
                <a href="/salon#mapa" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Dojazd do salonu
                </a>
              </Button>
            </div>
          </div>

          {/* USP Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-accent/30">
            <div className="text-center group">
              <h3 className="font-semibold text-white font-inter group-hover:text-accent transition-colors">Jakość premium</h3>
              <p className="text-sm text-gray-200">Sprawdzone systemy i komponenty</p>
            </div>
            <div className="text-center group">
              <h3 className="font-semibold text-white font-inter group-hover:text-accent transition-colors">Kompleksowo</h3>
              <p className="text-sm text-gray-200">Dobór, pomiar, montaż, serwis</p>
            </div>
            <div className="text-center group">
              <h3 className="font-semibold text-white font-inter group-hover:text-accent transition-colors">Terminowo</h3>
              <p className="text-sm text-gray-200">Ustalone terminy i czysty montaż</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;