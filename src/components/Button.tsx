import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export function Button({ children, variant = 'primary', href, onClick, icon, className = '' }: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-3 
    px-8 py-4 font-semibold text-[15px]
    rounded-[20px] cursor-pointer transition-colors
    focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]
  `;
  
  const variants = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]',
    secondary: 'bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-2)]',
    outline: 'bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  };

  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      {children}
    </Component>
  );
}
