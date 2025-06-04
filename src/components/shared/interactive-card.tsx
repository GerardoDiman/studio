
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  dataAiHint?: string; // For placeholder images if used within card
}

const InteractiveCard = ({ children, className, dataAiHint }: InteractiveCardProps) => {
  return (
    <div
      className={cn(
        'bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out border border-border/50 hover:border-primary/50',
        className
      )}
      data-ai-hint={dataAiHint}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;
