
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import InteractiveCard from '@/components/shared/interactive-card';
import { Handshake, Lightbulb, Users, DollarSign } from 'lucide-react';
import TypingEffect from '@/components/client/typing-effect';

const features = [
  {
    icon: Handshake,
    title: 'Experiencia Comprobada',
    description: 'Años de experiencia y un historial de éxito en la implementación de soluciones de automatización complejas.',
    dataAiHint: "handshake expertise"
  },
  {
    icon: Lightbulb,
    title: 'Innovación Constante',
    description: 'Utilizamos las últimas tecnologías y metodologías para ofrecer soluciones de vanguardia que impulsan el futuro.',
    dataAiHint: "lightbulb innovation"
  },
  {
    icon: Users, 
    title: 'Enfoque Personalizado',
    description: 'Cada negocio es único. Adaptamos nuestras soluciones a tus necesidades específicas para maximizar el impacto.',
    dataAiHint: "users collaboration"
  },
  {
    icon: DollarSign,
    title: 'Retorno de Inversión Claro',
    description: 'Nos centramos en ofrecer resultados medibles y un ROI tangible, optimizando tus costos y aumentando la eficiencia.',
    dataAiHint: "dollar finance"
  }
];

export default function WhyChooseUsSection() {
  return (
    <SectionWrapper id="por-que-elegirnos">
      <SectionTitle>¿Por Qué Elegir DIMAN AUTOMATIONS?</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <InteractiveCard key={index} className="text-center" dataAiHint={feature.dataAiHint} animationDelay={`${index * 150}ms`}>
            <div className="flex justify-center mb-6">
              <feature.icon className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center justify-center">
              <TypingEffect texts={[feature.title]} className="text-xl font-bold text-foreground" />
            </h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </InteractiveCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
