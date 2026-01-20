import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { 
  Phone, 
  MessageCircle, 
  Shield, 
  Clock, 
  Award, 
  Wrench,
  Sparkles,
  FileCheck,
  Car,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";
import beforeAfter from "@/assets/before-after-1.jpg";

const features = [
  {
    icon: Shield,
    title: "Garanzia sui Lavori",
    description: "Ogni intervento è garantito per offrirti la massima tranquillità.",
  },
  {
    icon: Clock,
    title: "Tempi Rapidi",
    description: "Lavori eseguiti nei tempi concordati, senza ritardi.",
  },
  {
    icon: Award,
    title: "Esperienza Ventennale",
    description: "Oltre 20 anni di esperienza nel settore automotive.",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Riparazioni Carrozzeria",
    description: "Riparazione professionale di ammaccature, graffi e danni da incidente.",
  },
  {
    icon: Sparkles,
    title: "Verniciatura",
    description: "Verniciatura professionale con colori originali e finiture perfette.",
  },
  {
    icon: FileCheck,
    title: "Gestione Sinistri",
    description: "Assistenza completa per pratiche assicurative e perizie.",
  },
  {
    icon: Car,
    title: "Auto Sostitutiva",
    description: "Veicolo sostitutivo gratuito durante i lavori sulla tua auto.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              RD Auto – Carrozzeria e Assistenza Auto
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Riparazioni carrozzeria, verniciatura e assistenza professionale. La tua auto merita il meglio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/390000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Scrivici su WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+390000000000">
                  <Phone className="w-5 h-5" />
                  Chiama Ora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perché Scegliere RD Auto?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Affidabilità, qualità e professionalità al servizio della tua auto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluzioni complete per la cura e la riparazione della tua auto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="cta" size="lg" asChild>
              <Link to="/servizi">
                Scopri Tutti i Servizi
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Prima & Dopo: I Nostri Risultati
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ogni lavoro è una sfida che affrontiamo con passione e competenza. Guarda i risultati delle nostre riparazioni e scopri la qualità del nostro lavoro.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/galleria">
                  Vai alla Galleria
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={beforeAfter} 
                alt="Prima e dopo riparazione carrozzeria" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute inset-0 flex">
                <div className="w-1/2 flex items-end p-4">
                  <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Prima
                  </span>
                </div>
                <div className="w-1/2 flex items-end justify-end p-4">
                  <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Dopo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Hai bisogno di un preventivo?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contattaci per un preventivo gratuito e senza impegno. Risponderemo nel più breve tempo possibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/390000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/preventivo">
                Richiedi Preventivo Online
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
