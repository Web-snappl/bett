import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Salon = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 font-inter">Nasz salon</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zapraszamy do naszego salonu, gdzie możesz zobaczyć nasze produkty na żywo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Lokalizacja</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Adres:</strong> Tryńcza 120, 37-204 Tryńcza</p>
                  <p><strong>Budynek:</strong> Sanitex</p>
                  <p><strong>Godziny otwarcia:</strong> Do ustalenia telefonicznie</p>
                  <p><strong>Telefon:</strong> <a href="tel:+48733633507" className="text-accent hover:text-accent/80">733 633 507</a></p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Co możesz u nas zobaczyć?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ekspozycję okien PVC i aluminiowych</li>
                  <li>• Różne systemy drzwi wejściowych</li>
                  <li>• Próbki rolet i żaluzji</li>
                  <li>• Katalogi i wzorniki kolorów</li>
                </ul>
              </div>
            </div>
            
            <div id="mapa" className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <p className="text-muted-foreground">Mapa będzie dostępna wkrótce</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Salon;