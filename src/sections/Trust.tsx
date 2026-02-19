import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
];

export function Trust() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-text-3)] mb-4">
            Building Trust
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            A democratic shift towards{' '}
            <span className="line-reveal">sustainable</span>{' '}
            lifestyles
          </h2>

          {/* Quote */}
          <motion.div
            className="relative p-8 bg-[var(--color-surface)] rounded-[24px] border border-[var(--color-border)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Quote size={40} className="text-[var(--color-text-3)] mb-4" />
            <p className="text-xl text-[var(--color-text-2)] italic leading-relaxed">
              Listening to each other implies a new balance — civil society and experts 
              must understand and take into account each other's contributions.
            </p>
            <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10" />
              <div>
                <p className="font-semibold">Open Urbanisme</p>
                <p className="text-sm text-[var(--color-text-3)]">Foundation Philosophy</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="col-span-2 aspect-video rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <img 
              src={images[0]} 
              alt="Community" 
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>
          <motion.div
            className="aspect-square rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={images[1]} 
              alt="Collaboration" 
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>
          <motion.div
            className="aspect-square rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={images[2]} 
              alt="Technology" 
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
