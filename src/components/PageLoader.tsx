import { useEffect, useState } from 'react';
import './PageLoader.css';
import { getAssetPath } from '../utils/paths';

interface PageLoaderProps {
  isLoading: boolean;
}

function PageLoader({ isLoading }: PageLoaderProps) {
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
