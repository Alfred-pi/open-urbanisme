import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Button } from './ui';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { label: 'Mission', href: '#mission' },
  { label: 'Approach', href: '#approach' },
  { label: 'Deploy', href: '#deploy' },
  { label: 'Universities', href: '#universities' },
  { label: 'Network', href: '#network' },
  { label: 'About', href: '#about' },
];

export function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        style={{
          backgroundColor: isScrolled ? 'var(--color-bg-primary)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-accent-600 flex items-center justify-center glow-sm group-hover:glow transition-all">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold hidden sm:block">OpenUrbanisme</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-accent-500"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl transition-colors hover:bg-dark-700"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Button variant="primary" size="sm" href="#contact" className="hidden sm:flex">
              Contact Us
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 p-6 lg:hidden"
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium py-3 px-4 rounded-2xl transition-colors"
                  style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" href="#contact" className="mt-4">
                Contact Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
