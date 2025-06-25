// src/app/(components)/ClientLibraries.jsx
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
// Import other global libraries here if needed, e.g., for Waypoints or PureCounter global setup

export default function ClientLibraries() {
  useEffect(() => {
    // AOS Initialization
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Typically true for portfolio sites
      mirror: false
    });

    // Other global library initializations can go here
    // e.g. if PureCounter needed a global setup, though it's often per-element

  }, []);

  return null; // This component doesn't render anything itself
}