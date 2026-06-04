import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  onLoad?: () => void;
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  onLoad,
  priority = false
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(priority ? src : null);
  const [isLoading, setIsLoading] = useState(!priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || imageSrc !== null) return;

    // Use Intersection Observer to lazy load images
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imageSrc === null) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '1000px' } // Start loading well before image enters viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, imageSrc, priority]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  return (
    <div className={`relative ${containerClassName} bg-white/5 overflow-hidden`}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      )}
      <img
        ref={imgRef}
        src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3E%3C/svg%3E'}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
      />
    </div>
  );
}
