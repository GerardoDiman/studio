
'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import NavLink from './nav-link';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/#quienes-somos', label: 'Quiénes Somos' },
  { href: '/#por-que-elegirnos', label: 'Por Qué Elegirnos' },
  { href: '/#nuestro-proceso', label: 'Nuestro Proceso' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/tecnologias', label: 'Tecnologías' },
  { href: '/testimonios', label: 'Testimonios' },
  { href: '/faq', label: 'FAQ' },
  { href: '/recomendacion-ia', label: 'Recomendación IA' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 bg-background/80 backdrop-blur-md',
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-3xl font-extrabold text-primary tracking-tight">
            DIMAN AUTOMATIONS
          </Link>

          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7 text-primary" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background shadow-xl pb-4">
          <nav className="flex flex-col items-center space-y-2 px-4">
            {navItems.map((item) => (
               <NavLink key={item.label} href={item.href} onClick={toggleMenu} className="w-full text-center py-2">
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
