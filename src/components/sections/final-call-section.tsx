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
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <div className="flex items-center gap-3">
                <XCircle className="h-8 w-8 text-red-500" />
                <h3 className="font-headline text-xl font-bold">1. Não fazer nada</h3>
              </div>
              <p className="mt-4 text-foreground/80">
                Você pode fechar esta página e voltar para a mesma rotina de estresse, exaustão e noites mal dormidas. As coisas provavelmente não vão mudar sozinhas.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <div className="flex items-center gap-3">
                <ArrowRight className="h-8 w-8 text-green-600" />
                <h3 className="font-headline text-xl font-bold">2. Tomar uma atitude</h3>
              </div>
              <p className="mt-4 text-foreground/80">
                Ou você pode fazer um pequeno investimento, livre de riscos, no bem-estar do seu filho e na sua paz de espírito. E ver com seus próprios olhos a transformação que o Método Neurohipnose Infantil™ pode trazer.
              </p>
            </div>
          </div>
          <div className="mt-12">
             <a href="#oferta" className="block">
                <Button size="lg" className="w-full md:w-auto h-14 text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
                   SIM, EU QUERO O MÉTODO NEUROHIPNOSE INFANTIL™ POR R$ 37,90
                </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
