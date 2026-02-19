import { motion } from 'framer-motion';
import { Beaker, Users2, Sparkles, Map } from 'lucide-react';
import { Section, SectionHeader, Card } from './ui';

const features = [
  {
    icon: Beaker,
    title: 'Test',
    description: 'Experiment with our approaches in your own context. Every deployment brings new improvements.'
  },
  {
    icon: Users2,
    title: 'Use',
    description: 'Deploy proven methods at over 40 sites across Europe, Asia, South America, and Africa.'
  },
  {
    icon: Sparkles,
    title: 'Contribute',
    description: 'Join the open-source community. Your improvements benefit everyone worldwide.'
  }
];

const locations = ['Europe', 'Asia', 'South America', 'Africa'];

export function Approach() {
  return (
    <Section id="approach">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Our Approach"
            title="Test, use, contribute."
            description="Pragmatic approaches, constantly improved at over 40 sites worldwide."
            centered={false}
          />

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-600/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-600/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-accent-600 flex items-center justify-center mb-6 glow-sm">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">40+</h3>
              <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                Active sites worldwide
              </p>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: 'var(--color-bg-tertiary)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-sm leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            The efficiency and adaptability of these approaches are guaranteed by the open-source philosophy, 
            which enables improvements to be made with each deployment by integrating the contributions of 
            all the players involved.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}
