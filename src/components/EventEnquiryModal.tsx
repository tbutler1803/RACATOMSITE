import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { getAssetPath } from '../utils/paths';

interface EventEnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function EventEnquiryModal({ isOpen, onClose }: EventEnquiryModalProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        space: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isIPad, setIsIPad] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);

    // Detect iPad devices
    useEffect(() => {
        const ua = navigator.userAgent;
        const isIPadDevice = /iPad|Mac/.test(ua) && 'ontouchstart' in window;
        setIsIPad(isIPadDevice);
    }, []);

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                eventDate: '',
                guestCount: '',
                space: '',
                message: ''
            });
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
                    className="fixed inset-0 z-[90] backdrop-blur-[2px] transition-all duration-500 ease-out bg-black/60"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            <div
                className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-2 sm:p-4 pt-24 pb-10 sm:pb-4 md:pt-6 lg:pt-8 pointer-events-none"
                onClick={onClose}
                style={isIPad ? { paddingTop: '8rem' } : undefined}
            >
                <div
                    className={`relative bg-[var(--color-dark-navy)] border-2 border-[var(--color-gold-accent)] w-full max-w-[96%] sm:max-w-[640px] md:max-w-4xl lg:max-w-5xl rounded-lg max-h-full overflow-y-auto shadow-2xl transition-all duration-500 ease-out pointer-events-auto ${isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="event-enquiry-title"
                    ref={dialogRef}
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-4 right-4 text-[var(--color-gold-accent)] hover:opacity-70 transition-opacity z-20"
                        aria-label="Close enquiry dialog"
                    >
                        <X size={24} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-5">
                        {/* Left Side - Hero / Image */}
                        <div className="md:col-span-2 p-5 sm:p-7 md:p-10 flex flex-col justify-between relative bg-cover bg-center overflow-hidden pt-12 sm:pt-14 md:pt-10"
                            style={{ backgroundImage: `url(${getAssetPath('/IMAGES/DSC_1595.jpg')})` }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
                            <div className="relative z-10">
                                <h2 id="event-enquiry-title" className="text-[var(--color-gold-accent)] font-heading text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 uppercase tracking-wider pr-10 md:pr-0">
                                    Enquire Now
                                </h2>
                                <div className="w-12 h-0.5 bg-[var(--color-gold-accent)] mb-5 md:mb-6"></div>
                                <p className="text-[var(--color-cream)] font-light leading-relaxed mb-6 md:mb-8 text-sm sm:text-base italic opacity-90">
                                    Celebrate, connect, and create lasting memories in one of our iconic event spaces.
                                </p>

                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-[var(--color-gold-accent)] font-heading text-[10px] md:text-base tracking-[0.2em] uppercase opacity-70">Location</h3>
                                        <p className="text-sm md:text-base lg:text-lg text-[var(--color-cream)]/70 font-light leading-snug">89 Macquarie Street, Sydney CBD</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-[var(--color-gold-accent)] font-heading text-[10px] md:text-base tracking-[0.2em] uppercase opacity-70">Contact</h3>
                                        <p className="text-sm md:text-base lg:text-lg text-[var(--color-cream)]/70 font-light leading-snug">ambassador@raca.com.au<br />+61 (02) 8273 2300</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="md:col-span-3 p-4 sm:p-7 md:p-10 bg-[var(--color-dark-navy)] relative overflow-hidden">
                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none"
                                style={{ backgroundImage: `url(${getAssetPath('/textures/kseniya-lapteva-A4rqd2g-eLo-unsplash.png')})`, backgroundSize: 'cover' }}></div>

                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="enquiry-first-name" className="text-[var(--color-gold-accent)] font-subheading text-sm font-semibold tracking-[0.05em] uppercase block">First Name *</label>
                                        <input
                                            type="text"
                                            id="enquiry-first-name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Jane"
                                            className="w-full bg-white/5 border border-[var(--color-gold-accent)]/20 px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[var(--color-cream)] font-light focus:border-[var(--color-gold-accent)]/80 focus:bg-white/10 focus:outline-none transition-all duration-300 rounded-sm min-h-[44px]"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="enquiry-last-name" className="text-[var(--color-gold-accent)] font-subheading text-sm font-semibold tracking-[0.05em] uppercase block">Last Name *</label>
                                        <input
                                            type="text"
                                            id="enquiry-last-name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Doe"
                                            className="w-full bg-white/5 border border-[var(--color-gold-accent)]/20 px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[var(--color-cream)] font-light focus:border-[var(--color-gold-accent)]/80 focus:bg-white/10 focus:outline-none transition-all duration-300 rounded-sm min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="enquiry-email" className="text-[var(--color-gold-accent)] font-subheading text-sm font-semibold tracking-[0.05em] uppercase block">Email *</label>
                                        <input
                                            type="email"
                                            id="enquiry-email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="jane@example.com"
                                            className="w-full bg-white/5 border border-[var(--color-gold-accent)]/20 px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[var(--color-cream)] font-light focus:border-[var(--color-gold-accent)]/80 focus:bg-white/10 focus:outline-none transition-all duration-300 rounded-sm min-h-[44px]"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="enquiry-phone" className="text-[var(--color-gold-accent)] font-subheading text-sm font-semibold tracking-[0.05em] uppercase block">Phone *</label>
                                        <input
                                            type="tel"
                                            id="enquiry-phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="+61 400 000 000"
                                            className="w-full bg-white/5 border border-[var(--color-gold-accent)]/20 px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[var(--color-cream)] font-light focus:border-[var(--color-gold-accent)]/80 focus:bg-white/10 focus:outline-none transition-all duration-300 rounded-sm min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="enquiry-date" className="text-[var(--color-gold-accent)] font-subheading text-sm font-semibold tracking-[0.05em] uppercase block">Preferred Date</label>
                                        <input
                                            type="date"
                                            id="enquiry-date"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-[var(--color-gold-accent)]/20 px-3.5 sm:px-4 py-1.5 sm:py-2.5 md:py-3 text-[var(--color-cream)] font-light focus:border-[var(--color-gold-accent)]/80 focus:bg-white/10 focus:outline-none transition-all duration-300 rounded-sm color-scheme-dark min-h-[44px]"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="enquiry-guests" className="text-[var(--color-gold-accent)] font-subheading text-sm font-semibold tracking-[0.05em] uppercase block">Expected Guests</label>
                                        <input
                                            type="text"
                                            id="enquiry-guests"
                                            name="guestCount"
                                            value={formData.guestCount}
                                            onChange={handleInputChange}
                                            placeholder="Approx. 50"
                                            className="w-full bg-white/5 border border-[var(--color-gold-accent)]/20 px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[var(--color-cream)] font-light focus:border-[var(--color-gold-accent)]/80 focus:bg-white/10 focus:outline-none transition-all duration-300 rounded-sm min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="enquiry-space" className="text-[var(--color-gold-accent)] font-subheading text-sm font-semibold tracking-[0.05em] uppercase block">Interested Space</label>
                                    <select
                                        id="enquiry-space"
                                        name="space"
                                        value={formData.space}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-[var(--color-gold-accent)]/20 px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[var(--color-cream)] font-light focus:border-[var(--color-gold-accent)]/80 focus:bg-white/10 focus:outline-none transition-all duration-300 rounded-sm appearance-none cursor-pointer min-h-[44px]"
                                    >
                                        <option value="" className="bg-[var(--color-dark-navy)]">Please select</option>
                                        <option value="victoria" className="bg-[var(--color-dark-navy)]">Victoria Room</option>
                                        <option value="rooftop" className="bg-[var(--color-dark-navy)]">Rooftop</option>
                                        <option value="macquarie" className="bg-[var(--color-dark-navy)]">Macquarie Room</option>
                                        <option value="isc" className="bg-[var(--color-dark-navy)]">ISC Room</option>
                                        <option value="pioneer" className="bg-[var(--color-dark-navy)]">Pioneer Room</option>
                                        <option value="vintage" className="bg(--color-dark-navy)">Vintage Room</option>
                                        <option value="boardroom" className="bg(--color-dark-navy)">Boardroom</option>
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="enquiry-message" className="text-[var(--color-gold-accent)] font-subheading text-sm font-semibold tracking-[0.05em] uppercase block">Message</label>
                                    <textarea
                                        name="message"
                                        id="enquiry-message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="Tell us more about your event..."
                                        className="w-full bg-white/5 border border-[var(--color-gold-accent)]/20 px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[var(--color-cream)] font-light focus:border-[var(--color-gold-accent)]/80 focus:bg-white/10 focus:outline-none transition-all duration-300 rounded-sm resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitStatus === 'loading'}
                                    className="w-full py-3 bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)] font-heading text-lg tracking-[0.2em] hover:bg-white transition-all duration-300 disabled:opacity-50 uppercase font-bold"
                                >
                                    {submitStatus === 'loading' ? 'Sending Enquiry...' : 'Submit Enquiry'}
                                </button>

                                {submitStatus === 'success' && (
                                    <p className="text-green-400 text-sm text-center font-light mt-2 animate-pulse">
                                        Enquiry sent successfully. Our events team will contact you shortly.
                                    </p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-400 text-sm text-center font-light mt-2">
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

export default EventEnquiryModal;
