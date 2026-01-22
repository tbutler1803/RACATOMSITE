import { useState } from 'react';
import { RotateCw } from 'lucide-react';

interface MembershipCardProps {
  name: string;
  price: string;
  description: string;
  highlights: string[];
}

function MembershipCard({ name, price, description, highlights }: MembershipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="h-56 md:h-72 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 p-5 md:p-6 text-center flex flex-col justify-between border-2 border-[var(--color-gold-accent)] bg-[var(--color-dark-navy)] shadow-[0_4px_12px_rgba(223,189,114,0.25)] overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          {/* Art Deco corner decorations - more prominent */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-[3px] border-l-[3px] border-[var(--color-gold-accent)] opacity-100"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-[3px] border-r-[3px] border-[var(--color-gold-accent)] opacity-100"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[3px] border-l-[3px] border-[var(--color-gold-accent)] opacity-100"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[3px] border-r-[3px] border-[var(--color-gold-accent)] opacity-100"></div>
          
          <div className="relative z-10">
            <div className="text-xs tracking-[0.15em] text-[var(--color-gold-accent)] font-heading mb-2 uppercase">
              {price}
            </div>
            <div className="h-[2px] w-16 bg-[var(--color-gold-accent)] mx-auto mb-3"></div>
            <h3 className="text-base md:text-lg font-heading text-[var(--color-cream)] mb-3 tracking-wide">
              {name}
            </h3>
            <p className="text-sm text-[var(--color-cream)]/90 font-light leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Click indicator */}
          <div className="flex flex-col items-center gap-1 pt-2 relative z-10">
            <div className="flex items-center gap-2 text-xs text-[var(--color-gold-accent)]/80">
              <RotateCw size={12} />
              <span>Click to learn more</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 p-5 md:p-6 text-center flex flex-col justify-between border-2 border-[var(--color-gold-accent)] bg-[var(--color-dark-navy)] shadow-[0_4px_12px_rgba(223,189,114,0.25)] overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            MozBackfaceVisibility: 'hidden',
            msBackfaceVisibility: 'hidden'
          }}
        >
          {/* Art Deco corner decorations - more prominent */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-[3px] border-l-[3px] border-[var(--color-gold-accent)] opacity-100"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-[3px] border-r-[3px] border-[var(--color-gold-accent)] opacity-100"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[3px] border-l-[3px] border-[var(--color-gold-accent)] opacity-100"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[3px] border-r-[3px] border-[var(--color-gold-accent)] opacity-100"></div>
          
          <div className="relative z-10">
            <h3 className="text-sm md:text-base font-heading text-[var(--color-cream)] mb-2 tracking-wide">
              Key Features
            </h3>
            <div className="h-[2px] w-16 bg-[var(--color-gold-accent)] mx-auto mb-3"></div>
            <ul className="space-y-1.5 text-left">
              {highlights.map((highlight, i) => (
                <li key={i} className="text-xs md:text-sm text-[var(--color-cream)]/90 font-light flex items-start gap-2 leading-relaxed">
                  <span className="text-[var(--color-gold-accent)] mt-0.5 flex-shrink-0">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Click to flip back indicator */}
          <div className="flex flex-col items-center gap-1 pt-2 relative z-10">
            <div className="flex items-center gap-2 text-xs text-[var(--color-gold-accent)]/80">
              <RotateCw size={12} />
              <span>Click to go back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipCard;
