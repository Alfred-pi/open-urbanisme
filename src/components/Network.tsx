import { motion } from 'framer-motion';
import { Globe2, MessageSquare, Lightbulb, HeartHandshake, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Button } from './ui';

const benefits = [
  {
    icon: MessageSquare,
    title: 'Exchange Ideas',
    description: 'Connect with people in your geographical area about sustainable urban planning challenges.'
  },
  {
    icon: Lightbulb,
    title: 'Share Knowledge',
    description: 'Platform for exchanges on local and global issues relating to sustainable urban planning.'
  },
  {
    icon: HeartHandshake,
    title: 'Continuous Improvement',
    description: 'Encourage method improvements while creating direct links between players with complementary visions.'
  }
];

export function Network() {
  return (
    <Section id="network" dark>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Global Community"
            title="7 Billion Urbanists"
            description="The global network of users of the approaches and platforms initiated by the Foundation."
            centered={false}
          />

          <p className="mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            This network brings together users, contributors and project owners who are 
            implementing urban planning approaches. It enables you to exchange ideas with 
            people about the challenges of sustainable urban planning and open urban planning.
          </p>

          <Button variant="primary" href="#contact">
            Join the Network
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex gap-5 p-6 rounded-3xl group hover:glow-sm transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-600/30 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-20 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.05))',
          border: '1px solid rgba(99, 102, 241, 0.3)'
        }}
      >
        <Globe2 className="w-12 h-12 text-accent-500 mx-auto mb-6" />
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          "The Fondation Urbanisme Ouvert would like to express its deep gratitude to all the 
          contributors: residents, professionals, researchers, public and private institutions 
          who are actively involved in enriching a free and shared approach."
        </p>
        <p className="mt-6 font-semibold text-accent-400">
          Our collective commitment is essential to build a sustainable future accessible to all.
        </p>
      </motion.div>
    </Section>
  );
}
