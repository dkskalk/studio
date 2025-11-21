import { Button } from '@/components/ui/button';
import { Moon, Star } from 'lucide-react';
import Script from 'next/script';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-primary/30 to-transparent pt-28 pb-12 text-center">
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-foreground/10 opacity-50">
        <Star className="h-16 w-16 animate-pulse" />
      </div>
      <div className="absolute top-20 right-16 text-foreground/10 opacity-50">
        <Moon className="h-12 w-12 animate-pulse delay-500" />
      </div>
       <div className="absolute bottom-10 left-24 text-foreground/5 opacity-50">
        <Star className="h-8 w-8 animate-pulse delay-1000" />
      </div>
       <div className="absolute bottom-20 right-32 text-foreground/10 opacity-50">
        <Star className="h-6 w-6 animate-pulse delay-200" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <p className="font-semibold text-accent">NeuroHipnose Infantil™</p>
        <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-foreground mt-2 text-balance">
            Tudo o Que Você Quer é Voltar a Dormir a Noite - Faça Seu Filho dormir Em 20 Minutos com a NeuroHipnose Infantil™
        </h1>
        
        <div className="mt-10 max-w-3xl mx-auto">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl border-4 border-background/50 bg-muted group">
               <iframe 
                  src="https://www.youtube.com/embed/gZx12-r3lkw" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
        </div>

        <div className="mt-8">
            <a href="#oferta">
                <Button size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold shadow-lg transform hover:scale-105 transition-transform h-14">
                  QUERO NOITES DE PAZ
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
}
