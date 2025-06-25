// src/app/(components)/sections/TestimonialsSection.jsx
'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import modules you need

// Swiper styles are imported in layout.jsx or globals.css
// Make sure `swiper-bundle.min.css` or individual module CSS is included.

const testimonialsData = [
  { id: 1, text: "Proin iaculis purus...", name: "Saul Goodman", role: "Ceo & Founder", image: "/images/testimonials-1.jpg" },
  { id: 2, text: "Export tempor illum...", name: "Sara Wilsson", role: "Designer", image: "/images/testimonials-2.jpg" },
  { id: 3, text: "Export tempor illum...", name: "Sara Wilsson", role: "Designer", image: "/images/testimonials-3.jpg" },
  { id: 4, text: "Export tempor illum...", name: "Sara Wilsson", role: "Designer", image: "/images/testimonials-4.jpg" },
  { id: 5, text: "Export tempor illum...", name: "Sara Wilsson", role: "Designer", image: "/images/testimonials-5.jpg" },
  // ... more testimonials
];

export default function TestimonialsSection() {
  const swiperConfig = { // From your HTML's script tag
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto", // Can be tricky, often better to use breakpoints for numbers
    pagination: {
      el: ".swiper-pagination-testimonials", // Unique class for this swiper's pagination
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 40 },
      1200: { slidesPerView: 3, spaceBetween: 20 } // Adjusted spaceBetween
    }
  };

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Client satisfaction is my top priority...</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={swiperConfig.loop}
          speed={swiperConfig.speed}
          autoplay={swiperConfig.autoplay}
          pagination={swiperConfig.pagination}
          breakpoints={swiperConfig.breakpoints}
          // slidesPerView={swiperConfig.slidesPerView} // Usually handled by breakpoints
        >
          {testimonialsData.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <Image src={testimonial.image} className="testimonial-img" alt={testimonial.name} width={90} height={90} />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination swiper-pagination-testimonials"></div> {/* Custom class */}
        </Swiper>
      </div>
    </section>
  );
}