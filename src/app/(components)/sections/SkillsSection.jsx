// src/app/(components)/sections/SkillsSection.jsx
'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // This effect handles the animation logic from main.js (skillsAnimation)
  useEffect(() => {
    if (inView) {
      const skilsContent = document.querySelector('.skills-content');
      if (skilsContent) {
         // Add a class to trigger CSS animation or directly manipulate style
         // Assuming your main.css (now in globals.css) has animation for .skills-animation .progress-bar
         skilsContent.classList.add('skills-animation-active'); // You might need to define this class

         // Or, if main.js was directly setting width:
         let progress = skilsContent.querySelectorAll('.progress-bar');
         progress.forEach(el => {
           el.style.width = el.getAttribute('aria-valuenow') + '%';
         });
      }
    }
  }, [inView]);

  return (
    <section id="skills" className="skills section light-background" ref={ref}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p style={{ textAlign: 'justify', textJustify: 'inter-character' }}>I leverage a robust set of modern technologies...</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content"> {/* Removed skills-animation class if handled by JS above */}
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill"><span>NextJS</span> <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {/* ... other skills ... */}
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
            {/* ... other skills ... */}
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