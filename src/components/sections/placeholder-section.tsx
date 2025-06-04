
'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';

interface PlaceholderSectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export default function PlaceholderSection({ id, title, children, className }: PlaceholderSectionProps) {
  return (
    <SectionWrapper id={id} className={className}>
      <SectionTitle>{title}</SectionTitle>
      <div className="text-center text-muted-foreground">
        {children || <p>Contenido para la sección "{title}" se implementará aquí.</p>}
      </div>
    </SectionWrapper>
  );
}
