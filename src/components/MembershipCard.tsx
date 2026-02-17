import { useState } from 'react';
import MembershipModal from './MembershipModal';
import { getAssetPath } from '../utils/paths';


interface MembershipCardProps {
  name: string;
  price: string;
  description: string;
  highlights: string[];
}

function MembershipCard({ name, price, description, highlights }: MembershipCardProps) {


  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <button
        type="button"
        className="h-[340px] md:h-80 cursor-pointer group bg-transparent border-0 p-0 w-full text-center"
        onClick={handleOpenModal}
        aria-label={`${name} membership details`}
      >
        <div
          className="art-deco-card w-full flex flex-col items-center text-center px-6 py-8 md:px-8 md:py-10 transition-all duration-300 hover:scale-105 relative"
          style={{
            height: 340,
            maxWidth: 370,
            margin: 'auto',
            borderRadius: '0.75rem',
            background: 'var(--color-dark-navy)'
          }}
        >
          <h3 className="text-[var(--color-gold-accent)] font-heading mb-2 md:mb-3 text-base sm:text-lg md:text-2xl tracking-wide uppercase leading-tight">
            {name}
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent mx-auto mb-4 rounded-full opacity-90"></div>
          <p className="text-base md:text-lg text-[var(--color-cream)] font-bold leading-relaxed mb-2">
            {name === 'Corporate/Community' ? 'Group Membership' : 'Individual Membership'}
          </p>
          <span className="block text-xs md:text-sm text-[var(--color-gold-accent)] font-semibold tracking-wider mt-2 italic">
            Click for more information
          </span>
          <img
            src={getAssetPath('/company_logo.png')}
            alt="RACA Logo"
            className="absolute left-1/2 -translate-x-1/2 bottom-4 w-10 h-10 object-contain opacity-90 pointer-events-none select-none"
            style={{ filter: 'drop-shadow(0 2px 6px rgba(223,189,114,0.18))' }}
          />
        </div>
      </button>
      {modalOpen && (
        <MembershipModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          title={name}
          price={price}
          description={description + (highlights && highlights.length ? '\n\n' + highlights.join('\n\n') : '')}
        />
      )}
    </>
  );
}

export default MembershipCard;
