// // src/app/(components)/ScrollTop.jsx
// 'use client';
// import { useState, useEffect } from 'react';

// export default function ScrollTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.scrollY > 100) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = (e) => {
//     e.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     window.addEventListener('load', toggleVisibility); // Check on load too
//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//       window.removeEventListener('load', toggleVisibility);
//     };
//   }, []);

//   return (
//     <a
//       href="#"
//       id="scroll-top"
//       className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
//       onClick={scrollToTop}
//     >
//       <i className="bi bi-arrow-up-short"></i>
//     </a>
//   );
// }
// src/app/(components)/ScrollTop.jsx
'use client';
import { useState, useEffect, useCallback } from 'react'; // Added useCallback

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Memoize toggleVisibility because it's used in useEffect's event listener
  // and we want to ensure we're adding/removing the exact same function instance.
  // It doesn't depend on any props or state from outside its own scope here.
  const toggleVisibility = useCallback(() => {
    // This function will only be called in the browser due to the useEffect guard
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []); // Empty dependency array, as it has no external dependencies

  useEffect(() => {
    // GUARD: Only run this effect in the browser environment
    if (typeof window === 'undefined') {
      return; // Exit if not in a browser
    }

    // Call it once on mount to set initial state based on current scroll position
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('load', toggleVisibility); // Check on load too

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('load', toggleVisibility);
    };
  }, [toggleVisibility]); // useEffect depends on the memoized toggleVisibility function

  const scrollToTop = (e) => {
    e.preventDefault();
    // GUARD: Ensure window exists before trying to scroll
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // Conditionally render the component or control visibility via style
  // to avoid issues during server rendering if isVisible is true initially.
  // Using style={{ display: ... }} is often safer for initial render.
  if (typeof window === 'undefined' && !isVisible) {
      // During SSR, if we don't know visibility yet, better to not render or render hidden
      // Or simply let the CSS handle initial hidden state and rely on client-side update.
      // For this component, it's usually initially hidden by CSS anyway, so rendering it
      // might be fine, and isVisible will be false on server.
  }


  return (
    <a
      href="#" // Using "#" is fine for a link that's handled by JS
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
      // You can also control display via inline style for more explicit show/hide
      // based on client-side state, which can be safer than relying purely on class toggles
      // for elements that should definitely not be visible server-side if their state dictates it.
      // style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}