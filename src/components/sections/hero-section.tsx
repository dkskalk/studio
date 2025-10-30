import { Button } from '@/components/ui/button';
import { Moon, Star } from 'lucide-react';
import CustomVideoPlayer from '../ui/custom-video-player';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-primary/30 to-transparent pt-28 pb-20 text-center">
      
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
        <p className="font-semibold text-accent">Neurohipnose Infantil™</p>
        <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-foreground mt-2 text-balance">
            Tudo o Que Você Quer é Voltar a Dormir a Noite - Faça Seu Filho dormir Em 20 Minutos com a Neurohipnose Infantil™
        </h1>
        
        <div className="mt-10 max-w-3xl mx-auto">
             <CustomVideoPlayer videoId="FNymauRq1AA" />
            <p className="mt-6 text-lg text-foreground/90">Assista a curta apresentação e descubra o segredo que centenas de mães estão usando para fazer seus filhos dormirem rápido.</p>
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
