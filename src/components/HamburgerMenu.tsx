import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Instagram, Facebook, MapPin } from 'lucide-react';
import { getAssetPath } from '../utils/paths';

interface HamburgerMenuProps {
  onOpen?: () => void;
}

function HamburgerMenu({ onOpen }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'EVENTS', path: '/events' },
    { label: 'MOTORING', path: '/motoring' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'MEMBERSHIP LOGIN', path: 'https://member.raca.com.au/' }
  ];

  const toggleMenu = useCallback((next: boolean) => {
    setIsOpen(next);
    window.dispatchEvent(new CustomEvent('hamburger-toggle', { detail: { isOpen: next } }));
    if (next && onOpen) {
      onOpen();
    }
  }, [onOpen]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    } else {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea',
      'input',
      'select',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    const focusableElements = Array.from(
      menu.querySelectorAll<HTMLElement>(focusableSelectors)
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        toggleMenu(false);
        return;
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen, toggleMenu]);

  const handleNavigate = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Animated hamburger button */}
      <button
        type="button"
        onClick={() => toggleMenu(!isOpen)}
        className="relative p-3 text-[var(--color-gold-accent)] transition-all duration-300 group rounded-full border-2 border-[var(--color-gold-accent)] hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)]/5"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="site-menu"
      >
        <div className="w-7 h-5 relative flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-current transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'
              }`}
          />
          <span
            className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}
          />
          <span
            className={`w-full h-0.5 bg-current transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'
              }`}
          />
        </div>
      </button>

      {/* Overlay with richer blur to match site glow */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-veil z-40 transition-opacity duration-300"
          onClick={() => toggleMenu(false)}
          style={{ touchAction: 'none', overscrollBehavior: 'none' }}
          aria-hidden="true"
        />
      )}

      {/* Side panel menu with textured navy background and large decorative logo */}
      <div
        id="site-menu"
        className={`fixed top-0 right-0 left-auto w-[72vw] sm:w-[320px] md:w-[400px] z-50 transform transition-all duration-500 ease-in-out flex flex-col overflow-hidden border-l-2 border-[var(--color-gold-accent)]/30 shadow-[0_0_50px_rgba(223,189,114,0.25)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="Site menu"
        ref={menuRef}
        style={{
          backgroundImage: `url(${getAssetPath('/textures/kseniya-lapteva-A4rqd2g-eLo-unsplash.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100dvh',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        {/* Large decorative logo background - positioned on right, only left half visible */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[140%] h-auto opacity-10 pointer-events-none overflow-hidden">
          <img
            src={getAssetPath('/company_logo.png')}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain"
            style={{ transform: 'translateX(35%)' }}
          />
        </div>

        {/* Header with close button */}
        <div className="relative z-10 px-6 py-3 sm:py-6 border-b border-[var(--color-gold-accent)]/20">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => toggleMenu(false)}
              className="text-[var(--color-gold-accent)] hover:text-[var(--color-gold-light)] transition-all duration-300 hover:rotate-90"
              aria-label="Close menu"
            >
              <X size={30} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Menu items with stagger animation */}
        <nav className="relative z-10 flex-1 flex flex-col justify-center py-2 sm:py-6 px-6 overflow-y-auto" aria-label="Main navigation">
          {menuItems.map((item, index) => (
            <div
              key={item.path}
              className={`transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              <button
                type="button"
                onClick={() => handleNavigate(item.path)}
                className="group w-full text-left px-6 py-1.5 sm:py-4 text-[var(--color-gold-accent)] font-heading text-[20px] min-[400px]:text-[22px] sm:text-[26px] md:text-[28px] tracking-[0.24em] transition-all duration-300 relative"
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
        <div
          className="relative z-10 px-6 pt-2 sm:pt-6 pb-6 border-t border-[var(--color-gold-accent)]/20 space-y-2 text-[var(--color-cream)]/85 text-sm tracking-[0.18em]"
          style={{ paddingBottom: 'max(20px, env(safe-area-inset-bottom, 20px))' }}
        >
          <p className="text-[var(--color-cream)]/75 font-light">+61 (02) 8273 2300</p>
          <p className="text-[var(--color-cream)]/75 font-light">89 Macquarie St, Sydney NSW 2000</p>
          
          <div className="pt-1">
            <a 
              href={getAssetPath('/IMAGES/RACA Privacy 2026.pdf')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--color-gold-accent)] hover:text-[var(--color-gold-light)] transition-all duration-300 font-light tracking-[0.2em] text-xs uppercase underline decoration-[var(--color-gold-accent)]/30 underline-offset-4"
            >
              Privacy Policy
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2 text-[var(--color-gold-accent)]">
            <a
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold-accent)]/35 hover:border-[var(--color-gold-accent)] hover:text-[var(--color-gold-light)] hover:bg-[var(--color-gold-accent)]/5 transition-all duration-300"
              href="https://www.google.com/maps/search/?api=1&query=Royal+Automobile+Club+of+Australia+89+Macquarie+St+Sydney"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
            >
              <MapPin size={22} strokeWidth={1.5} />
            </a>
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
