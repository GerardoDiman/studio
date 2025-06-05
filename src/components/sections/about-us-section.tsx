
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import TypingEffect from '@/components/client/typing-effect';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <SectionWrapper id="quienes-somos" className="bg-card">
      <SectionTitle>Quiénes Somos</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 text-muted-foreground order-last md:order-none">
          <h3 className="text-2xl font-semibold text-primary">
            <TypingEffect texts={['Nuestra Misión']} className="text-2xl font-semibold text-primary" />
          </h3>
          <p>
            En DIMAN AUTOMATIONS, nuestra misión es empoderar a las empresas mediante la implementación de soluciones de automatización inteligente que optimicen procesos, reduzan costos y fomenten la innovación. Nos dedicamos a transformar desafíos complejos en eficiencias operativas tangibles.
          </p>
          <h3 className="text-2xl font-semibold text-primary">
            <TypingEffect texts={['Nuestra Visión']} className="text-2xl font-semibold text-primary" />
          </h3>
          <p>
            Ser líderes reconocidos en el sector de la automatización, impulsando la transformación digital de nuestros clientes a través de tecnología de vanguardia, un profundo conocimiento sectorial y un compromiso inquebrantable con la excelencia y la satisfacción del cliente.
          </p>
          <h3 className="text-2xl font-semibold text-primary">
            <TypingEffect texts={['Nuestros Valores']} className="text-2xl font-semibold text-primary" />
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-medium text-foreground">Innovación:</span> Buscamos constantemente nuevas y mejores formas de resolver problemas.</li>
            <li><span className="font-medium text-foreground">Integridad:</span> Actuamos con honestidad y transparencia en todas nuestras interacciones.</li>
            <li><span className="font-medium text-foreground">Colaboración:</span> Trabajamos de la mano con nuestros clientes para lograr objetivos comunes.</li>
            <li><span className="font-medium text-foreground">Excelencia:</span> Nos esforzamos por la más alta calidad en todo lo que hacemos.</li>
            <li><span className="font-medium text-foreground">Compromiso:</span> Estamos dedicados al éxito a largo plazo de nuestros clientes.</li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl flex items-center justify-center aspect-w-4 aspect-h-3 bg-card/50 p-4 order-first md:order-none">
          <Image
            src="/imagenes/equipoDiman.jpg"
            alt="Equipo Diman"
            width={500} // Puedes ajustar el ancho y alto según sea necesario
            height={300}
            className="w-full h-auto object-cover rounded-lg" // Añadir clases para que la imagen se ajuste y cubra el espacio
          />
        </div>

      </div>
    </SectionWrapper>
  );
}
