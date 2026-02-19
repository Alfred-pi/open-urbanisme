import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, children, className = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${className}`}
      style={{
        backgroundColor: dark ? 'var(--color-bg-secondary)' : 'var(--color-bg-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p 
          className="text-lg md:text-xl max-w-3xl leading-relaxed mx-auto"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
