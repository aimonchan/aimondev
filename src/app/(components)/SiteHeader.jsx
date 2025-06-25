// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// // import { usePathname } from 'next/navigation'; // Keep if used for other things
// import { useState, useEffect } from 'react';

// export default function SiteHeader() {
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
//   // const pathname = usePathname();

//   const toggleMobileNav = () => {
//     setIsMobileNavOpen(prevState => !prevState);
//     // We no longer need to toggle a class on document.body for *this specific* header visibility.
//     // However, you might still use a body class for an overlay or to prevent body scroll if needed.
//     // document.body.classList.toggle('some-other-effect-class');
//   };

//   // Active link highlighting for single-page scroll
//   useEffect(() => {
//     const navmenu = document.querySelector('#navmenu');
//     if (!navmenu) return;

//     const navLinks = navmenu.querySelectorAll('ul li a');

//     const setActiveLink = () => {
//       let Scurrent = window.scrollY + 200;
//       navLinks.forEach(link => {
//         if (!link.hash) return;
//         let section = document.querySelector(link.hash);
//         if (!section) return;
//         if (Scurrent >= section.offsetTop && Scurrent <= (section.offsetTop + section.offsetHeight)) {
//           link.classList.add('active');
//         } else {
//           link.classList.remove('active');
//         }
//       });
//     };

//     if (window.location.hash) {
//         let initialLink = navmenu.querySelector(`a[href="${window.location.hash}"]`);
//         if (initialLink) initialLink.classList.add('active');
//     } else {
//         let heroLink = navmenu.querySelector('a[href="#hero"]');
//         if (heroLink) heroLink.classList.add('active');
//     }

//     window.addEventListener('load', setActiveLink);
//     document.addEventListener('scroll', setActiveLink);

//     // When a nav link is clicked inside the mobile header, close the header
//     const handleNavLinkClick = () => {
//       if (isMobileNavOpen) { // Check React state
//         toggleMobileNav();
//       }
//     };

//     navLinks.forEach(link => {
//       link.addEventListener('click', handleNavLinkClick);
//     });

//     return () => {
//       window.removeEventListener('load', setActiveLink);
//       document.removeEventListener('scroll', setActiveLink);
//       navLinks.forEach(link => {
//         link.removeEventListener('click', handleNavLinkClick);
//       });
//     };
//     // Add isMobileNavOpen and toggleMobileNav as dependencies
//     // because handleNavLinkClick uses them.
//   }, [isMobileNavOpen, toggleMobileNav]);


//   // Handle dropdowns
//   useEffect(() => {
//     const dropDownToggles = document.querySelectorAll('#navmenu .toggle-dropdown'); // More specific selector
//     const handleClick = function (e) {
//         e.preventDefault();
//         this.parentNode.classList.toggle('active');
//         // Ensure nextElementSibling exists and is the dropdown menu
//         const dropdownMenu = this.parentNode.nextElementSibling;
//         if (dropdownMenu && dropdownMenu.tagName === 'UL') {
//             dropdownMenu.classList.toggle('dropdown-active');
//         }
//         e.stopImmediatePropagation();
//     };

//     dropDownToggles.forEach(toggle => {
//       toggle.addEventListener('click', handleClick);
//     });

//     return () => {
//         dropDownToggles.forEach(toggle => {
//             toggle.removeEventListener('click', handleClick);
//         });
//     };
//   }, []);


//   return (
//     <header
//       id="header"
//       // Conditionally add the 'header-show' class
//       className={`header dark-background d-flex flex-column ${isMobileNavOpen ? 'header-show' : ''}`}
//     >
//       {/* The toggle button is now part of the header that slides.
//           Its own CSS keeps it fixed on the viewport. */}
//       <button
//         type="button"
//         onClick={toggleMobileNav}
//         // The .header .header-toggle CSS will position this button
//         className={`header-toggle d-xl-none ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
//         aria-expanded={isMobileNavOpen}
//         aria-controls="navmenu" // Or aria-controls="header" if it controls the whole header
//       >
//         <span className="visually-hidden">Toggle navigation</span>
//       </button>

//       {/* Content of the header (profile, logo, nav) that slides in/out */}
//       <div className="profile-img">
//         <Image src="/images/my-profile-img.webp" alt="My Profile" width={120} height={120} className="img-fluid rounded-circle" priority />
//       </div>

//       <Link href="/" className="logo d-flex align-items-center justify-content-center">
//         <h1 className="sitename">Ai Mon</h1>
//       </Link>

//       <div className="social-links text-center">
//         <a href="https://x.com/sherwin_J_willm" className="twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
//         <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
//         <a href="https://www.linkedin.com/in/min-ai-mon-chan-0148892a5/" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
//         <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
//         <a href="#" className="linkedin"> <i className="bi bi-github"></i></a>
//       </div>

//       <nav id="navmenu" className="navmenu">
//         <ul>
//           <li><a href="#hero"><i className="bi bi-house navicon"></i>Home</a></li>
//           <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
//           <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
//           <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
//           <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
//           <li className="dropdown">
//             <a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
//             <ul>
//               <li><a href="#">Dropdown 1</a></li>
//               <li className="dropdown">
//                 <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
//                 <ul>
//                   <li><a href="#">Deep Dropdown 1</a></li>
//                   <li><a href="#">Deep Dropdown 2</a></li>
//                 </ul>
//               </li>
//               <li><a href="#">Dropdown 2</a></li>
//             </ul>
//           </li>
//           <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// src/app/(components)/SiteHeader.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
// import { usePathname } from 'next/navigation'; // Only if you need it for multi-page active state, not used in this version for single-page scroll
import { useState, useEffect, useCallback } from 'react';

export default function SiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Memoize toggleMobileNav to stabilize its reference for useEffect dependency arrays
  // This helps prevent unnecessary re-runs of effects that depend on it.
  const toggleMobileNav = useCallback(() => {
    setIsMobileNavOpen(prevState => !prevState);
    // If you had other global effects tied to the mobile nav state that affect `document.body`
    // (like an overlay or preventing body scroll), you'd handle them here,
    // also guarded with `if (typeof document !== 'undefined')`.
    // For example:
    // if (typeof document !== 'undefined') {
    //   document.body.classList.toggle('no-scroll-while-mobile-nav-open', !isMobileNavOpen);
    // }
  }, []); // Empty dependency array because setIsMobileNavOpen (with functional update) is stable

  // Active link highlighting for single-page scroll
  useEffect(() => {
    // GUARD: Only run this effect in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return; // Exit if not in a browser
    }

    const navmenu = document.querySelector('#navmenu');
    // Ensure navmenu exists before proceeding
    if (!navmenu) {
      // console.warn('SiteHeader: #navmenu element not found.');
      return;
    }

    const navLinks = navmenu.querySelectorAll('ul li a');
    // Ensure navLinks exist
    if (navLinks.length === 0) {
      // console.warn('SiteHeader: No navigation links found in #navmenu.');
      return;
    }

    const setActiveLink = () => {
      let currentScroll = window.scrollY + 200; // Offset for better active state timing

      navLinks.forEach(link => {
        if (!link.hash || link.hash === "#") return; // Ignore links without a valid hash

        try {
          const section = document.querySelector(link.hash);
          if (section) {
            if (currentScroll >= section.offsetTop && currentScroll <= (section.offsetTop + section.offsetHeight)) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        } catch (e) {
          // console.warn(`SiteHeader: Error selecting section for hash "${link.hash}":`, e);
        }
      });
    };

    // Set initial active link on page load
    const setInitialActive = () => {
      navLinks.forEach(nl => nl.classList.remove('active')); // Clear all first
      try {
        if (window.location.hash && window.location.hash !== "#") {
          const initialLink = navmenu.querySelector(`a[href="${window.location.hash}"]`);
          if (initialLink) {
            initialLink.classList.add('active');
          } else { // Fallback if hash doesn't match any link
            const heroLink = navmenu.querySelector('a[href="#hero"]');
            if (heroLink) heroLink.classList.add('active');
          }
        } else {
          const heroLink = navmenu.querySelector('a[href="#hero"]');
          if (heroLink) heroLink.classList.add('active');
        }
      } catch (e) {
        // console.warn('SiteHeader: Error setting initial active link based on hash:', e);
        // Fallback to hero if error occurs
        const heroLink = navmenu.querySelector('a[href="#hero"]');
        if (heroLink) heroLink.classList.add('active');
      }
      setActiveLink(); // Also run setActiveLink on load to ensure correctness
    };

    // Use a slight delay for setInitialActive on 'load' to ensure all elements are ready,
    // especially if there are images affecting layout.
    const handleLoad = () => setTimeout(setInitialActive, 100);

    window.addEventListener('load', handleLoad);
    document.addEventListener('scroll', setActiveLink);

    // When a nav link is clicked inside the mobile header, close the header
    const handleNavLinkClick = (event) => {
      // Only close if it's a hash link for the current page
      if (event.currentTarget.pathname === window.location.pathname && event.currentTarget.hash) {
        if (isMobileNavOpen) {
          toggleMobileNav();
        }
      }
      // For actual page navigation via Next <Link>, this wouldn't be needed as the component would unmount/remount
    };

    navLinks.forEach(link => {
      // Check if it's an internal hash link before adding close listener
      if (link.getAttribute('href')?.startsWith('#')) {
        link.addEventListener('click', handleNavLinkClick);
      }
    });

    // Initial call after setup
    setInitialActive();

    // Cleanup function
    return () => {
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('scroll', setActiveLink);
      navLinks.forEach(link => {
        if (link.getAttribute('href')?.startsWith('#')) {
          link.removeEventListener('click', handleNavLinkClick);
        }
      });
    };
  }, [isMobileNavOpen, toggleMobileNav]); // Dependencies for this effect


  // Handle dropdowns
  useEffect(() => {
    // GUARD: Only run this effect in the browser
    if (typeof document === 'undefined') {
      return; // Exit if not in a browser
    }

    const dropDownToggles = document.querySelectorAll('#navmenu .toggle-dropdown');
    if (dropDownToggles.length === 0) return;

    const handleClick = function (event) { // Using 'function' for 'this' context
      event.preventDefault();
      if (!this.parentNode) return; // Robustness check

      this.parentNode.classList.toggle('active');
      const dropdownMenu = this.parentNode.nextElementSibling;
      if (dropdownMenu && dropdownMenu.tagName === 'UL') {
        dropdownMenu.classList.toggle('dropdown-active');
      }
      event.stopImmediatePropagation();
    };

    dropDownToggles.forEach(toggle => {
      toggle.addEventListener('click', handleClick);
    });

    // Cleanup function
    return () => {
      dropDownToggles.forEach(toggle => {
        toggle.removeEventListener('click', handleClick);
      });
    };
  }, []); // Empty dependency array: runs once on mount (client-side) and cleans up on unmount


  return (
    <header
      id="header"
      // Conditionally add the 'header-show' class based on React state
      className={`header dark-background d-flex flex-column ${isMobileNavOpen ? 'header-show' : ''}`}
    >
      <button
        type="button"
        onClick={toggleMobileNav}
        className={`header-toggle d-xl-none ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
        aria-expanded={isMobileNavOpen}
        aria-controls="navmenu" // Should correspond to the ID of the navigation menu
      >
        <span className="visually-hidden">Toggle navigation</span> {/* For accessibility */}
      </button>

      <div className="profile-img">
        <Image src="/images/my-profile-img.webp" // Assuming .webp as per your last version
               alt="My Profile"
               width={120}
               height={120}
               className="img-fluid rounded-circle"
               priority // Good for LCP if this image is above the fold
        />
      </div>

      <Link href="/" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Ai Mon</h1>
      </Link>

      <div className="social-links text-center">
        <a href="https://x.com/sherwin_J_willm" className="twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook" onClick={(e) => e.preventDefault()}><i className="bi bi-facebook"></i></a> {/* Added onClick preventDefault for placeholder links */}
        <a href="https://www.linkedin.com/in/min-ai-mon-chan-0148892a5/" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="#" className="google-plus" onClick={(e) => e.preventDefault()}><i className="bi bi-skype"></i></a>
        {/* Assuming the last icon was intended to be GitHub based on template structure */}
        <a href="#" className="github" onClick={(e) => e.preventDefault()}><i className="bi bi-github"></i></a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          {/* The 'active' class will be managed by the useEffect hook */}
          <li><a href="#hero"><i className="bi bi-house navicon"></i>Home</a></li>
          <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
          <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Dropdown 1</a></li>
              <li className="dropdown">
                <a href="#" onClick={(e) => e.preventDefault()}><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Deep Dropdown 1</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Deep Dropdown 2</a></li>
                  {/* ... more items */}
                </ul>
              </li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Dropdown 2</a></li>
              {/* ... more items */}
            </ul>
          </li>
          <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}