import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Universities() {
  const { t } = useLanguage();

  const projects = [
    { name: 'Interlace', tag: 'Horizon 2020', desc: t.universities.interlace },
    { name: 'Multigination', tag: 'Horizon Europe', desc: t.universities.multigination },
  ];

  return (
    <section id="research" className="py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[var(--color-text-3)] uppercase tracking-wider mb-4">
              {t.universities.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {t.universities.title}
            </h2>
            <p className="text-[var(--color-text-2)] leading-relaxed mb-8">
              {t.universities.text}
            </p>

            <div className="space-y-3">
              {projects.map((project) => (
                <motion.a
                  key={project.name}
                  href="#"
                  className="flex items-center justify-between p-5 bg-[var(--color-surface)] rounded-[20px] border border-[var(--color-border)] hover:border-[var(--color-text-3)] transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-semibold">{project.name}</span>
                      <span className="px-2 py-0.5 text-xs bg-[var(--color-surface-2)] rounded-full text-[var(--color-text-3)]">
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-2)]">{project.desc}</p>
                  </div>
                  <ExternalLink size={18} className="text-[var(--color-text-3)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="aspect-square rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
              alt="University"
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
