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
      className="h-56 md:h-72 cursor-pointer group"
      style={{ perspective: '1200px' }}
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
          className="absolute inset-0 p-5 md:p-6 text-center flex flex-col justify-between overflow-hidden group-hover:shadow-[0_8px_24px_rgba(223,189,114,0.4)] transition-shadow duration-300"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
            background: 'linear-gradient(135deg, rgba(4,15,42,1) 0%, rgba(10,31,63,0.95) 100%)',
            border: '2px solid #dfbd72'
          }}
        >
          {/* Ornamental Art Deco top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent opacity-60"></div>
          
          {/* Art Deco corner decorations - premium nested style */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-gold-accent)]"></div>
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[var(--color-gold-accent)] opacity-60"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-gold-accent)]"></div>
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[var(--color-gold-accent)] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-gold-accent)]"></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[var(--color-gold-accent)] opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-gold-accent)]"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[var(--color-gold-accent)] opacity-60"></div>
          
          {/* Ornamental Art Deco bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent opacity-60"></div>
          
          <div className="relative z-10">
            <div className="text-xs tracking-[0.15em] text-[var(--color-gold-accent)] font-heading mb-2 uppercase">
              {price}
            </div>
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent mx-auto mb-4"></div>
            <h3 className="text-base md:text-lg font-heading text-[var(--color-cream)] mb-3 tracking-widest uppercase">
              {name}
            </h3>
            <p className="text-xs md:text-sm text-[var(--color-cream)]/85 font-light leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Click indicator */}
          <div className="flex flex-col items-center gap-1 pt-2 relative z-10">
            <div className="flex items-center gap-2 text-xs text-[var(--color-gold-accent)]/80 hover:text-[var(--color-gold-accent)] transition-colors">
              <RotateCw size={12} />
              <span>Click to view</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 p-5 md:p-6 text-center flex flex-col justify-between overflow-hidden group-hover:shadow-[0_8px_24px_rgba(223,189,114,0.4)] transition-shadow duration-300"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            MozBackfaceVisibility: 'hidden',
            msBackfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, rgba(4,15,42,1) 0%, rgba(10,31,63,0.95) 100%)',
            border: '2px solid #dfbd72'
          }}
        >
          {/* Ornamental Art Deco top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent opacity-60"></div>
          
          {/* Art Deco corner decorations - premium nested style */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-gold-accent)]"></div>
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[var(--color-gold-accent)] opacity-60"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-gold-accent)]"></div>
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[var(--color-gold-accent)] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-gold-accent)]"></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[var(--color-gold-accent)] opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-gold-accent)]"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[var(--color-gold-accent)] opacity-60"></div>
          
          {/* Ornamental Art Deco bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent opacity-60"></div>
          
          <div className="relative z-10 flex flex-col justify-center flex-1">
            <h3 className="text-sm md:text-base font-heading text-[var(--color-cream)] mb-3 tracking-widest uppercase">
              Key Features
            </h3>
            <div className="h-[2px] w-14 bg-gradient-to-r from-transparent via-[var(--color-gold-accent)] to-transparent mx-auto mb-4"></div>
            <ul className="space-y-2 text-left flex-1 flex flex-col justify-center">
              {highlights.map((highlight, i) => (
                <li key={i} className="text-xs md:text-sm text-[var(--color-cream)]/85 font-light flex items-start gap-2">
                  <span className="text-[var(--color-gold-accent)] mt-1 flex-shrink-0 text-lg leading-none">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Click to flip back indicator */}
          <div className="flex flex-col items-center gap-1 pt-2 relative z-10">
            <div className="flex items-center gap-2 text-xs text-[var(--color-gold-accent)]/80 hover:text-[var(--color-gold-accent)] transition-colors">
              <RotateCw size={12} />
              <span>Click back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipCard;
