import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Você se sente exausta, sobrecarregada e sem esperança?
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Noites em claro, o choro incessante, a agitação que parece não ter fim... A jornada de uma mãe de uma criança hiperativa pode ser solitária e desesperadora. Você ama seu filho mais do que tudo, mas a exaustão física e emocional está te consumindo. Você já tentou de tudo: chás, rotinas, talvez até medicamentos, mas nada parece funcionar de verdade.
          </p>
        </div>
      </div>
    </section>
  );
}
