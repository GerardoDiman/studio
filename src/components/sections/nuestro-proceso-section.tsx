'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import InteractiveCard from '@/components/shared/interactive-card';
import { SearchCheck, DraftingCompass, Cog, CheckCircle, Rocket, Users, FileText, Brain, Handshake } from 'lucide-react';

const processSteps = [
  {
    icon: SearchCheck,
    title: '1. Descubrimiento y Análisis',
    description: 'Comprendemos a fondo tus necesidades, procesos actuales y objetivos de negocio para identificar las mejores oportunidades de automatización.',
    dataAiHint: "analysis discovery"
  },
  {
    icon: DraftingCompass,
    title: '2. Diseño de Solución Personalizada',
    description: 'Creamos un plan detallado y una arquitectura de automatización a medida, seleccionando las tecnologías adecuadas para tu caso específico.',
    dataAiHint: "design blueprint"
  },
  {
    icon: Cog,
    title: '3. Desarrollo e Implementación Ágil',
    description: 'Nuestros expertos desarrollan e integran las soluciones de automatización, siguiendo metodologías ágiles para entregas eficientes y flexibles.',
    dataAiHint: "development coding"
  },
  {
    icon: CheckCircle,
    title: '4. Pruebas Rigurosas y Optimización',
    description: 'Realizamos pruebas exhaustivas para asegurar la calidad y el rendimiento. Optimizamos la solución basándonos en resultados y tu feedback.',
    dataAiHint: "testing quality"
  },
  {
    icon: Rocket,
    title: '5. Despliegue y Puesta en Marcha',
    description: 'Implementamos la solución en tu entorno productivo, asegurando una transición suave y una mínima interrupción de tus operaciones.',
    dataAiHint: "deployment launch"
  },
  {
    icon: Handshake, 
    title: '6. Soporte Continuo y Mejora',
    description: 'Ofrecemos soporte post-implementación, monitoreo y planes de mejora continua para maximizar el valor de tu inversión a largo plazo.',
    dataAiHint: "support partnership"
  },
];

export default function NuestroProcesoSection() {
  return (
    <SectionWrapper id="nuestro-proceso" className="bg-background">
      <SectionTitle>Nuestro Proceso de Automatización</SectionTitle>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Seguimos un enfoque estructurado y colaborativo para garantizar el éxito de cada proyecto de automatización, desde la concepción hasta el soporte continuo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <InteractiveCard 
            key={index} 
            dataAiHint={step.dataAiHint} 
            className="flex flex-col"
            animationDelay={`${index * 100}ms`}
          >
            <div className="flex items-center mb-4">
              <step.icon className="h-12 w-12 text-primary mr-4 shrink-0" />
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
          </InteractiveCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
