
'use client';

import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options?: UseInViewOptions
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options?.triggerOnce) {
          observer.unobserve(element);
        }
      } else {
        if (!options?.triggerOnce) {
           setIsInView(false);
        }
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isInView;
}
