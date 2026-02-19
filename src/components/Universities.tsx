import { motion } from 'framer-motion';
import { BookOpen, Microscope, Users, Award, ExternalLink } from 'lucide-react';
import { Section, SectionHeader, Card, Button } from './ui';

const researchProjects = [
  { name: 'Interlace', type: 'NBS Horizon 2020', year: '2025' },
  { name: 'Multigination', type: 'DUT Horizon Europe', year: '2025' }
];

const masterclassFeatures = [
  'Complex issues tackled hands-on',
  'Direct civil society involvement',
  'Concrete, actionable results'
];

export function Universities() {
  return (
    <Section id="universities">
      <SectionHeader
        eyebrow="Academia"
        title="Links to universities and schools"
        description="International research proposals and Masterclasses organized with university professors."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-600/20 flex items-center justify-center flex-shrink-0">
                <Microscope className="w-7 h-7 text-accent-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Research Projects</h3>
                <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                  The Foundation participates in international calls for research proposals by joining consortia dedicated to sustainable urban planning.
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              {researchProjects.map((project) => (
                <div
                  key={project.name}
                  className="flex items-center justify-between p-4 rounded-2xl"
                  style={{ 
                    backgroundColor: 'var(--color-bg-tertiary)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent-500" />
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {project.type}
                      </div>
                    </div>
                  </div>
                  <span 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                  >
                    {project.year}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Card className="h-full">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-600/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-accent-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Masterclasses</h3>
                <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                  In collaboration with university professors, we develop one- to two-week masterclasses creating temporary Urban Living Labs.
                </p>
              </div>
            </div>

            <ul className="space-y-3 mt-6">
              {masterclassFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-600/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent-500" />
                  </div>
                  <span style={{ color: 'var(--color-text-secondary)' }}>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 p-8 rounded-3xl text-center"
        style={{ 
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)'
        }}
      >
        <BookOpen className="w-10 h-10 text-accent-500 mx-auto mb-4" />
        <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          These educational workshops enable us to tackle complex issues while directly 
          involving civil society, often with concrete results.
        </p>
        <Button variant="primary" href="#contact">
          Partner With Us
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </Section>
  );
}
