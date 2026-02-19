import { motion } from 'framer-motion';
import { Rocket, Users, GraduationCap, ArrowRight, Github, FileText, MessageCircle } from 'lucide-react';
import { Section, SectionHeader, Button } from './ui';

const approaches = [
  {
    icon: Rocket,
    title: 'Autonomous',
    subtitle: 'Free Access',
    description: 'You have free access to our documentation (CC BY-SA 4.0 licence) and platforms (available on GitHub under GNU AGPL). Contact us with any questions.',
    features: ['Full documentation access', 'GitHub source code', 'Community support'],
    cta: 'Access Resources',
    href: '#',
    variant: 'secondary' as const
  },
  {
    icon: Users,
    title: 'Accompanied',
    subtitle: 'Foundation Support',
    description: 'The Foundation responds to deployment requests from cities or NGOs in the form of studies compatible with local urban planning processes.',
    features: ['Custom deployment', 'Local adaptation', 'Partner network'],
    cta: 'Request Support',
    href: '#contact',
    variant: 'primary' as const,
    featured: true
  },
  {
    icon: GraduationCap,
    title: 'Training',
    subtitle: 'Learn & Apply',
    description: 'Combine theoretical approach with concrete cases. Learn how to generate relevant citizen contributions to inform decision-making.',
    features: ['Theory & practice', 'International networks', 'Expert facilitators'],
    cta: 'View Programs',
    href: '#universities',
    variant: 'secondary' as const
  }
];

export function Deploy() {
  return (
    <Section id="deploy" dark>
      <SectionHeader
        eyebrow="Deployment"
        title="Three approaches to open urbanism"
        description="Choose the approach that fits your organization's needs and capabilities."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {approaches.map((approach, index) => (
          <motion.div
            key={approach.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative rounded-3xl p-8 ${approach.featured ? 'glow' : ''}`}
            style={{ 
              backgroundColor: approach.featured ? 'var(--color-bg-tertiary)' : 'var(--color-bg-secondary)',
              border: approach.featured ? '2px solid rgb(99, 102, 241)' : '1px solid var(--color-border)'
            }}
          >
            {approach.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-accent-600 text-white">
                  Recommended
                </span>
              </div>
            )}

            <div className="w-14 h-14 rounded-2xl bg-accent-600/20 flex items-center justify-center mb-6">
              <approach.icon className="w-7 h-7 text-accent-500" />
            </div>

            <div className="mb-2">
              <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                {approach.subtitle}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{approach.title}</h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {approach.description}
            </p>

            <ul className="space-y-3 mb-8">
              {approach.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent-600/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant={approach.variant} href={approach.href} className="w-full">
              {approach.cta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 flex flex-wrap justify-center gap-6"
      >
        {[
          { icon: Github, label: 'GitHub' },
          { icon: FileText, label: 'Documentation' },
          { icon: MessageCircle, label: 'Get in Touch', href: '#contact' }
        ].map((item) => (
          <a 
            key={item.label}
            href={item.href || '#'} 
            className="flex items-center gap-2 px-5 py-3 rounded-2xl transition-colors hover:bg-dark-600"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </motion.div>
    </Section>
  );
}
