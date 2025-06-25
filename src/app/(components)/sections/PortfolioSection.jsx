// src/app/(components)/sections/PortfolioSection.jsx
'use client';
import Image from 'next/image';
import Link from 'next/link'; // For "More Details" link
import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import imagesLoaded from 'imagesloaded';

const portfolioItemsData = [ // Replace with your actual data source later
  { id: 1, filter: 'app', image: '/images/app-1.png', title: 'App 1', description: 'Lorem ipsum...', galleryImage: '/images/app-1.png', detailsLink: '/portfolio-details' },
  { id: 2, filter: 'product', image: '/images/product-1.jpg', title: 'Product 1', description: 'Lorem ipsum...', galleryImage: '/images/product-1.jpg', detailsLink: '/portfolio-details' },
  { id: 3, filter: 'branding', image: '/images/branding-1.jpg', title: 'Branding 1', description: 'Lorem ipsum...', galleryImage: '/images/branding-1.jpg', detailsLink: '/portfolio-details' },
  { id: 4, filter: 'books', image: '/images/books-1.jpg', title: 'Books 1', description: 'Lorem ipsum...', galleryImage: '/images/books-1.jpg', detailsLink: '/portfolio-details' },
  { id: 5, filter: 'app', image: '/images/app-2.png', title: 'App 2', description: 'Lorem ipsum...', galleryImage: '/images/app-2.png', detailsLink: '/portfolio-details' },
  // ... Add all your portfolio items
];


export default function PortfolioSection() {
  const isotopeContainerRef = useRef(null);
  const isotopeInstanceRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('*');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) {
      setLightbox(GLightbox({ selector: '.glightbox' }));
    }
    // Refresh lightbox if items change or on filter,
    // though usually selector-based GLightbox handles dynamic content well.
    // if (lightbox) lightbox.reload(); // Might be needed if content is heavily dynamic
  }, [portfolioItemsData, activeFilter, lightbox]);


  useEffect(() => {
    if (isotopeContainerRef.current && portfolioItemsData.length > 0) {
      const imgLoad = imagesLoaded(isotopeContainerRef.current);
      imgLoad.on('always', () => {
        if (isotopeInstanceRef.current) {
          isotopeInstanceRef.current.destroy();
        }
        isotopeInstanceRef.current = new Isotope(isotopeContainerRef.current, {
          itemSelector: '.portfolio-item',
          layoutMode: 'masonry', // as per your HTML
          filter: activeFilter,
        });
      });
    }
    return () => isotopeInstanceRef.current?.destroy();
  }, [portfolioItemsData]); // Re-init Isotope if data changes


  const handleFilter = (filter) => {
    setActiveFilter(filter);
    isotopeInstanceRef.current?.arrange({ filter: filter });
  };


  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p style={{ textAlign: 'justify', textJustify: 'inter-character' }}>I believe great work speaks for itself...</p>
      </div>
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li onClick={() => handleFilter('*')} className={activeFilter === '*' ? 'filter-active' : ''}>All</li>
            <li onClick={() => handleFilter('.filter-app')} className={activeFilter === '.filter-app' ? 'filter-active' : ''}>App</li>
            <li onClick={() => handleFilter('.filter-product')} className={activeFilter === '.filter-product' ? 'filter-active' : ''}>Product</li>
            <li onClick={() => handleFilter('.filter-branding')} className={activeFilter === '.filter-branding' ? 'filter-active' : ''}>Branding</li>
            <li onClick={() => handleFilter('.filter-books')} className={activeFilter === '.filter-books' ? 'filter-active' : ''}>Books</li>
          </ul>
          <div ref={isotopeContainerRef} className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItemsData.map(item => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.filter}`}>
                <div className="portfolio-content h-100">
                  <Image src={item.image} alt={item.title} width={400} height={300} className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: 'auto' }}/>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.galleryImage} title={item.title} data-gallery={`portfolio-gallery-${item.filter}`} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <Link href={item.detailsLink} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}