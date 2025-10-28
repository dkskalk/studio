import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ShieldCheck, ShieldQuestion } from 'lucide-react';

const guarantees = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Garantia de Resultados em 7 Dias',
    description: 'Se em 7 dias você não notar uma melhora significativa no sono do seu filho, devolvemos 100% do seu dinheiro. Simples assim.',
  },
  {
    icon: <ShieldQuestion className="h-8 w-8 text-accent" />,
    title: 'Garantia Incondicional de Satisfação',
    description: 'Você tem 7 dias para testar tudo. Se por QUALQUER motivo não gostar, basta um e-mail para ter seu investimento de volta. Risco zero.',
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: 'Garantia de Acesso Vitalício',
    description: 'Pague uma vez e tenha acesso para sempre a todo o material e futuras atualizações. O método será seu para consultar quando precisar.',
  },
];

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-20 md:py-28 bg-primary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Garantia Tripla de Satisfação
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Sua decisão é 100% livre de riscos. Assumimos toda a responsabilidade porque confiamos no poder do nosso método.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-2 border-transparent hover:border-accent">
              <CardHeader>
                <div className="mx-auto bg-primary rounded-full p-4 w-fit">
                  {guarantee.icon}
                </div>
                <CardTitle className="font-headline pt-4">{guarantee.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
