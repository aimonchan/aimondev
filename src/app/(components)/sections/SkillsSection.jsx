// // src/app/(components)/sections/SkillsSection.jsx
// 'use client';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// export default function SkillsSection() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   // This effect handles the animation logic from main.js (skillsAnimation)
//   useEffect(() => {
//     if (inView) {
//       const skilsContent = document.querySelector('.skills-content');
//       if (skilsContent) {
//          // Add a class to trigger CSS animation or directly manipulate style
//          // Assuming your main.css (now in globals.css) has animation for .skills-animation .progress-bar
//          skilsContent.classList.add('skills-animation-active'); // You might need to define this class

//          // Or, if main.js was directly setting width:
//          let progress = skilsContent.querySelectorAll('.progress-bar');
//          progress.forEach(el => {
//            el.style.width = el.getAttribute('aria-valuenow') + '%';
//          });
//       }
//     }
//   }, [inView]);

//   return (
//     <section id="skills" className="skills section light-background" ref={ref}>
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Skills</h2>
//         <p style={{ textAlign: 'justify', textJustify: 'inter-character' }}>I leverage a robust set of modern technologies...</p>
//       </div>
//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row skills-content"> {/* Removed skills-animation class if handled by JS above */}
//           <div className="col-lg-6">
//             <div className="progress">
//               <span className="skill"><span>NextJS</span> <i className="val">100%</i></span>
//               <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
//               </div>
//             </div>
//             {/* ... other skills ... */}
//             <div className="progress">
//                 <span className="skill"><span>Tailwind CSS</span> <i className="val">90%</i></span>
//                 <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
//                 </div>
//             </div>
//             <div className="progress">
//                 <span className="skill"><span>React Native</span> <i className="val">75%</i></span>
//                 <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
//                 </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             {/* ... other skills ... */}
//             <div className="progress">
//                 <span className="skill"><span>Python</span> <i className="val">80%</i></span>
//                 <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
//                 </div>
//             </div>
//             <div className="progress">
//                 <span className="skill"><span>Django</span> <i className="val">90%</i></span>
//                 <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
//                 </div>
//             </div>
//             <div className="progress">
//                 <span className="skill"><span>Figma</span> <i className="val">55%</i></span>
//                 <div className="progress-bar-wrap">
//                 <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/app/(components)/sections/SkillsSection.jsx
'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once when it comes into view
    threshold: 0.2,    // Trigger when 20% of the element is visible
    // initialInView: false, // Default is usually fine
  });

  // This effect handles the animation logic for the progress bars
  useEffect(() => {
    // GUARD: Ensure we are in a browser environment AND the section is in view
    if (inView && typeof document !== 'undefined') {
      const skillsContent = document.querySelector('.skills-content'); // Note: class selector, ensure it's unique enough or use an ID
      if (skillsContent) {
        // Option A: Add a class to trigger CSS animation (if your CSS is set up for this)
        // skillsContent.classList.add('skills-animation-active');

        // Option B: Directly set the width of progress bars (as per your original logic)
        // This is often how the iPortfolio template's main.js handles it.
        let progressBars = skillsContent.querySelectorAll('.progress-bar');
        progressBars.forEach(el => {
          const valueNow = el.getAttribute('aria-valuenow');
          if (valueNow) { // Ensure aria-valuenow exists
            el.style.width = valueNow + '%';
          }
        });
      }
    }
  }, [inView]); // Effect runs when `inView` changes

  return (
    <section id="skills" className="skills section light-background" ref={ref}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
          I leverage a robust set of modern technologies to build efficient, scalable, and user-friendly web applications. Below is a snapshot of my core competencies and current proficiency levels:
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/*
          The original template might have had a class like 'skills-animation' on this div,
          which main.js would then use to trigger the animation.
          If your CSS handles the transition on .progress-bar width, this JS is enough.
          If CSS relies on a parent class like .skills-animation-active, you'd add that
          conditionally or in the useEffect.
        */}
        <div className="row skills-content"> {/* Ensure this class is on the correct parent of .progress-bar elements */}
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill"><span>NextJS</span> <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill"><span>Tailwind CSS</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill"><span>React Native</span> <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill"><span>Python</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill"><span>Django</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill"><span>Figma</span> <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}