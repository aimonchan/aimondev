// src/app/(components)/ScrollTop.jsx
'use client';
import { useState, useEffect } from 'react';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('load', toggleVisibility); // Check on load too
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('load', toggleVisibility);
    };
  }, []);

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}