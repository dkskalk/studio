import { Check, X } from 'lucide-react';

export default function ForWhomSection() {
  return (
    <section id="para-quem" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-green-100 border border-green-200 p-8 rounded-lg">
            <h3 className="font-headline text-2xl font-bold text-green-800 mb-6 text-center">Para quem É o método</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Mães de crianças de 2 a 10 anos que são agitadas, hiperativas ou que simplesmente demoram a dormir.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Pais que já tentaram de tudo (chás, remédios, simpatias) e nada funcionou de forma consistente.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Famílias que buscam uma solução natural, segura e baseada em ciência para melhorar as noites de sono.</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Mães que se sentem exaustas, sobrecarregadas e que desejam recuperar a própria saúde mental e energia.</p>
              </li>
            </ul>
          </div>
          <div className="bg-red-100 border border-red-200 p-8 rounded-lg">
            <h3 className="font-headline text-2xl font-bold text-red-800 mb-6 text-center">Para quem NÃO É o método</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Para quem busca uma 'pílula mágica' e não está disposto a criar uma rotina e aplicar o método com consistência.</p>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Para pais que não acreditam no poder da mente e da neurociência para influenciar o comportamento infantil.</p>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Para pessoas que preferem continuar no ciclo de estresse e noites mal dormidas, sem tomar uma atitude para mudar.</p>
              </li>
                 <li className="flex items-start gap-3">
                <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-foreground/80">Para quem não está comprometido em investir na qualidade de vida e no desenvolvimento saudável do seu filho.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
