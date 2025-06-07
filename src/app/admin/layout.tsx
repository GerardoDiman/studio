
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
// No main Header or Footer for admin layout to keep it clean
// import Header from '@/components/layout/header'; 
// import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Admin - DIMAN Automations',
  description: 'Panel de administración para DIMAN Automations',
};

export default function AdminLayout({
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
        {/* Optional: Add a simple admin-specific header here if needed later */}
        <main className="min-h-screen">{children}</main>
        {/* Optional: Add a simple admin-specific footer here if needed later */}
        <Toaster />
      </body>
    </html>
  );
}
