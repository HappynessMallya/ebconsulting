import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
}: SEOProps) {
  useEffect(() => {
    const baseTitle = 'Evolve Board Consulting';
    const baseDescription =
      'Leading governance advisory firm specializing in board development, training, and strategic oversight.';
    const baseUrl = 'https://ebconsulting.co.tz';

    // Update title — if it already contains the base title, use as-is
    if (title) {
      document.title = title.includes(baseTitle) ? title : `${title} | ${baseTitle}`;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', `${title} | ${baseTitle}`);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) {
      ogDesc.setAttribute('content', description);
    }

    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta && ogUrl) {
      ogUrlMeta.setAttribute('content', `${baseUrl}${ogUrl}`);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta && ogImage) {
      ogImageMeta.setAttribute('content', ogImage);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', `${title} | ${baseTitle}`);
    }

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc && description) {
      twitterDesc.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage && ogImage) {
      twitterImage.setAttribute('content', ogImage);
    }
  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
}

