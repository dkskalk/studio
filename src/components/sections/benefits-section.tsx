import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Brain, Clock } from 'lucide-react';

const discoveries = [
  {
    icon: <Brain className="h-8 w-8 text-accent" />,
    title: 'Reprogramação mental para o sono',
    description: 'Através da repetição o cérebro da criança assimila as informações e aprende a relaxar na hora de dormir, criando um novo hábito.',
  },
  {
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: 'Rotina de relaxamento em 20 minutos',
    description: 'Técnicas de relaxamento que acalmam o sistema nervoso e faz com que a criança se sinta segura para dormir.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            🧠 Revelações recentes que mudam completamente a forma de entender o sono infantil no mundo moderno.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {discoveries.map((discovery, index) => (
            <Card key={index} className="bg-card shadow-lg hover:shadow-accent/20 transition-all duration-300 text-center border-2 border-primary/50 hover:border-accent/50 shadow-primary/20 hover:scale-105">
              <CardHeader>
                <div className="mx-auto bg-primary/50 rounded-full p-4 w-fit">
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
