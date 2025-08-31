import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-accent">Kontakt</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się z nami - jesteśmy gotowi pomóc w realizacji Twojego projektu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
              <a 
                href="tel:+48733633507"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                733 633 507
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <div className="space-y-1">
                <a 
                  href="mailto:biuro@bett.pl"
                  className="block text-primary hover:text-primary/80 transition-colors text-sm"
                >
                  biuro@bett.pl
                </a>
                <a 
                  href="mailto:beata.bokota@bett.pl"
                  className="block text-primary hover:text-primary/80 transition-colors text-sm"
                >
                  beata.bokota@bett.pl
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Adres</h3>
              <div className="text-sm text-muted-foreground">
                <div>Tryńcza 120</div>
                <div>(budynek Sanitex)</div>
                <div>37-204 Tryńcza</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Godziny pracy</h3>
              <div className="text-sm text-muted-foreground">
                <div>Poniedziałek - Piątek</div>
                <div>8:00 - 17:00</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+48733633507" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń teraz
            </a>
            <a 
              href="mailto:biuro@bett.pl" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Wyślij wiadomość
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;