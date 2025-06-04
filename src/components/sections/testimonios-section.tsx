'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import InteractiveCard from '@/components/shared/interactive-card';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "DIMAN AUTOMATIONS transformó nuestra operativa. La eficiencia ha aumentado drásticamente y nuestro equipo puede centrarse en tareas de mayor valor.",
    name: 'Ana Pérez',
    title: 'CEO, Innovatech Solutions',
    imageSrc: 'https://placehold.co/100x100.png',
    dataAiHint: 'person portrait',
  },
  {
    quote: "El proceso de integración fue impecable y el soporte post-implementación ha sido excepcional. ¡Muy recomendados!",
    name: 'Carlos Gómez',
    title: 'Director de Operaciones, Logística Global',
    imageSrc: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional person',
  },
  {
    quote: "Gracias a su solución de RPA, hemos reducido errores en un 90% y ahorrado incontables horas de trabajo manual.",
    name: 'Laura Fernández',
    title: 'Gerente Financiera, Manufacturas Unidas',
    imageSrc: 'https://placehold.co/100x100.png',
    dataAiHint: 'business woman',
  },
];

export default function TestimoniosSection() {
  return (
    <SectionWrapper id="testimonios" className="bg-card">
      <SectionTitle>Lo Que Dicen Nuestros Clientes</SectionTitle>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        La satisfacción de nuestros clientes es nuestra mayor recompensa. Conoce algunas de las historias de éxito que hemos ayudado a construir.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <InteractiveCard 
            key={index} 
            className="flex flex-col items-center text-center p-8"
            animationDelay={`${index * 100}ms`}
          >
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg">
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={testimonial.dataAiHint}
              />
            </div>
            <Quote className="h-8 w-8 text-primary mb-4 transform rotate-180" />
            <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
            <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-primary">{testimonial.title}</p>
          </InteractiveCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
