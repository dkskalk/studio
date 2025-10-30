import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-primary py-20 md:py-28 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <p className="font-semibold text-primary-foreground/80">Neurohipnose Infantil™</p>
        <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-primary-foreground mt-2">
            Tudo o Que Você Quer é Voltar a Dormir a Noite - Faça Seu Filho dormir Em 20 Minutos com a Neurohipnose Infantil™
        </h1>
        
        <div className="mt-10 max-w-3xl mx-auto">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl border-4 border-background bg-gray-200 flex items-center justify-center">
              {/* Vídeo aqui */}
              <p className="text-gray-500">Vídeo de Apresentação</p>
            </div>
            <p className="mt-6 text-lg text-primary-foreground/90">Assista a curta apresentação e descubra o segredo que centenas de mães estão usando para fazer seus filhos dormirem rápido.</p>
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
