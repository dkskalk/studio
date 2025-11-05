'use client';

import React, { useState } from 'react';
import Logo from './logo';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-primary/20 border-t">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Logo />
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button onClick={() => setIsPrivacyOpen(true)} className="text-foreground/70 hover:text-foreground hover:underline">Política de Privacidade</button>
              <button className="text-foreground/70 hover:text-foreground hover:underline">Termos de Uso</button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-xs text-foreground/60">
              <p className="font-bold">© {currentYear} NeuroHipnose Infantil™. Todos os direitos reservados.</p>
              <p className='mt-4'>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09:00h às 18:00h. Lemos e respondemos todas as mensagens por ordem de chegada.</p>
          </div>
        </div>
      </footer>

      <AlertDialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <AlertDialogContent className="max-w-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle className='text-2xl font-headline'>🧠💤 Política de Privacidade – Neurohipnose Infantil™</AlertDialogTitle>
            <AlertDialogDescription asChild>
                <ScrollArea className="h-[60vh] mt-4 pr-6">
                    <div className='space-y-4 text-foreground/80 text-sm'>
                        <h3 className="font-bold text-base text-foreground">1. Introdução</h3>
                        <p>A sua privacidade é fundamental para nós. Esta Política de Privacidade explica como coletamos, usamos, protegemos e tratamos as informações pessoais fornecidas por você ao acessar o site e os conteúdos relacionados ao Neurohipnose Infantil™, o Sistema de Indução Suave de Sono Profundo para Crianças. Ao continuar navegando ou fornecendo seus dados, você concorda com os termos descritos abaixo.</p>

                        <h3 className="font-bold text-base text-foreground">2. Coleta de Informações</h3>
                        <p>Coletamos informações pessoais apenas quando necessário para oferecer uma experiência segura e personalizada. Isso pode incluir:</p>
                        <ul className='list-disc pl-5 space-y-1'>
                            <li><strong>Informações de contato:</strong> nome, e-mail, telefone e cidade, quando você se cadastra para receber conteúdos, ofertas ou suporte.</li>
                            <li><strong>Informações de compra:</strong> dados de pagamento e endereço, processados de forma segura por plataformas de terceiros (como Hotmart, Kiwify, Eduzz ou plataformas equivalentes).</li>
                            <li><strong>Dados de navegação:</strong> endereço IP, tipo de dispositivo, navegador, páginas acessadas e tempo de visita (por meio de cookies e ferramentas analíticas como Google Analytics ou Meta Pixel).</li>
                        </ul>
                        <p>Essas informações nos ajudam a entender melhor o perfil de nossos visitantes e oferecer comunicações e ofertas mais relevantes.</p>

                        <h3 className="font-bold text-base text-foreground">3. Uso das Informações</h3>
                        <p>As informações coletadas são utilizadas para:</p>
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Processar e liberar o acesso ao produto Neurohipnose Infantil™.</li>
                            <li>Enviar e-mails com instruções, materiais complementares e atualizações sobre o programa.</li>
                            <li>Oferecer suporte e atendimento personalizado.</li>
                            <li>Divulgar conteúdos educativos e informativos sobre sono infantil, quando autorizado.</li>
                            <li>Cumprir obrigações legais e de segurança digital.</li>
                        </ul>
                        <p>Nenhum dado pessoal é utilizado fora dessas finalidades.</p>

                        <h3 className="font-bold text-base text-foreground">4. Compartilhamento de Dados</h3>
                        <p>Não vendemos nem compartilhamos suas informações pessoais com terceiros fora das finalidades do projeto. Podemos compartilhar dados apenas com:</p>
                        <ul className='list-disc pl-5 space-y-1'>
                             <li>Parceiros de pagamento e entrega digital (como Hotmart, Kiwify, Stripe, PayPal etc.), para processar transações com segurança.</li>
                            <li>Serviços de marketing autorizados, que nos auxiliam na automação de e-mails, anúncios ou análises de desempenho (ex: Google, Meta, RD Station).</li>
                            <li>Autoridades legais, caso haja exigência por lei ou determinação judicial.</li>
                        </ul>
                        <p>Todos os parceiros seguem padrões de segurança e confidencialidade compatíveis com a LGPD.</p>

                        <h3 className="font-bold text-base text-foreground">5. Cookies e Tecnologias Semelhantes</h3>
                        <p>Utilizamos cookies para melhorar o funcionamento do site e oferecer uma navegação mais personalizada. Os cookies ajudam a entender o comportamento dos visitantes e aprimorar a comunicação de anúncios e conteúdos. Você pode optar por desativar os cookies no seu navegador, embora isso possa limitar algumas funcionalidades do site.</p>

                        <h3 className="font-bold text-base text-foreground">6. Segurança das Informações</h3>
                        <p>Empregamos medidas técnicas e administrativas rigorosas para proteger seus dados contra acessos não autorizados, perdas ou alterações indevidas. Todo o tráfego de informações sensíveis é criptografado (SSL), garantindo que seus dados circulem de forma segura.</p>

                        <h3 className="font-bold text-base text-foreground">7. Direitos do Titular dos Dados</h3>
                        <p>De acordo com a LGPD, você tem o direito de:</p>
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Acessar e confirmar a existência do tratamento de seus dados.</li>
                            <li>Solicitar correção, atualização ou exclusão de informações pessoais.</li>
                            <li>Revogar consentimentos e optar por não receber comunicações.</li>
                            <li>Solicitar portabilidade dos seus dados para outro fornecedor.</li>
                        </ul>
                        <p>Para exercer esses direitos, entre em contato conosco pelo e-mail: contato@neurohipnoseinfantil.com.br .</p>

                        <h3 className="font-bold text-base text-foreground">8. Retenção e Exclusão de Dados</h3>
                        <p>Manteremos seus dados apenas pelo tempo necessário para cumprir as finalidades desta política, atender às exigências legais ou enquanto houver relação ativa com o programa Neurohipnose Infantil™. Após esse período, as informações serão excluídas com segurança.</p>

                        <h3 className="font-bold text-base text-foreground">9. Alterações nesta Política</h3>
                        <p>Podemos atualizar esta Política de Privacidade sempre que necessário para refletir mudanças legais, técnicas ou operacionais. A versão mais recente estará sempre disponível nesta página, com a data da última atualização.</p>

                        <h3 className="font-bold text-base text-foreground">10. Contato</h3>
                        <p>Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o uso dos seus dados, fale conosco:<br/>
                        📧 contato@neurohipnoseinfantil.com.br<br/>
                        🌐 www.neurohipnoseinfantil.com.br</p>
                        <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
                    </div>
                </ScrollArea>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" onClick={() => setIsPrivacyOpen(false)}>Fechar</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
