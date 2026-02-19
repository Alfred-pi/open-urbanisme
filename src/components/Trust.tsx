import { motion } from 'framer-motion';
import { Heart, MessageSquare, Scale, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeader } from './ui';

const pillars = [
  {
    icon: Heart,
    title: 'Mutual Listening',
    description: 'Open urban planning disseminates a culture inspired by the philosophy of free software; listening to each other\'s contributions and enabling the co-design of shared intentions.'
  },
  {
    icon: MessageSquare,
    title: 'Transparent Dialogue',
    description: 'A civil society that wants to see its contributions taken into account must be able not only to express itself, but also to understand and take into account the contributions of political authorities and experts.'
  },
  {
    icon: Scale,
    title: 'New Balance',
    description: 'This dynamic is at the heart of the ownership and success of sustainable urban planning projects, and of overcoming resistance to change.'
  }
];

export function Trust() {
  return (
    <Section id="trust" dark>
      <SectionHeader
        eyebrow="Building Trust"
        title="Strengthen the links between experts and civil society"
        description="Initiate a democratic shift towards sustainable lifestyles."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative"
          >
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)'
              }}
            />
            <div 
              className="relative p-8 rounded-3xl h-full"
              style={{ 
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-600/20 flex items-center justify-center">
                  <pillar.icon className="w-7 h-7 text-accent-500" />
                </div>
                <ArrowUpRight 
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"
                  style={{ color: 'var(--color-text-secondary)' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div 
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
          style={{ 
            backgroundColor: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)'
          }}
        >
          <div className="flex -space-x-2">
            {['🏛️', '🎓', '👥', '🌍'].map((emoji, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium"
                style={{ 
                  backgroundColor: 'var(--color-bg-tertiary)',
                  borderColor: 'var(--color-bg-secondary)'
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
          <span style={{ color: 'var(--color-text-secondary)' }}>
            Cities, Universities, NGOs & Communities working together
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
