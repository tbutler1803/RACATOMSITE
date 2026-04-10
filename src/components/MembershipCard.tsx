import { useState } from 'react';
import { Wine, Globe } from 'lucide-react';
import MembershipModal from './MembershipModal';
import { getAssetPath } from '../utils/paths';


interface MembershipCardProps {
  name: string;
  price: string;
  membershipFee?: string;
  preSpendCredit?: string;
  monthlySubscription?: string;
  description: string;
  highlights: string[];
}

function MembershipCard({ name, price, description, highlights, membershipFee, preSpendCredit, monthlySubscription }: MembershipCardProps) {


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
        className="h-[340px] md:h-80 cursor-pointer group bg-transparent border-0 p-0 w-full flex justify-center md:block text-center"
        onClick={handleOpenModal}
        aria-label={`${name} membership details`}
      >
        <div
          className="art-deco-card w-full flex flex-col items-center text-center px-6 py-8 md:px-8 md:py-10 transition-all duration-300 relative"
          style={{
            height: 340,
            maxWidth: 370,
            margin: 'auto',
            borderRadius: '0.75rem',
            background: 'var(--color-dark-navy)'
          }}
        >
          {/* Icon for Events-Driven Excellence */}
          {name === 'Events-Driven Excellence' && (
            <Wine size={48} strokeWidth={2.2} color="var(--color-gold-accent)" className="mb-4" />
          )}
          {/* Icon for Your Gateway to Connections */}
          {name === 'Your Gateway to Connections' && (
            <Globe size={48} strokeWidth={2.2} color="var(--color-gold-accent)" className="mb-4" />
          )}
          <h3 className="text-[var(--color-gold-accent)] font-heading mb-3 md:mb-4 text-[1.2rem] sm:text-xl md:text-[1.95rem] tracking-[0.05em] uppercase leading-tight font-medium md:font-bold">
            <span className="block font-medium md:font-bold">
              {name.includes('/') ? (
                name.split('/').map((part, i, arr) => (
                  <span key={i} className="block md:inline">
                    {part}{i < arr.length - 1 ? '/' : ''}
                  </span>
                ))
              ) : (
                name
              )}
            </span>
          </h3>
          <div className="h-[3px] w-14 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent mx-auto mb-5 rounded-full opacity-100 relative z-10" />
          <div className="mt-auto w-full pb-10 md:pb-14">
            <p className="text-sm sm:text-base md:text-lg text-[var(--color-cream)] leading-relaxed mb-2 font-normal">
              <span className="font-normal text-sm sm:text-base md:text-lg">
                {(name === 'Corporate/Community' || name === 'Corporate/ Community' || name === 'Corporate / Community') ? 'Group Membership' : 'Individual Membership'}
              </span>
            </p>
            <span className="block text-xs md:text-sm text-[var(--color-gold-accent)]/80 md:text-[var(--color-gold-accent)] tracking-[0.15em] md:tracking-widest uppercase font-medium md:font-semibold">
              Click for details
            </span>
          </div>
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
          membershipFee={membershipFee}
          preSpendCredit={preSpendCredit}
          monthlySubscription={monthlySubscription}
          description={
            description + (highlights && highlights.length ? '\n\n' + highlights.join('\n\n') : '')
          }
        />
      )}
    </>
  );
}

export default MembershipCard;
