
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import AnimatedCounter from '@/components/client/animated-counter';

const stats = [
  { value: 250, label: 'Proyectos Completados', suffix: '+' },
  { value: 100, label: 'Clientes Satisfechos', suffix: '+' },
  { value: 95, label: 'Tasa de Éxito', suffix: '%' },
  { value: 15, label: 'Años de Experiencia', suffix: '+' },
];

export default function StatsSection() {
  return (
    <SectionWrapper id="nuestros-logros" className="bg-card">
      <SectionTitle>Nuestros Logros en Números</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 bg-background rounded-lg shadow-lg">
            <AnimatedCounter
              target={stat.value}
              className="block text-5xl md:text-6xl font-extrabold text-primary mb-2"
              textSuffix={stat.suffix}
            />
            <p className="text-lg text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
