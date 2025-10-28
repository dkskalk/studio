import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ogImage = PlaceHolderImages.find(img => img.id === 'og-image');

export const metadata: Metadata = {
  title: 'Método Neurohipnose Infantil™ - Faça seu filho dormir em 20 minutos',
  description: 'Descubra como fazer seu filho hiperativo adormecer em até 20 minutos com o Protocolo de Ondas Delta Induzidas. Transforme suas noites e a vida da sua família.',
  openGraph: {
    title: 'Método Neurohipnose Infantil™ - Faça seu filho dormir em 20 minutos',
    description: 'A solução definitiva para as noites em claro. Um método cientificamente comprovado para acalmar e induzir o sono em crianças da era pós-digital.',
    url: 'https://neurohipno-landing.com', // Replace with your actual domain
    siteName: 'NeuroHypno Landing',
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
    title: 'Método Neurohipnose Infantil™ - Faça seu filho dormir em 20 minutos',
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
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
