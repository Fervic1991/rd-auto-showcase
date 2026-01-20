import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
      <a
        href="https://wa.me/390000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-success text-success-foreground shadow-xl hover:scale-110 transition-transform animate-pulse-gentle"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+390000000000"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-xl hover:scale-110 transition-transform"
        aria-label="Chiamaci ora"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
