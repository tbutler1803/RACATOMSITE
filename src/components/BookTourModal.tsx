import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = 'unset';
      }, 500);
      return () => clearTimeout(timer);
    }

    const handleCloseModals = () => {
      onClose();
    };
    window.addEventListener('close-modals', handleCloseModals);
    return () => window.removeEventListener('close-modals', handleCloseModals);
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
      {/* Backdrop overlay with blur effect - lighter blur on mobile for performance */}
      {isAnimating && (
        <div 
          className="fixed inset-0 z-40 backdrop-blur-sm md:backdrop-blur-md transition-all duration-500 ease-out bg-black/30"
          onClick={onClose}
        />
      )}
      
      <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-2 sm:p-4 pt-20 sm:pt-24 md:pt-6 lg:pt-8 pointer-events-none" onClick={onClose}>
        <div 
          className={`relative bg-[var(--color-dark-navy)] border-2 border-[var(--color-gold-accent)] w-full max-w-[96%] sm:max-w-[640px] md:w-full md:max-w-3xl lg:max-w-5xl rounded-lg max-h-[92vh] sm:max-h-[90vh] md:max-h-[92vh] overflow-y-auto shadow-2xl transition-all duration-500 ease-out pointer-events-auto ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--color-gold-accent)] hover:opacity-70 transition-opacity z-20"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Information */}
            <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between relative bg-cover bg-center" style={{ backgroundImage: `url(${getAssetPath('/IMAGES/images/DSC_1410.jpg')})` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-900/70"></div>
              <div className="relative z-10">
                <h2 className="text-[28px] sm:text-3xl md:text-4xl font-heading text-[var(--color-gold-accent)] mb-2 sm:mb-4 md:mb-5 tracking-wide">
                  BOOK A<br />CLUB TOUR
                </h2>
                <p className="text-[var(--color-cream)] font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                <p className="text-[var(--color-cream)] font-light leading-relaxed mb-4 sm:mb-6 md:mb-8 text-[13px] sm:text-sm md:text-base">
                </p>
              </div>

              <div className="space-y-6 md:space-y-10 relative z-10">
              <div className="space-y-5 md:space-y-8 relative z-10">
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-xs md:text-sm tracking-widest mb-2 uppercase">
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-[11px] sm:text-xs md:text-sm tracking-widest mb-2 uppercase">
                  </h3>
                  <p className="text-[var(--color-cream)] font-light text-xs md:text-sm">
                  <p className="text-[var(--color-cream)] font-light text-[12px] sm:text-xs md:text-sm">
                    Sydney NSW 2000, Australia
                  </p>
                </div>

                <div>
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-xs md:text-sm tracking-widest mb-2 uppercase">
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-[11px] sm:text-xs md:text-sm tracking-widest mb-2 uppercase">
                  </h3>
                  <p className="text-[var(--color-cream)] font-light text-xs md:text-sm">
                  <p className="text-[var(--color-cream)] font-light text-[12px] sm:text-xs md:text-sm">
                    ambassador@raca.com.au
                  </p>
                </div>

                <div>
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-xs md:text-sm tracking-widest mb-2 uppercase">
                  <h3 className="text-[var(--color-gold-accent)] font-heading text-[11px] sm:text-xs md:text-sm tracking-widest mb-2 uppercase">
                  </h3>
                  <p className="text-[var(--color-cream)] font-light text-xs md:text-sm">
                  <p className="text-[var(--color-cream)] font-light text-[12px] sm:text-xs md:text-sm">
                    days a week
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-4 md:p-8">
            <div className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <label className="text-[var(--color-gold-accent)] font-heading text-xs tracking-widest block mb-2">
                      FIRST NAME <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-2 border-[var(--color-gold-accent)] px-3 md:px-4 py-2 md:py-3 text-[var(--color-cream)] font-light text-sm md:text-base focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[var(--color-gold-accent)] font-heading text-xs tracking-widest block mb-2">
                      LAST NAME <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-2 border-[var(--color-gold-accent)] px-3 md:px-4 py-2 md:py-3 text-[var(--color-cream)] font-light text-sm md:text-base focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[var(--color-gold-accent)] font-heading text-xs tracking-widest block mb-2">
                    EMAIL <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-2 border-[var(--color-gold-accent)] px-3 md:px-4 py-2 md:py-3 text-[var(--color-cream)] font-light text-sm md:text-base focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[var(--color-gold-accent)] font-heading text-xs tracking-widest block mb-2">
                    MESSAGE <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
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
                  className="w-full py-3 md:py-4 bg-red-600 text-white font-heading text-xs md:text-sm tracking-widest hover:bg-red-700 disabled:opacity-50 transition-colors uppercase"
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
