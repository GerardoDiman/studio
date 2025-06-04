'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  dataAiHint?: string;
  animationDelay?: string;
}

const InteractiveCard = ({ children, className, dataAiHint, animationDelay = '0ms' }: InteractiveCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.15, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        'bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out border border-border/50 hover:border-primary/50',
        'card-entry-animation', // Base class for initial state
        isInView ? 'card-entry-animation-active' : '', // Class for visible state
        className
      )}
      style={{ transitionDelay: animationDelay }} // Apply delay for staggered effect
      data-ai-hint={dataAiHint}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;
