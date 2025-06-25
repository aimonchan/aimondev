// src/app/(components)/sections/ServicesSection.jsx

// This component can be a Server Component if it doesn't have client-side interactivity
// other than what AOS provides (which is initialized globally or in a ClientLibraries component).

export default function ServicesSection() {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
          I offer a range of web development services designed to bring your digital vision to life. From initial concept and strategy to development, deployment, and ongoing support, I'm dedicated to building robust, scalable, and user-friendly web solutions tailored to your unique needs.
        </p>
      </div>{/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
            <div>
              {/* If service-details.html becomes a page like /services/custom-web-app, use <Link> */}
              <h4 className="title"><a href="#" className="stretched-link">Custom Web Application Development</a></h4>
              <p className="description" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
                Building tailor-made web applications from scratch, designed to meet your specific business requirements, streamline operations, and provide unique user experiences. I handle everything from database design to front-end interactivity.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Front-End Development</a></h4>
              <p className="description" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
                Crafting responsive, accessible, and engaging user interfaces using modern HTML, CSS, and JavaScript frameworks. I focus on creating intuitive and visually appealing experiences that work seamlessly across all devices.
              </p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Back-End & API Development</a></h4>
              <p className="description" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
                Developing robust server-side logic, secure APIs, and efficient database solutions to power your web applications. I work with technologies like Node.js to ensure scalability and reliability.
              </p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><i className="bi bi-binoculars"></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">CMS Development & Customization</a></h4>
              <p className="description" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
                Developing and customizing websites using Content Management Systems like WordPress or headless CMS solutions, enabling easy content updates and scalable platforms.
              </p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><i className="bi bi-brightness-high"></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Website Maintenance & Support</a></h4>
              <p className="description" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
                Providing ongoing support, security updates, performance optimization, and bug fixes to ensure your website or application remains secure, up-to-date, and performs optimally long after launch.
              </p>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Technical Consultation & Strategy</a></h4>
              <p className="description" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
                Offering expert advice on technology stacks, architectural best practices, project feasibility, and digital strategy to help you make informed decisions and set your project up for success.
              </p>
            </div>
          </div>{/* End Service Item */}
        </div>
      </div>
    </section>
  );
}