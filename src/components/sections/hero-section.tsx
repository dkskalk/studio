import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-primary-foreground">
            Como Fazer Seu Filho Hiperativo Adormecer em Até 20 Minutos Usando o ‘Protocolo de Ondas Delta Induzidas’
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            — Mesmo Se Ele For da Era Pós-Digital e Você Já Tendo Tentado de Tudo Sem Sucesso.
          </p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl border-4 border-background">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&autohide=1&modestbranding=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
             <p className="text-lg text-primary-foreground/90 italic">"Meu nome é Camila e vou te mostrar EXATAMENTE como funciona."</p>
             <p className="mt-4 text-base text-primary-foreground/80">Assista a esta breve apresentação para descobrir o segredo que centenas de mães estão usando para transformar noites de choro e estresse em momentos de paz e tranquilidade.</p>
             <a href="#oferta">
                <Button size="lg" className="mt-6 w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-base font-bold shadow-lg transform hover:scale-105 transition-transform">
                  SIM, QUERO NOITES DE PAZ!
                </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
