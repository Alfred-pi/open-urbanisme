import { motion } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Section, Button } from './ui';

const roadmap = [
  {
    date: 'July - September 2022',
    title: 'Workshop Design',
    description: 'Design and facilitation of the September workshop, resulting in a request to extend cooperation dynamics.',
    completed: true
  },
  {
    date: 'October 2022',
    title: 'Information Heritage',
    description: 'Constitution of an information heritage, collection of information for reports, production of workshop video.',
    completed: true
  },
  {
    date: 'November 2022',
    title: 'Hub Sharing',
    description: 'Share information on a dedicated section of the Foundation Hub, with participants able to post resources.',
    completed: true
  },
  {
    date: 'December 2022+',
    title: 'Partnership Building',
    description: 'Find ways to build public/commons partnership projects together through research-action funding.',
    completed: true
  },
  {
    date: '2023+',
    title: 'Innovation Support',
    description: 'Foundation seeks funds to help teams with commons-based innovation projects launch their ideation phases.',
    completed: false
  }
];

export function Geneva() {
  return (
    <Section id="geneva" dark>
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-accent-500" />
            <span className="text-accent-500 font-semibold">Geneva Initiative</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Towards Public/Commons Partnerships
          </h2>

          <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            In summer 2022, by becoming a partner of the Geneva 2050 initiative 
            "Commons, Climate and Contributive Economy", the Foundation committed 
            alongside the State to foster an ecosystem of public actors, researchers 
            and commons holders interested in public/commons partnerships.
          </p>

          <Button variant="primary" href="#contact">
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-600 via-accent-600/50 to-transparent" />
          
          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative pl-14"
              >
                <div 
                  className={`absolute left-4 w-4 h-4 rounded-full border-2 -translate-x-1/2 ${
                    item.completed ? 'bg-accent-600 border-accent-600' : 'border-accent-600'
                  }`}
                  style={{ backgroundColor: item.completed ? undefined : 'var(--color-bg-primary)' }}
                />
                
                <div 
                  className="p-5 rounded-2xl"
                  style={{ 
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {item.date}
                    </span>
                    {item.completed && (
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                    )}
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
