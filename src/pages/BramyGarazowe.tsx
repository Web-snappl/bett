import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BramyGarazowe = () => {
  return (
    <>
      {/* SEO */}
      <title>Bramy garażowe | BETT – nowoczesne technologie, najwyższa jakość i profesjonalny montaż</title>
      <meta
        name="description"
        content="Oferujemy wysokiej jakości bramy garażowe łączące nowoczesność, niezawodność i elegancję. Profesjonalny montaż, zaawansowane technologie, bezpieczeństwo i komfort."
      />
      <meta
        name="keywords"
        content="bramy garażowe, bramy segmentowe, automatyka do bram, montaż bram, bramy premium"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-8 pb-20">
          {/* HERO */}
          <section className="relative">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Tekst */}
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                    Bramy garażowe
                  </h1>
                  <div className="mt-3 h-1 w-28 bg-red-600" />
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                    Oferujemy wysokiej jakości bramy garażowe, które łączą w sobie nowoczesność,
                    niezawodność i elegancję. Nasze bramy garażowe to doskonałe rozwiązanie dla osób
                    ceniących komfort oraz bezpieczeństwo.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="bg-red-600 hover:bg-red-600/90" asChild>
                      <a href="/kontakt#wycena">Bezpłatna wycena</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+48733633507">Zadzwoń: 733 633 507</a>
                    </Button>
                  </div>
                </div>

                {/* Obraz */}
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl rounded-3xl" />
                  <img
                    src="https://www.bett.pl/wp-content/uploads/2024/07/bramy-garazowe-ral7016_60db67cd8b15f6_98095994.png.png"
                    alt="Bramy garażowe BETT"
                    className="w-full h-auto rounded-3xl border border-red-200/50 shadow-xl object-contain bg-white"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4 BLOKI */}
          <section className="mt-14">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Nowoczesne technologie */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nowoczesne technologie</h2>
                  <div className="mt-2 h-1 w-24 bg-red-600" />
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Nasze bramy garażowe wyposażam w najnowsze technologie, które zapewniają wygodę i
                    bezpieczeństwo użytkowania. Dzięki zaawansowanym systemom automatyki codzienne
                    korzystanie z garażu staje się wyjątkowo łatwe i komfortowe. Jedno kliknięcie pilota
                    wystarcza, aby otworzyć lub zamknąć bramę, co oszczędza czas i zwiększa wygodę.
                  </p>
                </div>

                {/* Profesjonalny montaż */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Profesjonalny montaż</h2>
                  <div className="mt-2 h-1 w-24 bg-red-600" />
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Realizuję kompleksowe usługi montażowe przy wsparciu doświadczonego zespołu fachowców.
                    Dbam o każdy detal, aby zapewnić perfekcyjne działanie bram oraz pełną satysfakcję klientów.
                    Montaż przebiega szybko i precyzyjnie, co pozwala w pełni wykorzystać zalety produktów.
                  </p>
                </div>

                {/* Najwyższa jakość materiałów */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Najwyższa jakość materiałów</h2>
                  <div className="mt-2 h-1 w-24 bg-red-600" />
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Stosuję materiały najwyższej jakości i sprawdzone komponenty, co przekłada się na
                    długowieczność i niezawodność bram. Konstrukcja pozostaje odporna na uszkodzenia
                    mechaniczne oraz warunki atmosferyczne, dzięki czemu bramy służą przez wiele lat.
                  </p>
                </div>

                {/* Bezpieczeństwo i Komfort */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Bezpieczeństwo i Komfort</h2>
                  <div className="mt-2 h-1 w-24 bg-red-600" />
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Dbam o bezpieczeństwo użytkowników – bramy wyposaża się w zaawansowane systemy
                    zabezpieczeń, takie jak mechanizmy antywłamaniowe i czujniki ruchu. Dzięki temu
                    możesz czuć się bezpiecznie i komfortowo, korzystając z naszych produktów każdego dnia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA SZEROKIE */}
          <section className="mt-16">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl overflow-hidden border border-red-200/60">
                <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold">Zmodernizuj swój garaż</h3>
                  <p className="mt-2 text-white/90 text-lg">
                    Skorzystaj z nowoczesnych technologii, solidnych materiałów i profesjonalnego montażu.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <a href="/kontakt#wycena">Zamów wycenę</a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-black hover:bg-white hover:text-red-600"
                      asChild
                    >
                      <a href="tel:+48733633507">733 633 507</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BramyGarazowe;
