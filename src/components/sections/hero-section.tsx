
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/section-wrapper';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <SectionWrapper id="inicio" className="!py-0 min-h-screen flex items-center justify-center relative overflow-hidden" applyAnimation={false}>
      {/* Background Image for Desktop */}
      <Image
        src="https://placehold.co/1920x1080/2d3748/f97316?text=Automatizacion"
        alt="Automatización de procesos empresariales"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="hidden md:block md:bg-fixed" // bg-fixed for parallax effect on desktop
        data-ai-hint="automation business"
      />
      {/* Background Image for Mobile */}
      <Image
        src="https://placehold.co/768x1024/2d3748/f97316?text=Automatizacion+Movil"
        alt="Automatización de procesos empresariales en móvil"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        className="md:hidden" // No parallax for mobile
        data-ai-hint="automation mobile"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 text-center p-4 animate-slide-up-fade-in max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-primary">Impulsando la </span>
          <span className="text-foreground">Eficiencia</span>
          <span className="text-primary"> con Automatización</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Transformamos tu negocio con soluciones de automatización inteligente, a medida y de vanguardia.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-10 py-6 text-lg font-semibold rounded-lg"
        >
          <Link href="#contacto">Contáctanos Hoy</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
