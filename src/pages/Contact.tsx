import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import BookTourModal from '../components/BookTourModal';
import MembershipCard from '../components/MembershipCard';
import { getAssetPath } from '../utils/paths';
import { MapPin, Phone, Mail, Clock, Users, Utensils, Zap, Award, Calendar } from 'lucide-react';
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

  const benefits = [
    { icon: Utensils, title: 'Fine Dining', description: 'Access to world-class restaurants and bars' },
    { icon: Calendar, title: 'Exclusive Events', description: 'Members-only galas, automotive events, and social gatherings' },
    { icon: Zap, title: 'Car Heritage', description: 'Connect with automotive enthusiasts and heritage vehicle community' },
    { icon: Users, title: 'Lounge Access', description: 'Exclusive lounges with premium facilities and services' },
    { icon: MapPin, title: 'Reciprocal Clubs', description: 'Access to partner clubs worldwide' },
    { icon: Award, title: 'Venue Hire', description: 'Private rooms and premier event spaces' }
  ];

  const categories = [
    {
      name: 'Defence/Emergency',
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
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-5 md:mb-6 tracking-wide px-2">
            Members Perks
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-cream)]/90 font-light max-w-3xl mx-auto mb-8 md:mb-10 px-4">
            From secure parking and a fully-equipped gym to dining, reciprocal clubs, and our iconic rooms, membership is designed to serve every visit.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Historic Clubhouse',
                image: 'public/IMAGES/attached_assets/architecture_1750917074639.webp',
                description: 'Art Deco interiors, grand rooms, and intimate lounges for every occasion.'
              },
              {
                title: 'Secure Parking',
                image: getAssetPath('/IMAGES/253A6720.JPG'),
                description: 'Member-priority parking with easy club access for weekday and evening visits.'
              },
              {
                title: 'Wellness & Gym',
                image: getAssetPath('/IMAGES/images/ClubGym.jpeg'),
                description: 'Modern gym facilities and changing rooms to balance work, life, and wellbeing.'
              },
              {
                title: 'Food & Beverage',
                image: getAssetPath('/IMAGES/images/DSC_1545.jpg'),
                description: 'Seasonal menus, club classics, and private dining experiences across our venues.'
              },
              {
                title: 'Reciprocal Clubs',
                image: 'public/IMAGES/attached_assets/plane.jpg',
                description: 'Global reciprocal privileges to stay, dine, and meet while travelling.'
              },
              {
                title: 'Prime Location',
                image: 'public/IMAGES/attached_assets/pexels-pat-saengcharoen-774865114-31726433.jpg',
                description: 'Moments from the Royal Botanic Garden, the Harbour, and the heart of the CBD.'
              }
            ].map((perk, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-lg group h-full flex flex-col ${idx > 3 ? 'hidden md:flex' : ''}`}
              >
                <div className="relative h-44 md:h-56 overflow-hidden">
                  <img
                    src={perk.image}
                    alt={perk.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-navy)]/80 via-transparent to-transparent" />
                </div>
                <div className="bg-[var(--color-dark-navy)] bg-opacity-80 p-5 md:p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-[var(--color-gold-accent)] font-heading mb-2 md:mb-3 text-base md:text-lg">
                    {perk.title}
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-sm md:text-base">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

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

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
          <h2 className="text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-10 md:mb-12 tracking-wide">
            Contact Information
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-3 text-center">
                  <div className="p-3 bg-[var(--color-dark-navy)] bg-opacity-80 rounded-lg">
                    <Icon size={18} className="text-[var(--color-gold-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-widest text-[var(--color-gold-accent)] font-heading mb-2">
                      {info.label}
                    </h3>
                    <p className="text-[var(--color-cream)] font-light">
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
                <button 
                  onClick={() => setIsBookTourOpen(true)}
                  className={`w-full px-6 py-4 border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] font-heading tracking-widest hover:bg-[var(--color-gold-accent)] hover:text-[var(--color-dark-navy)] transition-all duration-300 ${isBookTourOpen ? 'bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)]' : ''}`}>
                  Book a Tour
                </button>
                <a 
                  href="https://membership.raca.com.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] font-heading tracking-widest hover:bg-[var(--color-gold-accent)] hover:text-[var(--color-dark-navy)] transition-all duration-300 text-center"
                >
                  Apply Here
                </a>
              </div>
            </div>

            <div ref={messageFormRef}>
              <h2 className="text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-8 tracking-wide">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[var(--color-dark-navy)] bg-opacity-80 border border-[var(--color-gold-accent)]/20 px-4 py-3 text-[var(--color-cream)] placeholder-gray-500 font-light focus:border-[var(--color-gold-accent)] focus:outline-none transition-colors text-left"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[var(--color-dark-navy)] bg-opacity-80 border border-[var(--color-gold-accent)]/20 px-4 py-3 text-[var(--color-cream)] placeholder-gray-500 font-light focus:border-[var(--color-gold-accent)] focus:outline-none transition-colors text-left"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--color-dark-navy)] bg-opacity-80 border border-[var(--color-gold-accent)]/20 px-4 py-3 text-[var(--color-cream)] placeholder-gray-500 font-light focus:border-[var(--color-gold-accent)] focus:outline-none transition-colors text-left"
                />
                <textarea
                  name="message"
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
                  className="w-full px-6 py-3 bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)] font-heading tracking-widest hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300"
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
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.397775!2d151.208533!3d-33.863889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae6855a7ba25%3A0x1eb6754ad60316a!2sRoyal%20Automobile%20Club%20of%20Australia%2089%20Macquarie%20St!5e0!3m2!1sen!2sau!4v1706043600000"
              style={{ border: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>

      <BookTourModal 
        isOpen={isBookTourOpen} 
        onClose={() => setIsBookTourOpen(false)}
      />
    </div>
  );
}

export default Contact;
