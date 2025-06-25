// src/app/(components)/sections/HeroSection.jsx
'use client'; // Typed.js requires client-side execution

import Image from 'next/image';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const typedEl = useRef(null);

  useEffect(() => {
    if (typedEl.current) {
      const typed = new Typed(typedEl.current, {
        strings: ["Web Designer/Developer", "AI Agent Developer", "Mobile App Developer"],
        typeSpeed: 70, // Adjust as needed
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        smartBackspace: true,
      });
      return () => typed.destroy(); // Cleanup on unmount
    }
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      {/* For background images, especially full-bleed ones,
          using a regular <img> with object-fit or CSS background-image might be easier
          than next/image if precise sizing for optimization is tricky.
          Here, assuming CSS will handle its positioning and fade-in via AOS.
      */}
      <Image src="/images/hero-bg1.webp" width={400} height={400} className="img-fluid" alt="Hero background" data-aos="fade-in" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Ai Mon</h2>
        <p>I'm <span ref={typedEl}></span></p>
      </div>
    </section>
  );
}