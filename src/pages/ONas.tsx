import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ONas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-8 pb-16">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              O <span className="text-red-600">nas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Od lat tworzymy stolarkę budowlaną, która łączy tradycję z nowoczesnością.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            <section className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 md:p-12 shadow-lg border border-red-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nasza <span className="text-red-600">Historia</span></h2>
                </div>
                <div className="space-y-6 text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    BETT to firma zbudowana na solidnych fundamentach i wieloletnim doświadczeniu. 
                    Od początku działalności stawiamy na precyzję, jakość i nieustanny rozwój, 
                    aby nasze produkty spełniały oczekiwania klientów w całej Polsce i poza jej granicami.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dziś jesteśmy jednym z liderów w branży stolarki budowlanej, oferując szeroką gamę 
                    okien, drzwi, rolet i bram garażowych, które powstają z połączenia rzemieślniczej tradycji 
                    i nowoczesnych technologii.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-bl from-red-50 to-transparent rounded-2xl p-8 md:p-12 border border-red-200 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nasza <span className="text-red-600">Misja</span></h2>
                </div>
                <div className="space-y-6 text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    Naszą misją jest tworzenie rozwiązań, które łączą estetykę, trwałość i funkcjonalność. 
                    Stawiamy na partnerskie podejście, doradztwo na każdym etapie inwestycji i obsługę, 
                    która daje poczucie bezpieczeństwa.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Chcemy, aby nasze produkty nie tylko chroniły, ale również zdobiły domy i budynki, 
                    podkreślając ich indywidualny charakter.
                  </p>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Dlaczego <span className="text-red-600">BETT</span>?
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-gradient-to-br from-card to-card/80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200 hover:border-red-400">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-red-600 transition-colors">Jakość</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Każdy produkt powstaje z dbałością o detale i przy użyciu materiałów najwyższej klasy.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-br from-card to-card/80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200 hover:border-red-400">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-red-600 transition-colors">Doświadczenie</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Wieloletnia obecność na rynku sprawia, że potrafimy sprostać każdemu wyzwaniu.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-br from-card to-card/80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200 hover:border-red-400">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-red-600 transition-colors">Kompleksowość</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Od doradztwa i projektu, po montaż i serwis – działamy na każdym etapie.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-br from-card to-card/80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200 hover:border-red-400">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-red-600 transition-colors">Indywidualne podejście</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Każdy klient i projekt to dla nas osobna historia – dopasowujemy się do potrzeb i oczekiwań.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Skontaktuj się z nami</h2>
                <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Chętnie odpowiemy na Twoje pytania i pomożemy dobrać najlepsze rozwiązania dla Twojego domu lub firmy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+48733633507" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-white/90 transition-colors font-bold text-lg shadow-lg"
                  >
                    Zadzwoń: 733 633 507
                  </a>
                  <a 
                    href="mailto:biuro@bett.pl" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
                  >
                    Wyślij email
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ONas;
