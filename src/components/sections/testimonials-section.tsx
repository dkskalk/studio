import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marina S.',
    location: 'São Paulo, SP',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-marina'),
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card shadow-lg p-6 flex flex-col">
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
          ))}
        </div>
      </div>
    </section>
  );
}
