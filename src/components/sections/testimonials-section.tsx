"use client"

import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
    image: {imageUrl: 'https://storage.googleapis.com/aifirebase-7a2e4.appspot.com/users%2FwD8T2AxgZ5Rkwypzns1t2Tf51iA2%2Fprojects%2Fc2c5443e-a740-42f8-8a03-7a988d89e474%2F54cead7b9a52ab88b0a70f3f2d22f6d5.png?alt=media&token=850438b9-52e4-4d89-bb0d-c05284af65c6', imageHint: 'mother son'},
    text: "Meu filho de 4 anos não dormia de jeito nenhum, eu já estava exausta e não sabia mais o que fazer. O método foi a minha salvação, hoje ele dorme a noite toda e eu voltei a ter paz.",
  },
  {
    name: 'Juliana P.',
    location: 'Rio de Janeiro, RJ',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-juliana'),
    text: "Cética no início, mas desesperada. Hoje, não sei o que seria de mim sem essas faixas de áudio. Meu filho adormece sorrindo. Recomendo de olhos fechados!",
  },
  {
    name: 'Carolina M.',
    location: 'Belo Horizonte, MG',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-carolina'),
    text: "O melhor investimento que já fiz pela minha saúde mental e pelo bem-estar do meu pequeno. As birras na hora de dormir acabaram. Só gratidão!",
  },
  {
    name: 'Fernanda L.',
    location: 'Salvador, BA',
    image: {imageUrl: 'https://picsum.photos/seed/fernanda/60/60', imageHint: 'smiling woman'},
    text: "Funciona mesmo! Meu filho agora pede pelos 'áudios mágicos' antes de dormir. É incrível ver ele relaxando e adormecendo em minutos.",
  },
  {
    name: 'Patricia R.',
    location: 'Curitiba, PR',
    image: {imageUrl: 'https://picsum.photos/seed/patricia/60/60', imageHint: 'happy mother'},
    text: "Estava a um passo de um burnout. Esse método não só ajudou meu filho a dormir, mas salvou minhas noites e minha sanidade. Recomendo para todas as mães.",
  },
  {
    name: 'Amanda C.',
    location: 'Fortaleza, CE',
    image: {imageUrl: 'https://picsum.photos/seed/amanda/60/60', imageHint: 'woman portrait'},
    text: "Meu filho era muito agitado à noite. Com a rotina e os áudios, ele se acalma e o sono vem naturalmente. Transformou nossa casa.",
  },
    {
    name: 'Sofia B.',
    location: 'Porto Alegre, RS',
    image: {imageUrl: 'https://picsum.photos/seed/sofia/60/60', imageHint: 'woman smiling'},
    text: "Achei que era exagero, mas em 3 dias meu filho já dormia mais rápido. Em uma semana, ele já não acordava mais de madrugada. Milagroso!",
  },
  {
    name: 'Laura F.',
    location: 'Brasília, DF',
    image: {imageUrl: 'https://picsum.photos/seed/laura/60/60', imageHint: 'person portrait'},
    text: "Minha filha de 6 anos sempre teve o sono leve. Os áudios ajudaram ela a ter um sono mais profundo e reparador. Ela acorda muito mais disposta!",
  },
  {
    name: 'Beatriz G.',
    location: 'Recife, PE',
    image: {imageUrl: 'https://picsum.photos/seed/beatriz/60/60', imageHint: 'mother outdoor'},
    text: "O guia de rotina foi essencial. Junto com os áudios, criamos um ritual de sono que funciona todas as noites. Adeus, noites em claro!",
  },
  {
    name: 'Gabriela A.',
    location: 'Manaus, AM',
    image: {imageUrl: 'https://picsum.photos/seed/gabriela/60/60', imageHint: 'happy person'},
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
                                <Image
                                    src={testimonial.image.imageUrl}
                                    alt={`Foto de ${testimonial.name}`}
                                    width={60}
                                    height={60}
                                    className="rounded-full border-2 border-primary"
                                    data-ai-hint={testimonial.image.imageHint}
                                />
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
