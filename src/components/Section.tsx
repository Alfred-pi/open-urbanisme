import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export function Section({ children, id, className = '', dark = false }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`
        py-20 md:py-32 px-6 md:px-8
        ${dark ? 'bg-[var(--color-bg-2)]' : 'bg-[var(--color-bg)]'}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <motion.span 
          className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[var(--color-text-2)] max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
