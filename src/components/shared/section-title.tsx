
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const SectionTitle = ({ children, className, as: Component = 'h2' }: SectionTitleProps) => {
  return (
    <Component
      className={cn(
        'text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center relative pb-4 mb-10 md:mb-16 tracking-tight',
        className
      )}
    >
      {children}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-primary rounded-full"></span>
    </Component>
  );
};

export default SectionTitle;
