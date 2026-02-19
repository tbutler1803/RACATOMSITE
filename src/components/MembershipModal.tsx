import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import ArtDecoDivider from './ArtDecoDivider';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  price?: string;
}

function MembershipModal({ isOpen, onClose, title, description, price }: MembershipModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
          className="fixed inset-0 z-40 backdrop-blur-[2px] transition-all duration-400 ease-out bg-black/60"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none"
        onClick={onClose}
      >
        <div
          className={`relative bg-[var(--color-dark-navy)] border-2 border-[var(--color-gold-accent)] w-full max-w-[96%] sm:max-w-[640px] md:max-w-xl rounded-lg max-h-full overflow-y-auto shadow-2xl transition-all duration-400 ease-out pointer-events-auto ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
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
          <div className="p-6 sm:p-8 flex flex-col gap-4">
            <h2 id="membership-modal-title" className="text-2xl font-heading text-[var(--color-gold-accent)] mb-4">
              {title}
            </h2>
            <div className="text-[var(--color-cream)] font-light leading-relaxed whitespace-pre-line mb-4">
              {description}
            </div>
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-10" className="mb-4" />
            {price && (
              <div className="text-lg font-semibold text-[var(--color-cream)] mt-6">{price}</div>
            )}
            <a
              href="https://royalautomobileclubofaustralia.peoplevine.co.uk/survey/group/620"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold w-full mt-4"
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
