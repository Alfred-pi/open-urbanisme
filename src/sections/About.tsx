import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-[var(--color-bg-2)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="aspect-[4/3] rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[var(--color-text-3)] uppercase tracking-wider mb-4">
              {t.about.label}
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-[var(--color-text-2)] leading-relaxed mb-8">
              <p>{t.about.p1}</p>
              <p>
                {t.about.p2} <strong className="text-white">{t.about.free}</strong> {t.about.p3}
              </p>
            </div>

            <div className="flex gap-8 pt-6 border-t border-[var(--color-border)]">
              <div>
                <p className="text-sm text-[var(--color-text-3)] mb-1">{t.about.docs}</p>
                <p className="font-mono text-sm">CC BY-SA 4.0</p>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-3)] mb-1">{t.about.software}</p>
                <p className="font-mono text-sm">GNU AGPL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
