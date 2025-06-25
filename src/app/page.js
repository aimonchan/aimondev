// import HeroSection from './(components)/sections/HeroSection';
// import AboutSection from './(components)/sections/AboutSection';
// import StatsSection from './(components)/sections/StatsSection';
// import SkillsSection from './(components)/sections/SkillsSection';
// import ResumeSection from './(components)/sections/ResumeSection';
// import PortfolioSection from './(components)/sections/PortfolioSection';
// import ServicesSection from './(components)/sections/ServicesSection';

// import ContactSection from './(components)/sections/ContactSection';

import dynamic from 'next/dynamic';

// Import other sections normally if they are SSR-safe
import HeroSection from './(components)/sections/HeroSection';
import AboutSection from './(components)/sections/AboutSection';
// import SkillsSection from './(components)/sections/SkillsSection'; // Also check this if it uses problematic libs
// ... other safe imports ...

// Dynamically import StatsSection and disable SSR for it
// const DynamicStatsSection = dynamic(
//   () => import('./(components)/sections/StatsSection'),
//   {
//     ssr: false, // This is the key!
//     loading: () => <p>Loading stats...</p> // Optional: loading state
//   }
// );

// ... other section imports ...
import PortfolioSection from './(components)/sections/PortfolioSection'; // This also uses client libs, might need dynamic import too
import ServicesSection from './(components)/sections/ServicesSection';
import TestimonialsSection from './(components)/sections/TestimonialsSection'; // Swiper might need this too if not careful
import ContactSection from './(components)/sections/ContactSection';
import SkillsSection from './(components)/sections/SkillsSection'; // Assuming this is now SSR-safe
import ResumeSection from './(components)/sections/ResumeSection';


// Import the client component wrapper
import ClientSectionLoader from './(components)/ClientSectionLoader';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection /> {/* If SkillsSection is safe or also needs dynamic loading, handle accordingly */}
      <ResumeSection />
      <ServicesSection />
      <ContactSection />

      {/* Use the ClientSectionLoader for sections that need ssr:false */}
      {/* Pass props to tell it which sections to load, or modify it to always load them */}
      <ClientSectionLoader
        loadStats={true}
        loadPortfolio={true}  // If PortfolioSection also needs ssr:false
        loadTestimonials={true} // If TestimonialsSection also needs ssr:false
      />
    </>
  );
}