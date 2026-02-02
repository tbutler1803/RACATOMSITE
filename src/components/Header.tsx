import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';
import { getAssetPath } from '../utils/paths';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeModals = () => {
    window.dispatchEvent(new CustomEvent('close-modals'));
  };

  const handleLogoClick = () => {
    closeModals();
    navigate('/');
  };

  const handleBackClick = () => {
    closeModals();
    navigate('/');
  };

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 ${isHome ? 'pointer-events-none' : 'border-b border-[var(--color-gold-accent)]/40'}`}
      style={!isHome ? {
        backgroundImage: `url(${getAssetPath('/textures/BLUEBG.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="Go to home"
          className="p-0 flex items-center gap-3 sm:gap-4 md:gap-5"
        >
          <img
            src={getAssetPath('/company_logo.png')}
            alt="RACA Logo"
            decoding="async"
            fetchpriority="high"
            className="h-12 sm:h-16 md:h-20 w-auto cursor-pointer logo-img"
          />
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-[var(--color-gold-accent)] font-heading text-base lg:text-lg tracking-[0.02em]">
              ROYAL AUTOMOBILE CLUB OF AUSTRALIA
            </span>
            <span className="text-[var(--color-gold-accent)] font-subheading text-[0.65rem] lg:text-xs tracking-[0.04em]">
              INCORPORATING IMPERIAL SERVICE CLUB
            </span>
          </div>
        </button>
      </div>

      {isHome ? (
        <div className="pointer-events-auto">
          <HamburgerMenu />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-[var(--color-gold-accent)] hover:opacity-70 transition-opacity"
          >
            <ChevronLeft size={24} />
            <span className="text-sm tracking-widest font-heading">BACK</span>
          </button>
          <HamburgerMenu onOpen={closeModals} />
        </div>
      )}
    </div>
  );
}

export default Header;
