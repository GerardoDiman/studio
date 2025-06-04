
'use client';

import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view'; // Assuming this hook exists or will be created

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  applyAnimation?: boolean;
}

const SectionWrapper = ({ children, id, className, as: Component = 'section', applyAnimation = true }: SectionWrapperProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <Component
      id={id}
      ref={ref}
      className={cn(
        'py-16 md:py-24',
        applyAnimation && 'scroll-animate',
        applyAnimation && isInView && 'scroll-animate-visible',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Component>
  );
};

export default SectionWrapper;
