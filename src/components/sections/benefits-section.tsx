import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Brain, Clock } from 'lucide-react';

const discoveries = [
  {
    icon: <Waves className="h-8 w-8 text-primary-foreground" />,
    title: 'Ondas sonoras que acalmam',
    description: 'Nosso método utiliza sons com frequências específicas que acalmam o cérebro da criança e o preparam para o sono profundo.',
  },
  {
    icon: <Brain className="h-8 w-8 text-primary-foreground" />,
    title: 'Reprogramação mental para o sono',
    description: 'Através da repetição o cérebro da criança assimila as informações e aprende a relaxar na hora de dormir, criando um novo hábito.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary-foreground" />,
    title: 'Rotina de relaxamento em 20 minutos',
    description: 'Técnicas de relaxamento que acalmam o sistema nervoso e faz com que a criança se sinta segura para dormir.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            As 3 descobertas da Neurohipnose que vão mudar a sua vida
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {discoveries.map((discovery, index) => (
            <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-2 border-primary">
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
