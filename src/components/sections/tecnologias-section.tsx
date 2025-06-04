
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import InteractiveCard from '@/components/shared/interactive-card';
import Image from 'next/image';
import { Code, Cloud, Database, Settings } from 'lucide-react'; // Added Settings for generic tech

// Helper icon for Brain, if not available
const Brain = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5v0a4.5 4.5 0 0 0-2.84 3.75a4.5 4.5 0 0 0 .18 8.5v0A4.5 4.5 0 0 0 12 22Z"/>
        <path d="M12 22a4.5 4.5 0 0 0 4.32-3.25v0a4.5 4.5 0 0 0 .18-8.5A4.5 4.5 0 0 0 12 2Z"/>
        <path d="M12 2a4.5 4.5 0 0 0 0 8.75"/>
        <path d="M12 22a4.5 4.5 0 0 1 0-8.75"/>
        <path d="M15.5 6.75a4.5 4.5 0 0 0 0 8.5"/>
        <path d="M8.5 15.25a4.5 4.5 0 0 0 0-8.5"/>
        <path d="M12 12.25a4.5 4.5 0 0 0 4.5-4.5"/>
        <path d="M12 12.25a4.5 4.5 0 0 1-4.5-4.5"/>
        <path d="M12 12.25A4.5 4.5 0 0 0 7.5 17"/>
        <path d="M12 12.25A4.5 4.5 0 0 1 16.5 17"/>
        <path d="M12 2v2.5"/>
        <path d="M12 22v-2.5"/>
        <path d="M19.15 4.85L17 7"/>
        <path d="M4.85 19.15L7 17"/>
        <path d="M19.15 19.15L17 17"/>
        <path d="M4.85 4.85L7 7"/>
    </svg>
);

const technologies = [
  { name: 'Python', category: 'Lenguajes y Frameworks', icon: Code, dataAiHint: "python logo" },
  { name: 'JavaScript/TypeScript', category: 'Lenguajes y Frameworks', icon: Code, dataAiHint: "javascript logo" },
  { name: 'React & Next.js', category: 'Lenguajes y Frameworks', icon: Code, dataAiHint: "react logo" },
  { name: 'UiPath', category: 'Plataformas RPA', icon: Settings, dataAiHint: "uipath logo" },
  { name: 'Blue Prism', category: 'Plataformas RPA', icon: Settings, dataAiHint: "blueprism logo" },
  { name: 'AWS', category: 'Cloud y DevOps', icon: Cloud, dataAiHint: "aws logo" },
  { name: 'Azure', category: 'Cloud y DevOps', icon: Cloud, dataAiHint: "azure logo" },
  { name: 'Google Cloud Platform', category: 'Cloud y DevOps', icon: Cloud, dataAiHint: "gcp logo" },
  { name: 'SQL Databases', category: 'Bases de Datos', icon: Database, dataAiHint: "database logo" },
  { name: 'NoSQL Databases', category: 'Bases de Datos', icon: Database, dataAiHint: "nosql logo" },
  { name: 'TensorFlow / PyTorch', category: 'IA y Machine Learning', icon: Brain, dataAiHint: "tensorflow logo" },
  { name: 'Docker & Kubernetes', category: 'Cloud y DevOps', icon: Settings, dataAiHint: "docker logo" },
];

const partners = [
  { name: 'Partner Tecnológico A', description: 'Líder en soluciones de IA.', imageSrc: 'https://placehold.co/150x80.png', dataAiHint: 'company logo abstract' },
  { name: 'Partner de Consultoría B', description: 'Expertos en transformación digital.', imageSrc: 'https://placehold.co/150x80.png', dataAiHint: 'consulting logo' },
  { name: 'Partner de Integración C', description: 'Especialistas en conectividad empresarial.', imageSrc: 'https://placehold.co/150x80.png', dataAiHint: 'integration logo' },
];


export default function TecnologiasSection() {
  return (
    <SectionWrapper id="tecnologias" className="bg-background">
      <SectionTitle>Tecnologías y Socios Clave</SectionTitle>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Dominamos un amplio espectro de tecnologías de vanguardia y colaboramos con socios estratégicos para ofrecerte las mejores soluciones de automatización.
      </p>

      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">Tecnologías que Dominamos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <InteractiveCard key={tech.name} className="text-center p-4" dataAiHint={tech.dataAiHint}>
              <div className="flex justify-center mb-3">
                <tech.icon className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-md font-semibold text-foreground">{tech.name}</h4>
              {/* Optional: <p className="text-xs text-muted-foreground">{tech.category}</p> */}
            </InteractiveCard>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">Nuestros Socios Estratégicos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <InteractiveCard key={partner.name} className="text-center p-6" dataAiHint={partner.dataAiHint}>
              <div className="flex justify-center mb-4">
                <Image src={partner.imageSrc} alt={partner.name} width={120} height={64} objectFit="contain" data-ai-hint={partner.dataAiHint} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-1">{partner.name}</h4>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
