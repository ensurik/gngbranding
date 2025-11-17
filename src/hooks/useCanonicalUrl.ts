import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.gngbranding.com';

export const useCanonicalUrl = () => {
  const location = useLocation();

  useEffect(() => {
    // Get or create canonical link element
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    // Set canonical URL based on current path
    const canonicalUrl = `${SITE_URL}${location.pathname}`;
    canonicalLink.setAttribute('href', canonicalUrl);

    // Cleanup function
    return () => {
      // Keep the canonical link, just update it on route changes
    };
  }, [location.pathname]);
};

