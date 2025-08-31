import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Okna", href: "/okna" },
    { label: "Drzwi", href: "/drzwi" },
    { label: "Rolety", href: "/rolety" },
    { label: "Bramy garażowe", href: "/bramy-garazowe" },
    { label: "Salon", href: "/salon" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold font-inter">BETT</h3>
              <p className="text-primary-foreground/80 text-sm">
                Jakość, która przewyższa cenę
              </p>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Sprzedaż i profesjonalny montaż okien, drzwi, rolet oraz bram garażowych. 
              Kompleksowa obsługa od doradztwa po serwis.
            </p>
            <div className="pt-4">
              <a
                href="https://www.facebook.com/61567103985552"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Znajdź nas na Facebook
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-inter">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <a 
                  href="tel:+48733633507"
                  className="text-sm hover:text-accent transition-colors"
                >
                  733 633 507
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <a 
                  href="mailto:biuro@bett.pl"
                  className="text-sm hover:text-accent transition-colors"
                >
                  biuro@bett.pl
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <div className="text-sm">
                  <div>Tryńcza 120</div>
                  <div>(budynek Sanitex)</div>
                  <div>37-204 Tryńcza</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/70">
                  Godziny: do ustalenia
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-inter">Oferta</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Area Served */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-inter">Obszar działania</h4>
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <div>Województwo podkarpackie</div>
              <div className="text-xs text-primary-foreground/60 mt-2">
                Dojeżdżamy również do okolic
              </div>
            </div>
            <div className="pt-4">
              <a
                href="/salon#mapa"
                className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Zobacz dojazd
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} BETT. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/polityka-prywatnosci"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Polityka prywatności
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;