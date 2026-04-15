import Header from '../components/Header';
import ArtDecoDivider from '../components/ArtDecoDivider';
import { getAssetPath } from '../utils/paths';
import { useState } from 'react';
import BookTourModal from '../components/BookTourModal';

function Motoring() {
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);

  return (
    <div className="min-h-screen text-[var(--color-cream)] overflow-x-hidden">
      <Header />

      <div>
        {/* Hero Section */}
        <div
          className="relative h-[70vh] md:h-[80vh] w-full bg-cover bg-center flex items-center justify-center overflow-hidden pt-16 md:pt-20"
          style={{
            backgroundImage: `url(${getAssetPath('/IMAGES/pexels-antoine-bovy-2027803158-29105285.jpg')})`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(4, 15, 42, 0.65)' }}
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-light text-[var(--color-gold-accent)] mb-3 md:mb-4 tracking-widest leading-tight drop-shadow-2xl">
              MOTORING
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-18 text-center">
          {/* Motoring News Section */}
          <section className="mb-16 md:mb-24" id="news">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
            <h2 className="mb-6 md:mb-8 font-heading text-4xl md:text-5xl text-[var(--color-gold-accent)]">
              MOTORING NEWS
            </h2>
            
            <div className="max-w-6xl mx-auto mb-16">
              <p className="text-lg md:text-xl text-[var(--color-cream)]/90 font-light leading-relaxed">
                Welcome to the motoring heart of the Royal Automobile Club of Australia. Established in 1903, RACA has been the go-to on all things motoring for over a century. Buckle up as we bring you the latest motoring industry news and events. From the best cars in Australia to the most anticipated car shows and events happening this weekend, we've got you covered.
              </p>
              <p className="mt-6 text-lg md:text-xl text-[var(--color-cream)]/90 font-light leading-relaxed">
                Stay informed with practical updates on new technologies, road trends, safety developments, and the changing future of mobility. Discover stories from club drives, rally highlights, and member experiences that celebrate both classic motoring heritage and modern performance. Whether you are a lifelong enthusiast or simply curious about what is next, this is your home for trusted motoring insight.
              </p>
            </div>
          </section>

          {/* Motoring Articles Section */}
          <section className="mb-16 md:mb-24">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
            <h2 className="mb-10 md:mb-12 font-heading text-4xl md:text-5xl text-[var(--color-gold-accent)]">
              MOTORING ARTICLES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="art-deco-card flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={getAssetPath('/IMAGES/EV5.jpg')}
                    alt="Kia EV5 Earth electric SUV"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-2xl font-heading text-[var(--color-gold-accent)] mb-4 min-h-[5rem] flex items-start uppercase">
                    KIA’S EV5 EARTH ELECTRIC SUV
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-lg leading-relaxed mb-6 flex-1">
                    Driving Kia’s electric mid-sized EV5 SUV – similar in size to Kia’s petrol Sportage, although boxier and the first Kia to be made in China for this market. Three trim grades Air, Earth, and GT- Line – I’m driving the mid-grade EV5 Earth at $68,990 drive-away...
                  </p>
                </div>
              </div>

              {/* Article 2 */}
              <div className="art-deco-card flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={getAssetPath('/IMAGES/IX3.jpeg')}
                    alt="BMW iX3 M-Sport SUV"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-2xl font-heading text-[var(--color-gold-accent)] mb-4 min-h-[5rem] flex items-start uppercase">
                    BMW’s iX3 M-Sport SUV
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-lg leading-relaxed mb-6 flex-1">
                    BMW’s iX3 M-Sport delivers a refined and comfortable electric driving experience with strong efficiency, intuitive technology and classic BMW road manners, making it a well-packaged and more accessible entry into the brand’s electric SUV line-up...
                  </p>
                </div>
              </div>

              {/* Article 3 */}
              <div className="art-deco-card flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={getAssetPath('/IMAGES/EV6.jpg')}
                    alt="Kia EV6 GT-line"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-2xl font-heading text-[var(--color-gold-accent)] mb-4 min-h-[5rem] flex items-start uppercase">
                    Kia EV6 GT-line
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-lg leading-relaxed mb-6 flex-1">
                    Kia’s EV6 GT-Line all-wheel-drive blends strong performance, real-world driving range and standout design with a smooth, refined driving experience, making it one of the most compelling premium electric SUVs on the market...
                  </p>
                </div>
              </div>

              {/* Article 4 */}
              <div className="art-deco-card flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={getAssetPath('/IMAGES/Porsche-Cayenne-2024.jpg')}
                    alt="Porsche's turbo Cayenne E-Hybrid Coupe SUV"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-2xl font-heading text-[var(--color-gold-accent)] mb-4 min-h-[5rem] flex items-start uppercase">
                    Porsche’s turbo Cayenne E-Hybrid
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-lg leading-relaxed mb-6 flex-1">
                    Porsche’s turbo Cayenne E-Hybrid Coupe SUV – a technically impressive upper luxury plug-in hybrid SUV.
                  </p>
                </div>
              </div>

              {/* Article 5 */}
              <div className="art-deco-card flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={getAssetPath('/IMAGES/Peugeot-5008-C-2024.jpg')}
                    alt="Peugeot 5008 GT Premium Hybrid SUV"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <p className="absolute bottom-0 right-0 text-[10px] text-white/60 bg-black/40 px-1">Alexander Migl, CC BY-SA 4.0</p>
                </div>
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-2xl font-heading text-[var(--color-gold-accent)] mb-4 min-h-[5rem] flex items-start uppercase">
                    Peugeot 5008 GT Premium Hybrid SUV
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-lg leading-relaxed mb-6 flex-1">
                    Peugeot 5008 GT Premium Hybrid SUV - has gallic flair but at a price.
                  </p>
                </div>
              </div>

              {/* Article 6 */}
              <div className="art-deco-card flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={getAssetPath('/IMAGES/Audi-S5-Avant.jpg')}
                    alt="Audi S5 Avant TFSI quattro"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-2xl font-heading text-[var(--color-gold-accent)] mb-4 min-h-[5rem] flex items-start uppercase">
                    Behind the Wheel - Audi's S5 Avant TFSI quattro
                  </h3>
                  <p className="text-[var(--color-cream)]/80 font-light text-lg leading-relaxed mb-6 flex-1">
                    A sharp looking European touring wagon delivering 0 to 100km/h in just 4.5 seconds. With 270kW, quattro all-wheel drive, optional panoramic glass roof, and a driver-focused interior, this replacement for the S4 Avant combines exhilarating performance with refined touring wagon comfort.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Historic Vehicle Registration Section */}
          <section className="mb-16 md:mb-24">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-8 md:mb-10 mx-auto" />
            <h2 className="mb-6 md:mb-8 font-heading text-4xl md:text-5xl text-[var(--color-gold-accent)]">
              HISTORIC VEHICLE REGISTRATION
            </h2>
            
            <div className="art-deco-card p-8 md:p-12 max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-[var(--color-cream)]/90 font-light mb-8 leading-relaxed">
                As a RACA member, you can count on the Club for support with your Historic Vehicle Registration. We offer a complimentary service to guide current members through the process.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <a 
                  href={getAssetPath('/IMAGES/FINAL_RACA HVR Application Process_FINAL.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold px-8 py-3 tracking-widest text-xl uppercase"
                >
                  DOWNLOAD CHECKLIST (PDF)
                </a>
              </div>
            </div>
          </section>

          {/* Book a Tour Section */}
          <section className="mb-16 md:mb-20">
            <ArtDecoDivider width="w-56 md:w-72 lg:w-80" height="h-6 md:h-16" className="mb-10 md:mb-12 mx-auto" />
            <div className="art-deco-card p-10 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="mb-6 md:mb-8 font-heading text-4xl md:text-5xl text-[var(--color-gold-accent)] uppercase">
                Discover In Style
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[var(--color-cream)]/80 font-light mb-8 md:mb-10 max-w-2xl mx-auto">
                <span className="hidden sm:inline">Explore the main room, see the gym and parking, and experience our dining venues firsthand. Our team will tailor the visit to what matters most to you.</span>
                <span className="inline sm:hidden text-lg">Tour the club, gym, parking, and dining—our team tailors your visit to what matters most.</span>
              </p>
              <button
                type="button"
                onClick={() => setIsBookTourOpen(true)}
                className="btn-outline-gold w-full max-w-xs mx-auto text-xl uppercase"
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

export default Motoring;
