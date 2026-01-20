import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

export default function Contatti() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contatti
            </h1>
            <p className="text-lg text-muted-foreground">
              Siamo qui per aiutarti. Contattaci o vieni a trovarci!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Informazioni di Contatto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">Indirizzo</h3>
                      <p className="text-muted-foreground">
                        Via Roma, 123<br />
                        20100 Milano (MI)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">Telefono</h3>
                      <a 
                        href="tel:+390000000000" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +39 000 000 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/390000000000" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-success transition-colors"
                      >
                        Scrivici su WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:info@rd-auto.com" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@rd-auto.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">Orari di Apertura</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lunedì - Venerdì: 8:30 - 18:30</p>
                        <p>Sabato: 9:00 - 12:30</p>
                        <p>Domenica: Chiuso</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                  <a href="https://wa.me/390000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="cta" size="lg" className="flex-1" asChild>
                  <a href="tel:+390000000000">
                    <Phone className="w-5 h-5" />
                    Chiama Ora
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0863!2d9.189982!3d45.464664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzUyLjgiTiA5wrAxMSczNi4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Posizione RD Auto"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+Roma+123+Milano"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5" />
                  Ottieni Indicazioni
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Hai avuto un incidente?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Non preoccuparti, siamo qui per aiutarti. Contattaci immediatamente e ci occuperemo di tutto: dal soccorso stradale alla gestione della pratica assicurativa.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href="tel:+390000000000">
              <Phone className="w-6 h-6" />
              Chiamaci Subito
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
