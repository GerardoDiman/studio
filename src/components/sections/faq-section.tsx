
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: '¿Qué tipo de empresas pueden beneficiarse de la automatización?',
    answer: 'Prácticamente cualquier empresa, independientemente de su tamaño o sector, puede beneficiarse de la automatización. Desde startups hasta grandes corporaciones, la automatización puede optimizar procesos, reducir errores y mejorar la eficiencia.'
  },
  {
    question: '¿Cuánto tiempo lleva implementar una solución de automatización?',
    answer: 'El tiempo de implementación varía según la complejidad del proceso a automatizar. Proyectos simples pueden tomar unas pocas semanas, mientras que soluciones más complejas pueden requerir varios meses. Realizamos una evaluación detallada para proporcionar una estimación precisa.'
  },
  {
    question: '¿Qué es RPA y cómo puede ayudar a mi negocio?',
    answer: 'RPA (Automatización Robótica de Procesos) utiliza "robots" de software para realizar tareas repetitivas basadas en reglas, como la entrada de datos, procesamiento de facturas o gestión de correos electrónicos. Ayuda a reducir costos, aumentar la velocidad y precisión, y liberar a los empleados para tareas más estratégicas.'
  },
  {
    question: '¿Ofrecen soporte post-implementación?',
    answer: 'Sí, ofrecemos planes de soporte y mantenimiento continuos para asegurar que tus soluciones de automatización funcionen de manera óptima y se adapten a las necesidades cambiantes de tu negocio. También proporcionamos capacitación para tu equipo.'
  },
  {
    question: '¿Cómo mido el ROI de un proyecto de automatización?',
    answer: 'El ROI se mide a través de varios factores, incluyendo la reducción de costos operativos, el aumento de la productividad, la disminución de errores, la mejora en los tiempos de ciclo y la satisfacción del cliente. Te ayudamos a definir KPIs y a rastrear el impacto.'
  }
];

export default function FaqSection() {
  return (
    <SectionWrapper id="faq" className="bg-card">
      <SectionTitle>Preguntas Frecuentes</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-border/50">
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
