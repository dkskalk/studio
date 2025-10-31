"use client"

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const testimonials = [
  {
    name: 'Marina S.',
    location: 'São Paulo, SP',
    image: {imageUrl: 'https://images.unsplash.com/photo-1599557049362-79c351ergf73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb3RoZXIlMjBhbmQlMjBzb258ZW58MHx8fHwxNzYxNjEzMzk0fDA&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'mother son'},
    text: "Meu filho de 4 anos não dormia de jeito nenhum, eu já estava exausta e não sabia mais o que fazer. O método foi a minha salvação, hoje ele dorme a noite toda e eu voltei a ter paz.",
  },
  {
    name: 'Juliana P.',
    location: 'Rio de Janeiro, RJ',
    image: {imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHdvbWFufGVufDB8fHx8MTc2MTYxMzUxMXww&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'content woman'},
    text: "Cética no início, mas desesperada. Hoje, não sei o que seria de mim sem essas faixas de áudio. Meu filho adormece sorrindo. Recomendo de olhos fechados!",
  },
  {
    name: 'Carolina M.',
    location: 'Belo Horizonte, MG',
    image: {imageUrl: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZWxpZXZlZCUyMHdvbWFufGVufDB8fHx8MTc2MTYxMzU0Nnww&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'relieved woman'},
    text: "O melhor investimento que já fiz pela minha saúde mental e pelo bem-estar do meu pequeno. As birras na hora de dormir acabaram. Só gratidão!",
  },
  {
    name: 'Fernanda L.',
    location: 'Salvador, BA',
    image: {imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzZWF0Y2h8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzYxNjEzNTgyfDA&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'smiling woman'},
    text: "Funciona mesmo! Meu filho agora pede pelos 'áudios mágicos' antes de dormir. É incrível ver ele relaxando e adormecendo em minutos.",
  },
  {
    name: 'Patricia R.',
    location: 'Curitiba, PR',
    image: {imageUrl: 'https://images.unsplash.com/photo-1565498212132-3e582834b358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxoYXBweSUyMG1vdGhlcnxlbnwwfHx8fDE3NjE2MTM2MTB8MA&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'happy mother'},
    text: "Estava a um passo de um burnout. Esse método não só ajudou meu filho a dormir, mas salvou minhas noites e minha sanidade. Recomendo para todas as mães.",
  },
  {
    name: 'Amanda C.',
    location: 'Fortaleza, CE',
    image: {imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc2MTYxMzY0NHww&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'woman portrait'},
    text: "Meu filho era muito agitado à noite. Com a rotina e os áudios, ele se acalma e o sono vem naturalmente. Transformou nossa casa.",
  },
    {
    name: 'Sofia B.',
    location: 'Porto Alegre, RS',
    image: {imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc2MTYxMzY0NHww&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'woman smiling'},
    text: "Achei que era exagero, mas em 3 dias meu filho já dormia mais rápido. Em uma semana, ele já não acordava mais de madrugada. Milagroso!",
  },
  {
    name: 'Laura F.',
    location: 'Brasília, DF',
    image: {imageUrl: 'https://images.unsplash.com/photo-1621992128099-4a991443585c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtb3RoZXIlMjBkYXVnaHRlcnxlbnwwfHx8fDE3NjE2MTM3MjJ8MA&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'mother daughter'},
    text: "Minha filha de 6 anos sempre teve o sono leve. Os áudios ajudaram ela a ter um sono mais profundo e reparador. Ela acorda muito mais disposta!",
  },
  {
    name: 'Beatriz G.',
    location: 'Recife, PE',
    image: {imageUrl: 'https://images.unsplash.com/photo-1598207951491-255eaf139943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb3RoZXIlMjBvdXRkb29yfGVufDB8fHx8MTc2MTYxMzc1Mnww&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'mother outdoor'},
    text: "O guia de rotina foi essencial. Junto com os áudios, criamos um ritual de sono que funciona todas as noites. Adeus, noites em claro!",
  },
  {
    name: 'Gabriela A.',
    location: 'Manaus, AM',
    image: {imageUrl: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxoYXBweSUyMHBlcnNvbnxlbnwwfHx8fDE3NjE2MTM3ODF8MA&ixlib=rb-4.1.0&q=80&w=200', imageHint: 'happy person'},
    text: "Vale cada centavo. A paz que temos em casa agora não tem preço. Meu filho dorme tranquilo e eu também. Obrigada!",
  },
];

const StarRating = () => (
    <div className="flex text-yellow-400">
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
    </div>
)

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Mães que recuperaram a paz
          </h2>
        </div>
        <div className="mt-12">
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
             plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                     <Card className="bg-card shadow-lg p-6 flex flex-col h-full">
                        <div className="flex items-center gap-4">
                            {testimonial.image && (
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                                    <Image
                                        src={testimonial.image.imageUrl}
                                        alt={`Foto de ${testimonial.name}`}
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full"
                                        data-ai-hint={testimonial.image.imageHint}
                                    />
                                </div>
                            )}
                            <div>
                                <p className="font-bold font-headline text-card-foreground">{testimonial.name}</p>
                                <p className="text-sm text-card-foreground/70">{testimonial.location}</p>
                            </div>
                        </div>
                        <CardContent className="p-0 pt-4 flex-grow">
                            <p className="italic text-card-foreground/90">"{testimonial.text}"</p>
                        </CardContent>
                        <div className="pt-4 mt-auto">
                            <StarRating />
                        </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
