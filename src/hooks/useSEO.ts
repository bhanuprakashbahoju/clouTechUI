import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = 'ClouTech Academy — Cloud & Data Engineering Training';
const DEFAULT_DESCRIPTION =
  'Master Full Stack, DevOps, Cybersecurity, Snowflake, AWS, Azure, Microsoft Fabric, Gen AI, SQL & DBT with hands-on, instructor-led training. Enroll now at ClouTech Academy.';

/**
 * Updates the document title and meta description for the current page.
 * Call this hook in each page component for per-page SEO.
 */
export function useSEO({ title, description }: SEOProps = {}) {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | ClouTech Academy` : DEFAULT_TITLE;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || DEFAULT_TITLE);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }

    // Cleanup: reset to defaults when component unmounts
    return () => {
      document.title = DEFAULT_TITLE;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
}
