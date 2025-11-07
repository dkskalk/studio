import { Check, X } from 'lucide-react';

export default function ForWhomSection() {
  return (
    <section id="para-quem" className="pt-10 pb-20 md:pt-14 md:pb-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-accent/20">
            <h3 className="font-headline text-2xl font-bold text-accent/90 mb-6 text-center">Para quem É o método</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Mães de crianças de 2 a 10 anos que são agitadas, hiperativas ou que simplesmente demoram a dormir.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Mães que já tentaram de tudo (chás, remédios, simpatias) e nada funcionou de forma consistente.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Mães que buscam uma solução natural, segura e baseada em ciência para melhorar as noites de sono.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Mães que se sentem exaustas, sobrecarregadas e que desejam recuperar a própria saúde mental e energia.</p>
              </li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-destructive/20">
            <h3 className="font-headline text-2xl font-bold text-destructive/90 mb-6 text-center">Para quem NÃO É o método</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Para mães que buscam uma 'pílula mágica' e não estão dispostas a criar uma rotina e aplicar o método com consistência.</p>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Para mães que não acreditam no poder da mente e da neurociência para influenciar o comportamento infantil.</p>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Para mães que preferem continuar no ciclo de estresse e noites mal dormidas, sem tomar uma atitude para mudar.</p>
              </li>
                 <li className="flex items-start gap-3">
                <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Para mães que não estão comprometidas em investir na qualidade de vida e no desenvolvimento saudável do seu filho.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
