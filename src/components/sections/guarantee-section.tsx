import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, Headphones } from 'lucide-react';

const guarantees = [
  {
    icon: <DollarSign className="h-10 w-10 text-yellow-400" />,
    title: 'Reembolso Total',
    description: '30 dias de garantia incondicional. Não gostou? Devolvemos 100% do seu investimento.',
    color: 'yellow'
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-gray-400" />,
    title: 'Resultados Comprovados',
    description: 'Método validado por mais de 10 mil clientes. Resultados reais ou seu dinheiro de volta.',
    color: 'gray'
  },
  {
    icon: <Headphones className="h-10 w-10 text-orange-400" />,
    title: 'Suporte Garantido',
    description: 'Equipe dedicada pronta para ajudar você a alcançar seus objetivos.',
    color: 'orange'
  }
];

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
            <Card key={guarantee.title} className="bg-card/50 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center border border-white/10 hover:border-white/20 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className={`flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-${guarantee.color}-500/10 to-transparent border-2 border-${guarantee.color}-500/30 mb-4`}>
                    <div className={`flex items-center justify-center h-20 w-20 rounded-full bg-${guarantee.color}-500/10`}>
                        {guarantee.icon}
                    </div>
                </div>
                <CardTitle className="font-headline text-2xl">{guarantee.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-card-foreground/80">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}