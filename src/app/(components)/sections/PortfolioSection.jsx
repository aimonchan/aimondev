// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useRef, useState, useCallback } from 'react'; // Added useCallback
// import Isotope from 'isotope-layout'; // This is an ES module import
// import GLightbox from 'glightbox';     // This is an ES module import
// import imagesLoaded from 'imagesloaded'; // This is an ES module import

// // Dummy data (Consider moving this to a separate file or fetching it)
// const portfolioItemsData = [
//   { id: 1, filterClass: 'filter-app', image: '/images/app-1.png', title: 'App 1', description: 'Lorem ipsum...', galleryImage: '/images/app-1.png', detailsLink: '/portfolio-details' },
//   { id: 2, filterClass: 'filter-product', image: '/images/product-1.jpg', title: 'Product 1', description: 'Lorem ipsum...', galleryImage: '/images/product-1.jpg', detailsLink: '/portfolio-details' },
//   { id: 3, filterClass: 'filter-branding', image: '/images/branding-1.jpg', title: 'Branding 1', description: 'Lorem ipsum...', galleryImage: '/images/branding-1.jpg', detailsLink: '/portfolio-details' },
//   { id: 4, filterClass: 'filter-books', image: '/images/books-1.jpg', title: 'Books 1', description: 'Lorem ipsum...', galleryImage: '/images/books-1.jpg', detailsLink: '/portfolio-details' },
//   { id: 5, filterClass: 'filter-app', image: '/images/app-2.png', title: 'App 2', description: 'Lorem ipsum...', galleryImage: '/images/app-2.png', detailsLink: '/portfolio-details' },
//   // ... Add all your portfolio items. Ensure filterClass matches the filter value (e.g., 'filter-app' for filter '.filter-app')
// ];

// export default function PortfolioSection() {
//   const isotopeContainerRef = useRef(null);
//   const isotopeInstanceRef = useRef(null); // To store the Isotope instance
//   const [activeFilter, setActiveFilter] = useState('*'); // For Isotope filtering
//   const [lightboxInstance, setLightboxInstance] = useState(null); // To store GLightbox instance

//   // Effect for GLightbox initialization
//   useEffect(() => {
//     // GUARD: Only run in browser
//     if (typeof window === 'undefined') {
//       return;
//     }

//     // Initialize GLightbox once
//     if (!lightboxInstance) {
//       const newLightbox = GLightbox({
//         selector: '.glightbox', // Selector for images/videos to open in lightbox
//         // ... other GLightbox options if needed
//       });
//       setLightboxInstance(newLightbox);
//     }

//     // GLightbox usually handles dynamically added elements with its selector.
//     // If you face issues with newly filtered items not working with lightbox,
//     // you might need to refresh or rebind it.
//     // Example: if (lightboxInstance) lightboxInstance.reload();
//     // This would typically go in the Isotope effect after items are rearranged.

//     // Cleanup GLightbox instance on component unmount
//     return () => {
//       if (lightboxInstance) {
//         lightboxInstance.destroy();
//         setLightboxInstance(null);
//       }
//     };
//     // Run once on mount, or if lightboxInstance somehow changes externally (unlikely)
//   }, [lightboxInstance]);


//   // Effect for Isotope initialization and updates
//   useEffect(() => {
//     // GUARD: Only run in browser AND if the container ref is set
//     if (typeof window === 'undefined' || !isotopeContainerRef.current || portfolioItemsData.length === 0) {
//       return;
//     }

//     // Initialize imagesLoaded
//     const imgLoad = imagesLoaded(isotopeContainerRef.current);

//     imgLoad.on('always', () => {
//       // Destroy existing Isotope instance before re-initializing
//       if (isotopeInstanceRef.current) {
//         isotopeInstanceRef.current.destroy();
//       }

//       // Initialize Isotope
//       try {
//         isotopeInstanceRef.current = new Isotope(isotopeContainerRef.current, {
//           itemSelector: '.portfolio-item', // Class for each filterable item
//           layoutMode: 'masonry',          // Or 'fitRows', etc.
//           filter: activeFilter,           // Initial filter
//           // originLeft: true, // Default, set to false for right-to-left layouts
//           // transitionDuration: '0.6s', // Example
//         });
//       } catch (e) {
//         // console.error("Error initializing Isotope:", e);
//       }

//       // If GLightbox needs refreshing after Isotope layout (rarely needed if selector is robust)
//       // if (lightboxInstance) {
//       //   lightboxInstance.reload();
//       // }
//     });

//     // Cleanup function to destroy Isotope instance when component unmounts or data changes
//     return () => {
//       if (isotopeInstanceRef.current) {
//         isotopeInstanceRef.current.destroy();
//         isotopeInstanceRef.current = null;
//       }
//     };
//     // Re-run this effect if portfolioItemsData changes or the activeFilter changes
//     // (though filtering is handled by `handleFilter` which calls Isotope's arrange method)
//     // Primarily, `portfolioItemsData` and `activeFilter` (for initial setup) are key.
//   }, [portfolioItemsData, activeFilter, lightboxInstance]); // Added lightboxInstance in case its reload is needed


//   // Handler for filter clicks
//   const handleFilter = useCallback((filterValue) => {
//     setActiveFilter(filterValue);
//     if (isotopeInstanceRef.current) {
//       isotopeInstanceRef.current.arrange({ filter: filterValue });
//     }
//   }, []); // Empty dependency array as it only uses isotopeInstanceRef.current and setActiveFilter

//   return (
//     <section id="portfolio" className="portfolio section light-background">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Portfolio</h2>
//         <p style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
//           I believe great work speaks for itself. Below is a collection of projects I'm proud to have developed...
//         </p>
//       </div>
//       <div className="container">
//         {/*
//           The outer div with isotope-layout and data attributes was for the vanilla JS init.
//           In React, we manage Isotope through its instance.
//         */}
//         <div>
//           <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
//             <li onClick={() => handleFilter('*')} className={activeFilter === '*' ? 'filter-active' : ''}>All</li>
//             <li onClick={() => handleFilter('.filter-app')} className={activeFilter === '.filter-app' ? 'filter-active' : ''}>App</li>
//             <li onClick={() => handleFilter('.filter-product')} className={activeFilter === '.filter-product' ? 'filter-active' : ''}>Product</li>
//             <li onClick={() => handleFilter('.filter-branding')} className={activeFilter === '.filter-branding' ? 'filter-active' : ''}>Branding</li>
//             <li onClick={() => handleFilter('.filter-books')} className={activeFilter === '.filter-books' ? 'filter-active' : ''}>Books</li>
//           </ul>

//           <div ref={isotopeContainerRef} className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
//             {portfolioItemsData.map(item => (
//               // The classes on this div are important for Isotope:
//               // - .portfolio-item (or whatever itemSelector you use)
//               // - The filter class (e.g., filter-app, filter-product)
//               <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${item.filterClass}`}>
//                 <div className="portfolio-content h-100">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={400} // Adjust as per your design
//                     height={300} // Adjust as per your design
//                     className="img-fluid"
//                     style={{ objectFit: 'cover', width: '100%', height: 'auto' }} // Ensure image scales well
//                   />
//                   <div className="portfolio-info">
//                     <h4>{item.title}</h4>
//                     <p>{item.description}</p>
//                     <a
//                       href={item.galleryImage}
//                       title={item.title}
//                       data-gallery={`portfolio-gallery-${item.filterClass.replace('filter-', '')}`} // GLightbox gallery attribute
//                       className="glightbox preview-link" // GLightbox selector
//                     >
//                       <i className="bi bi-zoom-in"></i>
//                     </a>
//                     <Link href={item.detailsLink} title="More Details" className="details-link">
//                       <i className="bi bi-link-45deg"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/app/(components)/sections/PortfolioSection.jsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';

// Dummy data
const portfolioItemsData = [
  { id: 1, filterClass: 'filter-app', image: '/images/app-1.png', title: 'App 1', description: 'Lorem ipsum...', galleryImage: '/images/app-1.png', detailsLink: '/portfolio-details' },
  { id: 2, filterClass: 'filter-product', image: '/images/product-1.jpg', title: 'Product 1', description: 'Lorem ipsum...', galleryImage: '/images/product-1.jpg', detailsLink: '/portfolio-details' },
  { id: 3, filterClass: 'filter-branding', image: '/images/branding-1.jpg', title: 'Branding 1', description: 'Lorem ipsum...', galleryImage: '/images/branding-1.jpg', detailsLink: '/portfolio-details' },
  { id: 4, filterClass: 'filter-books', image: '/images/books-1.jpg', title: 'Books 1', description: 'Lorem ipsum...', galleryImage: '/images/books-1.jpg', detailsLink: '/portfolio-details' },
  { id: 5, filterClass: 'filter-app', image: '/images/app-2.png', title: 'App 2', description: 'Lorem ipsum...', galleryImage: '/images/app-2.png', detailsLink: '/portfolio-details' },
];

export default function PortfolioSection() {
  const isotopeContainerRef = useRef(null);
  const isotopeInstanceRef = useRef(null);
  const lightboxInstanceRef = useRef(null); // Use ref for instances that don't trigger re-renders
  const [activeFilter, setActiveFilter] = useState('*');

  // Initialize and clean up libraries
  useEffect(() => {
    let Isotope;
    let imagesLoaded;
    let GLightbox;

    if (typeof window !== 'undefined') {
      // Dynamically import libraries
      const initLibraries = async () => {
        try {
          const IsotopeModule = await import('isotope-layout');
          Isotope = IsotopeModule.default;

          const imagesLoadedModule = await import('imagesloaded');
          imagesLoaded = imagesLoadedModule.default;

          const GLightboxModule = await import('glightbox');
          GLightbox = GLightboxModule.default;

          // Initialize GLightbox
          if (!lightboxInstanceRef.current) {
            lightboxInstanceRef.current = GLightbox({ selector: '.glightbox' });
          }

          // Initialize Isotope
          if (isotopeContainerRef.current && portfolioItemsData.length > 0 && Isotope && imagesLoaded) {
            const imgLoad = imagesLoaded(isotopeContainerRef.current);
            imgLoad.on('always', () => {
              if (isotopeInstanceRef.current) {
                isotopeInstanceRef.current.destroy();
              }
              isotopeInstanceRef.current = new Isotope(isotopeContainerRef.current, {
                itemSelector: '.portfolio-item',
                layoutMode: 'masonry',
                filter: activeFilter, // Use state for initial filter
              });
            });
          }
        } catch (error) {
          console.error("Failed to load or initialize portfolio libraries:", error);
        }
      };

      initLibraries();
    }

    // Cleanup
    return () => {
      if (isotopeInstanceRef.current) {
        isotopeInstanceRef.current.destroy();
        isotopeInstanceRef.current = null;
      }
      if (lightboxInstanceRef.current) {
        lightboxInstanceRef.current.destroy();
        lightboxInstanceRef.current = null;
      }
    };
    // Re-run effect if portfolioItemsData changes (for re-initialization)
    // or activeFilter for the initial Isotope setup.
  }, [portfolioItemsData, activeFilter]);


  // Handler for filter clicks (updates state, which then can re-trigger Isotope's layout via its own methods)
  const handleFilter = useCallback((filterValue) => {
    setActiveFilter(filterValue); // Set state to trigger potential re-render & allow Isotope to use it
    if (isotopeInstanceRef.current) {
      isotopeInstanceRef.current.arrange({ filter: filterValue });
    }
  }, []); // isotopeInstanceRef.current will be stable once set


  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
          I believe great work speaks for itself...
        </p>
      </div>
      <div className="container">
        <div>
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li onClick={() => handleFilter('*')} className={activeFilter === '*' ? 'filter-active' : ''}>All</li>
            <li onClick={() => handleFilter('.filter-app')} className={activeFilter === '.filter-app' ? 'filter-active' : ''}>App</li>
            <li onClick={() => handleFilter('.filter-product')} className={activeFilter === '.filter-product' ? 'filter-active' : ''}>Product</li>
            <li onClick={() => handleFilter('.filter-branding')} className={activeFilter === '.filter-branding' ? 'filter-active' : ''}>Branding</li>
            <li onClick={() => handleFilter('.filter-books')} className={activeFilter === '.filter-books' ? 'filter-active' : ''}>Books</li>
          </ul>

          <div ref={isotopeContainerRef} className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItemsData.map(item => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${item.filterClass}`}>
                <div className="portfolio-content h-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={item.galleryImage}
                      title={item.title}
                      data-gallery={`portfolio-gallery-${item.filterClass.replace('filter-', '')}`}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <Link href={item.detailsLink} title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
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