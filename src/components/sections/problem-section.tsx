import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary">Seu filho não dorme?</Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mt-2">
              Você se sente cansada e sobrecarregada por não conseguir fazer seu filho dormir?
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              A jornada de uma mãe pode ser solitária e desesperadora. Você ama seu filho mais do que tudo, mas a exaustão física e emocional está te consumindo. Você já tentou de tudo, mas nada parece funcionar.
            </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
             <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive-foreground shadow-lg animate-pulse">
                <AlertTitle className="font-headline text-lg font-bold text-center">ATENÇÃO: Descoberta Revolucionária!</AlertTitle>
                <AlertDescription className="text-center text-base">
                    As crianças da era digital possuem uma atividade cerebral mais acelerada por conta do excesso de estímulos que recebem. Por isso os métodos tradicionais para dormir não funcionam com elas.
                </AlertDescription>
            </Alert>
        </div>
      </div>
    </section>
  );
}
