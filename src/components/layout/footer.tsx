import Logo from './logo';

export default function Footer() {
  const currentYear = 2021;

  return (
    <footer className="bg-primary/20 border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Logo />
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-foreground/70 hover:text-foreground">Política de Privacidade</a>
            <a href="#" className="text-foreground/70 hover:text-foreground">Termos de Uso</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-foreground/60">
            <p className="font-bold">© {currentYear} Neurohipnose Infantil™. Todos os direitos reservados.</p>
            <p className='mt-4'>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09:00h às 18:00h. Lemos e respondemos todas as mensagens por ordem de chegada.</p>
        </div>
      </div>
    </footer>
  );
}
