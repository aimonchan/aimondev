// src/app/(components)/ClientSectionLoader.jsx
'use client'; // VERY IMPORTANT: This makes it a Client Component

import dynamic from 'next/dynamic';
import { Fragment } from 'react'; // Or use <> </>

// Dynamically import StatsSection and disable SSR for it
const DynamicStatsSection = dynamic(
  () => import('./sections/StatsSection'), // Adjust path if StatsSection is in a subfolder
  {
    ssr: false,
    loading: () => <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading stats...</p></div> // Example loading UI
  }
);

// You can add other dynamically loaded sections here too if they cause SSR issues
const DynamicPortfolioSection = dynamic(
  () => import('./sections/PortfolioSection'),
  {
    ssr: false,
    loading: () => <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading portfolio...</p></div>
  }
);

const DynamicTestimonialsSection = dynamic(
  () => import('./sections/TestimonialsSection'),
  {
    ssr: false,
    loading: () => <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading testimonials...</p></div>
  }
);


// This component will decide which sections to render
// You can pass props to it if needed, e.g., to conditionally render sections
export default function ClientSectionLoader({ loadStats, loadPortfolio, loadTestimonials }) {
  return (
    <Fragment> {/* Or use <> </> */}
      {loadStats && <DynamicStatsSection />}
      {loadPortfolio && <DynamicPortfolioSection />}
      {loadTestimonials && <DynamicTestimonialsSection />}
      {/* Add other dynamically loaded sections here */}
    </Fragment>
  );
}

// OR, if you always want to load them:
// export default function ClientSectionLoader() {
//   return (
//     <>
//       <DynamicStatsSection />
//       <DynamicPortfolioSection />
//       <DynamicTestimonialsSection />
//     </>
//   );
// }