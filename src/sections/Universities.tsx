import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Users2 } from 'lucide-react';

const projects = [
  { name: 'Interlace', tag: 'Horizon 2020', desc: 'Natural Base Solutions for sustainable urban development' },
  { name: 'Multigination', tag: 'Horizon Europe', desc: 'Driving Urban Transition through innovative approaches' },
];

export function Universities() {
  return (
    <Section id="research" dark>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: Content */}
        <div>
          <motion.p
            className="text-sm tracking-[0.2em] uppercase text-[var(--color-text-3)] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Research & Education
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Links to<br />
            <span className="text-[var(--color-text-2)]">Universities</span>
          </motion.h2>

          {/* Research Projects */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={20} className="text-[var(--color-text-3)]" />
              <span className="text-sm uppercase tracking-wider text-[var(--color-text-3)]">Research Projects</span>
            </div>
            <div className="space-y-3">
              {projects.map((project, i) => (
                <motion.div 
                  key={project.name}
                  className="group p-5 bg-[var(--color-surface)] rounded-[16px] border border-[var(--color-border)] hover:border-white/30 transition-all cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold">{project.name}</span>
                        <span className="px-2 py-0.5 text-xs bg-white/10 rounded-full">{project.tag}</span>
                      </div>
                      <p className="text-sm text-[var(--color-text-2)]">{project.desc}</p>
                    </div>
                    <ExternalLink size={16} className="text-[var(--color-text-3)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Masterclasses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users2 size={20} className="text-[var(--color-text-3)]" />
              <span className="text-sm uppercase tracking-wider text-[var(--color-text-3)]">Masterclasses</span>
            </div>
            <p className="text-[var(--color-text-2)] mb-4">
              One to two-week workshops creating temporary Urban Living Labs 
              with university professors and students.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white font-semibold hover:underline">
              Learn about our courses <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right: Images */}
        <div className="space-y-6">
          <motion.div
            className="aspect-[4/3] rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
              alt="University lecture"
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              className="aspect-square rounded-[24px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80"
                alt="Students"
                className="w-full h-full object-cover img-bw"
              />
            </motion.div>
            <motion.div
              className="aspect-square rounded-[24px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="Workshop"
                className="w-full h-full object-cover img-bw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
