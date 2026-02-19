export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="font-semibold mb-4">Open Urbanisme</h4>
            <p className="text-sm text-[var(--color-text-2)]">
              A Swiss public-interest foundation for open and democratic urban planning.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[var(--color-text-3)] mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[var(--color-text-2)] hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-[var(--color-text-2)] hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="text-[var(--color-text-2)] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[var(--color-text-3)] mb-4">Legal</h4>
            <p className="text-sm text-[var(--color-text-2)]">
              CC BY-SA 4.0 (documentation)<br />
              GNU AGPL (software)
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-3)]">
          <p>© {new Date().getFullYear()} Fondation Urbanisme Ouvert</p>
          <p>Geneva, Switzerland</p>
        </div>
      </div>
    </footer>
  );
}
