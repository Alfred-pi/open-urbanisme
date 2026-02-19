import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Users, Shield, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Broader Representativeness',
    description: 'Involve all sections of the public, including those who never attend consultation meetings.',
    stat: '100%',
    statLabel: 'Inclusive',
  },
  {
    icon: Shield,
    title: 'Emergence of Trust',
    description: 'Build trust through mutual listening and transparent decision-making processes.',
    stat: '40+',
    statLabel: 'Projects',
  },
  {
    icon: Zap,
    title: 'Visible Results',
    description: 'Deliver short-term results to accelerate sustainable lifestyle adoption.',
    stat: '4',
    statLabel: 'Continents',
  },
];

export function Innovation() {
  return (
    <Section dark>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Header + Image */}
        <div className="lg:sticky lg:top-32">
          <motion.p
            className="text-sm tracking-[0.2em] uppercase text-[var(--color-text-3)] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Innovation
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Digital methods for{' '}
            <span className="text-shine">universal needs</span>
          </motion.h2>

          <motion.div
            className="aspect-[4/3] rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80"
              alt="Smart city"
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>
        </div>

        {/* Right: Features */}
        <div className="space-y-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group p-8 bg-[var(--color-surface)] rounded-[24px] border border-[var(--color-border)] hover:border-white/30 transition-colors cursor-pointer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <feature.icon size={24} />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{feature.stat}</div>
                  <div className="text-xs text-[var(--color-text-3)] uppercase tracking-wider">{feature.statLabel}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[var(--color-text-2)] mb-6">{feature.description}</p>

              <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
