import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Instagram, Facebook } from 'lucide-react';
import { getAssetPath } from '../utils/paths';

interface HamburgerMenuProps {
  onOpen?: () => void;
}

function HamburgerMenu({ onOpen }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'EVENTS', path: '/events' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'MEMBERSHIP LOGIN', path: 'http://raca.k8.membershiphouse.com/login' }
  ];

  const handleNavigate = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  const toggleMenu = (next: boolean) => {
    setIsOpen(next);
    window.dispatchEvent(new CustomEvent('hamburger-toggle', { detail: { isOpen: next } }));
    if (next && onOpen) {
      onOpen();
    }
  };

  return (
    <>
      {/* Animated hamburger button */}
      <button
        onClick={() => toggleMenu(!isOpen)}
        className="relative p-3 text-[var(--color-gold-accent)] transition-all duration-300 group rounded-full border-2 border-[var(--color-gold-accent)] hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)]/5"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="w-7 h-5 relative flex flex-col justify-between">
          <span 
            className={`w-full h-0.5 bg-current transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'
            }`}
          />
          <span 
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
          />
          <span 
            className={`w-full h-0.5 bg-current transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'
            }`}
          />
        </div>
      </button>

      {/* Overlay with richer blur to match site glow */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-veil z-40 transition-opacity duration-300"
          onClick={() => toggleMenu(false)}
        />
      )}

      {/* Side panel menu with textured navy background and large decorative logo */}
      <div
        className={`fixed top-0 right-0 h-screen w-[55vw] sm:w-[320px] md:w-[400px] z-50 transform transition-all duration-500 ease-in-out flex flex-col border-l-2 border-[var(--color-gold-accent)]/30 shadow-[0_0_50px_rgba(223,189,114,0.25)] overflow-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundImage: `url(${getAssetPath('/textures/BLUEBG.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Large decorative logo background - positioned on right, only left half visible */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[140%] h-auto opacity-10 pointer-events-none overflow-hidden">
          <img 
            src={getAssetPath('/company_logo.png')} 
            alt="" 
            className="w-full h-auto object-contain"
            style={{ transform: 'translateX(35%)' }}
          />
        </div>
        
        {/* Header with close button */}
        <div className="relative z-10 px-6 py-6 border-b border-[var(--color-gold-accent)]/20">
          <div className="flex items-center justify-end">
            <button
              onClick={() => toggleMenu(false)}
              className="text-[var(--color-gold-accent)] hover:text-[var(--color-gold-light)] transition-all duration-300 hover:rotate-90"
            >
              <X size={30} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Menu items with stagger animation */}
        <nav className="relative z-10 flex-1 flex flex-col justify-center py-6 overflow-y-auto px-6">
          {menuItems.map((item, index) => (
            <div
              key={item.path}
              className={`transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              <button
                onClick={() => handleNavigate(item.path)}
                className="group w-full text-left px-6 py-4 text-[var(--color-gold-accent)] font-heading text-xl md:text-[28px] tracking-[0.24em] transition-all duration-300 relative"
              >
                <span className="relative z-10 group-hover:text-[var(--color-red-accent)] transition-all duration-300">
                  {item.label}
                </span>
                <span className="absolute bottom-2 left-8 right-8 h-px bg-[var(--color-gold-accent)]/15 group-hover:bg-[var(--color-red-accent)]/50 transition-all duration-300" />
              </button>
            </div>
          ))}
        </nav>
        {/* Contact/footer block */}
        <div className="relative z-10 px-6 py-6 border-t border-[var(--color-gold-accent)]/20 space-y-2 text-[var(--color-cream)]/85 text-sm tracking-[0.18em]">
          <p className="text-[var(--color-cream)]/75">Contact: +61 2 8296 2800</p>
          <p className="text-[var(--color-cream)]/75">89 Macquarie St, Sydney NSW 2000</p>
          <div className="flex items-center gap-4 pt-2 text-[var(--color-gold-accent)]">
            <a
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold-accent)]/35 hover:border-[var(--color-gold-accent)] hover:text-[var(--color-gold-light)] hover:bg-[var(--color-gold-accent)]/5 transition-all duration-300"
              href="https://www.instagram.com/racaustralia/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={1.5} />
            </a>
            <a
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold-accent)]/35 hover:border-[var(--color-gold-accent)] hover:text-[var(--color-gold-light)] hover:bg-[var(--color-gold-accent)]/5 transition-all duration-300"
              href="https://www.facebook.com/RACAustralia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
