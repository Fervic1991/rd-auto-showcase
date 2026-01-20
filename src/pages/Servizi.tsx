import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Paintbrush, 
  FileCheck, 
  Sparkles, 
  Car, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import servicePainting from "@/assets/service-painting.jpg";
import serviceDetailing from "@/assets/service-detailing.jpg";

const services = [
  {
    icon: Wrench,
    title: "Riparazioni Carrozzeria",
    description: "Riparazione professionale di ammaccature, graffi, danni da grandine e incidenti. Utilizziamo tecniche avanzate per ripristinare la carrozzeria della tua auto alle condizioni originali.",
    features: [
      "Riparazione ammaccature",
      "Sostituzione lamierati",
      "Raddrizzatura scocca",
      "Riparazione danni da grandine",
    ],
  },
  {
    icon: Paintbrush,
    title: "Verniciatura Professionale",
    description: "Verniciatura con colori originali e finiture perfette. Camera di verniciatura a temperatura controllata per risultati impeccabili.",
    features: [
      "Verniciatura completa",
      "Ritocchi localizzati",
      "Preparazione superfici",
      "Colori originali certificati",
    ],
  },
  {
    icon: FileCheck,
    title: "Gestione Sinistri",
    description: "Assistenza completa per la gestione delle pratiche assicurative. Ci occupiamo di tutto, dalla perizia alla riparazione.",
    features: [
      "Apertura pratica sinistro",
      "Gestione perizie",
      "Rapporti con assicurazioni",
      "Documentazione completa",
    ],
  },
  {
    icon: Sparkles,
    title: "Lucidatura e Detailing",
    description: "Trattamenti estetici professionali per far brillare la tua auto. Dalla lucidatura alla protezione ceramica.",
    features: [
      "Lucidatura professionale",
      "Polish correttivo",
      "Trattamento nano-ceramico",
      "Pulizia interni profonda",
    ],
  },
  {
    icon: Car,
    title: "Auto Sostitutiva",
    description: "Non restare a piedi! Mettiamo a tua disposizione un veicolo sostitutivo gratuito durante i lavori sulla tua auto.",
    features: [
      "Veicolo sostitutivo gratuito",
      "Ritiro e consegna",
      "Assicurazione inclusa",
      "Disponibilità immediata",
    ],
  },
  {
    icon: Settings,
    title: "Manutenzione Generale",
    description: "Servizi di manutenzione ordinaria e straordinaria per mantenere la tua auto sempre in perfette condizioni.",
    features: [
      "Tagliandi",
      "Cambio olio e filtri",
      "Controllo freni",
      "Diagnosi elettronica",
    ],
  },
];

export default function Servizi() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              I Nostri Servizi
            </h1>
            <p className="text-lg text-muted-foreground">
              Soluzioni complete per la cura e la riparazione della tua auto
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={servicePainting} 
                alt="Camera di verniciatura professionale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">
                    Verniciatura Professionale
                  </h3>
                  <p className="text-primary-foreground/80">
                    Camera di verniciatura a temperatura controllata
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={serviceDetailing} 
                alt="Lucidatura e detailing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">
                    Detailing Professionale
                  </h3>
                  <p className="text-primary-foreground/80">
                    Lucidatura e trattamenti estetici di alta qualità
                  </p>
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
            Hai bisogno di un servizio?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contattaci per un preventivo gratuito e senza impegno
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/preventivo">
              Richiedi Preventivo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
