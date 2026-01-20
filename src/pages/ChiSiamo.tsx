import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, Heart, ArrowRight, Award, Leaf, Wrench } from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "Qualità",
    description: "Utilizziamo solo materiali di prima qualità e tecniche all'avanguardia.",
  },
  {
    icon: Users,
    title: "Professionalità",
    description: "Un team di esperti con formazione continua sulle ultime tecnologie.",
  },
  {
    icon: Target,
    title: "Precisione",
    description: "Attenzione ai dettagli per risultati impeccabili su ogni lavoro.",
  },
  {
    icon: Heart,
    title: "Passione",
    description: "L'amore per le auto guida ogni nostra azione quotidiana.",
  },
];

const certifications = [
  {
    icon: Award,
    title: "Digitalizzazione PMI",
    year: "2023",
    description: "Progetto finanziato dalla Regione per l'ammodernamento digitale della gestione ordini e preventivi.",
    fundedBy: "Regione Emilia-Romagna",
  },
  {
    icon: Leaf,
    title: "Efficienza Energetica",
    year: "2022",
    description: "Installazione impianto fotovoltaico e cabina verniciatura a basso impatto ambientale.",
    fundedBy: "Fondo Europeo FESR",
  },
  {
    icon: Wrench,
    title: "Formazione Tecnica",
    year: "2024",
    description: "Aggiornamento professionale del personale su nuove tecnologie di riparazione e materiali.",
    fundedBy: "Fondo Sociale Europeo",
  },
];

export default function ChiSiamo() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Chi Siamo
            </h1>
            <p className="text-lg text-muted-foreground">
              Una storia di passione, esperienza e dedizione al mondo automotive
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                La Nostra Storia
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">RD Auto</strong> nasce dalla passione per le automobili e dalla volontà di offrire un servizio di carrozzeria e assistenza auto di eccellenza.
                </p>
                <p>
                  Da oltre 20 anni ci prendiamo cura delle auto dei nostri clienti con la stessa attenzione e dedizione del primo giorno. La nostra officina è dotata delle più moderne attrezzature e il nostro team è costantemente aggiornato sulle ultime tecnologie del settore.
                </p>
                <p>
                  Ogni veicolo che entra nella nostra carrozzeria viene trattato con la massima cura, perché sappiamo quanto sia importante per te la tua auto. Il nostro obiettivo è restituirtela sempre in condizioni perfette.
                </p>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-accent">20+</span>
                  <p className="text-primary-foreground/80 mt-2">Anni di Esperienza</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-accent">5000+</span>
                  <p className="text-primary-foreground/80 mt-2">Auto Riparate</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-accent">100%</span>
                  <p className="text-primary-foreground/80 mt-2">Clienti Soddisfatti</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-bold text-accent">10+</span>
                  <p className="text-primary-foreground/80 mt-2">Professionisti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              I Nostri Valori
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I principi che guidano ogni nostro lavoro
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certificazioni e Progetti Finanziati
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Investiamo costantemente in innovazione e formazione grazie a fondi europei e regionali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-primary font-medium mb-2">
                  {cert.fundedBy}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <Button variant="outline" size="sm" className="w-full mt-auto">
                  Dettagli progetto
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vieni a trovarci
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Saremo felici di mostrarti la nostra officina e discutere delle esigenze della tua auto.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contatti">
              Contattaci
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
