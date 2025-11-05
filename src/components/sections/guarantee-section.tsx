import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Headphones, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const guarantees = [
  {
    icon: <DollarSign className="h-6 w-6 text-yellow-300" />,
    title: 'Reembolso Total',
    description: '7 dias de garantia incondicional. Não gostou? Devolvemos 100% do seu investimento no mesmo instante.',
    tag: 'Garantia #1 - Risco Zero',
    color: 'yellow'
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-blue-300" />,
    title: 'Resultados Comprovados',
    description: 'Mais de 10.000 clientes já transformaram seus resultados com nosso sistema validado.',
    tag: 'Garantia #2 - Eficácia Testada',
    color: 'blue'
  },
  {
    icon: <Headphones className="h-6 w-6 text-purple-300" />,
    title: 'Suporte Garantido',
    description: 'Equipe especializada disponível 7 dias por semana para resolver qualquer dúvida ou problema.',
    tag: 'Garantia #3 - Assistência Total',
    color: 'purple'
  }
];

const colorClasses = {
    yellow: {
        card: 'border-yellow-500/30 bg-yellow-500/10 hover:border-yellow-500/50',
        iconBg: 'bg-yellow-500/20 neon-glow-yellow',
        badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
    },
    blue: {
        card: 'border-blue-500/30 bg-blue-500/10 hover:border-blue-500/50',
        iconBg: 'bg-blue-500/20 neon-glow-blue',
        badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    },
    purple: {
        card: 'border-purple-500/30 bg-purple-500/10 hover:border-purple-500/50',
        iconBg: 'bg-purple-500/20 neon-glow-purple',
        badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    }
}


export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-20 md:py-28 bg-background">
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
            <Card key={guarantee.title} className={cn(
                "group relative overflow-hidden rounded-2xl border bg-card/50 shadow-lg transition-all duration-300 transform hover:-translate-y-2",
                colorClasses[guarantee.color as keyof typeof colorClasses].card
            )}>
              <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <Shield className="h-6 w-6 text-foreground/50"/>
                        <CardTitle className="font-headline text-xl">{guarantee.title}</CardTitle>
                    </div>
                    <div className={cn("flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110", colorClasses[guarantee.color as keyof typeof colorClasses].iconBg)}>
                        {guarantee.icon}
                    </div>
                </div>
                <CardContent className="p-0 pt-4">
                  <p className="text-card-foreground/70">{guarantee.description}</p>
                </CardContent>
                 <div className="pt-4 mt-auto">
                    <Badge variant="outline" className={cn(colorClasses[guarantee.color as keyof typeof colorClasses].badge)}>{guarantee.tag}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}