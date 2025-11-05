import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TruthSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-primary/20 border-2 border-primary/50 shadow-2xl shadow-primary/20 text-center">
            <CardHeader className="items-center">
                <div className="p-4 bg-accent/20 rounded-full border-2 border-accent/30 neon-glow-accent">
                    <Lightbulb className="h-10 w-10 text-accent animate-pulse" />
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
        </div>
      </div>
    </section>
  );
}
