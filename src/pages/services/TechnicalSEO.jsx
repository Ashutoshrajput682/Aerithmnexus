import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const TechnicalSEO = () => {
  const pageData = {
    seo: {
      title: 'Technical SEO Service | Premium Digital Agency',
      description: 'Optimize your website architecture for better crawling and indexing. Our Technical SEO services build a strong foundation for your site.'
    },
    hero: {
      badge: 'Technical SEO',
      titlePrefix: 'Build a Strong Foundation with',
      titleHighlight: 'Technical SEO',
      description: 'Optimize your website architecture for better crawling and indexing. Our Technical SEO services build a strong foundation for your site.'
    },
    overview: {
      title: 'The Backbone of Your SEO Strategy',
      paragraphs: ["Technical SEO involves optimizing your website for the crawling and indexing phase. It ensures that search engines can access, crawl, interpret, and index your website without any issues.","Our team conducts comprehensive technical audits to identify and fix issues that may be holding your site back, from slow page speed to complex site architecture problems."]
    },
    features: [
    {
        "title": "Site Audits",
        "desc": "In-depth analysis to identify technical barriers."
    },
    {
        "title": "Speed Optimization",
        "desc": "Improving load times for better user experience and rankings."
    },
    {
        "title": "Mobile Optimization",
        "desc": "Ensuring your site performs flawlessly on mobile devices."
    },
    {
        "title": "Schema Markup",
        "desc": "Implementing structured data to help search engines understand your content."
    }
],
    benefits: [
    {
        "title": "Improved Indexing",
        "desc": "Ensure all your important pages are found and indexed by search engines."
    },
    {
        "title": "Faster Load Times",
        "desc": "Reduce bounce rates and improve user satisfaction with a faster site."
    },
    {
        "title": "Enhanced Visibility",
        "desc": "A technically sound site is more likely to rank well in search results."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default TechnicalSEO;
