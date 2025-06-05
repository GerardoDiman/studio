
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TypingEffect from '@/components/client/typing-effect';

export default function CtaSection() {
  return (
    <SectionWrapper id="cta-final" className="bg-primary text-primary-foreground text-center !py-20 md:!py-28" applyAnimation={false}>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
        ¿Listo para <TypingEffect texts={['Transformar tu Negocio']} className="inline" />?
      </h2>
      <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
        Descubre cómo la automatización puede llevar tu empresa al siguiente nivel. Agenda una consulta gratuita con nuestros expertos.
      </p>
      <Button 
        asChild 
        size="lg" 
        className="btn-cta-special px-10 py-6 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
      >
        <Link href="/#contacto">Agenda una Consulta Gratuita</Link>
      </Button>
    </SectionWrapper>
  );
}
