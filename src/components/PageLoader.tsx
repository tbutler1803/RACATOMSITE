import { useEffect } from 'react';
import './PageLoader.css';
import { getAssetPath } from '../utils/paths';

interface PageLoaderProps {
  isLoading: boolean;
}

function PageLoader({ isLoading }: PageLoaderProps) {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay" role="status" aria-live="polite">
      <div className="page-loader-container">
        <img
          src={getAssetPath('/Steering-Wheel-Loader.png')}
          alt="Loading..."
          decoding="async"
          className="steering-wheel-loader"
        />
      </div>
    </div>
  );
}

export default PageLoader;
