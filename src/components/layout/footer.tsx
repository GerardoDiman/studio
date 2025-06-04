
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={24} />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={24} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={24} />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} DIMAN AUTOMATIONS. Todos los derechos reservados.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Política de Privacidad
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Términos de Servicio
          </Link>
        </div>
      </div>
    </footer>
  );
}
