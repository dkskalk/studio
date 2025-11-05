import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "Como vou receber minha compra?",
      answer: "Assim que efetuar o pagamento, receberá em seu email um link direcionando para uma área de membros com todo conteúdo do curso disponível, de acordo com o seu plano.",
    },
    {
      question: "O método é seguro para meu filho?",
      answer: "Sim, o método NeuroHipnose Infantil™ é 100% seguro e foi desenvolvido com base em princípios da neurociência e psicologia do sono. Os áudios utilizam frequências sonoras e narrativas que induzem o relaxamento de forma natural, sem qualquer efeito colateral.",
    },
    {
      question: "A partir de que idade posso usar o método?",
      answer: "O método é mais eficaz em crianças a partir dos 2 anos de idade, que já possuem uma maior capacidade de compreensão e são mais suscetíveis às técnicas de relaxamento e indução do sono propostas. Porem, pode ser utilizado tambem em crianças a partir de 1 ano.",
    },
    {
      question: "E se não funcionar para o meu filho?",
      answer: "Oferecemos uma garantia incondicional de 7 dias. Se você não notar uma melhora significativa no sono do seu filho nesse período, basta nos enviar um e-mail e devolveremos 100% do seu investimento, sem burocracia.",
    },
    {
      question: "Preciso de algum equipamento especial?",
      answer: "Não. Tudo que você precisa é de um dispositivo que possa tocar os áudios, como um celular, tablet ou computador. Recomendamos o uso de fones de ouvido confortáveis para a criança, mas não é obrigatório.",
    },
    {
      question: "Quanto tempo leva para ver os resultados?",
      answer: "Muitos pais relatam melhoras notáveis desde as primeiras noites de uso. No entanto, o cérebro infantil precisa de um tempo para criar um novo hábito de sono. Recomendamos o uso contínuo por pelo menos 21 noites para resultados consolidados e transformadores.",
    },
  ];
  
  export default function FaqSection() {
    return (
      <section id="faq" className="py-20 md:py-28 bg-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Ainda tem dúvidas? A gente te ajuda a esclarecer tudo.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
