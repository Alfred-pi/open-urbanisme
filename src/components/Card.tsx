import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`
        bg-[var(--color-surface)] 
        rounded-[20px] 
        p-6 md:p-8
        border border-[var(--color-border)]
        hover:border-white
        transition-colors
        ${className}
      `}
      whileHover={{ scale: 1.01 }}
    >
      {children}
    </motion.div>
  );
}
