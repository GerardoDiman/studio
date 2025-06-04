
'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from '@/hooks/use-in-view'; // Assuming this hook exists
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
  textPrefix?: string;
  textSuffix?: string;
}

const AnimatedCounter = ({
  target,
  duration = 1500,
  className,
  textPrefix = '',
  textSuffix = '',
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) {
        setCount(end);
        return;
      }

      const increment = end / (duration / 16); // Aim for ~60fps updates

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16); // Roughly 60 frames per second

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {textPrefix}{count.toLocaleString()}{textSuffix}
    </span>
  );
};

export default AnimatedCounter;
