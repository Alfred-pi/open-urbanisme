import { motion } from 'framer-motion';
import { Shield, Scale, BookOpen } from 'lucide-react';
import { Section, SectionHeader, Card } from './ui';

const values = [
  {
    icon: Shield,
    title: 'Open Source & Free',
    description: 'Access to resources is guaranteed by the copyleft licences imposed by the foundation\'s articles of association.'
  },
  {
    icon: BookOpen,
    title: 'CC BY-SA Documentation',
    description: 'All documentation is shared under Creative Commons Attribution-ShareAlike license, ensuring knowledge remains accessible.'
  },
  {
    icon: Scale,
    title: 'GNU AGPL Software',
    description: 'Our software platforms are released under GNU AGPL, guaranteeing freedom to use, study, share, and improve.'
  }
];

export function Mission() {
  return (
    <Section id="mission" dark>
      <SectionHeader
        eyebrow="Our Mission"
        title="Democratic approach to sustainable urban development"
        description="As a Swiss public-interest foundation, we believe in the relevance of open urbanism and its democratic approach to accelerating the implementation of sustainable urban development projects."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {values.map((value, index) => (
          <Card key={value.title} delay={index * 0.1}>
            <div className="w-14 h-14 rounded-2xl bg-accent-600/20 flex items-center justify-center mb-6">
              <value.icon className="w-7 h-7 text-accent-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
            <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
              {value.description}
            </p>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 p-8 md:p-12 rounded-3xl text-center"
        style={{ 
          backgroundColor: 'var(--color-bg-tertiary)',
          border: '1px solid var(--color-border)'
        }}
      >
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          "Our aim is to share the opportunities of open urbanism as widely as possible, 
          <span className="text-accent-500 font-medium"> free of charge</span>, with public, civic, 
          academic and private organisations."
        </p>
      </motion.div>
    </Section>
  );
}
