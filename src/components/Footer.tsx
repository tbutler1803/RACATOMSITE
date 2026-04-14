import { getAssetPath } from '../utils/paths';

function Footer() {
  return (
    <footer className="w-full py-6 px-4 text-center border-t border-[var(--color-gold-accent)]/20 mt-auto">
      <div className="flex items-center justify-center gap-6">
        <a
          href={getAssetPath('/IMAGES/RACA Privacy 2026.pdf')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base md:text-lg text-[var(--color-cream)]/50 hover:text-[var(--color-gold-accent)] transition-colors duration-200 tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Privacy Policy
        </a>
        <span className="text-[var(--color-gold-accent)]/30">|</span>
        <a
          href={getAssetPath('/IMAGES/RACA Club Rules 2026.pdf')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base md:text-lg text-[var(--color-cream)]/50 hover:text-[var(--color-gold-accent)] transition-colors duration-200 tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Club Rules
        </a>
      </div>
    </footer>
  );
}

export default Footer;
