import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-1 p-1 bg-[var(--color-surface)] rounded-full">
      {languages.map((l) => (
        <motion.button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`
            px-3 py-1.5 text-xs font-semibold rounded-full transition-colors
            ${lang === l.code 
              ? 'bg-white text-black' 
              : 'text-[var(--color-text-2)] hover:text-white'
            }
          `}
          whileTap={{ scale: 0.95 }}
        >
          {l.label}
        </motion.button>
      ))}
    </div>
  );
}
