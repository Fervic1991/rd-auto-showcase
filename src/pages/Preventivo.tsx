import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2, "Il nome deve avere almeno 2 caratteri").max(100, "Nome troppo lungo"),
  phone: z.string().trim().min(8, "Inserisci un numero di telefono valido").max(20, "Numero troppo lungo"),
  email: z.string().trim().email("Inserisci un'email valida").max(255, "Email troppo lunga"),
  message: z.string().trim().min(10, "Il messaggio deve avere almeno 10 caratteri").max(1000, "Messaggio troppo lungo"),
});

type FormData = z.infer<typeof formSchema>;

export default function Preventivo() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = formSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo il prima possibile.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Richiedi un Preventivo
            </h1>
            <p className="text-lg text-muted-foreground">
              Compila il modulo e riceverai un preventivo gratuito entro 24 ore
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Richiesta Inviata!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Grazie per averci contattato. Ti risponderemo il prima possibile.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", message: "" });
                    }}
                  >
                    Invia un'altra richiesta
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome e Cognome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mario Rossi"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefono *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+39 000 000 0000"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mario.rossi@email.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Descrivi il lavoro richiesto *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descrivi il tipo di intervento di cui hai bisogno..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Invia Richiesta
                      </>
                    )}
                  </Button>

                  <p className="text-muted-foreground text-sm text-center">
                    I tuoi dati sono al sicuro. Non condividiamo le tue informazioni con terzi.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Alternatives */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Preferisci contattarci direttamente?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Siamo sempre disponibili per rispondere alle tue domande e fornirti un preventivo immediato.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/390000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-success/10 rounded-xl p-6 hover:bg-success/20 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-success flex items-center justify-center shrink-0">
                    <MessageCircle className="w-7 h-7 text-success-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Risposta rapida in chat</p>
                  </div>
                </a>

                <a
                  href="tel:+390000000000"
                  className="flex items-center gap-4 bg-accent/10 rounded-xl p-6 hover:bg-accent/20 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">Chiamaci</h3>
                    <p className="text-muted-foreground text-sm">+39 000 000 0000</p>
                  </div>
                </a>
              </div>

              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="font-display font-bold text-lg mb-2">
                  Perché scegliere RD Auto?
                </h3>
                <ul className="space-y-2 text-primary-foreground/80 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    Preventivi gratuiti e senza impegno
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    Risposta entro 24 ore
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    Auto sostitutiva disponibile
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    Garanzia su tutti i lavori
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
