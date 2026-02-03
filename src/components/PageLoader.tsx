import { useEffect } from 'react';
import './PageLoader.css';
import { getAssetPath } from '../utils/paths';

interface PageLoaderProps {
  isLoading: boolean;
}

function PageLoader({ isLoading }: PageLoaderProps) {
  useEffect(() => {
    if (isLoading) {
      // Prevent scrolling on all screen sizes
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '0';
      document.body.style.left = '0';
    } else {
      document.documentElement.style.overflow = 'unset';
      document.documentElement.style.height = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
      document.body.style.top = 'unset';
      document.body.style.left = 'unset';
    }
    
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.documentElement.style.height = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
      document.body.style.top = 'unset';
      document.body.style.left = 'unset';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
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
