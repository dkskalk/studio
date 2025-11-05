import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Hourglass, ShieldCheck } from 'lucide-react';

const guarantees = [
  {
    icon: <Lock className="h-8 w-8 text-accent" />,
    title: 'Garantia Incondicional de 7 Dias',
    subtitle: 'Risco Zero Legal',
    description: 'Se você comprar o método e, por QUALQUER motivo, nos primeiros 7 dias não sentir confiança, não gostar do tom de voz, ou simplesmente mudar de ideia, é só enviar um e-mail. Devolvemos 100% do seu investimento, sem perguntas e sem burocracia. O risco é todo nosso.',
    image: {
      id: 'guarantee-unconditional',
      url: 'https://images.unsplash.com/photo-1610888662651-05dbdec7cfae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxnb2xkZW4lMjBsb2NrJTIwY2FsZW5kYXJ8ZW58MHx8fHwxNzYyMzA0NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hint: 'golden lock calendar'
    }
  },
  {
    icon: <Hourglass className="h-8 w-8 text-accent" />,
    title: 'Garantia de Transformação em 30 Dias',
    subtitle: 'Risco Zero de Método',
    description: 'Siga o Método de Rotina e Transformação por 30 dias. Se, ao final desse período, você tiver aplicado todas as técnicas e não notar uma transformação significativa, eu não só devolvo 100% do seu investimento, como te dou o mesmo valor de bônus. Você só precisa provar que aplicou.',
    image: {
        id: 'guarantee-conditional',
        url: 'https://images.unsplash.com/photo-1651045858641-2289291a863d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxob3VyZ2xhc3MlMjBjaGVja21hcmt8ZW58MHx8fHwxNzYyMzA0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'hourglass checkmark'
    }
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Garantia Blindada Contra o Fracasso',
    subtitle: 'Risco Zero de Fracasso',
    description: 'Sabemos que a maior barreira é a aplicação. Se você se sentir travada, confusa ou desmotivada, você não estará sozinha. Terá acesso ao nosso canal de suporte e acompanhamento para que NÃO HAJA DESCULPAS para não ter o resultado. Nós garantimos que o problema não será a falta de apoio.',
    image: {
        id: 'guarantee-support',
        url: 'https://images.unsplash.com/photo-1580892543399-a3465a14be13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzdXBwb3J0JTIwaGFuZHN8ZW58MHx8fHwxNzYyMzA0NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'support hands'
    }
  }
];

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-20 md:py-28 bg-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Sua Tranquilidade é Nossa Prioridade: Conheça Nossa Tripla Garantia
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Assumimos todo o risco para que você possa tomar a melhor decisão para sua família com total segurança.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <Card key={guarantee.title} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col neon-glow-primary">
              <CardHeader className="text-center items-center">
                 <div className="mx-auto bg-primary/50 rounded-full p-4 w-fit">
                    {guarantee.icon}
                </div>
                <p className="text-sm font-semibold text-foreground uppercase tracking-wider pt-4">{guarantee.subtitle}</p>
                <CardTitle className="font-headline text-xl">{guarantee.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                 <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
                    <Image
                      src={guarantee.image.url}
                      alt={guarantee.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={guarantee.image.hint}
                    />
                </div>
                <p className="text-card-foreground/80 text-sm flex-grow">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
