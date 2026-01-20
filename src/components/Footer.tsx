import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold">RD</span>
              <span className="font-display text-2xl font-bold text-accent">Auto</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Carrozzeria e assistenza auto professionale. Qualità, esperienza e passione al servizio della tua auto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Chi Siamo", path: "/chi-siamo" },
                { name: "Servizi", path: "/servizi" },
                { name: "Galleria", path: "/galleria" },
                { name: "Preventivo", path: "/preventivo" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Riparazioni Carrozzeria</li>
              <li>Verniciatura Professionale</li>
              <li>Gestione Sinistri</li>
              <li>Lucidatura e Detailing</li>
              <li>Auto Sostitutiva</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-primary-foreground/80">
                  Via Roma, 123<br />20100 Milano (MI)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+390000000000" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +39 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-accent shrink-0" />
                <a href="https://wa.me/390000000000" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@rd-auto.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@rd-auto.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-primary-foreground/80">
                  Lun - Ven: 8:30 - 18:30<br />Sab: 9:00 - 12:30
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} RD Auto. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
