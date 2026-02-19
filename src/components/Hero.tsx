import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, Users, Globe2 } from 'lucide-react';
import { Button } from './ui';

const stats = [
  { icon: Globe2, value: '40+', label: 'Sites Worldwide' },
  { icon: Users, value: '7B', label: 'Urbanists Network' },
  { icon: GitBranch, value: '100%', label: 'Open Source' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.3), transparent)'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              Swiss Public-Interest Foundation
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
            Adopt collective{' '}
            <span className="text-gradient">intelligence.</span>
            <br />
            Succeed with your sustainable planning projects
          </h1>

          <p 
            className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Open source and free. Approaches and platforms recognised by UN-Habitat and the European Commission.
          </p>

          <div className="flex flex-wrap gap-4 mb-20">
            <Button variant="primary" size="lg" href="#deploy">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" size="lg" href="#mission">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-3xl"
              style={{ 
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-600/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-accent-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
