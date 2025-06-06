
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ScrollToTopButton from '@/components/client/scroll-to-top-button';

export const metadata: Metadata = {
  title: 'DIMAN Automations - Efficiency Amplified',
  description: 'Impulsando la Eficiencia con Automatización - DIMAN AUTOMATIONS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
