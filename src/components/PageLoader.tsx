import { useEffect, useState } from 'react';
import './PageLoader.css';
import { getAssetPath } from '../utils/paths';

interface PageLoaderProps {
  isLoading: boolean;
}

function PageLoader({ isLoading }: PageLoaderProps) {
  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <div className="page-loader-container">
        <img
          src={getAssetPath('/Steering-Wheel-Loader.png')}
          alt="Loading..."
          className="steering-wheel-loader"
        />
      </div>
    </div>
  );
}

export default PageLoader;
