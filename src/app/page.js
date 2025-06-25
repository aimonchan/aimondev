import HeroSection from './(components)/sections/HeroSection';
// import AboutSection from './(components)/sections/AboutSection';
// import StatsSection from './(components)/sections/StatsSection';
// import SkillsSection from './(components)/sections/SkillsSection';
// import ResumeSection from './(components)/sections/ResumeSection';
// import PortfolioSection from './(components)/sections/PortfolioSection';
// import ServicesSection from './(components)/sections/ServicesSection';
// import TestimonialsSection from './(components)/sections/TestimonialsSection';
// import ContactSection from './(components)/sections/ContactSection';

// This is a Server Component by default, it just assembles other components.
// The individual section components can be Client Components if they need interactivity.
export default function HomePage() {
  return (
    <>
    <h1>Minimal Homepage Test</h1>
      <p>If this builds, the issue is in one of the commented out sections.</p>
      {/* <HeroSection /> */}
      {/* <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection /> */}
    </>
  );
}