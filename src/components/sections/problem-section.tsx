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
          <Alert className="mt-10 max-w-2xl mx-auto bg-secondary border-accent text-left shadow-lg">
            <Terminal className="h-5 w-5 text-accent" />
            <AlertTitle className="font-headline text-lg font-bold text-secondary-foreground">ATENÇÃO: Descoberta Revolucionária!</AlertTitle>
            <AlertDescription className="text-secondary-foreground/90">
              Esta Descoberta Revolucionária Está Transformando a Vida de Centenas de Mães Brasileiras, e você está prestes a entender o porquê.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
