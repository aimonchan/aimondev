// src/app/(components)/Preloader.jsx
'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    // Ensure this runs after all content, including images, is loaded.
    // window.onload is a bit old-school but works for this simple preloader.
    // For more complex scenarios, you might manage loading state more granularly.
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return <div id="preloader"></div>;
}