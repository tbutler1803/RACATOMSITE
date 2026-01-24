import { useState, useRef, useEffect } from 'react';

interface PanelProps {
  letter: string;
  label: string;
  imageUrl: string;
  onClick: () => void;
}

function Panel({ letter, label, imageUrl, onClick }: PanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = imageUrl.endsWith('.mp4') || imageUrl.endsWith('.webm') || imageUrl.endsWith('.ogg');

  // Detect mobile/tablet devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024 || ('ontouchstart' in window));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Autoplay video on mobile when in viewport
  useEffect(() => {
    if (!isMobile || !isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {
              // Autoplay failed, user interaction needed
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [isMobile, isVideo]);

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
      className="relative flex-1 cursor-pointer overflow-hidden group min-h-[23vh] lg:min-h-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Background media - video or image */}
      {isVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out"
          style={{ 
            opacity: isMobile ? 0.3 : (isHovered ? 0.75 : 0.001),
            pointerEvents: 'none',
            visibility: 'visible'
          }}
          autoPlay={isMobile || isHovered}
          loop
          muted
          playsInline
          preload="auto"
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
            opacity: isMobile ? 0.3 : (isHovered ? 0.75 : 0)
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
          className="font-heading text-center leading-none gold-texture-text"
          data-text={letter}
          style={{
            fontSize: isMobile ? 'clamp(7.5rem, 24vw, 14rem)' : 'clamp(8rem, 28vw, 70rem)',
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            opacity: 1,
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginBottom: isMobile ? 'clamp(0rem, 1vw, 0.5rem)' : 'clamp(0.5rem, 2vw, 1rem)',
            letterSpacing: '0.05em'
          }}
        >
          {letter}
        </div>

        <div className="absolute bottom-3 md:bottom-6 flex flex-col items-center gap-1 md:gap-0 w-full px-2 sm:px-4">
          <div
            className="text-[var(--color-gold-accent)] tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.22em] lg:tracking-[0.18em] font-subheading transition-all duration-500 text-center max-w-full overflow-hidden"
            style={{
              // Slightly reduce subheader size on large screens
              fontSize: 'clamp(0.7rem, 1.1vw, 1.15rem)',
              fontFamily: "var(--font-subheading)",
              fontWeight: 400,
              textTransform: 'uppercase',
              opacity: isMobile ? 1 : (isHovered ? 1 : 0.85),
              lineHeight: '1.1',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {label}
          </div>

          {/* Art-deco ornament appears only on hover */}
          <div
            // Increase space between subheader and ornament on larger screens
            className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 transition-all duration-500 w-[72%]"
            style={{
              display: isMobile ? 'none' : 'block',
              opacity: isHovered ? 1 : 0,
              transform: `scaleX(${isHovered ? 1 : 0.95})`,
              transformOrigin: 'center',
            }}
          >
            <svg
              viewBox="0 0 520 28"
              className="block w-full"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              // Height scales with viewport but capped to keep proportion with subheader
              style={{ 
                color: 'var(--color-gold-accent)',
                height: 'clamp(0.6rem, 1.1vw, 1.2rem)'
              }}
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
