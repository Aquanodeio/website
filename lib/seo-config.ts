/**
 * SEO Configuration for Aquanode
 * Centralized SEO settings for consistent metadata across the site
 */

export const siteConfig = {
  name: "Aquanode",
  url: "https://aquanode.io",
  ogImage: "https://aquanode.io/images/aquanode-banner.png",
  description:
    "Deploy AI models on H100, A100, H200 GPUs with up to 80% cost savings. One platform for cloud features on every GPU. Pick, deploy, and scale effortlessly.",
  keywords: [
    "AI cloud",
    "GPU hosting",
    "H100",
    "A100",
    "H200",
    "machine learning",
    "AI inference",
    "cost-effective AI",
    "GPU computing",
    "cloud deployment",
    "Cheap GPU",
    "Rent GPU",
    "On-Demand GPU",
  ],
  links: {
    twitter: "https://twitter.com/aquanode",
    github: "https://github.com/aquanode",
  },
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - AI Cloud Platform | Deploy on H100, A100, H200 GPUs | Save 80% Costs`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - AI Cloud Platform | Save 80% on GPU Costs`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} AI Cloud Platform Dashboard showing GPU pricing comparison`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - AI Cloud Platform | Save 80% on GPU Costs`,
    description: siteConfig.description,
    creator: "@aquanode",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

/**
 * Generate structured data for Organization
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: siteConfig.ogImage,
  description: siteConfig.description,
  foundingDate: "2024",
  industry: "Cloud Computing",
  services: [
    "H100 GPU Hosting",
    "A100 GPU Hosting",
    "H200 GPU Hosting",
    "AI Model Deployment",
    "GPU Cloud Computing",
    "GPU Cloud Hosting",
    "Serverless GPU Computing",
    "Comfy UI",
    "n8n",
    "vllm",
    "Containerized GPU Computing",
    "Deploy Docker Containers",
    "rtx4090 GPU Hosting",
  ],
  keywords: siteConfig.keywords.join(", "),
  sameAs: [siteConfig.links.twitter, siteConfig.links.github],
};

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; item: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Product schema
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  lowPrice: string;
  highPrice: string;
  offerCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.lowPrice,
      highPrice: product.highPrice,
      offerCount: product.offerCount,
    },
  };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  author: { name: string; jobTitle: string };
  datePublished: string;
  dateModified: string;
  slug: string;
  keywords?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.headline,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.jobTitle,
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.ogImage,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
    keywords: article.keywords,
  };
}
