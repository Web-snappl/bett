import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PolitykaPrywatnosci = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8 font-inter">Polityka prywatności</h1>
            
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Informacje ogólne</h2>
                <p>
                  Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                  użytkowników serwisu internetowego BETT.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Administrator danych</h2>
                <p>
                  Administratorem danych osobowych jest BETT z siedzibą w Tryńczy 120, 37-204 Tryńcza.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Rodzaje przetwarzanych danych</h2>
                <p>
                  Przetwarzamy następujące kategorie danych osobowych:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dane kontaktowe (imię, nazwisko, telefon, email)</li>
                  <li>Dane techniczne (adres IP, informacje o przeglądarce)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Cel przetwarzania</h2>
                <p>
                  Dane osobowe przetwarzamy w celu:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Realizacji zapytania ofertowego</li>
                  <li>Kontaktu z klientem</li>
                  <li>Prowadzenia działalności gospodarczej</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Kontakt</h2>
                <p>
                  W sprawach związanych z ochroną danych osobowych można skontaktować się pod adresem 
                  email: <a href="mailto:biuro@bett.pl" className="text-accent hover:text-accent/80">biuro@bett.pl</a> 
                  lub telefonicznie: <a href="tel:+48733633507" className="text-accent hover:text-accent/80">733 633 507</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitykaPrywatnosci;