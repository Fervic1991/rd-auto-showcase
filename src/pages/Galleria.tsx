import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceDetailing from "@/assets/service-detailing.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";

const galleryImages = [
  {
    src: beforeAfter1,
    alt: "Prima e dopo riparazione paraurti",
    category: "Prima & Dopo",
  },
  {
    src: servicePainting,
    alt: "Verniciatura professionale",
    category: "Verniciatura",
  },
  {
    src: serviceDetailing,
    alt: "Lucidatura auto",
    category: "Detailing",
  },
  {
    src: heroWorkshop,
    alt: "Officina RD Auto",
    category: "Officina",
  },
];

export default function Galleria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Galleria
            </h1>
            <p className="text-lg text-muted-foreground">
              Scopri i nostri lavori e la qualità delle nostre riparazioni
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prima & Dopo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guarda la differenza che fa un lavoro professionale
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={beforeAfter1} 
                alt="Confronto prima e dopo" 
                className="w-full"
              />
              <div className="absolute inset-0 flex">
                <div className="w-1/2 flex items-end p-6">
                  <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-semibold">
                    Prima
                  </span>
                </div>
                <div className="w-1/2 flex items-end justify-end p-6">
                  <span className="bg-success text-success-foreground px-4 py-2 rounded-full font-semibold">
                    Dopo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vuoi risultati così anche per la tua auto?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contattaci per un preventivo gratuito
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/preventivo">
              Richiedi Preventivo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Immagine ingrandita" 
            className="max-w-full max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
}
