import Image from 'next/image';

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="https://picsum.photos/seed/guarantee-seal/300/300"
              alt="Selo de Garantia"
              width={300}
              height={300}
              className="rounded-full"
              data-ai-hint="guarantee seal"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Garantia de 7 Dias!
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Você tem 7 dias para testar o método Neurohipnose Infantil. Se por qualquer motivo você não gostar ou achar que não é para você, basta enviar um único e-mail para nossa equipe de suporte e nós devolveremos 100% do seu dinheiro na hora, sem perguntas ou burocracia.
            </p>
            <p className="mt-4 text-lg font-bold text-foreground">
              O risco é todo nosso!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
