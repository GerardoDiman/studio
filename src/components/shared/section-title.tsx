 
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const SectionTitle = ({ children, className, as: Component = 'h2' }: SectionTitleProps) => {
  return (
    <div className="flex justify-center">
      <Component
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-extrabold relative border-b-4 border-primary pb-4 mb-10 md:mb-16 tracking-tight inline-block',
          className
        )}
      >
        {children}
      </Component>
    </div>
  );
};

export default SectionTitle;
