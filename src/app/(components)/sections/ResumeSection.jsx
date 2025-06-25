// src/app/(components)/sections/ResumeSection.jsx

// This component can be a Server Component if it doesn't have client-side interactivity
// other than what AOS provides (which is initialized globally or in a ClientLibraries component).
// If you add client-side state or effects directly within this component later,
// you would add 'use client'; at the top.

export default function ResumeSection() {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Below you'll find a detailed overview of my professional journey, skills, and educational background. I'm passionate about creating impactful design solutions.
        </p>
      </div>{/* End Section Title */}

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Min Ai Mon Chan</h4>
              <p><em>Innovative and deadline-driven Web Developer with 3+ years of experience designing and developing user-centered website/web app from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Chiang Mai, Thailand</li>
                <li>(+959) 95 6600 281</li>
                <li>contact@aimondev.site</li>
              </ul>
            </div>{/* End Resume Item */}

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Arts in English</h4>
              <h5>2011 - 2015</h5>
              <p><em>Dagon University, Myanmar</em></p>
              <p>This degree provided a strong foundation in understanding complex systems (of language and narrative), developing clear communication, and adapting to diverse intellectual challenges – skills I've found invaluable in my technical career.</p>
            </div>{/* End Resume Item */}

            <div className="resume-item">
              <h4>Certificate in Professional Web Developer</h4>
              <h5>2010 - 2011</h5>
              <p><em>Fairway Technology, Yangon, Myanmar</em></p>
              <p>This intensive program provided a strong foundation in core web development technologies, including HTML, CSS, and JavaScript, with a focus on practical application and building standards-compliant websites.</p>
            </div>{/* End Resume Item */}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Lead Full-Stack Developer</h4>
              <h5>2019 - Present</h5>
              <p><em>WebnBot, New York, NY </em></p>
              <ul>
                <li>Spearheaded the design, development, and deployment of scalable web applications, taking features from concept through to production.</li>
                <li>Mentored and led a team of 7 developers, delegating tasks, conducting code reviews, and providing technical guidance on best practices and project architecture.</li>
                <li>Ensured high standards of code quality, performance, and reliability through rigorous code reviews, automated testing strategies, and CI/CD pipeline management.</li>
                <li>Introduced and integrated Docker and Kubernetes, improving deployment efficiency by 30% and enhancing application scalability.</li>
              </ul>
            </div>{/* End Resume Item */}

            <div className="resume-item">
              <h4>Web Developer</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed and maintained responsive websites and landing pages for diverse client marketing campaigns, utilizing HTML, CSS, and JavaScript.</li>
                <li>Successfully managed and delivered on multiple (up to 5) concurrent web development tasks and smaller projects under tight deadlines.</li>
                <li>Collaborated with project managers and designers to translate client needs into technical specifications and recommend appropriate web technologies.</li>
                <li>Prepared technical documentation for web projects and presented development progress or feature demos to internal teams.</li>
              </ul>
            </div>{/* End Resume Item */}
          </div>
        </div>
      </div>
    </section>
  );
}