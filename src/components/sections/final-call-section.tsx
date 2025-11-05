import { Button } from '@/components/ui/button';
import { ArrowRight, CircleX } from 'lucide-react';

export default function FinalCallSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Você tem duas escolhas agora...
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-3">
                <CircleX className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl font-bold">Não fazer nada</h3>
                  <p className="mt-2 text-foreground/80">
                    E sentir o cansaço consumir o que resta da sua saúde mental. A agitação do seu filho vai piorar, e você continuará vendo os melhores anos da sua maternidade escorrerem pelo ralo por causa da privação de sono.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg neon-glow-accent transition-all duration-300 hover:scale-[1.07] hover:shadow-accent/30">
              <div className="flex items-start gap-3">
                <ArrowRight className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl font-bold">Tomar uma atitude</h3>
                  <p className="mt-2 text-foreground/80">
                    Abandone agora mesmo a rotina caótica. Inicie o método comprovado que, em poucas noites, desenvolve, regula e TRANSFORMA seu filho agitado em uma criança que dorme profundamente, acorda tranquila e se torna um poço de foco e atenção para o dia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
             <a href="#oferta" className="block">
                <Button size="lg" className="w-full md:w-auto h-14 text-base md:text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
                   <span className="hidden md:inline">QUERO O MÉTODO POR APENAS R$ 37,90</span>
                   <span className="md:hidden">QUERO O MÉTODO AGORA!</span>
                </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
