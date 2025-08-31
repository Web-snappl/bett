import { CheckCircle, Ruler, Wrench } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: "Doradztwo i wycena",
      description: "Dobieramy rozwiązanie do budżetu i potrzeb. Bezpłatna wycena na miejscu.",
    },
    {
      icon: Ruler,
      title: "Pomiar i zamówienie",
      description: "Precyzyjny pomiar wymiarów. Zamówienie produktów u sprawdzonych dostawców.",
    },
    {
      icon: Wrench,
      title: "Montaż i serwis",
      description: "Profesjonalny montaż przez doświadczony zespół. Opieka posprzedażowa.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-inter">
            Jak pracujemy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proces współpracy od pierwszego kontaktu do końcowego efektu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-10 w-10 text-accent-foreground" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-border -z-10"></div>
                  )}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary font-inter">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;