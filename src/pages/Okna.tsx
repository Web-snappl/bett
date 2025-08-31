import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, Droplets, Volume2, Thermometer, Hammer, Brush, Ruler, Star, ArrowRight } from "lucide-react";

const Okna = () => {
  const offer = [
    {
      title: "Okna PVC",
      desc: "Wszechstronne, trwałe i ekonomiczne. Bardzo dobre parametry cieplne i akustyczne przy lekkiej konstrukcji.",
      bullets: ["Świetna izolacyjność cieplna", "Łatwa pielęgnacja", "Szeroka paleta kolorów i oklein"],
      tag: "Popularny wybór",
    },
    {
      title: "Okna aluminiowe",
      desc: "Nowoczesne i smukłe profile do dużych przeszkleń. Wysoka sztywność i odporność na warunki atmosferyczne.",
      bullets: ["Minimalistyczny design", "Stabilność przy dużych gabarytach", "Trwałość na lata"],
      tag: "Nowoczesna architektura",
    },
    {
      title: "Okna drewniano-aluminiowe",
      desc: "Naturalne, ciepłe drewno od środka i odporne aluminium od zewnątrz – premium w wyglądzie i parametrach.",
      bullets: ["Szlachetna estetyka", "Bardzo dobre parametry", "Niska podatność na warunki zewnętrzne"],
      tag: "Premium",
    },
  ];

  const benefits = [
    {
      icon: <Thermometer className="h-7 w-7" />,
      title: "Energooszczędność",
      desc: "Wysoka izolacja ogranicza straty ciepła i pomaga obniżać rachunki.",
    },
    {
      icon: <Volume2 className="h-7 w-7" />,
      title: "Dźwiękoszczelność",
      desc: "Pakiety szybowe i uszczelnienia zwiększają komfort akustyczny wnętrz.",
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Bezpieczeństwo",
      desc: "Okucia i szyby bezpieczne podnoszą poziom ochrony domu.",
    },
    {
      icon: <Droplets className="h-7 w-7" />,
      title: "Szczelność i trwałość",
      desc: "Profesjonalny montaż i materiały wysokiej jakości utrzymują parametry na długie lata.",
    },
  ];

  const steps = [
    { step: "01", title: "Konsultacja i pomiar", desc: "Bezpłatne doradztwo i precyzyjny pomiar na miejscu." },
    { step: "02", title: "Oferta i konfiguracja", desc: "Dobór materiału, koloru, pakietu szybowego i okuć." },
    { step: "03", title: "Produkcja", desc: "Realizacja zamówienia zgodnie z uzgodnioną specyfikacją." },
    { step: "04", title: "Montaż i odbiór", desc: "Profesjonalny montaż, regulacja i instruktaż użytkowania." },
  ];

  const faqs = [
    {
      q: "Który materiał wybrać: PVC, aluminium czy drewno z aluminium?",
      a: "PVC sprawdza się w większości domów – to korzystny stosunek ceny do parametrów. Aluminium wybierasz do dużych przeszkleń i nowoczesnej bryły. Drewno-aluminium to premium łączące ciepło drewna wewnątrz i odporność aluminium na zewnątrz.",
    },
    {
      q: "Czy zapewniacie montaż i serwis?",
      a: "Tak. Oferujemy kompleksowo: doradztwo, pomiar, montaż, regulacje i wsparcie posprzedażowe.",
    },
    {
      q: "Czy mogę dopasować kolor i dodatki?",
      a: "Tak. Konfigurujemy kolory, okleiny, klamki, pakiety szybowe, nawiewniki i dodatkowe zabezpieczenia.",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Okna PVC, aluminiowe i drewniano-aluminiowe | BETT – pomiar, montaż, serwis</title>
      <meta
        name="description"
        content="Okna PVC, aluminiowe i drewniano-aluminiowe. Energooszczędność, dźwiękoszczelność, bezpieczeństwo i estetyka. Profesjonalny montaż i kompleksowa obsługa."
      />
      <meta name="keywords" content="okna PVC, okna aluminiowe, okna drewniano-aluminiowe, montaż okien, wymiana okien" />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-8 pb-20">
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="h-[420px] w-[120%] -left-10 -top-24 rotate-6 bg-gradient-to-r from-red-600/20 via-red-500/10 to-transparent blur-3xl rounded-3xl absolute" />
            </div>

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center py-14 md:py-20">
                <Badge className="mb-4 bg-red-600 text-white hover:bg-red-600/90">Okna BETT</Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                  Okna <span className="text-red-600">PVC</span>, <span className="text-red-600">aluminiowe</span> i <span className="text-red-600">drewniano-aluminiowe</span>
                </h1>
                <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                  Łączymy nowoczesny design, wysokie parametry i profesjonalny montaż. Wybierasz styl, my dbamy o komfort i oszczędności.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" asChild className="bg-red-600 hover:bg-red-600/90">
                    <a href="/kontakt#wycena" className="inline-flex items-center gap-2">
                      Bezpłatna wycena <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+48733633507">Zadzwoń: 733 633 507</a>
                  </Button>
                </div>
                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600" /> Pomiar na miejscu</div>
                  <div className="flex items-center gap-2"><Hammer className="h-4 w-4 text-red-600" /> Profesjonalny montaż</div>
                  <div className="flex items-center gap-2"><Star className="h-4 w-4 text-red-600" /> Wsparcie posprzedażowe</div>
                </div>
              </div>
            </div>
          </section>

          {/* OFERTA – 3 typy okien */}
          <section className="py-14">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Nasza <span className="text-red-600">oferta</span> okien
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Dobierasz materiał i wykończenie do stylu domu i wymaganych parametrów.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {offer.map((o, i) => (
                  <Card key={i} className="border border-red-200/40 hover:border-red-300/60 transition-all hover:shadow-lg rounded-2xl">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{o.title}</CardTitle>
                        <Badge className="bg-red-600 text-white hover:bg-red-600/90">{o.tag}</Badge>
                      </div>
                      <CardDescription className="pt-2">{o.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        {o.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-600 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* KORZYŚCI */}
          <section className="py-14 bg-muted/30">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Co <span className="text-red-600">zyskujesz</span> z oknami BETT?</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="rounded-2xl border border-red-200/40 bg-card p-6 text-center hover:shadow-md transition">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                      <span className="text-red-700">{b.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* JAK DZIAŁAMY */}
          <section className="py-14">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">Jak <span className="text-red-600">działamy</span>?</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {steps.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white font-bold">{s.step}</div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl border p-6 bg-card">
                  <div className="flex items-center gap-2 text-foreground font-semibold"><Ruler className="h-5 w-5 text-red-600" /> Precyzyjny pomiar</div>
                  <p className="mt-2 text-sm text-muted-foreground">Dokładny pomiar i doradztwo techniczne pod Twoją inwestycję.</p>
                </div>
                <div className="rounded-2xl border p-6 bg-card">
                  <div className="flex items-center gap-2 text-foreground font-semibold"><Brush className="h-5 w-5 text-red-600" /> Personalizacja</div>
                  <p className="mt-2 text-sm text-muted-foreground">Kolory, okleiny, pakiety szybowe i akcesoria dopasowane do projektu.</p>
                </div>
                <div className="rounded-2xl border p-6 bg-card">
                  <div className="flex items-center gap-2 text-foreground font-semibold"><Hammer className="h-5 w-5 text-red-600" /> Montaż i serwis</div>
                  <p className="mt-2 text-sm text-muted-foreground">Montaż przez doświadczony zespół i wsparcie posprzedażowe.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 bg-gradient-to-b from-white to-red-50/30 dark:from-background dark:to-red-950/10">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">Najczęstsze <span className="text-red-600">pytania</span></h2>
              </div>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <details key={i} className="group rounded-xl border bg-card p-5">
                    <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                      {f.q}
                      <span className="text-red-600 transition group-open:rotate-90"><ArrowRight className="h-4 w-4" /></span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="rounded-3xl border border-red-200/60 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-12 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold">Gotowy na nowe okna?</h2>
                <p className="mt-2 text-lg/relaxed text-white/90">Umów bezpłatny pomiar i poznaj wycenę dopasowaną do Twojej inwestycji.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="/kontakt#wycena">Zamów wycenę</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" asChild>
                    <a href="tel:+48733633507">733 633 507</a>
                  </Button>
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

export default Okna;
