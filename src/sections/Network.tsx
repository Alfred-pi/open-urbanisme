import { motion } from 'framer-motion';
import { Globe, Users, ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Network() {
  const { t } = useLanguage();

  return (
    <section id="network" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover img-bw opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/80 to-[var(--color-bg)]/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 mb-6 relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {/* Animated rings */}
            <motion.div 
              className="absolute inset-0 border-2 border-white/20 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute inset-2 border border-white/30 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <Globe size={28} className="text-black" />
            </div>
          </motion.div>

          <motion.p
            className="text-sm font-semibold text-[var(--color-text-3)] uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.network.label}
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.network.title}
          </motion.h2>

          <motion.p
            className="text-xl text-[var(--color-text-2)] max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.network.text}
          </motion.p>
        </div>

        {/* Stats cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: '40+', label: t.network.sites, icon: MapPin },
            { value: '4', label: t.network.continents, icon: Globe },
            { value: '7B', label: t.network.potential, icon: Users },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative p-6 md:p-8 bg-[var(--color-surface)]/80 backdrop-blur-sm rounded-[20px] md:rounded-[24px] border border-[var(--color-border)] text-center group hover:border-white/30 transition-colors"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <stat.icon size={24} className="mx-auto mb-4 text-[var(--color-text-3)] group-hover:text-white transition-colors" />
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-[var(--color-text-2)]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#deploy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold text-lg rounded-[16px]"
            whileHover={{ scale: 1.02, gap: '16px' }}
            whileTap={{ scale: 0.98 }}
          >
            {t.network.cta}
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Gratitude */}
        <motion.p
          className="mt-20 text-center text-sm text-[var(--color-text-3)] max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {t.network.gratitude}
        </motion.p>
      </div>
    </section>
  );
}
