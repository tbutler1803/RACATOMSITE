import { useState, useRef, useEffect } from 'react';

interface PanelProps {
  letter: string;
  label: string;
  imageUrl: string;
  onClick: () => void;
}

function Panel({ letter, label, imageUrl, onClick }: PanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = imageUrl.endsWith('.mp4') || imageUrl.endsWith('.webm') || imageUrl.endsWith('.ogg');

  console.log('Panel rendered:', { letter, imageUrl, isVideo });

  // Handle hover with direct video control for Safari compatibility
  const handleMouseEnter = () => {
    console.log('handleMouseEnter called:', { isVideo, videoRef: videoRef.current });
    setIsHovered(true);
    // Play video immediately on hover (during user interaction)
    if (videoRef.current && isVideo) {
      console.log('Mouse enter - attempting to play video');
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing successfully');
          })
          .catch((err) => {
            console.error('Video autoplay failed:', err);
          });
      }
    } else {
      console.log('Video ref not ready or not a video:', { hasRef: !!videoRef.current, isVideo });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Pause and reset video
    if (videoRef.current && isVideo) {
      console.log('Mouse leave - pausing video');
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative flex-1 cursor-pointer overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Art Deco Corner Ornaments - Top Corners */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none overflow-hidden z-20">
        <svg className={`w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }}>
          <path d="M8 8L56 8L8 56Z" fill="none" stroke="var(--color-gold-accent)" strokeWidth="1"/>
          <path d="M12 12L52 12L12 52Z" fill="none" stroke="var(--color-gold-accent)" strokeWidth="0.5" opacity="0.6"/>
          <circle cx="8" cy="8" r="4" fill="none" stroke="var(--color-gold-accent)" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden z-20">
        <svg className={`w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} transform scale-x-[-1]`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }}>
          <path d="M8 8L56 8L8 56Z" fill="none" stroke="var(--color-gold-accent)" strokeWidth="1"/>
          <path d="M12 12L52 12L12 52Z" fill="none" stroke="var(--color-gold-accent)" strokeWidth="0.5" opacity="0.6"/>
          <circle cx="8" cy="8" r="4" fill="none" stroke="var(--color-gold-accent)" strokeWidth="1"/>
        </svg>
      </div>

      {/* Art Deco Corner Ornaments - Bottom Corners */}
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none overflow-hidden z-20">
        <svg className={`w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} transform scale-y-[-1]`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }}>
          <path d="M8 8L56 8L8 56Z" fill="none" stroke="var(--color-gold-accent)" strokeWidth="1"/>
          <path d="M12 12L52 12L12 52Z" fill="none" stroke="var(--color-gold-accent)" strokeWidth="0.5" opacity="0.6"/>
          <circle cx="8" cy="8" r="4" fill="none" stroke="var(--color-gold-accent)" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none overflow-hidden z-20">
        <svg className={`w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} transform scale-[-1]`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }}>
          <path d="M8 8L56 8L8 56Z" fill="none" stroke="var(--color-gold-accent)" strokeWidth="1"/>
          <path d="M12 12L52 12L12 52Z" fill="none" stroke="var(--color-gold-accent)" strokeWidth="0.5" opacity="0.6"/>
          <circle cx="8" cy="8" r="4" fill="none" stroke="var(--color-gold-accent)" strokeWidth="1"/>
        </svg>
      </div>

      {/* Background media - video or image */}
      {isVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out"
          style={{ 
            opacity: isHovered ? 0.75 : 0.001,
            pointerEvents: 'none',
            visibility: 'visible'
          }}
          autoPlay={isHovered}
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => console.log('Video metadata loaded')}
          onError={(e) => console.error('Video error:', e)}
          onPlay={() => console.log('Video playing')}
          onPause={() => console.log('Video paused')}
        >
          <source src={imageUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-out"
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: isHovered ? 0.75 : 0
          }}
        />
      )}

      <div
        className="absolute inset-0 bg-[var(--color-dark-navy)] transition-opacity duration-500 ease-out"
        style={{ opacity: 0 }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark-navy)]/60 via-[var(--color-dark-navy)]/50 to-[var(--color-dark-navy)]/70 transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 z-10">
        <div
          className="font-heading tracking-widest text-center leading-none gold-texture-text"
          data-text={letter}
          style={{
            fontSize: 'clamp(8rem, 28vw, 70rem)',
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            opacity: 1,
            color: '#AD8B49',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginBottom: 'clamp(0.5rem, 2vw, 1rem)'
          }}
        >
          {letter}
        </div>

        <div className="absolute bottom-3 md:bottom-6 flex flex-col items-center gap-1 md:gap-0 w-full px-4">
          <div
            className="text-[var(--color-gold-accent)] tracking-[0.26em] md:tracking-[0.22em] lg:tracking-[0.18em] font-subheading transition-all duration-500 text-center whitespace-nowrap"
            style={{
              fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
              fontFamily: "var(--font-subheading)",
              fontWeight: 400,
              textTransform: 'uppercase',
              opacity: isHovered ? 1 : 0.85,
              lineHeight: '1'
            }}
          >
            {label}
          </div>

          {/* Art-deco ornament appears only on hover */}
          <div
            className="mt-3 md:-mt-1 transition-all duration-500 w-[72%] sm:w-[72%] md:w-[72%] lg:w-[72%] xl:w-[72%]"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: `scaleX(${isHovered ? 1 : 0.95})`,
              transformOrigin: 'center',
            }}
          >
            <svg
              viewBox="0 0 520 28"
              className="block h-3 sm:h-4 md:h-10 lg:h-10 xl:h-10 w-full"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'var(--color-gold-accent)' }}
            >
              {/* Draw left half once, mirror for perfect symmetry */}
              <g>
                {/* Left half */}
                <g>
                  {/* End cap diamond */}
                  <polygon points="8,14 16,6 24,14 16,22" fill="currentColor" />

                  {/* Outer long line */}
                  <path d="M24 14H196" stroke="currentColor" strokeWidth="1.5" />

                  {/* Inner parallel lines */}
                  <path d="M72 8H192" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M72 20H192" stroke="currentColor" strokeWidth="1.5" />

                  {/* Deco bracket */}
                  <path d="M206 14L216 4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M206 14L216 24" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M216 14H224" stroke="currentColor" strokeWidth="1.5" />

                  {/* Side diamond (outline) */}
                  <polygon points="232,6 240,14 232,22 224,14" fill="none" stroke="currentColor" strokeWidth="1.5" />

                  {/* Little accent strokes around diamond */}
                  <path d="M242 14H246" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M238 10H246" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M238 18H246" stroke="currentColor" strokeWidth="1.5" />
                </g>

                {/* Right half mirrored */}
                <g transform="translate(520 0) scale(-1 1)">
                  <polygon points="8,14 16,6 24,14 16,22" fill="currentColor" />
                  <path d="M24 14H196" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M72 8H192" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M72 20H192" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M206 14L216 4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M206 14L216 24" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M216 14H224" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="232,6 240,14 232,22 224,14" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M242 14H246" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M238 10H246" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M238 18H246" stroke="currentColor" strokeWidth="1.5" />
                </g>

                {/* Center ornament */}
                <polygon points="260,2 272,14 260,26 248,14" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="260,8 266,14 260,20 254,14" fill="currentColor" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* removed vertical separator between panels */}
    </div>
  );
}

export default Panel;
