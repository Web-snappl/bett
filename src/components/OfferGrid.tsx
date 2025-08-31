import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import oknaImage from "@/assets/okna.jpg";
import drzwiImage from "@/assets/drzwi.jpg";
import roletyImage from "@/assets/rolety.jpg";
import bramyImage from "@/assets/bramy.jpg";

const OfferGrid = () => {
  const offers = [
    {
      title: "Okna",
      description: "Energooszczędne systemy PVC i aluminiowe",
      href: "/okna",
      image: oknaImage,
    },
    {
      title: "Drzwi",
      description: "Wejściowe i przesuwne. Bezpieczeństwo i design",
      href: "/drzwi", 
      image: drzwiImage,
    },
    {
      title: "Rolety i żaluzje",
      description: "Ochrona przed słońcem, prywatność i estetyka",
      href: "/rolety",
      image: roletyImage,
    },
    {
      title: "Bramy garażowe",
      description: "Wygoda, bezpieczeństwo i automatyka",
      href: "/bramy-garazowe",
      image: bramyImage,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-inter">
            Nasza <span className="text-accent">oferta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kompleksowa sprzedaż i montaż produktów najwyższej jakości
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <Card
              key={offer.href}
              className="group hover:shadow-elevated transition-all duration-300 border-0 shadow-soft hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-primary font-inter group-hover:text-accent transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                    asChild
                  >
                    <a href={offer.href}>
                      Zobacz więcej
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="/oferta">Zobacz pełną ofertę</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferGrid;