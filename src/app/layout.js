import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';

// CORRECT Swiper CSS imports:
import 'swiper/css'; // Core Swiper styles
// Add CSS for each module you use:
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // If you use navigation
import 'swiper/css/autoplay';   // If you use autoplay
// ... any other Swiper module CSS you need


import { Roboto, Poppins, Raleway } from 'next/font/google';

// Import Vendor CSS from npm packages (Recommended over @import in globals.css for these)




// Import components we will create soon
import SiteHeader from './(components)/SiteHeader';
import SiteFooter from './(components)/SiteFooter';
import Preloader from './(components)/Preloader';
import ScrollTop from './(components)/ScrollTop';
import ClientLibraries from './(components)/ClientLibraries'; // For JS initializations

// Configure Google Fonts
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
});

export const metadata = {
  title: 'Index - iPortfolio NextJS', // Update as needed
  description: 'My iPortfolio translated to Next.js', // Update
  keywords: 'portfolio, nextjs, web developer', // Update
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable} ${raleway.variable}`}>
      {/* Default body class from your HTML was "index-page".
          We might need to conditionally add body classes per page if they differ significantly.
          For now, if "index-page" has global styles, incorporate them into globals.css or here.
      */}
      <body>
        <SiteHeader />
        <main id="main" className="main"> {/* Added id="main" from your HTML structure */}
          {children}
        </main>
        <SiteFooter />
        <ScrollTop />
        <Preloader />
        <ClientLibraries /> {/* Component to initialize global JS libs like AOS */}
      </body>
    </html>
  );
}