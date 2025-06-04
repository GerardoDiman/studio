
'use client';

import Link from 'next/link';
import type { LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className, onClick, ...props }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.toString().startsWith('#')) {
      e.preventDefault();
      const targetId = href.toString().substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        'px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
