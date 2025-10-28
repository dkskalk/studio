import { Button } from '@/components/ui/button';
import { ArrowRight, XCircle } from 'lucide-react';

export default function FinalCallSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Você tem duas escolhas agora...
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-red-100 border border-red-200 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl font-bold">Não fazer nada</h3>
                  <p className="mt-2 text-foreground/80">
                    E continuar vivendo noites de estresse e cansaço, vendo seu filho agitado e sem conseguir dormir.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-100 border border-green-200 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <ArrowRight className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl font-bold">Tomar uma atitude</h3>
                  <p className="mt-2 text-foreground/80">
                    E escolher a paz e o bem-estar do seu filho, aplicando um método que já ajudou centenas de famílias.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
             <a href="#oferta" className="block">
                <Button size="lg" className="w-full md:w-auto h-14 text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
                   QUERO O MÉTODO POR APENAS R$ 37,90
                </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
