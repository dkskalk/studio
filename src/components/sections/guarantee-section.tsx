import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Headphones, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const guarantees = [
  {
    icon: <DollarSign className="h-6 w-6 text-accent" />,
    title: 'Reembolso Total',
    description: '7 dias de garantia incondicional. Não gostou? Devolvemos 100% do seu investimento no mesmo instante.',
    tag: 'Garantia #1 - Risco Zero',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    title: 'Resultados Comprovados',
    description: 'Mais de 5.000 mãe já transformaram o sono de seus filhos e conseguiram noites de paz e tranquilidade novamente.',
    tag: 'Garantia #2 - Eficácia Testada',
  },
  {
    icon: <Headphones className="h-6 w-6 text-accent" />,
    title: 'Suporte Garantido',
    description: 'Equipe especializada disponivel 7 dias por semana para esclarecimento de duvida e resolução de problemas.',
    tag: 'Garantia #3 - Assistência Total',
  }
];

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Sua Compra 100% Segura
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Sua tranquilidade é nossa prioridade. Invista com total confiança.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee) => (
            <Card key={guarantee.title} className="group relative overflow-hidden rounded-2xl border bg-card/50 shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-accent/30 bg-accent/10 hover:border-accent/50 neon-glow-accent">
              <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <Shield className="h-6 w-6 text-foreground/50"/>
                        <CardTitle className="font-headline text-xl">{guarantee.title}</CardTitle>
                    </div>
                    <div className="flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-accent/20">
                        {guarantee.icon}
                    </div>
                </div>
                <CardContent className="p-0 pt-4">
                  <p className="text-card-foreground/70">{guarantee.description}</p>
                </CardContent>
                 <div className="pt-4 mt-auto">
                    <Badge variant="outline" className="bg-accent/20 text-accent-foreground border-accent/30">{guarantee.tag}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
