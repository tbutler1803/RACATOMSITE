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

  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const panelSizeRef = useRef({ w: 0, h: 0 });

  const normalizedMediaUrl = imageUrl.split(/[?#]/)[0].toLowerCase();
  const isVideo = /\.(mp4|webm|ogg)$/.test(normalizedMediaUrl);

  // Track actual panel dimensions with ResizeObserver so the canvas buffer
  // is always correctly sized — iOS Safari can report stale clientWidth/Height
  // during opacity transitions and touch-triggered reflows.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        panelSizeRef.current = { w: width, h: height };
      }
    });
    ro.observe(el);
    // Seed initial size immediately
    const rect = el.getBoundingClientRect();
    panelSizeRef.current = { w: rect.width, h: rect.height };
    return () => ro.disconnect();
  }, []);

  // Video-to-canvas pipeline that works WITHOUT calling play().
  // Safari blocks play() without a user gesture, but allows currentTime
  // seeking freely.  We manually advance currentTime each frame based on
  // the wall clock and paint the decoded frame to a <canvas>.
  useEffect(() => {
    if (!isVideo || !videoContainerRef.current) return;

    const container = videoContainerRef.current;
    container.innerHTML = '';

    const video = document.createElement('video');
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    // In DOM so Safari allocates the decoder, but visually hidden.
    video.style.cssText =
      'position:absolute;width:1px;height:1px;opacity:0.01;pointer-events:none;z-index:-1;';
    container.appendChild(video);
    video.src = imageUrl;
    video.load();

    let startWall = 0;
    let running = false;

    const drawFrame = () => {
      const canvas = canvasRef.current;
      if (!canvas || video.readyState < 2) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Use observed panel size instead of canvas.clientWidth/Height which
      // can be stale on iOS during opacity transitions.
      const cw = panelSizeRef.current.w;
      const ch = panelSizeRef.current.h;
      if (cw === 0 || ch === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bw = Math.round(cw * dpr);
      const bh = Math.round(ch * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }

      // object-fit: cover logic
      const vw = video.videoWidth;
      const vh = video.videoHeight;
      const canvasAspect = bw / bh;
      const videoAspect = vw / vh;
      let sx = 0, sy = 0, sw = vw, sh = vh;
      if (videoAspect > canvasAspect) {
        sw = vh * canvasAspect;
        sx = (vw - sw) / 2;
      } else {
        sh = vw / canvasAspect;
        sy = (vh - sh) / 2;
      }
      ctx.drawImage(video, sx, sy, sw, sh, 0, 0, bw, bh);
    };

    // Advance currentTime manually each animation frame.  No play() needed.
    const tick = (now: number) => {
      if (!running) return;
      if (!startWall) startWall = now;
      const elapsed = (now - startWall) / 1000;
      const duration = video.duration;
      if (duration && duration > 0) {
        const target = elapsed % duration;
        // Only seek if we've moved enough (avoids redundant seeks)
        if (Math.abs(video.currentTime - target) > 0.02) {
          video.currentTime = target;
        }
      }
      drawFrame();
      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      startWall = 0;
      rafRef.current = requestAnimationFrame(tick);
    };

    // Also try native play() — if the browser allows it, the hardware
    // decoder will run and drawImage will grab perfectly smooth frames.
    // The manual currentTime approach is the fallback.
    const tryNativePlay = () => {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => {
        // play() blocked — rely on manual currentTime stepping (already running)
      });
    };

    // Start the manual loop as soon as metadata arrives
    const onMeta = () => {
      start();
      tryNativePlay();
    };
    if (video.readyState >= 1) {
      onMeta();
    } else {
      video.addEventListener('loadedmetadata', onMeta, { once: true });
    }

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener('loadedmetadata', onMeta);
      video.pause();
      video.removeAttribute('src');
      video.load();
      container.innerHTML = '';
    };
  }, [isVideo, imageUrl]);

  // Prevent iOS from firing both touch and synthesized mouse events
  const touchActiveRef = useRef(false);

  const handleTouchStart = () => {
    touchActiveRef.current = true;
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    touchActiveRef.current = false;
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (!touchActiveRef.current) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!touchActiveRef.current) setIsHovered(false);
  };

  // Laptop-only optical centering and vertical alignment
  const getLetterTransform = (ch: string, isMobileView: boolean): string => {
    const upperChar = (ch || '').toUpperCase();

    if (isMobileView) {
      // Mobile adjustments for better centering
      switch (upperChar) {
        case 'C':
          return 'translateX(-2%)';
        default:
          return 'none';
      }
    }

    // Desktop adjustments
    switch (upperChar) {
      case 'A':
        return 'translateX(0.5%)';
      case 'R':
        return 'translateX(0.4%)';
      case 'C':
        return 'translateX(-3%)';
      default:
        return 'none';
    }
  };

  // Detect mobile/tablet devices
  useEffect(() => {
    const checkMobile = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 1024 || ('ontouchstart' in window));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      ref={panelRef}
      role="button"
      tabIndex={0}
      aria-label={label}
      className="relative flex-1 cursor-pointer overflow-hidden group text-left bg-transparent border-0 p-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    >
      {/* Background media */}
      {isVideo ? (
        <>
          {/* Hidden container for the real <video> element (Safari needs it in DOM to decode) */}
          <div ref={videoContainerRef} aria-hidden="true" style={{ position: 'absolute', overflow: 'hidden', width: 1, height: 1, opacity: 0.01 }} />
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-out"
            style={{
              opacity: isMobile ? (isHovered ? 1 : 0) : (isHovered ? 0.75 : 0),
              pointerEvents: 'none',
            }}
          />
        </>
      ) : (
        <img
          src={imageUrl}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out"
          style={{
            opacity: isMobile ? (isHovered ? 1 : 0) : (isHovered ? 0.75 : 0),
            objectPosition: (isMobile && letter === 'R') ? 'bottom' : 'center'
          }}
        />
      )}

      <div
        className="absolute inset-0 bg-[var(--color-dark-navy)] transition-opacity duration-500 ease-out"
        style={{ opacity: 0 }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark-navy)]/60 via-[var(--color-dark-navy)]/50 to-[var(--color-dark-navy)]/70 transition-opacity duration-500"
        style={{ opacity: isHovered ? (isVideo ? 0.35 : 1) : 0 }}
      />

      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 z-10">
        <div
          className="font-heading text-center leading-none gold-texture-text"
          data-text={letter}
          style={{
            fontSize: isMobile ? 'clamp(7.5rem, 24vw, 14rem)' : 'clamp(10rem, 32vw, 72rem)',
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            opacity: 1,
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginBottom: isMobile ? 'clamp(0rem, 1vw, 0.5rem)' : '0',
            letterSpacing: '0em',
            transform: getLetterTransform(letter, isMobile)
          }}
        >
          {letter}
        </div>

        <div className="absolute bottom-3 md:bottom-6 flex flex-col items-center gap-1 md:gap-0 w-full px-2 sm:px-4">
          <div
            className="text-[var(--color-gold-accent)] gold-mobile-large tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.14em] lg:tracking-[0.12em] font-subheading transition-all duration-500 text-center max-w-full overflow-hidden"
            style={{
              fontFamily: "var(--font-subheading)",
              fontWeight: 400,
              textTransform: 'uppercase',
              opacity: isMobile ? 1 : (isHovered ? 1 : 0.85),
              lineHeight: '1.2',
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
              aria-hidden="true"
              focusable="false"
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
