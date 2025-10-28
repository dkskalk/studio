import { Lightbulb } from 'lucide-react';

export default function TruthSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-secondary p-8 md:p-12 rounded-lg shadow-inner">
          <Lightbulb className="h-10 w-10 text-accent mx-auto mb-4" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-secondary-foreground">
            A Verdade Que Nenhum Pediatra Vai Te Contar
          </h2>
          <div className="mt-6 text-left space-y-4 text-secondary-foreground/90 text-lg">
            <p>
              As crianças de hoje, da era pós-digital, nascem com uma fiação neurológica diferente. Elas são bombardeadas por estímulos visuais e sonoros desde o nascimento. O resultado? Um cérebro que opera em uma frequência mais alta, constantemente "ligado" e com uma dificuldade imensa de se "desligar" para dormir.
            </p>
            <p>
              Métodos tradicionais de sono foram criados para uma geração que não conhecia tablets ou smartphones. Eles simplesmente não são eficazes para acalmar um cérebro hiperestimulado. É por isso que você precisa de uma abordagem que fale a "língua" do cérebro do seu filho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
