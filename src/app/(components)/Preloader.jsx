// // src/app/(components)/Preloader.jsx
// 'use client';
// import { useEffect, useState } from 'react';

// export default function Preloader() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsLoading(false);
//     };
//     // Ensure this runs after all content, including images, is loaded.
//     // window.onload is a bit old-school but works for this simple preloader.
//     // For more complex scenarios, you might manage loading state more granularly.
//     if (document.readyState === 'complete') {
//       handleLoad();
//     } else {
//       window.addEventListener('load', handleLoad);
//       return () => window.removeEventListener('load', handleLoad);
//     }
//   }, []);

//   if (!isLoading) return null;

//   return <div id="preloader"></div>;
// }
// src/app/(components)/Preloader.jsx
'use client';
import { useEffect, useState, useCallback } from 'react'; // Added useCallback

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true); // Preloader is visible by default

  // Memoize handleLoad for consistent event listener removal
  const handleLoad = useCallback(() => {
    setIsLoading(false); // Hide preloader
  }, []); // No dependencies, so it's created once

  useEffect(() => {
    // GUARD: Only run this effect in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return; // Exit if not in a browser
    }

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // If not loaded, add an event listener for the 'load' event
      window.addEventListener('load', handleLoad);

      // Cleanup function: remove the event listener when the component unmounts
      // or before the effect re-runs (though it won't re-run with [] deps).
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, [handleLoad]); // Effect depends on the memoized handleLoad function

  // If isLoading is false (page has loaded), render nothing (preloader disappears)
  if (!isLoading) {
    return null;
  }

  // Otherwise, render the preloader div
  return <div id="preloader"></div>;
}