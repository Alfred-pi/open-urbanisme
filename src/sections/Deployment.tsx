import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, ArrowRight, Check } from 'lucide-react';

const options = [
  {
    icon: BookOpen,
    title: 'Autonomous',
    price: 'Free',
    description: 'Self-serve access to all resources',
    features: ['Documentation (CC BY-SA 4.0)', 'Platforms on GitHub (GNU AGPL)', 'Community support'],
    cta: 'View GitHub',
  },
  {
    icon: Users,
    title: 'Accompanied',
    price: 'Custom',
    description: 'Deployment support from our team',
    features: ['Dedicated consultation', 'Local process integration', 'On-site training'],
    cta: 'Contact Us',
    featured: true,
  },
  {
    icon: GraduationCap,
    title: 'Training',
    price: 'Courses',
    description: 'Learn the methodology in depth',
    features: ['Theoretical foundation', 'Concrete case studies', 'Certification'],
    cta: 'Learn More',
  },
];

export function Deployment() {
  return (
    <Section id="deploy">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-text-3)] mb-4">
          Get Started
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Deploy Open Urbanism
        </h2>
        <p className="text-xl text-[var(--color-text-2)] max-w-2xl mx-auto">
          Three ways to bring open urban planning to your community
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {options.map((option, i) => (
          <motion.div
            key={option.title}
            className={`
              relative p-8 rounded-[24px] border flex flex-col
              ${option.featured 
                ? 'bg-white text-black border-white' 
                : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-white/30'
              }
              transition-all
            `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {option.featured && (
              <motion.div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-xs font-semibold rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                RECOMMENDED
              </motion.div>
            )}

            <div className={`
              w-14 h-14 rounded-full flex items-center justify-center mb-6
              ${option.featured ? 'bg-black text-white' : 'border border-[var(--color-border)]'}
            `}>
              <option.icon size={24} />
            </div>

            <div className="text-sm uppercase tracking-wider opacity-60 mb-1">{option.price}</div>
            <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
            <p className={`mb-6 ${option.featured ? 'text-black/70' : 'text-[var(--color-text-2)]'}`}>
              {option.description}
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {option.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check size={16} className={option.featured ? 'text-black' : 'text-white'} />
                  <span className={`text-sm ${option.featured ? 'text-black/80' : 'text-[var(--color-text-2)]'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <motion.button
              className={`
                w-full py-4 rounded-[14px] font-semibold flex items-center justify-center gap-2
                ${option.featured 
                  ? 'bg-black text-white hover:bg-black/80' 
                  : 'border border-[var(--color-border)] hover:border-white hover:bg-white hover:text-black'
                }
                transition-all
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option.cta}
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
