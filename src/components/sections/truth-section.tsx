import { Lightbulb } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function TruthSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-secondary p-8 md:p-12 rounded-lg shadow-inner border border-red-200">
          <div className="flex justify-center items-center gap-2">
            
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-secondary-foreground">
                A verdade que nenhum pediatra irá te contar...
            </h2>
          </div>
          <div className="mt-6 text-left space-y-4 text-secondary-foreground/90 text-lg">
            <p>
             As crianças da era digital nascem com uma fiação neurológica diferente. Elas são bombardeadas por estímulos visuais e sonoros desde o nascimento. O resultado? Um cérebro que opera em uma frequência mais alta, constantemente "ligado" e com uma dificuldade imensa de se "desligar" para dormir.
            </p>
            <p className='font-bold'>
              Métodos tradicionais de sono foram criados para uma geração que não conhecia tablets ou smartphones. Eles simplesmente não são eficazes para acalmar um cérebro hiperestimulado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
