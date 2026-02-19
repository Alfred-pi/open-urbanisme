import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center img-bw scale-110"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </motion.div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-white/30 rounded-full float"
        style={{ animationDelay: '0s' }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full float"
        style={{ animationDelay: '1s' }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-8 pt-20"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm tracking-wide">Open Source · UN-Habitat Recognised</span>
          </motion.div>

          {/* Title */}
          <div className="mb-0">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-bold tracking-tighter leading-[0.9]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Collective
            </motion.h1>
          </div>
          <div className="mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-bold tracking-tighter leading-[0.9] text-shine pb-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Intelligence
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-[var(--color-text-2)] max-w-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Democratic urban planning for sustainable cities worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href="#deploy"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-[14px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a 
              href="#about"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold rounded-[14px] hover:border-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={18} />
              Watch Video
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-12 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { value: '40+', label: 'Global Sites' },
              { value: '7B', label: 'Potential Users' },
              { value: '100%', label: 'Open Source' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-3)] uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest text-[var(--color-text-3)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-[var(--color-text-3)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
