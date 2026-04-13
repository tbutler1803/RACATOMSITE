import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import ArtDecoDivider from './ArtDecoDivider';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  price?: string;
  membershipFee?: string;
  preSpendCredit?: string;
  monthlySubscription?: string;
}

function MembershipModal({ isOpen, onClose, title, description, price, membershipFee, preSpendCredit, monthlySubscription }: MembershipModalProps) {
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
      }, 400);
      return () => clearTimeout(timer);
    }
    // Cleanup: always restore scroll on unmount
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
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

  if (!isVisible) return null;

  return (
    <>
      {isAnimating && (
        <div
          className="fixed inset-0 z-[90] backdrop-blur-[2px] transition-all duration-400 ease-out bg-black/60"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-2 sm:p-4 pt-24 pb-4 sm:pt-24 sm:pb-4 md:pt-6 lg:pt-8 pointer-events-none"
        onClick={onClose}
        style={isIPad ? { paddingTop: '8rem' } : undefined}
      >
        <div
          className={`relative bg-[var(--color-dark-navy)] border-2 border-[var(--color-gold-accent)] w-full max-w-[94%] sm:max-w-[540px] md:max-w-xl rounded-lg max-h-full overflow-y-auto shadow-2xl transition-all duration-400 ease-out pointer-events-auto ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="membership-modal-title"
          ref={dialogRef}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--color-gold-accent)] hover:opacity-70 transition-opacity z-20"
            aria-label="Close membership details dialog"
          >
            <X size={24} />
          </button>
          <div className="p-5 sm:p-8 flex flex-col gap-4">
            <h2 id="membership-modal-title" className="text-2xl md:text-3xl font-heading text-[var(--color-gold-accent)] mb-4 leading-tight tracking-[0.05em] uppercase">
              {title.includes('/') ? (
                title.split('/').map((part, i, arr) => (
                  <span key={i} className="block md:inline">
                    {part}{i < arr.length - 1 ? '/' : ''}
                  </span>
                ))
              ) : (
                title
              )}
            </h2>
            <div className="text-[var(--color-cream)] font-light leading-relaxed whitespace-pre-line mb-4 text-sm sm:text-base">
              {description}
            </div>
            <ArtDecoDivider width="w-48 sm:w-56 md:w-72 lg:w-80" height="h-6 md:h-10" className="mb-4" />

            <div className="space-y-2 mt-2 sm:mt-6">
              {membershipFee && (
                <div className="flex justify-between items-center text-sm md:text-base text-[var(--color-cream)]">
                  <span>Membership Fee:</span>
                  <span className="font-medium md:font-bold">{membershipFee}</span>
                </div>
              )}
              {preSpendCredit && (
                <div className="flex justify-between items-center text-sm md:text-base text-[var(--color-cream)]">
                  <span>Pre-Spend Credit:</span>
                  <span className="font-medium md:font-bold">{preSpendCredit}</span>
                </div>
              )}
              {monthlySubscription && (
                <div className="flex justify-between items-center text-sm md:text-base text-[var(--color-cream)]">
                  <span>Monthly Subscription:</span>
                  <span className="font-medium md:font-bold">{monthlySubscription}/mo</span>
                </div>
              )}

              <div className="pt-2 border-t border-[var(--color-gold-accent)]/20 mt-2">
                <div className="flex justify-between items-baseline">
                  <div className="flex flex-col">
                    <span className="text-base md:text-xl text-[var(--color-gold-accent)] font-medium md:font-bold">Yearly Subscription <span className="text-xs md:text-sm opacity-70">incl GST</span></span>
                  </div>
                  {price && (
                    <div className="text-lg md:text-2xl text-[var(--color-gold-accent)] font-medium md:font-bold">{price}</div>
                  )}
                </div>
              </div>
            </div>

            <a
              href="https://membership.raca.com.au/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold w-full mt-4 text-base md:text-xl tracking-[0.08em] md:tracking-[0.12em] font-medium md:font-bold"
            >
              APPLY HERE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MembershipModal;
