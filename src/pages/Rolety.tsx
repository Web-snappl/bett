import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Rolety = () => {
  return (
    <>
      {/* SEO */}
      <title>Rolety i żaluzje | BETT – elegancja, funkcjonalność i trwałość</title>
      <meta
        name="description"
        content="BETT oferuje szeroką gamę rolet i żaluzji łączących elegancję, funkcjonalność oraz trwałość. Rolety zewnętrzne, wewnętrzne i moskitiery – komfort i estetyka w każdym detalu."
      />
      <meta
        name="keywords"
        content="rolety, żaluzje, rolety zewnętrzne, rolety wewnętrzne, moskitiery okienne, moskitiery drzwiowe, osłony okienne"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-8 pb-20">
          {/* HERO */}
          <section className="relative">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Tekst */}
                <div className="space-y-10">
                  <header>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                      Rolety i żaluzje
                    </h1>
                    <div className="mt-3 h-1 w-24 bg-red-600" />
                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                      Firma <span className="font-semibold">Bett</span> oferuje szeroką gamę rolet i żaluzji najwyższej jakości,
                      które łączą w sobie elegancję, funkcjonalność oraz trwałość. Nasze produkty stanowią idealne
                      rozwiązanie dla osób ceniących komfort i estetykę w każdym detalu.
                    </p>
                  </header>

                  {/* Rolety zewnętrzne */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Rolety zewnętrzne</h2>
                    <div className="mt-2 h-1 w-24 bg-red-600" />
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      Rolety zewnętrzne zapewniają doskonałą izolację termiczną i akustyczną, chroniąc wnętrze przed
                      nadmiernym nasłonecznieniem oraz hałasem. Wykonane z wytrzymałych materiałów, gwarantują
                      bezpieczeństwo i prywatność. Oferujemy szeroki wybór kolorów i stylów, które idealnie
                      komponują się z elewacją budynku.
                    </p>
                  </section>

                  {/* Rolety wewnętrzne */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Rolety wewnętrzne</h2>
                    <div className="mt-2 h-1 w-24 bg-red-600" />
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      Nasze rolety wewnętrzne to połączenie nowoczesnego designu oraz funkcjonalności. Dostępne w
                      różnych kolorach i wzorach, stanowią idealne dopełnienie każdego wnętrza. Skutecznie chronią
                      przed słońcem i zapewniają prywatność, dodając elegancji i stylu.
                    </p>
                  </section>

                  {/* Moskitiery */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Moskitiery okienne
                      <br className="hidden sm:block" />
                      oraz drzwiowe
                    </h2>
                    <div className="mt-2 h-1 w-24 bg-red-600" />
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      Moskitiery to skuteczna ochrona przed owadami, która jednocześnie nie ogranicza dostępu świeżego
                      powietrza. Oferujemy moskitiery okienne i drzwiowe, łatwe w montażu i demontażu. Wykonane z
                      wysokiej jakości materiałów, zapewniają długotrwałe użytkowanie i komfort w ciepłe dni.
                    </p>
                  </section>

                  {/* CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="bg-red-600 hover:bg-red-600/90" asChild>
                      <a href="/kontakt#wycena">Bezpłatna wycena</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+48733633507">Zadzwoń: 733 633 507</a>
                    </Button>
                  </div>
                </div>

                {/* Obraz (opcjonalnie podmień ścieżkę) */}
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl rounded-3xl" />
                  <img
                    src="https://www.bett.pl/wp-content/uploads/2024/07/Rolety-1-768x960.jpg"
                    alt="Rolety i żaluzje BETT"
                    className="w-full h-auto rounded-3xl border border-red-200/50 shadow-xl object-cover bg-white"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Szerokie CTA */}
          <section className="mt-16">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl overflow-hidden border border-red-200/60">
                <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold">Zwiększ komfort swojego domu</h3>
                  <p className="mt-2 text-white/90 text-lg">
                    Dobierz idealne rolety, żaluzje i moskitiery – a my zajmiemy się pomiarem, montażem i wsparciem.
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

export default Rolety;
