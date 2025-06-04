
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import InteractiveCard from '@/components/shared/interactive-card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Smile, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Optimización de Flujo de Caja para Retail XYZ',
    description: 'Automatización de la conciliación bancaria y generación de informes financieros, reduciendo el ciclo de cierre mensual.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'finance retail',
    tags: ['RPA', 'Finanzas', 'Retail'],
    results: [
      { icon: TrendingUp, text: 'Reducción del 30% en tiempo de procesamiento.' },
      { icon: Zap, text: 'Eliminación del 95% de errores manuales.' },
    ],
  },
  {
    title: 'Automatización de Soporte al Cliente para Tech ABC',
    description: 'Implementación de chatbots inteligentes y automatización de respuestas a consultas frecuentes, mejorando la velocidad y calidad del servicio.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'customer support',
    tags: ['IA', 'Atención al Cliente', 'SaaS'],
    results: [
      { icon: Smile, text: 'Mejora del 25% en satisfacción del cliente (CSAT).' },
      { icon: TrendingUp, text: 'Reducción del 40% en tiempo de respuesta.' },
    ],
  },
  {
    title: 'Integración de Sistemas para Logística Z',
    description: 'Conexión de TMS, WMS y ERP para una visibilidad completa de la cadena de suministro y optimización de rutas de entrega.',
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'logistics systems',
    tags: ['Integración', 'Logística', 'Cadena de Suministro'],
    results: [
      { icon: Zap, text: 'Visibilidad de datos en tiempo real.' },
      { icon: TrendingUp, text: 'Optimización de costos de transporte en un 15%.' },
    ],
  },
];

export default function ProyectosSection() {
  return (
    <SectionWrapper id="proyectos" className="bg-card">
      <SectionTitle>Proyectos Exitosos</SectionTitle>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Descubre cómo hemos ayudado a empresas como la tuya a alcanzar nuevos niveles de eficiencia y crecimiento a través de la automatización.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <InteractiveCard key={index} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
                data-ai-hint={project.dataAiHint}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
              <div className="mb-3 space-x-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-2">Resultados Clave:</h4>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {project.results.map(result => (
                    <li key={result.text} className="flex items-center">
                      <result.icon className="h-4 w-4 mr-2 text-primary shrink-0" />
                      {result.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
