import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import LazyImage from '../components/LazyImage';
import { getAssetPath } from '../utils/paths';
import { useState } from 'react';
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

  const perkCards = [
    {
      title: 'Accessing Club Facilities',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image1.jpg'),
      description: 'Including: Harbour Dining Room, Sydney CBD accommodation & parking, Member’s Bar, Gymnasium, Business Centre and function rooms for hire.'
    },
    {
      title: 'Getting Social with Club Communities',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image2.jpg'),
      description: 'Explore arts and culture, savour fine wines and dining, perfect your snooker skills, or simply connect with fellow members. These groups aren’t just about hobbies, they are engines of discovery.'
    },
    {
      title: 'Global Reciprocal Club Access',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image3.jpg'),
      description: 'A RACA membership opens the doors to an exclusive network spanning over 200 reciprocal clubs. From Sydney to Singapore, our members enjoy privileged access to a diverse range of services.'
    },
    {
      title: 'Your Historic Vehicle Rego, covered',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image4.jpg'),
      description: 'Need help with your Historic Vehicle Registration (HVS)? The Club offers a complimentary service to guide current members through the process. This service is exclusive to members, and is provided at no additional cost.'
    },
    {
      title: 'Onsite Car Wash',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image5.jpg'),
      description: 'Your vehicle deserves the VIP treatment. You can now enjoy our premium car wash service! Rinseless, convenient, and available for booking every Monday and Friday. Using only top-tier products and techniques found in luxury showrooms, we ensure your car gleams inside and out, all while you relax at your Club'
    },
    {
      title: 'Best Possible Car Insurance',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image6.jpg'),
      description: 'RACA has formed an association with Compare the Market to obtain the best possible car insurance premium for our members'
    },
    {
      title: 'RACA x Willed',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image7.jpg'),
      description: 'RACA members enjoy an exclusive 15% discount with Willed, Australia\'s leading online Will-writing service. In as little as 15 minutes, you can create a legally valid will with unlimited edits for 12 months, all reviewed by Australian lawyers. Click to know more.'
    },
    {
      title: 'Discounts Around the City',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image8.jpg'),
      description: 'RACA members enjoy exclusive discounts at events across the city. From Concours d\'Elegance vintage car shows to Naval Historical Society cruises with morning tea on the water. Members receive special pricing on some of the city\'s most distinctive experiences.'
    },
    {
      title: 'Member Noticeboard',
      image: getAssetPath('/IMAGES/Images for Members Perks/Image9.jpg'),
      description: 'Promoting your own event has never been easier. Use the Club Member Noticeboard to share your functions and invite fellow members. From private gatherings to spectacular outings, connect with members and bring your ideas to life'
    }
    
  ];

  return (
    <div className="min-h-screen text-[var(--color-cream)] overflow-x-hidden">
      <Header />

      <div
        className="relative h-[70vh] md:h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden pt-16 md:pt-20"
        style={{
          backgroundImage: `url(${getAssetPath('/IMAGES/About-Us-Background.jpg')})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(4, 15, 42, 0.85)' }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-wide leading-tight">
            ABOUT US
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-cream)] max-w-2xl mx-auto font-light px-2">
            Founded in 1903, RACA is Australia's first automobile club and a symbol of motoring prestige.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-18 text-center">
        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-6 md:mb-8 tracking-wide px-2">
            Driving the Future, Honouring the Past
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto px-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-3">
                Innovation is in our DNA
              </h3>
              <p className="text-sm md:text-base text-[var(--color-cream)]/90 font-light mb-3 leading-relaxed">
                Welcome to the Royal Automobile Club of Australia, where innovation takes the driver's seat. We don't just cruise on legacy; we strive for progression. Our historic Macquarie Street location is a testament to our rich heritage, a true landmark in motoring excellence.
              </p>
              <p className="hidden md:block text-sm md:text-base text-[var(--color-cream)]/90 font-light leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-5 md:mb-6 tracking-wide px-2">
            Why Join RACA
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-cream)]/90 font-light max-w-3xl mx-auto mb-8 md:mb-10 px-4">
            From secure parking and a fully-equipped gym to dining, reciprocal clubs, and our iconic rooms, membership is designed to serve every visit.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {perkCards.map((perk, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg group h-full flex flex-col"
              >
                <div className="relative h-44 md:h-56 overflow-hidden">
                  <img
                    src={perk.image}
                    alt={perk.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-navy)]/80 via-transparent to-transparent" />
                </div>
                <div className="bg-[var(--color-dark-navy)] bg-opacity-80 p-5 md:p-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-[var(--color-gold-accent)] font-heading mb-2 md:mb-3 text-base md:text-lg">
                    {perk.title}
                  </h3>
                  <p className="hidden md:block text-[var(--color-cream)]/80 font-light text-sm md:text-base">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-[var(--color-gold-accent)] mb-6 md:mb-8 tracking-wide px-2">
            Member Perks & Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {perkCards.map((card, idx) => (
              <div key={idx} className="art-deco-card overflow-hidden group cursor-pointer">
                <LazyImage
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-heading text-[var(--color-gold-accent)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-cream)]/80 font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-12" />
        </section>

        <section>
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 mx-auto" />
          <div className="art-deco-container gold-texture-overlay px-8 md:px-12 py-10 md:py-12 text-center rounded-lg relative">
            <div className="absolute inset-0 bg-[var(--color-dark-navy)]/30 rounded-lg"></div>
            <h2 className="text-xl md:text-2xl font-heading text-[var(--color-dark-navy)] mb-3 md:mb-4 relative z-10 font-semibold">
              Discover Your Space
            </h2>
            <p className="text-[var(--color-dark-navy)] font-medium mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base relative z-10">
              Explore the main room, see the gym and parking, and experience our dining venues firsthand.<span className="hidden md:inline"> Our team will tailor the visit to what matters most to you.</span>
            </p>
            <button
              onClick={() => setIsBookTourOpen(true)}
              className="inline-block px-8 md:px-10 py-3 md:py-3 bg-[#040f2a] text-[var(--color-gold-accent)] font-heading tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 relative z-10 md:text-base px-8 py-3 sm:px-10 sm:py-4 md:px-10 md:py-3"
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
