import { motion } from 'framer-motion';
import { Users, Handshake, Target } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Approaches() {
  const { t } = useLanguage();

  const approaches = [
    { icon: Users, ...t.approach.collective },
    { icon: Handshake, ...t.approach.collaborative },
    { icon: Target, ...t.approach.pragmatic },
  ];

  return (
    <section id="approach" className="py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-[var(--color-text-3)] uppercase tracking-wider mb-4">
            {t.approach.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.approach.title}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {approaches.map((approach) => (
            <motion.div
              key={approach.title}
              className="p-8 bg-[var(--color-surface)] rounded-[24px] border border-[var(--color-border)] hover:border-[var(--color-text-3)] transition-colors"
              variants={item}
            >
              <div className="w-12 h-12 rounded-[14px] bg-[var(--color-surface-2)] flex items-center justify-center mb-6">
                <approach.icon size={22} className="text-[var(--color-text-2)]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{approach.title}</h3>
              <p className="text-[var(--color-text-2)] leading-relaxed">{approach.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
