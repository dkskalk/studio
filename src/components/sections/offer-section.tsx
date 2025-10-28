import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Countdown from '@/components/ui/countdown';
import { CheckCircle2, Lock } from 'lucide-react';

const includedItems = [
    'Áudios de Neurohipnose',
    'Técnicas de Relaxamento',
    'Guia de Rotina do Sono',
    'Bônus Exclusivos',
    'Acesso Vitalício',
];

export default function OfferSection() {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto bg-primary shadow-2xl border-border">
          <CardContent className="p-6 md:p-12 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">
              Oferta Especial de Lançamento
            </h2>
            
            <div className="my-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                <div className="text-center">
                    <p className="text-lg text-primary-foreground/70 line-through">De R$ 97,00 por apenas</p>
                    <p className="font-headline text-5xl md:text-7xl font-bold text-primary-foreground">
                        R$ 37<span className="text-4xl md:text-5xl align-top">,90</span>
                    </p>
                    <p className="font-semibold text-primary-foreground/80">(ou 4x de R$ 10,18)</p>
                </div>
                 <div className="w-full md:w-auto p-6 bg-background rounded-lg">
                    <h4 className="font-headline font-bold text-xl text-center">Acesso Completo:</h4>
                     <ul className="mt-4 space-y-2 text-left">
                        {includedItems.map(item => (
                             <li key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="my-8">
              <p className="font-semibold text-primary-foreground">Esta oferta com desconto termina em:</p>
              <Countdown />
            </div>

            <a href="#" className="block">
              <Button size="lg" className="w-full h-16 text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform animate-pulse">
                QUERO O MÉTODO POR APENAS R$ 37,90
              </Button>
            </a>
            <p className="mt-4 text-sm text-primary-foreground/70 flex items-center justify-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Compra 100% segura. Acesso imediato.</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
