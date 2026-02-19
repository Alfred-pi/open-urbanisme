import { motion } from 'framer-motion';
import { Users, Eye, Target, Zap } from 'lucide-react';
import { Section, SectionHeader, Card } from './ui';

const innovations = [
  {
    icon: Users,
    title: 'Broader Representativeness',
    description: 'Involve all sections of the public in sustainable territorial transformation issues, including people who never attend consultation meetings.',
    stat: '100%',
    statLabel: 'Inclusive'
  },
  {
    icon: Eye,
    title: 'Emergence of Trust',
    description: 'Build trust between players through mutual listening, transparency of contributions and clarification of decision-making processes.',
    stat: '360°',
    statLabel: 'Transparency'
  },
  {
    icon: Target,
    title: 'Visible Results',
    description: 'Deliver visible results in the short term to develop commitment dynamics, scale up and accelerate evolution towards sustainable lifestyles.',
    stat: 'Fast',
    statLabel: 'Impact'
  }
];

export function Innovation() {
  return (
    <Section id="innovation">
      <SectionHeader
        eyebrow="Innovation"
        title="Digital methods for civil society involvement"
        description="The digital methods and platforms shared by the Foundation meet the needs identified by cities, researchers and practitioners."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {innovations.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full relative overflow-hidden group">
              <div 
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent-600/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent-500">{item.stat}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 flex items-center justify-center gap-4"
      >
        <Zap className="w-5 h-5 text-accent-500" />
        <span style={{ color: 'var(--color-text-secondary)' }}>
          Defining a shared general interest through transparent processes
        </span>
      </motion.div>
    </Section>
  );
}
