import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Countdown from '@/components/ui/countdown';
import { CheckCircle2, Lock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const lifetimeItems = [
    'Áudios de Neurohipnose',
    'Técnicas de Relaxamento',
    'Guia de Rotina do Sono',
    'Bônus Exclusivos',
    'Acesso Vitalício',
];

const monthlyItems = [
    'Áudios de Neurohipnose',
    'Técnicas de Relaxamento',
    'Guia de Rotina do Sono',
];

export default function OfferSection() {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="lifetime" className="max-w-4xl mx-auto">
          <Card className="bg-primary/20 shadow-2xl border-accent/30 shadow-accent/20 transition-all hover:shadow-accent/30 neon-glow-accent">
            <CardContent className="p-6 md:p-12 text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                Escolha o plano perfeito para sua família
              </h2>
              
              <TabsList className="grid w-full grid-cols-2 mt-8 h-auto">
                <TabsTrigger value="lifetime" className="text-base py-3">Acesso Vitalício</TabsTrigger>
                <TabsTrigger value="monthly" className="text-base py-3">Assinatura Mensal</TabsTrigger>
              </TabsList>

              <TabsContent value="lifetime">
                <div className="my-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <div className="text-center">
                        <p className="text-lg text-foreground/70 line-through">De R$ 379,90 por apenas</p>
                        <p className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                            R$ 37<span className="text-4xl md:text-5xl align-top">,90</span>
                        </p>
                        <p className="font-semibold text-foreground/80">(Pagamento único)</p>
                    </div>
                     <div className="w-full md:w-auto p-6 bg-background rounded-lg">
                        <h4 className="font-headline font-bold text-xl text-center">Acesso Completo:</h4>
                         <ul className="mt-4 space-y-2 text-left">
                            {lifetimeItems.map(item => (
                                 <li key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <a href="#" className="block">
                  <Button size="lg" className="w-full h-16 text-lg md:text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform animate-pulse">
                    QUERO ACESSO VITALÍCIO AGORA!
                  </Button>
                </a>
              </TabsContent>

              <TabsContent value="monthly">
                <div className="my-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <div className="text-center">
                        <p className="text-lg text-foreground/70">Assinatura mensal por apenas</p>
                        <p className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                            R$ 9<span className="text-4xl md:text-5xl align-top">,90</span>
                        </p>
                        <p className="font-semibold text-foreground/80">(por mês)</p>
                    </div>
                     <div className="w-full md:w-auto p-6 bg-background rounded-lg">
                        <h4 className="font-headline font-bold text-xl text-center">Acesso Essencial:</h4>
                         <ul className="mt-4 space-y-2 text-left">
                            {monthlyItems.map(item => (
                                 <li key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                 <a href="#" className="block">
                  <Button size="lg" variant="secondary" className="w-full h-16 text-lg md:text-xl font-bold shadow-lg transform hover:scale-105 transition-transform">
                    ASSINAR PLANO MENSAL
                  </Button>
                </a>
              </TabsContent>

              <div className="my-8">
                <p className="font-semibold text-foreground">A oferta de Acesso Vitalício termina em:</p>
                <Countdown />
              </div>
              
              <p className="mt-4 text-sm text-foreground/70 flex items-center justify-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>Compra 100% segura. Acesso imediato.</span>
              </p>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </section>
  );
}