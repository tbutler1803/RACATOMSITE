import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { getAssetPath } from '../utils/paths';

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function BookTourModal({ isOpen, onClose }: BookTourModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isIPad, setIsIPad] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);
      return () => clearTimeout(timer);
    }

    // Cleanup function to ensure scroll is restored
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleCloseModals = () => {
      onClose();
    };
    window.addEventListener('close-modals', handleCloseModals);
    return () => window.removeEventListener('close-modals', handleCloseModals);
  }, [onClose]);

  // Detect iPad devices
  useEffect(() => {
    const ua = navigator.userAgent;
    const isIPadDevice = /iPad|Mac/.test(ua) && 'ontouchstart' in window;
    setIsIPad(isIPadDevice);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea',
      'input',
      'select',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(focusableSelectors)
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
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
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay - reduced blur to prevent distortion */}
      {isAnimating && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-[2px] transition-all duration-500 ease-out bg-black/60"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-2 sm:p-4 pt-10 pb-4 sm:pt-24 sm:pb-4 md:pt-6 lg:pt-8 pointer-events-none"
        onClick={onClose}
        style={isIPad ? { paddingTop: '8rem' } : undefined}
      >
        <div
          className={`relative bg-[var(--color-dark-navy)] border-2 border-[var(--color-gold-accent)] w-full max-w-[96%] sm:max-w-[640px] md:w-full md:max-w-3xl lg:max-w-5xl rounded-lg max-h-full overflow-y-auto shadow-2xl transition-all duration-500 ease-out pointer-events-auto ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-tour-title"
          ref={dialogRef}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--color-gold-accent)] hover:opacity-70 transition-opacity z-20"
            aria-label="Close book a tour dialog"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Information */}
            <div className="p-6 sm:p-8 md:p-8 flex flex-col justify-between relative bg-cover bg-bottom pt-14 md:pt-8" style={{ backgroundImage: `url(${getAssetPath('/IMAGES/About-Us-Background.jpg')})` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-900/70"></div>
              <div className="relative z-10">
                <h2 id="book-tour-title" className="pr-10 md:pr-0">
                  BOOK A CLUB TOUR<br className="hidden sm:inline" />
                </h2>
                <p className="text-[var(--color-cream)] font-light leading-relaxed mb-3 sm:mb-5 md:mb-7 text-sm md:text-base mobile-large-text">
                  Tour the club, gym, parking, and dining—our team tailors your visit to what matters most.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-7 relative z-10">
                <div>
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-xs sm:text-[11px] md:text-sm tracking-widest mb-2 uppercase">
                    Address
                  </h3>
                  <p className="text-[var(--color-cream)] font-light text-sm sm:text-xs md:text-sm leading-relaxed">
                    89 Macquarie Street,<br className="hidden sm:inline" />
                    <span className="sm:hidden"> </span>Sydney, NSW 2000, Australia
                  </p>
                </div>

                <div>
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-xs sm:text-[11px] md:text-sm tracking-widest mb-2 uppercase">
                    Contact
                  </h3>
                  <p className="text-[var(--color-cream)] font-light text-sm sm:text-xs md:text-sm leading-relaxed">
                    +61 (02) 8273 2300 · ambassador@raca.com.au
                  </p>
                </div>

                <div>
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-xs sm:text-[11px] md:text-sm tracking-widest mb-2 uppercase">
                    Hours
                  </h3>
                  <p className="text-[var(--color-cream)] font-light text-sm sm:text-xs md:text-sm leading-relaxed">
                    Club Reception is accessible 24 hours, 7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-3 sm:p-5 md:p-8 relative bg-cover bg-center" style={{ backgroundImage: `url(${getAssetPath('/textures/kseniya-lapteva-A4rqd2g-eLo-unsplash.png')})` }}>
              <div className="absolute inset-0 bg-[var(--color-dark-navy)]/95"></div>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative z-10">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <label htmlFor="tour-first-name" className="text-[var(--color-gold-accent)] font-heading text-xs tracking-widest block mb-2">
                      FIRST NAME <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="tour-first-name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-2 border-[var(--color-gold-accent)] px-3 md:px-4 py-2 md:py-3 text-[var(--color-cream)] font-light text-sm md:text-base focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="tour-last-name" className="text-[var(--color-gold-accent)] font-heading text-xs tracking-widest block mb-2">
                      LAST NAME <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="tour-last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-2 border-[var(--color-gold-accent)] px-3 md:px-4 py-2 md:py-3 text-[var(--color-cream)] font-light text-sm md:text-base focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tour-email" className="text-[var(--color-gold-accent)] font-heading text-xs tracking-widest block mb-2">
                    EMAIL <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="tour-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-2 border-[var(--color-gold-accent)] px-3 md:px-4 py-2 md:py-3 text-[var(--color-cream)] font-light text-sm md:text-base focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="tour-message" className="text-[var(--color-gold-accent)] font-heading text-xs tracking-widest block mb-2">
                    MESSAGE <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="tour-message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    placeholder="Let us know your preferred tour times or any questions you have..."
                    className="w-full bg-transparent border-2 border-[var(--color-gold-accent)] px-3 md:px-4 py-2 md:py-3 text-[var(--color-cream)] placeholder-gray-500 font-light text-sm md:text-base focus:outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full py-3 md:py-4 bg-transparent border-2 border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] font-heading text-base md:text-lg tracking-widest hover:bg-[var(--color-gold-accent)] hover:text-[var(--color-dark-navy)] disabled:opacity-50 transition-colors uppercase"
                >
                  {submitStatus === 'loading' ? 'REQUESTING...' : 'REQUEST TOUR'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm text-center font-light">
                    Thank you! We'll be in touch soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center font-light">
                    An error occurred. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookTourModal;
