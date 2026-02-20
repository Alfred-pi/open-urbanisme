import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export function Trust() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-8 bg-[var(--color-bg-2)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-sm font-semibold text-[var(--color-text-3)] uppercase tracking-wider mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.trust.label}
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.trust.title}
        </motion.h2>

        <motion.p
          className="text-lg text-[var(--color-text-2)] leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t.trust.text}
        </motion.p>

        <motion.div
          className="aspect-[21/9] rounded-[24px] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
            alt="Community"
            className="w-full h-full object-cover img-bw"
          />
        </motion.div>
      </div>
    </section>
  );
}
