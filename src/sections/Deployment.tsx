import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Deployment() {
  const { t } = useLanguage();

  const options = [
    {
      icon: BookOpen,
      title: t.deploy.autonomous.title,
      description: t.deploy.autonomous.desc,
      features: [t.deploy.autonomous.f1, t.deploy.autonomous.f2, t.deploy.autonomous.f3],
      cta: t.deploy.autonomous.cta,
    },
    {
      icon: Users,
      title: t.deploy.accompanied.title,
      description: t.deploy.accompanied.desc,
      features: [t.deploy.accompanied.f1, t.deploy.accompanied.f2, t.deploy.accompanied.f3],
      cta: t.deploy.accompanied.cta,
      featured: true,
    },
    {
      icon: GraduationCap,
      title: t.deploy.training.title,
      description: t.deploy.training.desc,
      features: [t.deploy.training.f1, t.deploy.training.f2, t.deploy.training.f3],
      cta: t.deploy.training.cta,
    },
  ];

  return (
    <section id="deploy" className="py-24 px-6 md:px-8 bg-[var(--color-bg-2)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-[var(--color-text-3)] uppercase tracking-wider mb-4">
            {t.deploy.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.deploy.title}
          </h2>
          <p className="text-[var(--color-text-2)] max-w-xl mx-auto">
            {t.deploy.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {options.map((option, i) => (
            <motion.div
              key={option.title}
              className={`p-8 rounded-[24px] flex flex-col ${
                option.featured 
                  ? 'bg-white text-black' 
                  : 'bg-[var(--color-surface)] border border-[var(--color-border)]'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 ${
                option.featured ? 'bg-black text-white' : 'bg-[var(--color-surface-2)]'
              }`}>
                <option.icon size={22} />
              </div>

              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className={`mb-6 ${option.featured ? 'text-black/60' : 'text-[var(--color-text-2)]'}`}>
                {option.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={option.featured ? 'text-black' : 'text-[var(--color-text-3)]'} />
                    <span className={option.featured ? 'text-black/80' : 'text-[var(--color-text-2)]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-[14px] font-semibold flex items-center justify-center gap-2 transition-colors ${
                  option.featured 
                    ? 'bg-black text-white hover:bg-black/80' 
                    : 'bg-[var(--color-surface-2)] hover:bg-[var(--color-border)]'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {option.cta}
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
