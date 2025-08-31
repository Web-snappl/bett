import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Drzwi = () => {
  return (
    <>
      {/* SEO */}
      <title>Drzwi zewnętrzne i wewnętrzne | BETT – wyjątkowa jakość, design i profesjonalny montaż</title>
      <meta
        name="description"
        content="Firma BETT specjalizuje się w sprzedaży i montażu drzwi zewnętrznych oraz wewnętrznych klasy premium. Elegancja, trwałość, bezpieczeństwo i kompleksowy montaż."
      />
      <meta
        name="keywords"
        content="drzwi zewnętrzne, drzwi wewnętrzne, drzwi premium, montaż drzwi, drzwi aluminiowe, drzwi drewniane"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-8 pb-20">
          {/* HERO / LAYOUT */}
          <section className="relative">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* LEFT – TEXT */}
                <div className="space-y-12">
                  <header>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Drzwi</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      Firma BETT specjalizuje się w sprzedaży oraz montażu drzwi zewnętrznych oraz wewnętrznych klasy
                      premium, które tworzą połączenie elegancji, trwałości i bezpieczeństwa. Drzwi zewnętrzne to
                      inwestycja w komfort i prestiż domu.
                    </p>
                  </header>

                  {/* BLOCK 1 */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Wyjątkowa jakość</h2>
                    <div className="mt-2 h-1 w-24 bg-red-600" />
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      Każdy produkt w naszej ofercie przechodzi selekcję, aby zapewniać najwyższą jakość i trwałość.
                      Współpracujemy z renomowanymi producentami, korzystamy z nowoczesnych technologii oraz najlepszych
                      materiałów. Dzięki temu drzwi cechują się wysoką odpornością na warunki atmosferyczne i
                      długowiecznością.
                    </p>
                  </div>

                  {/* BLOCK 2 */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Design i estetyka</h2>
                    <div className="mt-2 h-1 w-24 bg-red-600" />
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      Rozumiemy, jak ważne jest, aby drzwi były wizytówką domu. Oferujemy szeroki wybór modeli,
                      wzorów i kolorów, aby sprostać najbardziej wymagającym gustom. Od klasycznych, drewnianych
                      skrzydeł po rozwiązania minimalistyczne i nowoczesne – wszystkie łączą się z funkcjonalnością.
                    </p>
                  </div>

                  {/* BLOCK 3 */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Profesjonalny montaż</h2>
                    <div className="mt-2 h-1 w-24 bg-red-600" />
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      Oprócz sprzedaży realizujemy kompleksowe usługi montażowe. Zespół doświadczonych fachowców
                      zapewnia precyzyjny i szczelny montaż, dbając o każdy detal. Dzięki temu możesz korzystać z nowych
                      drzwi bez żadnych problemów.
                    </p>
                  </div>

                  {/* CTA INLINE */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="bg-red-600 hover:bg-red-600/90" asChild>
                      <a href="/kontakt#wycena">Bezpłatna wycena</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+48733633507">Zadzwoń: 733 633 507</a>
                    </Button>
                  </div>
                </div>

                {/* RIGHT – IMAGE */}
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl rounded-3xl" />
                  <img
                    src="https://www.bett.pl/wp-content/uploads/2024/07/Drzwi-3-w-png-1.png"
                    alt="Nowoczesne drzwi zewnętrzne BETT"
                    className="w-full h-auto rounded-3xl border border-red-200/50 shadow-xl object-contain bg-white"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* WIDE CTA */}
          <section className="mt-16">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl overflow-hidden border border-red-200/60">
                <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold">Gotowy na nowe drzwi?</h3>
                  <p className="mt-2 text-white/90 text-lg">
                    Skorzystaj z doradztwa, pomiaru i profesjonalnego montażu – kompleksowo i bez stresu.
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

export default Drzwi;
