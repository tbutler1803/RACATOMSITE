import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import BookTourModal from '../components/BookTourModal';
import MembershipCard from '../components/MembershipCard';
import { getAssetPath } from '../utils/paths';
import { MapPin, Phone, Mail, Clock, Car, Globe2, Utensils } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function Contact() {
  const location = useLocation();
  const messageFormRef = useRef<HTMLDivElement>(null);
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Handle scrolling to contact information section
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('section') === 'contact-information') {
      // Wait for DOM to render, then scroll
      const timer = setTimeout(() => {
        const element = document.getElementById('contact-information');
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location]);

  useEffect(() => {
    if ((location.state as any)?.focusMessage && messageFormRef.current) {
      setTimeout(() => {
        messageFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [location.state]);

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
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '89 Macquarie St, Sydney NSW 2000' },
    { icon: Phone, label: 'Phone', value: '+61 2 8296 2800' },
    { icon: Mail, label: 'Email', value: 'membership@raca.com.au' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9am-5pm, Sat: 10am-4pm' }
  ];

  const whyJoin = [
    { icon: Car, title: 'Members-First Service', description: 'Valet-style care, concierge support, and seamless hosting.' },
    { icon: MapPin, title: 'CBD Convenience', description: 'Steps from Circular Quay with transport, harbour, and culture on the doorstep.' },
    { icon: Globe2, title: 'Reciprocal Networks', description: 'Access to distinguished clubs worldwide for business and travel.' },
    { icon: Utensils, title: 'Food & Beverage', description: 'Signature dining, wine dinners, and elegant bars crafted for members.' }
  ];

  const categories = [
    {
      name: 'Defence',
      price: 'Individual',
      description: 'Active or retired service members',
      highlights: ['Discounted rates', 'All venue access', 'Special recognition']
    },
    {
      name: 'Young Executive',
      price: 'Individual',
      description: 'For members aged 18-29 years',
      highlights: ['Discounted rates', 'Networking events', 'Professional development']
    },
    {
      name: 'Under 40s',
      price: 'Individual',
      description: 'For members aged 30-39 years',
      highlights: ['Reduced rates', 'All venue access', 'Dining privileges']
    },
    {
      name: 'Corporate',
      price: 'Group',
      description: 'For businesses with 5+ members',
      highlights: ['Multi-user access', 'Event packages', 'Team building']
    }
  ];

  return (
    <div className="min-h-screen text-[var(--color-cream)] overflow-x-hidden">
      <Header />

      <div>
        <div
          className="relative h-[70vh] md:h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden pt-16 md:pt-20"
          style={{
            backgroundImage: `url(${getAssetPath('/IMAGES/RACA%20Rooftop/RACA%20Rooftop/DSC00146.JPG')})`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(4, 15, 42, 0.85)' }}
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-wide leading-tight">
              MEMBERSHIP APPLICATIONS & CONTACT
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-cream)] max-w-2xl mx-auto font-light px-2">
              Join our community or get in touch with us today
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18 text-center">


        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
          <h2 className="text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-10 md:mb-12 tracking-wide">
            Membership Categories
          </h2>
          <p className="text-base md:text-lg text-[var(--color-cream)]/90 font-light max-w-3xl mx-auto mb-8 md:mb-10">
            Choose the path that fits you best; all categories share core privileges, with tailored rates and access to suit your lifestyle.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <MembershipCard
                key={idx}
                name={cat.name}
                price={cat.price}
                description={cat.description}
                highlights={cat.highlights}
              />
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-20" id="contact-information">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
          <h2 className="text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-10 md:mb-12 tracking-wide">
            Contact Information
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-3 text-center px-4 py-5 sm:px-5 sm:py-6">
                  <div>
                    <Icon size={18} className="text-[var(--color-gold-accent)]" />
                  </div>
                  <div className="max-w-[12rem] sm:max-w-[18rem]">
                    <h3 className="text-sm tracking-widest text-[var(--color-gold-accent)] font-heading mb-2">
                      {info.label}
                    </h3>
                    <p className="text-[var(--color-cream)] font-light text-sm sm:text-base leading-relaxed break-words">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <ArtDecoDivider width="w-64 md:w-80" height="h-6 md:h-20" className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-8 tracking-wide">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <a 
                  href="https://royalautomobileclubofaustralia.peoplevine.co.uk/survey/group/620" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] font-heading tracking-widest hover:bg-[var(--color-gold-accent)] hover:text-[var(--color-dark-navy)] transition-all duration-300 text-center"
                >
                  Apply Here
                </a>
                <button 
                  type="button"
                  onClick={() => setIsBookTourOpen(true)}
                  className={`w-full px-6 py-4 border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] font-heading tracking-widest hover:bg-[var(--color-gold-accent)] hover:text-[var(--color-dark-navy)] transition-all duration-300 ${isBookTourOpen ? 'bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)]' : ''}`}>
                  Book a Tour
                </button>
              </div>
            </div>

            <div ref={messageFormRef}>
              <h2 className="text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-8 tracking-wide">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[var(--color-dark-navy)] bg-opacity-80 border border-[var(--color-gold-accent)]/20 px-4 py-3 text-[var(--color-cream)] placeholder-gray-500 font-light focus:border-[var(--color-gold-accent)] focus:outline-none transition-colors text-left"
                />
                <label htmlFor="contact-email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[var(--color-dark-navy)] bg-opacity-80 border border-[var(--color-gold-accent)]/20 px-4 py-3 text-[var(--color-cream)] placeholder-gray-500 font-light focus:border-[var(--color-gold-accent)] focus:outline-none transition-colors text-left"
                />
                <label htmlFor="contact-phone" className="sr-only">Phone (optional)</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--color-dark-navy)] bg-opacity-80 border border-[var(--color-gold-accent)]/20 px-4 py-3 text-[var(--color-cream)] placeholder-gray-500 font-light focus:border-[var(--color-gold-accent)] focus:outline-none transition-colors text-left"
                />
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <textarea
                  name="message"
                  id="contact-message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-[var(--color-dark-navy)] bg-opacity-80 border border-[var(--color-gold-accent)]/20 px-4 py-3 text-[var(--color-cream)] placeholder-gray-500 font-light focus:border-[var(--color-gold-accent)] focus:outline-none transition-colors resize-none text-left"
                />
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full px-6 py-3 bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)] font-heading tracking-widest hover:bg-red-600 hover:text-white disabled:opacity-50 disabled:hover:bg-[var(--color-gold-accent)] transition-all duration-300"
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm text-center font-light">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <ArtDecoDivider width="w-64 md:w-80" height="h-6 md:h-20" className="mb-8" />
          <h2 className="text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-12 tracking-wide">
            Location
          </h2>
          <div className="w-full rounded-lg overflow-hidden border border-[var(--color-gold-accent)]/20" style={{ height: '500px' }}>
            <iframe
              title="Royal Automobile Club of Australia - 89 Macquarie Street, Circular Quay Sydney"
              width="100%"
              height="100%"
              frameBorder={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.397775!2d151.208533!3d-33.863889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae6855a7ba25%3A0x1eb6754ad60316a!2sRoyal%20Automobile%20Club%20of%20Australia%2089%20Macquarie%20St!5e0!3m2!1sen!2sau!4v1706043600000"
              style={{ border: 'none' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        </div>
      </div>

      <BookTourModal 
        isOpen={isBookTourOpen} 
        onClose={() => setIsBookTourOpen(false)}
      />
    </div>
  );
}

export default Contact;
