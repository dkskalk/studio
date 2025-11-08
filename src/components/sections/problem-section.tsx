import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function ProblemSection() {
  return (
    <section className="pt-0 md:pt-4 pb-10 md:pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-2 neon-glow-accent animate-pulse">SEU FILHO NÃO DORME E ISSO ESTA TE ENLOUQUECENDO</Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mt-4">
              💔 Entre o cansaço e a culpa, existe uma verdade: apenas você pode transformar sua realidade.
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              A jornada de uma mãe pode ser solitária e desesperadora. Você ama seu filho mais do que tudo, mas a exaustão física e emocional está te consumindo. Você já tentou de tudo, mas nada parece funcionar.
            </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
             <Alert className="bg-accent/10 border-accent/20 text-accent shadow-lg animate-pulse">
                <AlertTitle className="font-headline text-lg font-bold text-center">ATENÇÃO: Descoberta Revolucionária!</AlertTitle>
                <AlertDescription className="text-center text-base text-accent/90">
                    As crianças da era digital possuem uma atividade cerebral mais acelerada por conta do excesso de estímulos que recebem. Por isso os métodos tradicionais para dormir não funcionam com elas.
                </AlertDescription>
            </Alert>
        </div>
      </div>
    </section>
  );
}
