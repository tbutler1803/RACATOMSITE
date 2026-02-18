import Header from '../components/Header';
// Declare Mews on window for TypeScript
declare global {
  interface Window {
    Mews?: {
      D: (...args: any[]) => void;
    };
  }
}
import ArtDecoDivider from '../components/ArtDecoDivider';
import LazyImage from '../components/LazyImage';
import BookTourModal from '../components/BookTourModal';
import { getAssetPath } from '../utils/paths';
import { Calendar, Users, Music, Wine, Award, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
// Force-load the Mews script on page load
function useMewsScript() {
  useEffect(() => {
    if (!document.getElementById('mews-distributor-script')) {
      // Use client's recommended snippet
      (function(m,e,w,s){
        const c = m.createElement(e);
        c.id = 'mews-distributor-script';
        c.onload = function(){ Mews.D.apply(null,s); };
        c.async = 1;
        c.src = w;
        const t = m.getElementsByTagName(e)[0];
        t.parentNode.insertBefore(c,t);
      })(document,'script','https://app.mews.com/distributor/distributor.min.js',[['adee2521-407e-4c2f-af36-b38d01263bf4']]);
    }
  }, []);
}

function Events() {
  useMewsScript();
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);
  const eventSpaces = [
    {
      name: 'Victoria Room',
      capacity: 'Banquet 130/Cocktail 180',
      description: 'Elegant space for large banquets or cocktail receptions.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&w=400&h=300&fit=crop',
      features: []
    },
    {
      name: 'Rooftop',
      capacity: 'Cocktail 70',
      description: 'Open-air rooftop with city views, perfect for cocktail events.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&w=400&h=300&fit=crop',
      features: []
    },
    {
      name: 'Macquarie Room',
      capacity: 'Banquet 120/Cocktail 150',
      description: 'Spacious room for banquets and cocktail functions.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&w=400&h=300&fit=crop',
      features: []
    },
    {
      name: 'ISC Room',
      capacity: 'Banquet 60/Cocktail 70',
      description: 'Versatile space for mid-sized events.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&w=400&h=300&fit=crop',
      features: []
    },
    {
      name: 'Pioneer Room',
      capacity: 'Banquet 25 / Cocktail 30',
      description: 'Intimate room for small gatherings.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&w=400&h=300&fit=crop',
      features: []
    },
    {
      name: 'Vintage Room',
      capacity: 'Boardroom Style 20',
      description: 'Classic boardroom for meetings and private dining.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&w=400&h=300&fit=crop',
      features: []
    },
    {
      name: 'Boardroom',
      capacity: 'Boardroom Style 15',
      description: 'Professional boardroom for executive meetings.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&w=400&h=300&fit=crop',
      features: []
    },
    {
      name: 'Hordern',
      capacity: '',
      description: 'Flexible event space.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&w=400&h=300&fit=crop',
      features: []
    }
  ];

  const eventCategories = [
    { icon: Wine, title: 'Social Events', description: 'Galas, dinners, and member gatherings' },
    { icon: Users, title: 'Networking', description: 'Business lunches and professional connections' },
    { icon: Music, title: 'Entertainment', description: 'Live performances and cultural experiences' },
    { icon: Award, title: 'Private Functions', description: 'Bespoke events for members and guests' }
  ];

  // Add a ref for the booking widget container
  const bookingWidgetRef = useRef(null);

  return (
    <div className="min-h-screen text-[var(--color-cream)] overflow-x-hidden">
      <Header />

      {/* Dedicated container for Mews BookingEngine */}
      <div
        id="mews-widget-container"
        style={{ zIndex: 9999, position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', display: 'none' }}
      >
        <button
          id="mews-widget-close"
          style={{ position: 'absolute', top: 20, right: 20, zIndex: 10000, background: '#fff', color: '#222', border: 'none', borderRadius: 4, padding: '8px 16px', cursor: 'pointer', fontWeight: 'bold' }}
          onClick={() => {
            const widgetContainer = document.getElementById('mews-widget-container');
            if (widgetContainer) widgetContainer.style.display = 'none';
          }}
        >
          Close
        </button>
      </div>

      <div>
          <div
            className="relative h-[70vh] md:h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden pt-16 md:pt-20"
            style={{
              backgroundImage: `url(${getAssetPath('/IMAGES/DSC_1595.jpg')})`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(4, 15, 42, 0.85)' }}
            />
            <div className="relative z-10 text-center px-4">
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-wide leading-tight">
                EVENTS
              </h1>
              <p className="text-lg sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto font-light px-2">
                Celebrate, connect, and create lasting memories
              </p>
            </div>
          </div>

        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18 text-center">
        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8" />
            <h2>
            Event Categories
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {eventCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="group text-center">
                  <div className="mb-4">
                    <Icon size={32} className="text-[var(--color-gold-accent)] inline-block" />
                  </div>
                  <h3 className="text-lg gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-base sm:text-base md:text-lg lg:text-xl text-[var(--color-cream)] max-w-2xl mx-auto font-light px-2 mb-3 md:mb-6">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        <div className="mt-6 flex justify-center">
          <div className="event-btn-group mt-0 mb-10">
            <button
              className="btn-outline-gold max-w-xs w-full mx-auto"
              type="button"
              onClick={() => setIsBookTourOpen(true)}
            >
              ENQUIRE HERE
            </button>
          </div>
        </div>

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
            <h2>
            Event Spaces
          </h2>
          <div className="grid grid-cols-2 gap-4 md:space-y-16 lg:space-y-20 md:block">
            {eventSpaces.map((space, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-8 md:items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="art-deco-card overflow-hidden mb-2 md:mb-0">
                    <LazyImage
                      src={space.image}
                      alt={space.name}
                      className="w-full aspect-square md:h-64 lg:h-80 md:aspect-auto object-cover"
                      containerClassName=""
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-sm gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">
                    {space.capacity}
                  </h3>
                  <h2 className="text-2xl md:text-xl font-heading text-[var(--color-gold-accent)] mb-1 tracking-wide">
                    {space.name}
                  </h2>
                  <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-cream)] max-w-2xl mx-auto font-light px-2 mb-2 md:mb-3">
                    {space.description}
                  </p>
                  {/* Features list removed as requested */}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
            <div className="art-deco-card p-10 md:p-12 text-center">
              <div className="inline-block p-4 bg-[var(--color-gold-accent)]/10 rounded-lg mb-6">
                <Calendar size={40} className="text-[var(--color-gold-accent)]" />
              </div>
              <h2>
                Book Your Event
              </h2>
              <p className="text-[var(--color-cream)]/80 font-light mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Reserve your table or book an event space through our convenient online booking system.
              </p>
              <div className="flex justify-center max-w-4xl mx-auto px-4 md:px-0 mt-2 md:mt-8">
                {/* Fallback direct booking link */}
                <div className="event-btn-group flex flex-col md:flex-row gap-3 md:gap-8 w-full items-center">
                  <button
                    type="button"
                    className="btn-outline-gold max-w-xs w-full mx-auto"
                    onClick={() => setIsBookTourOpen(true)}
                  >
                    Enquire Now
                  </button>
                  <a
                    href="https://royalautomobileclubofaustralia.tripleseat.com/party_request/47431"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold max-w-xs w-full mx-auto"
                  >
                    Book Your Event
                  </a>
                  <a
                    href="/#/contact?section=contact-information"
                    className="btn-outline-gold max-w-xs w-full mx-auto"
                  >
                    Contact Info
                  </a>
                </div>
              </div>
            </div>
        </section>

        <section />
        </div>
      </div>

      <BookTourModal 
        isOpen={isBookTourOpen} 
        onClose={() => setIsBookTourOpen(false)}
      />
    </div>
  );
}

export default Events;
