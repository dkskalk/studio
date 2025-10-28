import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Marina S.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-marina'),
    text: "Eu estava no meu limite. Duas semanas usando o método e meu filho agora dorme a noite toda. Eu chorei de alívio na primeira noite. É um milagre!",
  },
  {
    name: 'Juliana P.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-juliana'),
    text: "Cética no início, mas desesperada. Hoje, não sei o que seria de mim sem essas faixas de áudio. Meu filho adormece sorrindo. Recomendo de olhos fechados!",
  },
  {
    name: 'Carolina M.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-carolina'),
    text: "O melhor investimento que já fiz pela minha saúde mental e pelo bem-estar do meu pequeno. As birras na hora de dormir acabaram. Só gratidão!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-primary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            A Prova Social Que Vai Te Convencer
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Veja o que mães, que estavam exatamente onde você está agora, têm a dizer sobre o método.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card shadow-lg p-6 flex flex-col items-center text-center">
              {testimonial.image && (
                 <Image
                    src={testimonial.image.imageUrl}
                    alt={`Foto de ${testimonial.name}`}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-primary"
                    data-ai-hint={testimonial.image.imageHint}
                />
              )}
              <CardContent className="p-0 pt-6">
                <p className="italic text-card-foreground/90">"{testimonial.text}"</p>
                <p className="font-bold font-headline mt-4 text-card-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
