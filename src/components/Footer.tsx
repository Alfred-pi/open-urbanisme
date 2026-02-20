import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-16 px-6 md:px-8 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Open Urbanism" className="h-8 mb-4" />
            <p className="text-sm text-[var(--color-text-2)] max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold mb-4">{t.footer.resources}</p>
            <ul className="space-y-2 text-sm text-[var(--color-text-2)]">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.documentation}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://openurbanism.ch/fr" target="_blank" rel="noopener" className="hover:text-white transition-colors">Hub</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold mb-4">{t.footer.legal}</p>
            <ul className="space-y-2 text-sm text-[var(--color-text-2)]">
              <li>CC BY-SA 4.0 (docs)</li>
              <li>GNU AGPL (software)</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-3)]">
          <p>© {new Date().getFullYear()} Fondation Urbanisme Ouvert</p>
          <p>{t.footer.geneva}</p>
        </div>
      </div>
    </footer>
  );
}
