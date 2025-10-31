import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Headphones, Puzzle, BarChart3, Gift } from 'lucide-react';

const modules = [
  {
    icon: <Headphones className="h-8 w-8 text-accent" />,
    title: 'Áudios de Neurohipnose',
    price: 'R$ 97',
    description: 'Áudios com o método de neurohipnose para acalmar e fazer seu filho dormir.',
  },
  {
    icon: <Puzzle className="h-8 w-8 text-accent" />,
    title: 'Técnicas de Relaxamento',
    price: 'R$ 147',
    description: 'Técnicas para acalmar o sistema nervoso e fazer a criança se sentir segura.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    title: 'Guia de Rotina do Sono',
    price: 'R$ 97',
    description: 'Um passo a passo para criar uma rotina de sono saudável para seu filho.',
  },
   {
    icon: <Gift className="h-8 w-8 text-accent" />,
    title: 'Bônus Exclusivos',
    price: 'R$ 57',
    description: 'Materiais extras para te ajudar a lidar com a ansiedade e outros problemas.',
  },
];


export default function MethodSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline">Conteúdo do método</Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                O que você vai receber
            </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module) => (
            <Card key={module.title} className="flex flex-col text-center border-2 border-transparent shadow-lg bg-primary/20 neon-glow-primary transition-all duration-300 hover:scale-105 hover:shadow-accent/20">
              <CardHeader className="items-center">
                <div className="bg-primary/50 rounded-full p-3 w-fit">
                    {module.icon}
                </div>
                <CardTitle className="font-headline text-xl pt-2">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
