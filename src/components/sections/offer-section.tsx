'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Countdown from '@/components/ui/countdown';
import { CheckCircle2, Lock, AlertTriangle, X, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import SpecialOfferCountdown from '@/components/ui/special-offer-countdown';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';


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

const totalSubscriptions = 200;

export default function OfferSection() {
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);
  const [availableSubs, setAvailableSubs] = useState(8);
  const [showViewers, setShowViewers] = useState(false);
  const [viewersCount, setViewersCount] = useState(0);
  const [animateSubs, setAnimateSubs] = useState(false);

  const progressValue = ((totalSubscriptions - availableSubs) / totalSubscriptions) * 100;
  
  const triggerSubsAnimation = () => {
    setAnimateSubs(true);
    setTimeout(() => setAnimateSubs(false), 500); // Duration of the animation
  }

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    let viewersInterval: NodeJS.Timeout;

    if (showSpecialOffer) {
      // Reset state when modal opens
      setAvailableSubs(8);
      setShowViewers(false);
      setViewersCount(0);

      // --- Initial Scripted Events ---

      // At 5s: Show 3 viewers for 3s
      timeouts.push(setTimeout(() => {
        setViewersCount(3);
        setShowViewers(true);
        timeouts.push(setTimeout(() => setShowViewers(false), 3000));
      }, 5000));
      
      // At 10s: Update subscription count
      timeouts.push(setTimeout(() => {
        setAvailableSubs(7);
        triggerSubsAnimation();
      }, 10000));

      // At 20s: Show 6 viewers for 3s
      timeouts.push(setTimeout(() => {
        setViewersCount(6);
        setShowViewers(true);
        timeouts.push(setTimeout(() => setShowViewers(false), 3000));
      }, 20000));

      // --- Recurring Random Events ---

      // After 27s, start the recurring notification
      timeouts.push(setTimeout(() => {
        const showRandomViewers = () => {
          const randomViewers = Math.floor(Math.random() * 4) + 2; // Random number between 2 and 5
          setViewersCount(randomViewers);
          setShowViewers(true);
          timeouts.push(setTimeout(() => setShowViewers(false), 3000)); // Hide after 3 seconds
        };
        
        showRandomViewers(); // Show immediately at 27s
        viewersInterval = setInterval(showRandomViewers, 13000); // Repeat every 13s

      }, 27000));
    }

    // Cleanup function to clear all timeouts and intervals
    return () => {
      timeouts.forEach(clearTimeout);
      if (viewersInterval) {
        clearInterval(viewersInterval);
      }
    };
  }, [showSpecialOffer]);


  const handleMonthlyOfferClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowSpecialOffer(true);
  }

  return (
    <>
      <section id="oferta" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                  Escolha o plano ideal para trazer de volta suas noites de sono
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                  Comece a transformar suas noites hoje mesmo. Acesso imediato e 100% seguro.
              </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Lifetime Plan - Highlighted */}
              <Card className="bg-accent/10 shadow-2xl border-2 border-accent/50 shadow-accent/20 transition-all hover:shadow-accent/30 neon-glow-accent relative hover:scale-105 flex flex-col">
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">Mais Popular</Badge>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Acesso Vitalício</CardTitle>
                      <CardDescription>A solução completa e definitiva.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                      <div className="my-8 text-center">
                          <p className="text-lg text-foreground/70 line-through">De R$ 379,90 por apenas</p>
                          <p className="font-headline text-6xl font-bold text-foreground">
                              R$ 37<span className="text-5xl align-top">,90</span>
                          </p>
                          <p className="font-semibold text-foreground/80">(Pagamento único)</p>
                      </div>
                      <div className="p-6 bg-background rounded-lg flex-grow">
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
                      <a href="#" className="block mt-8">
                          <Button size="lg" className="w-full h-16 text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform animate-pulse">
                              QUERO ACESSO VITALÍCIO!
                          </Button>
                      </a>
                  </CardContent>
              </Card>

              {/* Monthly Plan */}
              <Card className="bg-primary/20 shadow-lg border-primary/30 transition-all hover:scale-105 flex flex-col">
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Assinatura Mensal</CardTitle>
                      <CardDescription>Acesso essencial para começar.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                      <div className="my-8 text-center">
                          <p className="text-lg text-foreground/70 line-through">De R$ 197,90 por</p>
                          <p className="font-headline text-5xl font-bold text-foreground">
                              R$ 9<span className="text-4xl align-top">,90</span>
                          </p>
                          <p className="font-semibold text-foreground/80">(por mês)</p>
                      </div>
                      <div className="p-6 bg-background rounded-lg flex-grow">
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
                      <a href="#" onClick={handleMonthlyOfferClick} className="block mt-8">
                          <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg transform hover:scale-105 transition-transform bg-accent text-accent-foreground hover:bg-accent/90">
                              ASSINAR PLANO MENSAL
                          </Button>
                      </a>
                  </CardContent>
              </Card>
          </div>

          <div className="mt-12 text-center">
              <p className="font-semibold text-foreground">A oferta de Acesso Vitalício termina em:</p>
              <Countdown />
              <p className="mt-4 text-sm text-foreground/70 flex items-center justify-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>Compra 100% segura. Acesso imediato.</span>
              </p>
          </div>
        </div>
      </section>

      <AlertDialog open={showSpecialOffer} onOpenChange={setShowSpecialOffer}>
        <AlertDialogContent className="bg-background border-yellow-400 shadow-yellow-400/30" style={{boxShadow: '0 0 15px hsl(var(--ring)), 0 0 20px hsl(var(--ring) / 0.8)'}}>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-3xl text-center text-yellow-400 flex items-center justify-center gap-2">
              <AlertTriangle className="h-8 w-8" /> OFERTA ÚNICA!
            </AlertDialogTitle>
            <div className="text-center mt-2">
              <p className="font-semibold text-destructive/80">Esta oferta expira em:</p>
              <SpecialOfferCountdown duration={120} onExpire={() => setShowSpecialOffer(false)} />
            </div>
            <div className="mt-2 text-center">
                <p className="font-semibold text-foreground/80">Assinaturas disponíveis:</p>
                <div className="flex items-center gap-2 justify-center">
                    <Progress value={progressValue} className="w-2/3 h-3 bg-primary/30 border border-white/50" />
                    <p className={cn(
                      "font-bold text-lg",
                      animateSubs && "animate-pulse-scale"
                    )}>{availableSubs}/{totalSubscriptions}</p>
                </div>
            </div>
            <AlertDialogDescription className="text-center text-lg text-foreground/90 mt-2">
              Parabéns! Você acabou de receber uma condição especial. Oferta limitada a 200 assinaturas.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="my-4 text-center">
            <h3 className="font-headline text-2xl font-bold">Acesso VITALÍCIO por um preço irrecusável!</h3>
            <p className="text-lg text-foreground/70 line-through mt-2">De R$ 379,90</p>
            <p className="font-headline text-7xl font-bold text-foreground">
                R$ 19<span className="text-6xl align-top">,90</span>
            </p>
            <p className="font-semibold text-foreground/80">(Pagamento único)</p>
          </div>
          

          <AlertDialogFooter className="sm:justify-center flex-col gap-2 mt-4 items-center">
              <a href="#" className="w-full">
                <Button size="lg" className="w-full h-14 text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg animate-pulse">
                  QUERO ESTA OFERTA AGORA!
                </Button>
              </a>
              <div className='text-center text-xs text-foreground/60 mt-2 space-y-1'>
                <a href="#" onClick={(e) => { e.preventDefault(); setShowSpecialOffer(false); }} className="underline hover:text-foreground">
                  Não, obrigado. Quero seguir com a assinatura mensal.
                </a>
              </div>
          </AlertDialogFooter>
           <button onClick={() => setShowSpecialOffer(false)} className="absolute top-2 right-2 p-1 rounded-full text-foreground/50 hover:bg-white/10 hover:text-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Fechar</span>
            </button>
            {showViewers && (
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border border-foreground/20 rounded-lg px-3 py-2 text-sm flex items-center gap-2 shadow-lg animate-fade-in-up">
                    <Eye className="h-5 w-5 text-accent animate-pulse" />
                    <p><span className="font-bold">{viewersCount}</span> pessoas estão vendo esta oferta.</p>
                </div>
            )}
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
