import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import { useState } from 'react';
import { Car, Globe2, MapPin, Utensils } from 'lucide-react';
import BookTourModal from '../components/BookTourModal';

function About() {
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);
  const drivingHighlights = [
    {
      title: 'Driving the Future',
      description: 'A heritage clubhouse that keeps evolving, championing innovation in mobility and member experience.'
    },
    {
      title: 'Crafted Hospitality',
      description: 'Personalised service, curated events, and thoughtful details in every room of the Club.'
    },
    {
      title: 'Connected Community',
      description: 'Leaders, innovators, and enthusiasts who gather to exchange ideas and celebrate motoring culture.'
    }
  ];

  const whyJoin = [
    { icon: Car, title: 'Members-First Service', description: 'Valet-style care, concierge support, and seamless hosting.' },
    { icon: MapPin, title: 'CBD Convenience', description: 'Steps from Circular Quay with transport, harbour, and culture on the doorstep.' },
    { icon: Globe2, title: 'Reciprocal Network', description: 'Access to distinguished clubs worldwide for business and travel.' },
    { icon: Utensils, title: 'Food & Beverage', description: 'Signature dining, wine dinners, and elegant bars crafted for members.' }
  ];

  const perkCards = [
    {
      title: 'Historic Clubhouse',
      image: 'public/IMAGES/attached_assets/architecture_1750917074639.webp',
      description: 'Art Deco interiors, grand rooms, and intimate lounges for every occasion.'
    },
    {
      title: 'Secure Parking',
      image: '/IMAGES/253A6720.JPG',
      description: 'Member-priority parking with easy club access for weekday and evening visits.'
    },
    {
      title: 'Wellness & Gym',
      image: '/IMAGES/images/ClubGym.jpeg',
      description: 'Modern gym facilities and changing rooms to balance work, life, and wellbeing.'
    },
    {
      title: 'Food & Beverage',
      image: '/IMAGES/images/DSC_1545.jpg',
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
  ];

  return (
    <div className="min-h-screen text-[var(--color-cream)] overflow-x-hidden">
      <Header />

      <div
        className="relative h-[70vh] md:h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden pt-16 md:pt-20"
        style={{
          backgroundImage: 'url(/IMAGES/images/DSC_1410.jpg)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(4, 15, 42, 0.85)' }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-wide">
            ABOUT US
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[var(--color-cream)] max-w-2xl mx-auto font-light">
            Founded in 1903, RACA is Australia's first automobile club and a symbol of motoring prestige.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-18 text-center">
        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-6 md:mb-8 tracking-wide">
            Driving the Future, Honouring the Past
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-3">
                Innovation is in our DNA
              </h3>
              <p className="text-sm md:text-base text-[var(--color-cream)]/90 font-light mb-3 leading-relaxed">
                Welcome to the Royal Automobile Club of Australia, where innovation takes the driver's seat. We don't just cruise on legacy; we strive for progression. Our historic Macquarie Street location is a testament to our rich heritage, a true landmark in motoring excellence.
              </p>
              <p className="text-sm md:text-base text-[var(--color-cream)]/90 font-light leading-relaxed">
                Our service is well-oiled. Enjoy seamless experiences executed with precision. From valet parking to private corporate events, our expert team is on hand to fine-tune every detail. Our members are our fuel, and we can't wait to start the journey with you.
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="art-deco-card p-4 md:p-5">
                <h3 className="text-base md:text-lg font-heading text-[var(--color-gold-accent)] mb-2">
                  Heritage & Prestige
                </h3>
                <p className="text-sm text-[var(--color-cream)]/80 font-light">
                  Over 120 years of automotive excellence and club traditions.
                </p>
              </div>
              
              <div className="art-deco-card p-4 md:p-5">
                <h3 className="text-base md:text-lg font-heading text-[var(--color-gold-accent)] mb-2">
                  Premium Location
                </h3>
                <p className="text-sm text-[var(--color-cream)]/80 font-light">
                  Centrally positioned at Circular Quay, with direct transport access and moments from Sydney Airport.
                </p>
              </div>
              
              <div className="art-deco-card p-4 md:p-5">
                <h3 className="text-base md:text-lg font-heading text-[var(--color-gold-accent)] mb-2">
                  Progressive Spirit
                </h3>
                <p className="text-sm text-[var(--color-cream)]/80 font-light">
                  Connecting motoring enthusiasts with industry leaders and emerging technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-5 md:mb-6 tracking-wide">
            Why Join RACA
          </h2>
          <p className="text-base md:text-lg text-[var(--color-cream)]/90 font-light max-w-3xl mx-auto mb-8 md:mb-10">
            Membership brings the best of location, reciprocal privileges, crafted hospitality, and spaces designed for business, celebration, and wellbeing.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyJoin.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="art-deco-card p-6 md:p-8 h-full flex flex-col items-center text-center">
                  <div className="mb-3 md:mb-4 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-[var(--color-gold-accent)]/40">
                    <Icon size={26} className="text-[var(--color-gold-accent)]" />
                  </div>
                  <h3 className="text-base md:text-lg font-heading text-[var(--color-gold-accent)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 md:mt-12" />
        </section>

        <section>
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 mx-auto" />
          <div className="art-deco-container gold-texture-overlay px-8 md:px-12 py-10 md:py-12 text-center rounded-lg">
            <h2 className="text-xl md:text-2xl font-heading text-[var(--color-dark-navy)] mb-3 md:mb-4 relative z-10">
              Book a Private Tour
            </h2>
            <p className="text-[var(--color-dark-navy)] font-light mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base relative z-10">
              Explore the main room, see the gym and parking, and experience our dining venues firsthand. Our team will tailor the visit to what matters most to you.
            </p>
            <button
              onClick={() => setIsBookTourOpen(true)}
              className="inline-block px-8 md:px-10 py-3 bg-[#040f2a] text-[var(--color-gold-accent)] font-heading tracking-widest hover:scale-105 transition-all duration-300 relative z-10"
            >
              Book a Tour
            </button>
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

export default About;
