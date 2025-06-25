// src/app/portfolio-details/page.jsx
'use client'; // Swiper needs to be client-side

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Ensure Swiper CSS is loaded (via layout.jsx or globals.css)

// Dummy data - in a real app, you'd fetch this based on a slug or ID
const projectData = {
  title: "Portfolio Details", // Dynamic title can be set via metadata later
  category: "Web design",
  client: "ASU Company",
  projectDate: "01 March, 2020",
  projectURL: "www.example.com",
  descriptionTitle: "Exercitationem repudiandae officiis neque suscipit",
  descriptionText: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
  sliderImages: [
    { id: 1, src: "/images/app-1.png", alt: "App 1" }, // Use correct image paths
    { id: 2, src: "/images/product-1.jpg", alt: "Product 1" },
    { id: 3, src: "/images/branding-1.jpg", alt: "Branding 1" },
    { id: 4, src: "/images/books-1.jpg", alt: "Books 1" },
  ]
};

export default function PortfolioDetailsPage() {
  // Swiper config from your portfolio-details.html
  const swiperConfig = {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto', // For single item display, 1 might be better or handled by CSS
    pagination: {
      el: ".swiper-pagination-details", // Unique class
      type: "bullets",
      clickable: true
    }
  };

  return (
    <> {/* No need for <main> here as it's in RootLayout */}
      <div className="page-title dark-background"> {/* Assuming styles from globals.css */}
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{projectData.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li className="current">Portfolio Details</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper"> {/* Removed init-swiper */}
                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={swiperConfig.loop}
                  speed={swiperConfig.speed}
                  autoplay={swiperConfig.autoplay}
                  slidesPerView={1} // Typically 1 for a details slider
                  pagination={swiperConfig.pagination}
                >
                  {projectData.sliderImages.map(img => (
                    <SwiperSlide key={img.id}>
                      <Image src={img.src} alt={img.alt} width={800} height={600} style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
                    </SwiperSlide>
                  ))}
                   <div className="swiper-pagination swiper-pagination-details"></div>
                </Swiper>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: {projectData.category}</li>
                  <li><strong>Client</strong>: {projectData.client}</li>
                  <li><strong>Project date</strong>: {projectData.projectDate}</li>
                  <li><strong>Project URL</strong>: <a href={`http://${projectData.projectURL}`} target="_blank" rel="noopener noreferrer">{projectData.projectURL}</a></li>
                </ul>
              </div>
              <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                <h2>{projectData.descriptionTitle}</h2>
                <p>{projectData.descriptionText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}