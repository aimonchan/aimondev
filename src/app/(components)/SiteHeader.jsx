'use client';

import Link from 'next/link';
import Image from 'next/image';
// import { usePathname } from 'next/navigation'; // Keep if used for other things
import { useState, useEffect } from 'react';

export default function SiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const pathname = usePathname();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prevState => !prevState);
    // We no longer need to toggle a class on document.body for *this specific* header visibility.
    // However, you might still use a body class for an overlay or to prevent body scroll if needed.
    // document.body.classList.toggle('some-other-effect-class');
  };

  // Active link highlighting for single-page scroll
  useEffect(() => {
    const navmenu = document.querySelector('#navmenu');
    if (!navmenu) return;

    const navLinks = navmenu.querySelectorAll('ul li a');

    const setActiveLink = () => {
      let Scurrent = window.scrollY + 200;
      navLinks.forEach(link => {
        if (!link.hash) return;
        let section = document.querySelector(link.hash);
        if (!section) return;
        if (Scurrent >= section.offsetTop && Scurrent <= (section.offsetTop + section.offsetHeight)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    if (window.location.hash) {
        let initialLink = navmenu.querySelector(`a[href="${window.location.hash}"]`);
        if (initialLink) initialLink.classList.add('active');
    } else {
        let heroLink = navmenu.querySelector('a[href="#hero"]');
        if (heroLink) heroLink.classList.add('active');
    }

    window.addEventListener('load', setActiveLink);
    document.addEventListener('scroll', setActiveLink);

    // When a nav link is clicked inside the mobile header, close the header
    const handleNavLinkClick = () => {
      if (isMobileNavOpen) { // Check React state
        toggleMobileNav();
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      window.removeEventListener('load', setActiveLink);
      document.removeEventListener('scroll', setActiveLink);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
    // Add isMobileNavOpen and toggleMobileNav as dependencies
    // because handleNavLinkClick uses them.
  }, [isMobileNavOpen, toggleMobileNav]);


  // Handle dropdowns
  useEffect(() => {
    const dropDownToggles = document.querySelectorAll('#navmenu .toggle-dropdown'); // More specific selector
    const handleClick = function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        // Ensure nextElementSibling exists and is the dropdown menu
        const dropdownMenu = this.parentNode.nextElementSibling;
        if (dropdownMenu && dropdownMenu.tagName === 'UL') {
            dropdownMenu.classList.toggle('dropdown-active');
        }
        e.stopImmediatePropagation();
    };

    dropDownToggles.forEach(toggle => {
      toggle.addEventListener('click', handleClick);
    });

    return () => {
        dropDownToggles.forEach(toggle => {
            toggle.removeEventListener('click', handleClick);
        });
    };
  }, []);


  return (
    <header
      id="header"
      // Conditionally add the 'header-show' class
      className={`header dark-background d-flex flex-column ${isMobileNavOpen ? 'header-show' : ''}`}
    >
      {/* The toggle button is now part of the header that slides.
          Its own CSS keeps it fixed on the viewport. */}
      <button
        type="button"
        onClick={toggleMobileNav}
        // The .header .header-toggle CSS will position this button
        className={`header-toggle d-xl-none ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
        aria-expanded={isMobileNavOpen}
        aria-controls="navmenu" // Or aria-controls="header" if it controls the whole header
      >
        <span className="visually-hidden">Toggle navigation</span>
      </button>

      {/* Content of the header (profile, logo, nav) that slides in/out */}
      <div className="profile-img">
        <Image src="/images/my-profile-img.webp" alt="My Profile" width={120} height={120} className="img-fluid rounded-circle" priority />
      </div>

      <Link href="/" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Ai Mon</h1>
      </Link>

      <div className="social-links text-center">
        <a href="https://x.com/sherwin_J_willm" className="twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://www.linkedin.com/in/min-ai-mon-chan-0148892a5/" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
        <a href="#" className="linkedin"> <i className="bi bi-github"></i></a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero"><i className="bi bi-house navicon"></i>Home</a></li>
          <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
          <li className="dropdown">
            <a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown">
                <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
            </ul>
          </li>
          <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}