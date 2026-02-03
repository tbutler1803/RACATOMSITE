import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import LazyImage from '../components/LazyImage';
import BookTourModal from '../components/BookTourModal';
import { getAssetPath } from '../utils/paths';
import { Calendar, Users, Music, Wine, Award, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Events() {
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);
  const eventSpaces = [
    {
      name: 'Grand Ballroom',
      capacity: '200 guests',
      description: 'Our premier event space featuring Art Deco architecture and crystal chandeliers',
      image: getAssetPath('/IMAGES/images/DSC_1659.jpg'),
      features: ['Dance floor', 'Stage', 'Full AV setup', 'Private bar']
    },
    {
      name: 'Heritage Dining Room',
      capacity: '50 guests',
      description: 'Intimate setting with historic charm, perfect for corporate dinners',
      image: getAssetPath('/IMAGES/images/DSC_1525.jpg'),
      features: ['Private dining', 'Fireplace', 'Garden views', 'Custom menus']
    },
    {
      name: 'Terrace Lounge',
      capacity: '80 guests',
      description: 'Modern space with harbor views, ideal for cocktail events',
      image: getAssetPath('/IMAGES/RACA Rooftop/DSC00136.JPG'),
      features: ['Outdoor area', 'Bar service', 'Lounge seating', 'City views']
    },
    {
      name: 'Board Room',
      capacity: '20 guests',
      description: 'Professional setting for business meetings and presentations',
      image: getAssetPath('/IMAGES/images/DSC_1302.jpg'),
      features: ['Video conferencing', 'Presentation equipment', 'Catering available', 'Private entrance']
    }
  ];

  const eventCategories = [
    { icon: Wine, title: 'Social Events', description: 'Galas, dinners, and member gatherings' },
    { icon: Users, title: 'Networking', description: 'Business lunches and professional connections' },
    { icon: Music, title: 'Entertainment', description: 'Live performances and cultural experiences' },
    { icon: Award, title: 'Private Functions', description: 'Bespoke events for members and guests' }
  ];

  return (
    <div className="min-h-screen text-[var(--color-cream)] overflow-x-hidden">
      <Header />

      <div
        className="relative h-[70vh] md:h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden pt-16 md:pt-20"
        style={{
          backgroundImage: `url(${getAssetPath('/IMAGES/images/DSC_1633.jpg')})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(4, 15, 42, 0.85)' }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-wide leading-tight">
            EVENTS
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-cream)] max-w-2xl mx-auto font-light px-2">
            Celebrate, connect, and create lasting memories
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-18 text-center">
        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-10 md:mb-12 tracking-wide px-2">
            Event Categories
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {eventCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="group cursor-pointer text-center">
                  <div className="mb-4 inline-block p-4 bg-[var(--color-dark-navy)] bg-opacity-80 rounded-lg group-hover:bg-[var(--color-gold-accent)]/10 transition-colors">
                    <Icon size={32} className="text-[var(--color-gold-accent)]" />
                  </div>
                  <h3 className="text-lg font-heading text-[var(--color-gold-accent)] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-sm">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-10 md:mb-12 tracking-wide px-2">
            Event Spaces
          </h2>
          <div className="grid grid-cols-2 gap-6 md:space-y-0 md:block">
            {eventSpaces.map((space, idx) => (
              <div 
                key={idx} 
                className={`md:grid md:grid-cols-2 md:gap-6 lg:gap-8 md:items-center md:mb-10 lg:mb-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <LazyImage
                    src={space.image}
                    alt={space.name}
                    className="w-full aspect-square md:h-64 lg:h-80 md:aspect-auto object-cover rounded-lg mb-3 md:mb-0"
                    containerClassName="mb-3 md:mb-0"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="text-base md:text-sm tracking-widest text-[var(--color-gold-accent)] font-heading mb-1 md:mb-2">
                    {space.capacity}
                  </div>
                  <h3 className="text-lg md:text-3xl font-heading font-light text-[var(--color-gold-accent)] mb-2 md:mb-4">
                    {space.name}
                  </h3>
                  <p className="hidden md:block text-base md:text-base text-[var(--color-cream)]/80 font-light mb-3 md:mb-6">
                    {space.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 hidden md:grid">
                    {space.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[var(--color-cream)]/80 font-light">
                        <ChevronRight size={16} className="text-[var(--color-gold-accent)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-2xl md:text-3xl font-heading font-light text-[var(--color-gold-accent)] mb-4">
              Book Your Event
            </h2>
            <p className="text-[var(--color-cream)]/80 font-light mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Reserve your table or book an event space through our convenient online booking system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="https://www.tripleseat.com/raca"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)] font-heading tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 text-center"
              >
                Book Your Event
              </a>
              <button
                onClick={() => setIsBookTourOpen(true)}
                className="px-8 py-4 bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)] font-heading tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 text-center cursor-pointer"
              >
                Book a Tour
              </button>
              <a
                href="/#/contact?section=contact-information"
                className="px-8 py-4 bg-[var(--color-gold-accent)] text-[var(--color-dark-navy)] font-heading tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 text-center"
              >
                Contact Info
              </a>
            </div>
          </div>
        </section>

        <section />
      </div>

      <BookTourModal 
        isOpen={isBookTourOpen} 
        onClose={() => setIsBookTourOpen(false)}
      />
    </div>
  );
}

export default Events;
