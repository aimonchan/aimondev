// // src/app/(components)/sections/StatsSection.jsx
// 'use client';
// import { useEffect } from 'react';
// import PureCounter from '@srexi/purecounterjs'; // Ensure this is the correct import after install
// import { useInView } from 'react-intersection-observer';


// export default function StatsSection() {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Only trigger once
//     threshold: 0.1,    // Trigger when 10% of the element is visible
//   });

//   useEffect(() => {
//     if (inView) {
//       // Initialize PureCounter when the section is in view
//       // This relies on elements having the 'purecounter' class and data attributes
//       new PureCounter();
//     }
//   }, [inView]);

//   return (
//     <section id="stats" className="stats section" ref={ref}>
//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row gy-4">
//           <div className="col-lg-3 col-md-6">
//             <div className="stats-item">
//               <i className="bi bi-emoji-smile"></i>
//               <span data-purecounter-start="0" data-purecounter-end="52" data-purecounter-duration="1" className="purecounter"></span>
//               <p><strong>Happy Clients</strong> <span>Delivering on client visions.</span></p>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div className="stats-item">
//               <i className="bi bi-journal-richtext"></i>
//               <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" className="purecounter"></span>
//               <p><strong>Projects</strong> <span>Successfully delivered.</span></p>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div className="stats-item">
//               <i className="bi bi-headset"></i>
//               <span data-purecounter-start="0" data-purecounter-end="1624" data-purecounter-duration="1" className="purecounter"></span>
//               <p><strong>Hours Of Support</strong> <span>Dedicated to ongoing success.</span></p>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div className="stats-item">
//               <i className="bi bi-people"></i>
//               <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
//               <p><strong>Retainer Client</strong> <span>Fostering long-term trust.</span></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/app/(components)/sections/StatsSection.jsx
'use client';
import { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1,    // Trigger when 10% of the element is visible
    // initialInView: false, // Explicitly false initially if needed, though default is usually fine
  });

  useEffect(() => {
    // GUARD: Ensure we are in a browser environment AND the section is in view
    // While `if (inView)` alone often suffices because `inView` will be false on server,
    // this explicit check is more robust against any library internals.
    if (inView && typeof document !== 'undefined') {
      // Initialize PureCounter when the section is in view on the client
      // PureCounter finds elements with class 'purecounter' and data attributes.
      new PureCounter();
    }
  }, [inView]); // Effect runs when `inView` changes

  return (
    <section id="stats" className="stats section" ref={ref}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              {/* The initial '0' (or empty string) is a placeholder. PureCounter will fill it. */}
              <span data-purecounter-start="0" data-purecounter-end="52" data-purecounter-duration="1" className="purecounter">0</span>
              <p><strong>Happy Clients</strong> <span>Delivering on client visions.</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" className="purecounter">0</span>
              <p><strong>Projects</strong> <span>Successfully delivered.</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1624" data-purecounter-duration="1" className="purecounter">0</span>
              <p><strong>Hours Of Support</strong> <span>Dedicated to ongoing success.</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">0</span>
              <p><strong>Retainer Client</strong> <span>Fostering long-term trust.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}