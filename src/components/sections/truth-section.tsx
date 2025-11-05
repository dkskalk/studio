import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TruthSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-accent/10 border-2 border-accent/30 shadow-2xl shadow-accent/20 text-center neon-glow-accent">
            <CardHeader className="items-center">
                <div className="p-4 bg-white rounded-full border-2 border-accent/30 neon-glow-accent">
                    <Lightbulb className="h-10 w-10 text-accent animate-blink" />
                </div>
              <CardTitle className="font-headline text-2xl md:text-3xl font-bold pt-4">
                A verdade que nenhum pediatra irá te contar...
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg md:text-xl text-foreground/90 space-y-6 p-8">
              <p className="opacity-0 animate-fade-in-up [animation-delay:0.2s]">
                Crianças da era digital possuem uma fiação neurológica diferente. Bombardeadas por estímulos, seus cérebros operam em uma frequência mais alta, com imensa dificuldade de se "desligar" para dormir.
              </p>
              <p className="font-bold text-accent/90 opacity-0 animate-fade-in-up [animation-delay:0.5s]">
                Métodos tradicionais de sono, criados para uma geração pré-digital, simplesmente <span className="underline">não são eficazes</span> para acalmar um cérebro hiperestimulado.
              </p>
            </CardContent>
          </Card>
          <div className="mt-12 text-center">
            <a href="#oferta">
                <Button size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold shadow-lg transform hover:scale-105 transition-transform h-14 animate-pulse">
                  QUERO A SOLUÇÃO COMPROVADA
                </Button>
            </a>
            <p className="text-sm mt-2 text-foreground/70">Clique no botão acima para continuar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
