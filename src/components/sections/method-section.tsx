import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Headphones, Puzzle, BarChart3, MessageCircle, Gift, CheckCircle2 } from 'lucide-react';

const modules = [
  {
    icon: <Puzzle className="h-8 w-8 text-accent" />,
    title: 'Módulo 1: Fundamentos da Neurohipnose',
    price: 'R$ 97',
    description: 'Entenda a ciência por trás do método e como preparar o ambiente perfeito para o sono.',
  },
  {
    icon: <Headphones className="h-8 w-8 text-accent" />,
    title: 'Módulo 2: Protocolo de Áudios Delta',
    price: 'R$ 147',
    description: 'Acesso à biblioteca completa de faixas de áudio com ondas delta, o coração do nosso método.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    title: 'Módulo 3: Rastreamento e Ajustes',
    price: 'R$ 97',
    description: 'Aprenda a monitorar o progresso e ajustar as técnicas para a necessidade individual do seu filho.',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-accent" />,
    title: 'Módulo 4: Comunicação e Hábitos',
    price: 'R$ 57',
    description: 'Técnicas de comunicação para reduzir a ansiedade e criar hábitos noturnos saudáveis e duradouros.',
  },
];

const bonuses = [
    { text: 'Guia de Alimentação para um Sono Tranquilo (Valor: R$ 47)' },
    { text: 'Acesso à Comunidade VIP de Mães no WhatsApp (Valor: R$ 97)' },
    { text: 'E-book: Lidando com Pesadelos e Terrores Noturnos (Valor: R$ 57)' },
];

export default function MethodSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Apresentando o Método Neurohipnose Infantil™
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Uma jornada passo a passo, desenhada para te dar as ferramentas e a confiança para reconquistar suas noites.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => (
            <Card key={module.title} className="flex flex-col text-center border-primary shadow-sm">
              <CardHeader className="items-center">
                {module.icon}
                <CardTitle className="font-headline text-lg pt-2">{module.title}</CardTitle>
                <Badge variant="secondary" className="mt-1">Valor: {module.price}</Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-center font-headline text-2xl md:text-3xl font-bold flex items-center justify-center gap-3">
                <Gift className="h-8 w-8 text-accent" />
                E você ainda recebe 3 Bônus Exclusivos!
            </h3>
            <Card className="mt-8 bg-secondary border-accent p-6">
                <ul className="space-y-4">
                    {bonuses.map((bonus, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                            <span className="text-lg text-secondary-foreground">{bonus.text}</span>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
      </div>
    </section>
  );
}
