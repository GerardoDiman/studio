
'use client';

import type { CSSProperties } from 'react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
  cursorStyle?: CSSProperties;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className,
  cursorClassName,
  cursorStyle,
}) => {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentDisplayedText, setCurrentDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentTextToType = texts[textArrayIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentTextToType.length) {
          setCurrentDisplayedText((prev) => prev + currentTextToType[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Finished typing this text, pause then start deleting
          if (texts.length > 1) { // Only start deleting if there are multiple texts
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCurrentDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextArrayIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textArrayIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  // Reset charIndex and displayedText when textArrayIndex changes (and not deleting the first char of a new word)
  useEffect(() => {
    if (!isDeleting && charIndex === 0) {
        setCurrentDisplayedText('');
    }
  }, [textArrayIndex, isDeleting, charIndex]);

  const showCursor = !(charIndex === texts[textArrayIndex]?.length && !isDeleting && texts.length === 1);


  return (
    <span className={cn('inline-block', className)}>
      {currentDisplayedText}
      {showCursor && (
        <span
            className={cn('animate-pulse', cursorClassName)}
            style={cursorStyle}
        >
            |
        </span>
      )}
    </span>
  );
};

export default TypingEffect;
