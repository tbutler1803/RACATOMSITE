import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import { getAssetPath } from '../utils/paths';
import { useState } from 'react';
import BookTourModal from '../components/BookTourModal';
import BookStayModal from '../components/BookStayModal';
import { Wine, Globe, BedDouble, Utensils } from 'lucide-react';

function About() {
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);
  const [isBookStayOpen, setIsBookStayOpen] = useState(false);

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
      title: 'Historic Vehicle Rego Covered',
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
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-wide leading-tight">
              ABOUT US
            </h1>
            <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-white max-w-2xl mx-auto font-light px-2">
              Founded in 1903, RACA is Australia's first automobile club and a symbol of motoring prestige.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-18 text-center">
          <section className="mb-16 md:mb-20">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
            <h2 className="mb-2 md:mb-6">
              Driving the Future, Honouring the Past
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto px-0 md:px-4">
              <div className="text-center md:text-left">
                <h3 className="hidden md:block text-2xl sm:text-2xl md:text-3xl font-heading text-[var(--color-gold-accent)] mb-4 md:mb-6 tracking-wide leading-tight opacity-90 italic">
                  A Legacy of Connection Since 1903
                </h3>
                {/* Full text for md and up */}
                <div className="hidden md:block">
                  <p className="text-lg text-[var(--color-cream)]/80 font-light mb-4 text-left">
                    Since 1903, the Royal Automobile Club of Australia has brought together individuals who value connection, shared experience and purposeful belonging. Established in the early days of motoring, RACA quickly became more than an advocate for motorists. It quickly became a gathering place for people united by curiosity, ambition and a desire to shape the world around them.
                  </p>
                  <p className="text-lg text-[var(--color-cream)]/80 font-light mb-4 text-left">
                    Today, RACA’s landmark Macquarie Street clubhouse in Sydney’s CBD stands as a living expression of that legacy. Rich in tradition and architectural character, the Club blends timeless elegance with contemporary comfort. The space honours more than a century of history while continually evolving to meet the expectations of a modern membership.
                  </p>
                  <p className="text-lg text-[var(--color-cream)]/80 font-light mb-4 text-left">
                    Grounded in tradition yet forward looking in its offering, RACA fosters meaningful social engagement, professional exchange and enduring friendships across generations. It remains a place where heritage provides the foundation and innovation shapes what comes next, carrying its legacy confidently into the future.
                  </p>
                </div>
                {/* Reduced text for mobile and tablet below md */}
                <div className="block md:hidden text-center px-0">
                  <h3 className="text-2xl font-heading text-[var(--color-gold-accent)] mb-4 tracking-wide leading-tight opacity-90 italic">
                    A Legacy of Connection Since 1903
                  </h3>
                  <p className="text-lg text-[var(--color-cream)]/80 font-light mb-4 mobile-large-text">
                    Since 1903, the Royal Automobile Club of Australia has brought together individuals who value connection and shared experience. From its early days as a motoring advocate, RACA has evolved into a landmark gathering place in Sydney’s CBD, blending timeless elegance with contemporary comfort for a modern membership.
                  </p>
                  <p className="text-lg text-[var(--color-cream)]/80 font-light mb-4 mobile-large-text">
                    Grounded in tradition yet forward-looking, the Club fosters meaningful social engagement and enduring friendships across generations. It remains a place where heritage provides the foundation and innovation shapes the future, carrying its legacy confidently forward.
                  </p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="art-deco-card p-4 md:p-5">
                  <h3 className="text-2xl sm:text-2xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide text-center">
                    Community & Connection
                  </h3>
                  <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light text-center">
                    A vibrant community where members forge lifelong friendships through shared interests and social engagement.
                  </p>
                </div>

                <div className="art-deco-card p-4 md:p-5">
                  <h3 className="text-2xl sm:text-2xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide text-center">
                    Social Excellence
                  </h3>
                  <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light text-center">
                    From elegant dining to casual gatherings, our social calendar is designed to bring people together.
                  </p>
                </div>

                <div className="art-deco-card p-4 md:p-5">
                  <h3 className="text-2xl sm:text-2xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide text-center">
                    Shared Experiences
                  </h3>
                  <p className="text-sm md:text-lg text-[var(--color-cream)]/80 font-light text-center">
                    A welcoming environment where every visit is an opportunity for meaningful social interaction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 md:mb-20">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
            
            <div className="max-w-6xl mx-auto mb-12">
              <Link 
                to="/motoring" 
                className="block art-deco-card overflow-hidden group relative h-48 md:h-64"
              >
                <img
                  src={getAssetPath('/IMAGES/pexels-antoine-bovy-2027803158-29105285.jpg')}
                  alt="Motoring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <h2 className="text-4xl md:text-6xl text-[var(--color-gold-accent)] font-heading tracking-widest drop-shadow-lg">
                    MOTORING
                  </h2>
                </div>
              </Link>
            </div>

            <h2>
              Why Join RACA
            </h2>
            <p className="text-lg mobile-large-text text-[var(--color-cream)]/90 font-light max-w-3xl mx-auto mb-8 md:mb-10">
              Membership brings the best of location, reciprocal privileges, crafted hospitality, and spaces designed for business, celebration, and wellbeing.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyJoin.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="art-deco-card p-6 md:p-8 h-full flex flex-col items-center text-center justify-start">
                    <div className="flex flex-col items-center w-full">
                      <div className="mb-3 md:mb-4 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-[var(--color-gold-accent)]/40">
                        <Icon size={26} className="text-[var(--color-gold-accent)]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-4 tracking-wide min-h-[3.5rem] md:min-h-[5rem] flex items-center justify-center w-full">
                        {item.title}
                      </h3>
                    </div>
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
            <p className="text-lg mobile-large-text text-[var(--color-cream)]/90 font-light max-w-3xl mx-auto mb-8 md:mb-10 px-0">
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
                    <h3 className="text-[var(--color-gold-accent)] font-heading mb-4 md:mb-5 text-lg md:text-2xl tracking-wide min-h-[3.5rem] md:min-h-[5.5rem] flex items-center justify-center text-center w-full">
                      {perk.title}
                    </h3>
                    <p className="hidden md:block text-[var(--color-cream)]/80 font-light text-sm md:text-base text-center">
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
              <p className="text-lg mobile-large-text text-[var(--color-cream)]/90 font-light mb-3 leading-relaxed">
                Enjoy 28 unique rooms, from heritage singles to our Deluxe Harbour Suite. All guests have access to club amenities and a helpful concierge team. All accommodation bookings come with complimentary breakfast. Room rates are subject to seasonal pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              {/* 1. Deluxe Harbour Suite image */}
              <div className="art-deco-card overflow-hidden flex flex-col items-center">
                <img src={getAssetPath('/Kezia - Studio La Tessa March 2026/Deluxe Harbour Suite.jpg')} alt="Deluxe Harbour Suite" className="w-full h-48 object-cover mb-3" />
                <h3 className="text-2xl sm:text-2xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">Deluxe Harbour Suite</h3>
                {/* Removed: Breathtaking Sydney Harbour Views */}
              </div>
              {/* 2. Breakfast Image */}
              <div className="art-deco-card overflow-hidden flex flex-col items-center">
                <img src={getAssetPath('/IMAGES/Breakfast.jpg')} alt="Complimentary Breakfast - Bacon and Eggs" className="w-full h-48 object-cover mb-3" />
                <h3 className="text-2xl sm:text-2xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">Complimentary Breakfast</h3>
                {/* Removed: Start your day with a delicious breakfast included in your stay */}
              </div>
              {/* 3. Room Image - Quiet sophistication */}
              <div className="art-deco-card overflow-hidden flex flex-col items-center">
                <img src={getAssetPath('/Kezia - Studio La Tessa March 2026/Quiet Sophistication.jpg')} alt="Room - Quiet Sophistication" className="w-full h-48 object-cover mb-3" />
                <h3 className="text-2xl sm:text-2xl md:text-2xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">Quiet Sophistication</h3>
                {/* Removed: Enjoy peaceful comfort and elegant design */}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setIsBookStayOpen(true)}
                className="btn-outline-gold max-w-xs w-full mx-auto"
              >
                Book Your Stay
              </button>
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
                <span className="inline sm:hidden text-lg">Tour the club, gym, parking, and dining—our team tailors your visit to what matters most.</span>
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
      <BookStayModal
        isOpen={isBookStayOpen}
        onClose={() => setIsBookStayOpen(false)}
      />

      {/* Privacy Policy Link at bottom */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-2 pb-10 flex justify-center text-center">
        <a 
          href={getAssetPath('/IMAGES/RACA Privacy 2026.pdf')} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--color-gold-accent)] hover:text-[var(--color-gold-light)] transition-all duration-300 font-heading tracking-[0.2em] text-lg uppercase font-light"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default About;
