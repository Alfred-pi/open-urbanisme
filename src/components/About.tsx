import { motion } from 'framer-motion';
import { Building2, Leaf, Users2, Database, Scale, Sparkles } from 'lucide-react';
import { Section, SectionHeader, Card } from './ui';

const purposes = [
  { icon: Building2, text: 'Promote and support open urbanism development' },
  { icon: Users2, text: 'Encourage consultation and citizen participation' },
  { icon: Leaf, text: 'Support ecology and sustainable territories' },
  { icon: Sparkles, text: 'Enable design by use and collaborative design' },
  { icon: Database, text: 'Digital conservatory for knowledge sharing' },
  { icon: Scale, text: 'Preserve commons under copyleft principles' }
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About Us"
        title="Fondation Urbanisme Ouvert"
        description="The Foundation aims to promote, finance, support and contribute to the development of open urbanism in the spirit of Geneva."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {purposes.map((purpose, index) => (
          <motion.div
            key={purpose.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-6 rounded-3xl"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent-600/20 flex items-center justify-center flex-shrink-0">
              <purpose.icon className="w-5 h-5 text-accent-500" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {purpose.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Digital Conservatory</h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed mb-6">
                The Foundation works as a digital conservatory in the service of open urbanism; 
                it ensures the archiving, sharing and durability of the non-human commons and of 
                all the methods, source codes, designs and data that result from them.
              </p>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                It constitutes a publicly accessible information heritage placed under a legal 
                regime compatible with this purpose.
              </p>
            </div>
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
            >
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-accent-500" />
                Copyleft Commitment
              </h4>
              <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm leading-relaxed">
                The Foundation favors, as much as possible, viral licenses under the copyleft 
                principle, as well as any other norm or normative framework with equivalent effects.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['CC BY-SA', 'GNU AGPL', 'Open Source'].map((badge) => (
                  <span 
                    key={badge}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent-600/20 text-accent-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
