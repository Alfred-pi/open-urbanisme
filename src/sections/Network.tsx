import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Globe, Users, MessageCircle, Sparkles } from 'lucide-react';

const features = [
  { icon: Users, label: 'Connect', desc: 'Find collaborators globally' },
  { icon: MessageCircle, label: 'Exchange', desc: 'Share experiences & challenges' },
  { icon: Sparkles, label: 'Improve', desc: 'Continuous collective learning' },
];

export function Network() {
  return (
    <Section id="network">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Globe"
          className="w-full h-full object-cover img-bw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated globe icon */}
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 mb-8 relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.div 
            className="absolute inset-0 border border-white/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute inset-2 border border-white/30 rounded-full"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <Globe size={28} className="text-black" />
          </div>
        </motion.div>

        <motion.p
          className="text-sm tracking-[0.2em] uppercase text-[var(--color-text-3)] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Global Community
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-bold tracking-tighter"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            7 Billion
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-bold tracking-tighter text-shine"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Urbanists
          </motion.h2>
        </div>

        <motion.p
          className="text-xl text-[var(--color-text-2)] max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The global network of users implementing open urban planning approaches. 
          Exchange ideas and collaborate on sustainable urban challenges.
        </motion.p>

        {/* Features */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              className="px-6 py-4 bg-[var(--color-surface)] rounded-[16px] border border-[var(--color-border)] hover:border-white/30 transition-all"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <feature.icon size={24} className="mx-auto mb-2" />
              <p className="font-semibold">{feature.label}</p>
              <p className="text-xs text-[var(--color-text-3)]">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#deploy"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-[14px] text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Join the Network
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>

        {/* Gratitude */}
        <motion.p
          className="mt-16 text-sm text-[var(--color-text-3)] max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          Deep gratitude to all contributors: residents, professionals, researchers, 
          and institutions enriching this free and shared approach.
        </motion.p>
      </div>
    </Section>
  );
}
