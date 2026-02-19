import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage = 'https://fietsaanzee.be/fietshero.jpg',
  canonical,
  structuredData
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', canonical || `https://fietsaanzee.be${location.pathname}`, true);

    // Twitter Card
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || `https://fietsaanzee.be${location.pathname}`);

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-dynamic]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-dynamic', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Reset to default on unmount if needed
    };
  }, [title, description, keywords, ogImage, canonical, structuredData, location]);
};

// SEO Metadata for each page type
export const SEO_DATA = {
  home: {
    title: 'FietsAanZee.be | Dé Fietsgids voor de Belgische Kust 2026 — Routes, Verhuur & Oplaadpunten',
    description: '✓ Mooiste fietsroutes langs de kust ✓ Fietsverhuur per badstad ✓ Oplaadpunten e-bikes ✓ Fietscafés met zeezicht ✓ Van De Panne tot Knokke ✓ Gratis & actueel 2026',
    keywords: 'fiets aan zee, fietsen belgische kust, fietsroute kust, fietsverhuur zee, elektrische fiets kust, oplaadpunt fiets strand, fietscafé zee, kustroute fiets, fietspad duinen'
  },
  
  hotspots: {
    title: 'Fietscafés & Stops Belgische Kust | De Leukste Tussenstops voor Fietsers',
    description: 'Ontdek de beste fietscafés en stops aan de Belgische kust. Van Oostende tot Knokke - waar je even kunt uitrusten met zicht op zee.',
    keywords: 'fietscafé belgische kust, fietsstop aan zee, terras fietsers kust, tussenstop fietsroute, café fietsers zee'
  },
  
  diensten: {
    title: 'Fietsverhuur & Oplaadpunten Belgische Kust | Praktische Diensten voor Fietsers',
    description: 'Vind de beste fietsverhuurpunten en oplaadstations aan de Belgische kust. Van Oostende tot Knokke - alle praktische diensten voor fietsers op één plek.',
    keywords: 'fietsverhuur aan zee belgië, oplaadpunt elektrische fiets kust, fietsenstalling strand, fietsreparatie kust, fietsverhuur oostende'
  },

  losloopzones: {
    title: 'Fietsroutes Belgische Kust | Overzicht Routes & Fietspaden aan Zee',
    description: 'Interactieve kaart met alle fietsroutes en paden aan de Belgische kust. Van De Panne tot Knokke - vind de perfecte route voor jouw niveau.',
    keywords: 'fietsroute belgische kust, fietspad aan zee, kustfietsroute, fietsen duinen, fietsroute polders kust'
  },
  
  privacy: {
    title: 'Privacybeleid | FietsAanZee.be',
    description: 'Privacybeleid van FietsAanZee.be - Hoe wij omgaan met je gegevens volgens AVG/GDPR',
    keywords: ''
  },
  
  terms: {
    title: 'Algemene Voorwaarden | FietsAanZee.be',
    description: 'Algemene voorwaarden voor het gebruik van FietsAanZee.be',
    keywords: ''
  },
  
  cookies: {
    title: 'Cookiebeleid | FietsAanZee.be',
    description: 'Cookiebeleid van FietsAanZee.be - Welke cookies we gebruiken en waarom',
    keywords: ''
  }
};

// Generate city-specific SEO data
export const getCitySEO = (cityName: string, citySlug: string) => {
  const searchTerms = [
    `fietsen ${cityName.toLowerCase()}`,
    `fietsroute ${cityName.toLowerCase()}`,
    `fietsverhuur ${cityName.toLowerCase()}`,
    `oplaadpunt fiets ${cityName.toLowerCase()}`,
    `fietspad ${cityName.toLowerCase()}`,
    `fietscafé ${cityName.toLowerCase()}`,
    `elektrische fiets ${cityName.toLowerCase()}`,
    `fietsen aan zee ${cityName.toLowerCase()}`
  ];

  return {
    title: `Fietsen ${cityName} 2026 | Fietsroutes, Verhuurpunten & Oplaadpunten ${cityName}`,
    description: `✓ Mooiste fietsroutes in ${cityName} ✓ Fietsverhuur overzicht ✓ Oplaadpunten e-bikes ✓ Fietscafés en stops ✓ De leukste tussenstops in ${cityName} aan de Belgische kust`,
    keywords: searchTerms.join(', '),
    canonical: `https://fietsaanzee.be/#/${citySlug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": `${cityName} - Fietsen aan Zee`,
      "description": `Informatie over fietsroutes, verhuurpunten en oplaadstations in ${cityName} aan de Belgische kust`,
      "url": `https://fietsaanzee.be/#/${citySlug}`,
      "isAccessibleForFree": true,
      "publicAccess": true,
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "BE"
      },
      "touristType": ["Cyclist", "Sports Enthusiast"],
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Fietsvriendelijke kust",
          "value": true
        }
      ]
    }
  };
};
