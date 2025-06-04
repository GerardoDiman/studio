
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import InteractiveCard from '@/components/shared/interactive-card';
import { Bot, GitMerge, Presentation, Cloud, BrainCircuit, ShieldCheck } from 'lucide-react';
import TypingEffect from '@/components/client/typing-effect';

const services = [
  {
    icon: Bot,
    title: 'Automatización Robótica de Procesos (RPA)',
    description: 'Implementamos robots de software para automatizar tareas repetitivas y manuales, liberando a tu equipo para actividades de mayor valor.',
    dataAiHint: "robot automation"
  },
  {
    icon: GitMerge, 
    title: 'Integración de Sistemas',
    description: 'Conectamos tus aplicaciones y sistemas dispares para un flujo de datos cohesivo y una operativa eficiente y sin fisuras.',
    dataAiHint: "system integration"
  },
  {
    icon: Presentation, 
    title: 'Análisis y Consultoría de Automatización',
    description: 'Evaluamos tus procesos actuales para identificar oportunidades de automatización, diseñando una hoja de ruta estratégica.',
    dataAiHint: "consulting analysis"
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Migramos y gestionamos tus procesos automatizados en la nube para mayor escalabilidad, flexibilidad y resiliencia.',
    dataAiHint: "cloud computing"
  },
  {
    icon: BrainCircuit, 
    title: 'Inteligencia Artificial y Machine Learning',
    description: 'Incorporamos IA y ML para automatizaciones más inteligentes, capaces de aprender, adaptarse y tomar decisiones complejas.',
    dataAiHint: "artificial intelligence"
  },
  {
    icon: ShieldCheck, 
    title: 'Seguridad y Cumplimiento',
    description: 'Aseguramos que tus procesos automatizados cumplan con los más altos estándares de seguridad y normativas vigentes.',
    dataAiHint: "security compliance"
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="servicios">
      <SectionTitle>Nuestros Servicios de Automatización</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <InteractiveCard key={index} dataAiHint={service.dataAiHint} animationDelay={`${index * 150}ms`}>
            <div className="flex items-center mb-4">
              <service.icon className="h-12 w-12 text-primary mr-4 shrink-0" />
              <h3 className="text-xl font-bold text-foreground h-16 flex items-center">
                <TypingEffect texts={[service.title]} className="text-xl font-bold text-foreground" />
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">{service.description}</p>
          </InteractiveCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
