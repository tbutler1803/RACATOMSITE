import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import BookTourModal from '../components/BookTourModal';
import MembershipCard from '../components/MembershipCard';
import { getAssetPath } from '../utils/paths';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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
      // Wait for PageLoader to finish (max 2000ms) plus a small buffer
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
      }, 2100);
      return () => clearTimeout(timer);
    }
  }, [location.search]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission temporarily disabled
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '89 Macquarie St, Sydney NSW 2000' },
    { icon: Phone, label: 'Phone', value: '+61 (02) 8273 2300' },
    { icon: Mail, label: 'Email', value: 'ambassador@raca.com.au' },
    { icon: Clock, label: 'Hours', value: '24/7 Reception Availability' }
  ];

  const categories = [
    {
      name: 'Town',
      price: '$3,590',
      membershipFee: '$2,750',
      preSpendCredit: '$840',
      monthlySubscription: '$252.08',
      description: 'Permanently reside within the area bounded by the City of Wollongong to the south, Katoomba to the west, and the City of Newcastle to the north.',
      highlights: [
        "Exclusively for residents within the region from Wollongong to Newcastle and Katoomba, Town Membership brings the Royal Automobile Club of Australia's heritage, events, and privileges closer to home. Access our iconic Macquarie Street clubhouse, curated motoring experiences, fine dining, and a vibrant community, where tradition meets innovation at RACA."
      ]
    },
    {
      name: 'Country',
      price: '$2,440',
      membershipFee: '$1,600',
      preSpendCredit: '$840',
      monthlySubscription: '$146.67',
      description: 'NSW Country & ACT',
      highlights: [
        "Country Membership offers a trusted city base for members living outside of the Sydney basin (Newcastle, Katoomba and Wollongong). Located on Macquarie Street, moments from the Opera House and Circular Quay, the Club provides a convenient place to stay, with easy access to ferries, trains, and light rail. Enjoy full access to our iconic Macquarie Street clubhouse, where welcoming spaces, curated motoring events, fine dining, and a vibrant community of fellow enthusiasts await."
      ]
    },
    {
      name: 'Interstate',
      price: '$2,020',
      membershipFee: '$1,600',
      preSpendCredit: '$420',
      monthlySubscription: '$146.67',
      description: 'All Australian states and territories except NSW & ACT',
      highlights: [
        "Interstate Membership provides a welcoming home away from home for members who visit Sydney for leisure or business. Enjoy full access to our iconic Macquarie Street clubhouse, where refined spaces, curated events, fine dining, and a friendly community await. Whether for work, relaxation, or social connection, RACA offers a place to feel at home while experiencing the tradition, comfort, and vibrant spirit of Australia's premier automotive and social club."
      ]
    },
    {
      name: "Under 40's",
      price: '$2,090',
      membershipFee: '$1,250',
      preSpendCredit: '$840',
      monthlySubscription: '$114.58',
      description: 'For members ages 30-39 years',
      highlights: [
        "Under 40s Membership connects you to the Royal Automobile Club of Australia in a way that fits your pace and lifestyle.\n\nEnjoy access to our iconic Macquarie Street clubhouse, standout events, refined dining and a dynamic community of driven, like-minded professionals. Whether you're building your network, hosting clients, or simply unwinding in the heart of the city, this is a membership that blends heritage with modern energy."
      ]
    },
    {
      name: 'Young Executive',
      price: '$1,520',
      membershipFee: '$1,100',
      preSpendCredit: '$420',
      monthlySubscription: '$100.83',
      description: 'For members ages 18-29 years',
      highlights: [
        "Young Executive Membership is designed for ambitious members aged 18 to 29 who want to experience the Royal Automobile Club of Australia in a vibrant, stylish, and connected way. With access to our iconic Macquarie Street clubhouse, established networks, industry leaders, and curated networking events, members step into a community rich in experience, influence, and opportunity. Join early, connect with purpose, and gain access to the relationships, resources, and environment that can shape your career."
      ]
    },
    {
      name: 'Defence/Emergency Services',
      price: '$1,940',
      membershipFee: '$1,100',
      preSpendCredit: '$840',
      monthlySubscription: '$100.83',
      description: 'Active or Retired',
      highlights: [
        "This membership is designed for active or retired members of Australia's defence and emergency services, as well as those who have served in affiliated international forces. It offers a welcoming home away from home where service is recognised and connections are celebrated. Members enjoy full access to our iconic Macquarie Street clubhouse, curated events, fine dining and a vibrant community of like-minded individuals. Experience the tradition, camaraderie, and privileges of RACA while staying connected to those who share your dedication and passion."
      ]
    },
    {
      name: 'Corporate/Community',
      price: '$2,765',
      membershipFee: '$1,925',
      preSpendCredit: '$840',
      monthlySubscription: '$176.46',
      description: 'Designed for businesses, organisations, and community groups',
      highlights: [
        "Designed for organisations enrolling with multiple members, this membership offers preferential rates and collective access to the Club. Perfect for businesses and community groups, it provides a distinguished city base for team gatherings, client entertaining and business networking. Enjoy our Macquarie Street clubhouse, boardrooms, and refined dining all in a setting built for connection and collaboration. Bring your team, host with confidence, and grow your network at RACA."
      ]
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
            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-wide leading-tight">
              MEMBERSHIP APPLICATION & CONTACT
            </h1>
            <p className="text-lg sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto font-light px-2">
              Join our community or get in touch with us today
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18 text-center">


          <section className="mb-16 md:mb-20">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
            <h2>
              Membership Categories
            </h2>
            <p className="text-base sm:text-base md:text-lg lg:text-xl text-[var(--color-cream)]/90 font-light max-w-3xl mx-auto mb-8 md:mb-10">
              Choose the path that fits you best; all categories share core privileges, with tailored rates and access to suit your lifestyle.
            </p>
            {/* Membership cards grid: top row and bottom row separated for custom layout */}
            <div>
              {/* Top row: 4 cards, always grid-cols-2 on mobile, grid-cols-4 on desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {categories.slice(0, 4).map((cat, idx) => (
                  <div key={idx} className="flex justify-center items-stretch">
                    <MembershipCard
                      name={cat.name}
                      price={cat.price}
                      membershipFee={(cat as any).membershipFee}
                      preSpendCredit={(cat as any).preSpendCredit}
                      monthlySubscription={(cat as any).monthlySubscription}
                      description={cat.description}
                      highlights={cat.highlights}
                    />
                  </div>
                ))}
              </div>
              {/* Larger gap between rows */}
              <div className="my-6 md:my-10"></div>
              {/* Bottom row: 3 cards, centered and constrained in width on desktop/tablet, 2 columns on mobile with last card centered */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
                {/* Card 5: Young Executive (Position 1 on both) */}
                <div className="flex justify-center items-stretch">
                  <div className="w-full max-w-[370px]">
                    <MembershipCard
                      name={categories[4].name}
                      price={categories[4].price}
                      membershipFee={(categories[4] as any).membershipFee}
                      preSpendCredit={(categories[4] as any).preSpendCredit}
                      monthlySubscription={(categories[4] as any).monthlySubscription}
                      description={categories[4].description}
                      highlights={categories[4].highlights}
                    />
                  </div>
                </div>

                {/* Card 6: Defence/Emergency (Position 2 on Desktop, Position 3 on Mobile) */}
                {/* On mobile, this will be hidden in this grid and shown below */}
                <div className="hidden lg:flex justify-center items-stretch">
                  <div className="w-full max-w-[370px]">
                    <MembershipCard
                      name={categories[5].name}
                      price={categories[5].price}
                      membershipFee={(categories[5] as any).membershipFee}
                      preSpendCredit={(categories[5] as any).preSpendCredit}
                      monthlySubscription={(categories[5] as any).monthlySubscription}
                      description={categories[5].description}
                      highlights={categories[5].highlights}
                    />
                  </div>
                </div>

                {/* Card 7: Corporate/Community (Position 3 on Desktop, Position 2 on Mobile) */}
                <div className="flex justify-center items-stretch">
                  <div className="w-full max-w-[370px]">
                    <MembershipCard
                      name={categories[6].name}
                      price={categories[6].price}
                      membershipFee={(categories[6] as any).membershipFee}
                      preSpendCredit={(categories[6] as any).preSpendCredit}
                      monthlySubscription={(categories[6] as any).monthlySubscription}
                      description={categories[6].description}
                      highlights={categories[6].highlights}
                    />
                  </div>
                </div>
              </div>

              {/* On mobile only, center the Defence/Emergency card below the Young Executive and Corporate cards */}
              <div className="flex lg:hidden justify-center mt-4">
                <div className="w-full max-w-[370px]">
                  <MembershipCard
                    name={categories[5].name}
                    price={categories[5].price}
                    membershipFee={(categories[5] as any).membershipFee}
                    preSpendCredit={(categories[5] as any).preSpendCredit}
                    monthlySubscription={(categories[5] as any).monthlySubscription}
                    description={categories[5].description}
                    highlights={categories[5].highlights}
                  />
                </div>
              </div>

              {/* Apply Here button below membership cards, before divider */}
              <div className="mt-16 flex flex-col items-center gap-6">
                <p className="text-base md:text-lg text-white font-light max-w-2xl mx-auto italic">
                  * One-off $250 Administration Fee applicable to all new applications.
                </p>
                <a
                  href="https://royalautomobileclubofaustralia.peoplevine.co.uk/survey/group/620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold max-w-xs w-full mx-auto text-lg md:text-xl tracking-[0.12em] font-bold"
                >
                  APPLY HERE
                </a>
              </div>
            </div>
          </section>

          <section className="mb-16 md:mb-20" id="contact-information">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
            <h2>
              Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex flex-col items-center gap-3 text-center px-4 py-5 sm:px-5 sm:py-6">
                    <div>
                      <Icon size={32} className="text-[var(--color-gold-accent)]" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-2xl md:text-3xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide uppercase">
                        {info.label}
                      </h3>
                      <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-cream)] font-light leading-relaxed whitespace-nowrap">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Book a Tour button below contact information grid */}
            <div className="flex justify-center mt-12">
              <button
                type="button"
                onClick={() => setIsBookTourOpen(true)}
                className={`btn-outline-gold max-w-xs w-full ${isBookTourOpen ? 'bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)]' : ''}`}>
                BOOK A TOUR
              </button>
            </div>
          </section>

          <section className="mb-20">
            <ArtDecoDivider width="w-64 md:w-80" height="h-6 md:h-20" className="mb-8" />
            <div className="flex justify-center mb-20">
              <div ref={messageFormRef}>
                <h2>
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
                    placeholder="Your Message (Please also let us know if you are a member, guest of a member, or from a reciprocal club)"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-[var(--color-dark-navy)] bg-opacity-80 border border-[var(--color-gold-accent)]/20 px-4 py-3 text-[var(--color-cream)] placeholder-gray-500 font-light focus:border-[var(--color-gold-accent)] focus:outline-none transition-colors resize-none text-left"
                  />
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="btn-outline-gold w-full disabled:opacity-50"
                  >
                    {submitStatus === 'loading' ? 'Sending...' : 'SEND MESSAGE'}
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
            <h2>
              Location
            </h2>
            <div className="art-deco-card art-deco-card-glowing w-full rounded-lg overflow-hidden" style={{ height: '500px' }}>
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
