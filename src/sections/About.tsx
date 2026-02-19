import { Section } from '../components/Section';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Images Stack */}
        <motion.div
          className="relative h-[500px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Main image */}
          <motion.div
            className="absolute top-0 left-0 w-[80%] aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <img 
              src={images[0]}
              alt="Team collaboration"
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>
          
          {/* Secondary image */}
          <motion.div
            className="absolute bottom-0 right-0 w-[60%] aspect-square rounded-[24px] overflow-hidden shadow-2xl border-4 border-black"
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <img 
              src={images[1]}
              alt="Planning session"
              className="w-full h-full object-cover img-bw"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 left-1/4 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Swiss Foundation 🇨🇭
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm tracking-[0.2em] uppercase text-[var(--color-text-3)] mb-4"
            variants={itemVariants}
          >
            About Us
          </motion.p>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
            variants={itemVariants}
          >
            Open Urbanism<br />
            <span className="text-[var(--color-text-2)]">for Everyone</span>
          </motion.h2>

          <motion.div
            className="space-y-4 text-lg text-[var(--color-text-2)]"
            variants={itemVariants}
          >
            <p>
              We believe in democratic urban planning. Our foundation shares 
              <strong className="text-white"> free resources</strong> with organisations worldwide.
            </p>
            <p>
              Licensed under <span className="text-white font-mono">CC BY-SA</span> (docs) 
              and <span className="text-white font-mono">GNU AGPL</span> (software).
            </p>
          </motion.div>

          {/* Stats with animation */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[var(--color-border)]"
            variants={itemVariants}
          >
            {[
              { value: '40+', label: 'Deployments' },
              { value: '4', label: 'Continents' },
              { value: '∞', label: 'Potential' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <motion.div 
                  className="text-4xl font-bold mb-1"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-[var(--color-text-3)] uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
