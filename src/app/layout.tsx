import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ThemeProvider } from '@/components/theme-provider';
import CookieConsent from '@/components/ui/cookie-consent';
import Script from 'next/script';

const ogImage = PlaceHolderImages.find(img => img.id === 'og-image');

export const metadata: Metadata = {
  title: 'Método NeuroHipnose Infantil™ - Faça seu filho dormir em 20 minutos',
  description: 'Descubra como fazer seu filho hiperativo adormecer em até 20 minutos com o Protocolo de Ondas Delta Induzidas. Transforme suas noites e a vida da sua família.',
  openGraph: {
    title: 'Método NeuroHipnose Infantil™ - Faça seu filho dormir em 20 minutos',
    description: 'A solução definitiva para as noites em claro. Um método cientificamente comprovado para acalmar e induzir o sono em crianças da era pós-digital.',
    url: 'https://neurohipno-landing.com', // Replace with your actual domain
    siteName: 'NeuroHipnose Infantil',
    images: ogImage ? [
      {
        url: ogImage.imageUrl,
        width: 1200,
        height: 630,
        alt: ogImage.description,
      },
    ] : [],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Método NeuroHipnose Infantil™ - Faça seu filho dormir em 20 minutos',
    description: 'Descubra como fazer seu filho hiperativo adormecer em até 20 minutos com o Protocolo de Ondas Delta Induzidas.',
    images: ogImage ? [ogImage.imageUrl] : [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1958447861753939');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1958447861753939&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          {children}
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
        <Script src="https://fast.wistia.net/player.js" strategy="lazyOnload" async />
      </body>
    </html>
  );
}
