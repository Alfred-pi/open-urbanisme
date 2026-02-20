import { motion } from 'framer-motion';
import { Users, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Innovation() {
  const { t } = useLanguage();

  const features = [
    { icon: Users, ...t.innovation.broader },
    { icon: Shield, ...t.innovation.trust },
    { icon: Zap, ...t.innovation.visible },
  ];

  return (
    <section className="py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[var(--color-text-3)] uppercase tracking-wider mb-4">
              {t.innovation.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {t.innovation.title}
            </h2>
            <p className="text-[var(--color-text-2)] leading-relaxed mb-10">
              {t.innovation.subtitle}
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4 p-5 bg-[var(--color-surface)] rounded-[20px] border border-[var(--color-border)]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-[12px] bg-[var(--color-surface-2)] flex items-center justify-center flex-shrink-0">
                    <feature.icon size={18} className="text-[var(--color-text-2)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-[var(--color-text-2)]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="aspect-[3/4] rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80"
              alt="Smart city"
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
