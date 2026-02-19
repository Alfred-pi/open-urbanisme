import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Users, Handshake, Target, ArrowUpRight } from 'lucide-react';

const approaches = [
  {
    icon: Users,
    number: '01',
    title: 'Collective Intelligence',
    description: 'Open-source philosophy enabling continuous improvements through community contributions.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80',
  },
  {
    icon: Handshake,
    number: '02',
    title: 'Collaborative Design',
    description: 'All stakeholders co-design shared intentions for sustainable development.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
  {
    icon: Target,
    number: '03',
    title: 'Pragmatic Results',
    description: 'Real-world tested approaches across 40+ sites on 4 continents.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80',
  },
];

export function Approaches() {
  return (
    <Section id="approach" dark>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-text-3)] mb-4">
          Our Approach
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Test. Use. <span className="text-shine">Contribute.</span>
        </h2>
      </motion.div>

      <div className="space-y-6">
        {approaches.map((approach, i) => (
          <motion.div
            key={approach.number}
            className="group gradient-border p-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="bg-[var(--color-surface)] rounded-[22px] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <motion.div 
                className="w-full md:w-64 h-48 md:h-40 rounded-[16px] overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={approach.image} 
                  alt={approach.title}
                  className="w-full h-full object-cover img-bw"
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl font-bold text-[var(--color-text-3)] opacity-30">{approach.number}</span>
                  <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                    <approach.icon size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{approach.title}</h3>
                <p className="text-[var(--color-text-2)]">{approach.description}</p>
              </div>

              {/* Arrow */}
              <motion.div 
                className="hidden md:flex w-12 h-12 rounded-full border border-[var(--color-border)] items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1, rotate: 45 }}
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
