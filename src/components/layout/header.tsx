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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 relative"> {/* Added relative for absolute positioning context */}
        <Link href="/" className="text-xl md:text-2xl lg:text-3xl font-extrabold text-primary tracking-tight whitespace-nowrap">
          DIMAN AUTOMATIONS
        </Link>

        {/* Navegación para escritorio (visible en pantallas grandes) */}
        {/* This block is hidden to show hamburger in all sizes */}
        <nav className="hidden space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Adjusted positioning for the hamburger button */}

          {/* Botón de hamburguesa (visible en pantallas pequeñas y medianas) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Button is now fixed, removed its container div */}
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" className="fixed top-4 right-4 z-50">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu panel - visible when isMenuOpen is true in all sizes */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background shadow-xl pb-4 animate-in slide-in-from-top-8 duration-300 overflow-x-hidden">
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