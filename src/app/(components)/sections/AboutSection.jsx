// src/app/(components)/sections/AboutSection.jsx
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p style={{ textAlign: 'justify', textJustify: 'inter-character' }}>Welcome! I'm Ai Mon, a dedicated web developer passionate about creating effective and affordable online presences for businesses and individuals. My goal is to help you establish a strong digital footprint without breaking the bank.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <Image src="/images/my-profile-img.webp" width={400} height={400} className="img-fluid rounded" alt="Profile About" style={{ border: '1px solid #1fc700' }} />
          </div>
          <div className="col-lg-8 content">
            <h2>Web/Mobile Developer & AI Agent Developer</h2>
            <p className="fst-italic py-3" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
              I bridge the gap between design vision and technical execution...
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 December 1992</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.aimondev.site</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+95 95 6600 281</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chiang Mai, Thailand</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>33</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor in Art</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>contact@aimondev.site</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
              My approach is built on collaboration and transparency...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}