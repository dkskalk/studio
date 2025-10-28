import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Waves, Power } from 'lucide-react';

const discoveries = [
  {
    icon: <Waves className="h-8 w-8 text-accent" />,
    title: 'Ondas Delta Induzidas',
    description: 'Nosso método utiliza frequências sonoras específicas (ondas delta) que guiam suavemente o cérebro da criança para o estado de sono profundo, de forma natural e segura.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: 'Neuroplasticidade Auditiva',
    description: 'Através da exposição repetida, o cérebro da criança "aprende" a entrar no modo de relaxamento mais rapidamente, criando um novo padrão neural positivo para o sono.',
  },
  {
    icon: <Power className="h-8 w-8 text-accent" />,
    title: 'Desligamento do "Modo Alerta"',
    description: 'A hiperatividade é um estado de alerta constante. Nossas técnicas desligam esse interruptor, acalmando o sistema nervoso e permitindo que o corpo e a mente finalmente descansem.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-primary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            As Descobertas Científicas Que Vão Mudar Sua Vida Para Sempre
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            O que estamos apresentando não é mágica, é ciência aplicada. Entenda os pilares que tornam o Método Neurohipnose Infantil™ tão eficaz.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {discoveries.map((discovery, index) => (
            <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto bg-primary rounded-full p-4 w-fit">
                  {discovery.icon}
                </div>
                <CardTitle className="font-headline pt-4">{discovery.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">{discovery.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
