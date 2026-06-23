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
import EventEnquiryModal from '../components/EventEnquiryModal';
import { getAssetPath } from '../utils/paths';
import { Calendar, Users, Music, Wine, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
// Force-load the Mews script on page load
function useMewsScript() {
  useEffect(() => {
    if (!document.getElementById('mews-distributor-script')) {
      // Use client's recommended snippet
      (function (m: Document, e: string, w: string, s: any[]) {
        const c = m.createElement(e) as HTMLScriptElement;
        c.id = 'mews-distributor-script';
        c.onload = function () {
          if (window.Mews) window.Mews.D.apply(null, s);
        };
        c.async = true;
        c.src = w;
        const t = m.getElementsByTagName(e)[0];
        if (t && t.parentNode) {
          t.parentNode.insertBefore(c, t);
        }
      })(document, 'script', 'https://app.mews.com/distributor/distributor.min.js', [['adee2521-407e-4c2f-af36-b38d01263bf4']]);
    }
  }, []);
}

function Events() {
  useMewsScript();
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const eventSpaces = [
    {
      name: 'Rooftop',
      capacity: 'Up to 80 guests',
      description: 'Perched atop our heritage building, the RACA Rooftop boasts breathtaking views of the Sydney Harbour and Botanic Gardens, an unforgettable backdrop for exceptional events.',
      image: getAssetPath('/IMAGES/Rooftop 4.webp'),
    },
    {
      name: 'Macquarie Room',
      capacity: 'Up to 120 guests',
      description: 'Bright, open and beautifully lit, this space features floor-to-ceiling windows that create a welcoming atmosphere.\n\nAvailable individually or combined with the I.S.C and Reading Room for an exclusive floor hire.',
      image: getAssetPath('/IMAGES/Macquarie Room 2.webp'),
    },
    {
      name: 'ISC Room',
      capacity: 'Up to 80 guests',
      description: 'The newly refreshed Imperial Service Club (I.S.C.) is an intimate, mood-lit space. With its own private bar and rich, atmospheric styling, it provides the perfect setting for exclusive events and elevated celebrations.',
      image: getAssetPath('/Kezia - Studio La Tessa March 2026/ISC Bar.webp'),
    },
    {
      name: 'Victoria Room',
      capacity: 'Up to 200 guests',
      description: 'An impressive, character-filled space, featuring a stunning stained-glass ceiling and statement chandelier. A favourite for galas, wedding receptions and conferences, it offers an elegant setting designed to leave a lasting impression.',
      image: getAssetPath('/Kezia - Studio La Tessa March 2026/Victoria Room.webp'),
    },
    {
      name: 'Pioneer Room',
      capacity: 'Up to 60 guests',
      description: "This intimate space by design, showcases curated memorabilia that offers a charming glimpse into Australia's storied past. A refined setting where heritage and sophistication meet, it is perfect for private gatherings and smaller celebrations.",
      image: getAssetPath('/Kezia - Studio La Tessa March 2026/Pioneers Room.webp'),
    },
    {
      name: 'Vintage Room',
      capacity: 'Up to 30 guests',
      description: 'The Vintage Room is ideal for private dining, intimate meetings, and refined lunches. Complete with its own reception area, this discreet space offers privacy, comfort, and understated elegance for more personal occasions.',
      image: getAssetPath('/Kezia - Studio La Tessa March 2026/Vintage Room.webp'),
    },
    {
      name: 'Boardroom',
      capacity: 'Up to 16 guests',
      description: 'The Boardroom is your ideal setting for hosting refined private events or high-level executive meetings. Designed with discretion and elegance in mind, it provides a sophisticated backdrop for both intimate gatherings and strategic discussions.',
      image: getAssetPath('/Kezia - Studio La Tessa March 2026/Boardroom.webp'),
    },
    {
      name: 'Hordern',
      capacity: 'Up to 8 guests',
      description: 'This room is perfectly suited to small board meetings. Seating up to eight guests, it offers a refined and private setting for focused discussions.',
      image: getAssetPath('/Kezia - Studio La Tessa March 2026/Hordern.webp'),
    },
    {
      name: 'Reading Room',
      capacity: 'Up to 15 guests',
      description: 'The Reading Room is a light-filled sanctuary designed for private dining, intimate meetings, and refined gatherings. The space is bathed in natural light and offers a calm, elegant atmosphere. Perfect for more personal occasions.',
      image: getAssetPath('/IMAGES/EVENT SPACES/Reading ROOM.webp'),
    },
    {
      name: 'Sherwood Room',
      capacity: 'Up to 26 guests',
      description: 'The Sherwood Room is a practical and versatile space suited to board meetings, presentations, and small private gatherings. With a simple, functional layout, it provides an ideal setting for productive discussions and day-to-day corporate events.',
      image: getAssetPath('/IMAGES/EVENT SPACES/Sherwood.webp'),
    },
  ];

  const eventCategories = [
    { icon: Wine, title: 'Social Events' },
    { icon: Users, title: 'Networking' },
    { icon: Music, title: 'Entertainment' },
    { icon: Award, title: 'Private Functions' }
  ];

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
            backgroundImage: `url(${getAssetPath('/IMAGES/DSC_1595.webp')})`,
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
            <h2 className="text-[clamp(2.25rem,4.6vw,2.9rem)]">
              Host your Event at RACA
            </h2>
            <p className="mt-6 text-lg sm:text-lg md:text-xl lg:text-2xl text-[var(--color-cream)] max-w-5xl mx-auto font-light px-2 md:px-4 leading-relaxed">
              Whether corporate or personal, our versatile spaces provide the flexibility to bring any event to life. With curated menus, Audio Visual facilities, and tailored event support, we make every event seamless and effortless.
            </p>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {eventCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="group text-center">
                    <div className="mb-4">
                      <Icon size={32} className="text-[var(--color-gold-accent)] inline-block" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading text-[var(--color-gold-accent)] mb-2 tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </section>
          <div className="mt-6 flex justify-center px-0">
            <div className="event-btn-group events-cta-group mt-0 mb-10 w-full">
              <a
                href="https://royalautomobileclubofaustralia.tripleseat.com/party_request/47431"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                ENQUIRE FOR YOUR PRIVATE EVENT
              </a>
              <a
                href="https://membership.raca.com.au/events"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                CLUB EVENT CALENDAR
              </a>
            </div>
          </div>

          <section className="mb-16 md:mb-32">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-16 mx-auto" />
            <h2 className="text-4xl md:text-6xl font-heading text-[var(--color-gold-accent)] mb-10 md:mb-24 tracking-[0.1em] uppercase">
              Event Spaces
            </h2>

            <div className="space-y-12 md:space-y-32 lg:space-y-40">
              {eventSpaces.map((space, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-16 lg:gap-24 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  <div className="w-[85%] md:w-1/2 mx-auto md:mx-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 border-2 border-[var(--color-gold-accent)] pointer-events-none z-10" />
                      <LazyImage
                        src={space.image}
                        alt={space.name}
                        priority={idx < 3}
                        className={`w-full aspect-[4/3] md:aspect-[3/2] object-cover ${(space as any).position || 'object-center'}`}
                        containerClassName="overflow-hidden"
                      />
                    </div>
                  </div>

                  <div className={`w-[92%] md:w-1/2 mx-auto md:mx-0 flex flex-col text-center items-center ${idx % 2 === 1 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'
                    }`}>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-[var(--color-gold-accent)] mb-4 tracking-wider leading-none uppercase">
                      {space.name}
                    </h2>
                    <div className="text-base md:text-xl lg:text-2xl text-[var(--color-gold-accent)] font-subheading mb-4 tracking-[0.15em] uppercase opacity-90">
                      {`${space.capacity}*`}
                    </div>
                    {space.description.split('\n\n').map((para, i) => (
                      <p key={i} className="text-base md:text-xl lg:text-2xl text-white font-light leading-relaxed max-w-xl mb-3 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-12 md:mt-16 text-base md:text-lg text-[var(--color-cream)]/60 font-light italic text-center max-w-2xl mx-auto">
              * All stated capacities may vary depending on the selected event configuration, including seated or cocktail-style arrangements.
            </p>
          </section>

          <section className="mb-16 md:mb-20">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12" />
            <div className="art-deco-card p-10 md:p-12 text-center">
              <div className="inline-block p-4 bg-[var(--color-gold-accent)]/10 rounded-lg mb-6">
                <Calendar size={40} className="text-[var(--color-gold-accent)]" />
              </div>
              <h2>
                TO BOOK YOUR EVENt
              </h2>
              <div className="flex justify-center max-w-4xl mx-auto px-4 md:px-0 mt-2 md:mt-8">
                <div className="event-btn-group flex flex-col md:flex-row gap-3 md:gap-8 w-full items-center">
                  <a
                    href="https://royalautomobileclubofaustralia.tripleseat.com/party_request/47431"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold max-w-xs w-full mx-auto"
                  >
                    Enquire here
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-8 text-base md:text-lg text-[var(--color-cream)]/70 font-light italic text-center max-w-2xl mx-auto">
              * To contact our events team, email Eventsadmin@raca.com.au or call (02) 8273 2300.
            </p>
          </section>

          <section />
        </div>
      </div>

      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
      />

      <EventEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div >
  );
}

export default Events;
