import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import { getAssetPath } from '../utils/paths';
import { useState } from 'react';
import BookTourModal from '../components/BookTourModal';
import { Wine, Globe, BedDouble, Utensils } from 'lucide-react';

function About() {
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);

  const whyJoin = [
    { icon: Wine, title: 'Events-Driven Excellence', description: 'Impeccable hosting tailored experiences, and flawless execution' },
    { icon: BedDouble, title: 'Rest Assured', description: 'Heritage surroundings, contemporary luxury, and effortless comfort in our accommodation.' },
    { icon: Globe, title: 'Your Gateway to Connections', description: 'Influential connections, shared experiences, and access to our worldwide reciprocal network' },
    { icon: Utensils, title: 'The Art of Hospitality', description: 'From intimate gatherings to grand occasions, hospitality that impresses at every turn.' }
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
    }
    
  ];

  return (
    <div className="min-h-screen text-[var(--color-cream)] overflow-x-hidden">
      <Header />

      <div>
        <div
          className="relative h-[70vh] md:h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden pt-16 md:pt-20"
          style={{
            backgroundImage: `url(${getAssetPath('/IMAGES/DSC_1641.jpg')})`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(4, 15, 42, 0.85)' }}
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-wide leading-tight">
              ABOUT US
            </h1>
            <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-white max-w-2xl mx-auto font-light px-2">
              Founded in 1903, RACA is Australia's first automobile club and a symbol of motoring prestige.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18 text-center">
        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2>
            Driving the Future, Honouring the Past
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto px-4">
            <div className="text-center md:text-left">
              <h3 className="mobile-large-text gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">
                Innovation is in our DNA
              </h3>
              {/* Full text for md and up */}
              <div className="hidden md:block">
                <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light mb-3">
                  Since 1903, the Royal Automobile Club of Australia has championed motoring excellence. Established as Australia’s first automobile club, RACA was founded to advocate for motorists and has remained at the forefront of the automotive landscape ever since — from campaigning for improved roads to hosting distinguished motoring events across generations.
                </p>
                <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light mb-3">
                  Our landmark Macquarie Street clubhouse stands as a symbol of this enduring legacy, welcoming members in the heart of Sydney’s CBD. Here, tradition and modernity meet, bringing together individuals connected by a shared appreciation for heritage, hospitality, and meaningful professional and social networks.
                </p>
                <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light mb-3">
                  While our foundations were built on motoring, today RACA is driven by something even more enduring: community. Through shared experiences, gatherings, and conversation, our members create the atmosphere that defines the Club — one of belonging, connection, and continuity into the future.
                </p>
              </div>
              {/* Reduced text for mobile only */}
              <div className="block md:hidden">
                <p className="text-lg text-[var(--color-cream)]/80 font-light mb-3 mobile-large-text">
                  Tour the club, gym, parking, and dining—our team tailors your visit to what matters most.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="art-deco-card p-4 md:p-5">
                <h3 className="text-lg gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">
                  Heritage & Prestige
                </h3>
                  <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light">
                    Over 120 years of automotive excellence and club traditions.
                  </p>
              </div>
              
              <div className="art-deco-card p-4 md:p-5">
                <h3 className="text-lg gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">
                  Premium Location
                </h3>
                  <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light">
                    Centrally positioned at Circular Quay, with direct transport access and moments from Sydney Airport.
                  </p>
              </div>
              
              <div className="art-deco-card p-4 md:p-5">
                <h3 className="text-lg gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">
                  Progressive Spirit
                </h3>
                  <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light">
                    Connecting motoring enthusiasts with industry leaders and emerging technology.
                  </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2>
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
                  <h3 className="text-lg gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="hidden md:block text-sm md:text-base text-[var(--color-cream)]/80 font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 md:mt-12" />
        </section>

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2>
            Members Perks
          </h2>
            <p className="text-base md:text-lg text-[var(--color-cream)]/90 font-light max-w-3xl mx-auto mb-8 md:mb-10 px-4">
              From secure parking and a fully-equipped gym to dining, reciprocal clubs, and our iconic rooms, membership is designed to serve every visit.
            </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {perkCards.map((perk, idx) => (
              <div
                key={idx}
                className="art-deco-card overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-44 md:h-56 overflow-hidden">
                  <img
                    src={perk.image}
                    alt={perk.title}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-navy)]/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-[var(--color-gold-accent)] gold-mobile-large font-heading mb-2 md:mb-3 text-lg md:text-2xl tracking-wide">
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

        {/* Accommodation Section (moved below Members Perks) */}
        <section className="mb-16 md:mb-20" id="accommodation">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
          <h2>
            Stay at the RACA
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-6">
              <p className="text-base md:text-lg text-[var(--color-cream)]/90 font-light mb-3 leading-relaxed">
                Enjoy 28 unique rooms, from heritage singles to our Deluxe Harbour Suite. All guests have access to club amenities and a helpful concierge team. All accommodation bookings come with complimentary breakfast. Room rates are subject to seasonal pricing.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {/* 1. Deluxe Harbour Suite image */}
            <div className="art-deco-card overflow-hidden flex flex-col items-center">
              <img src={getAssetPath('/IMAGES/images/DSC_1304.jpg')} alt="Deluxe Harbour Suite" className="w-full h-48 object-cover mb-3" />
                  <h3 className="text-lg gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">Deluxe Harbour Suite</h3>
              {/* Removed: Breathtaking Sydney Harbour Views */}
            </div>
            {/* 2. Breakfast Image */}
            <div className="art-deco-card overflow-hidden flex flex-col items-center">
              <img src={getAssetPath('/IMAGES/Breakfast.jpg')} alt="Complimentary Breakfast - Bacon and Eggs" className="w-full h-48 object-cover mb-3" />
                  <h3 className="text-lg gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">Complimentary Breakfast</h3>
              {/* Removed: Start your day with a delicious breakfast included in your stay */}
            </div>
            {/* 3. Room Image - Quiet sophistication */}
            <div className="art-deco-card overflow-hidden flex flex-col items-center">
              <img src={getAssetPath('/IMAGES/images/DSC_1302.jpg')} alt="Room - Quiet Sophistication" className="w-full h-48 object-cover mb-3" />
                  <h3 className="text-lg gold-mobile-large md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">Quiet Sophistication</h3>
              {/* Removed: Enjoy peaceful comfort and elegant design */}
            </div>
          </div>
            
          <div className="flex justify-center">
            <a
              href="https://app.mews.com/distributor/adee2521-407e-4c2f-af36-b38d01263bf4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold max-w-xs w-full mx-auto"
            >
              Book Your Stay
            </a>
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
          <div className="art-deco-card p-10 md:p-12 text-center">
            <h2>
              Discover In Style
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[var(--color-cream)]/80 font-light mb-8 md:mb-10 max-w-2xl mx-auto">
              <span className="hidden sm:inline">Explore the main room, see the gym and parking, and experience our dining venues firsthand. Our team will tailor the visit to what matters most to you.</span>
              <span className="inline sm:hidden text-sm">Tour the club, gym, parking, and dining—our team tailors your visit to what matters most.</span>
            </p>
            <button
              type="button"
              onClick={() => setIsBookTourOpen(true)}
              className="btn-outline-gold w-full max-w-xs mx-auto"
            >
              Book a Tour
            </button>
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

export default About;
