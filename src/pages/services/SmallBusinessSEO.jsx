import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const SmallBusinessSEO = () => {
  const pageData = {
    seo: {
      title: 'Small Business SEO | Premium Digital Agency',
      description: 'Tailored and affordable SEO strategies for small enterprises. Grow your local and online presence efficiently.'
    },
    hero: {
      badge: 'Small Business SEO',
      titlePrefix: 'Grow Your Enterprise with',
      titleHighlight: 'Tailored SEO',
      description: 'Tailored and affordable SEO strategies for small enterprises. Grow your local and online presence efficiently.'
    },
    overview: {
      title: 'Affordable Strategies for Growth',
      paragraphs: ["We understand that small businesses have unique challenges and budgets. Our Small Business SEO services are designed to provide maximum impact without breaking the bank.","We focus on the most effective strategies to improve your online visibility, attract more local customers, and help you compete with larger businesses in your industry."]
    },
    features: [
    {
        "title": "Local Search Optimization",
        "desc": "Improving visibility for location-based searches."
    },
    {
        "title": "Content Marketing",
        "desc": "Creating valuable content that attracts and engages your target audience."
    },
    {
        "title": "On-Page SEO",
        "desc": "Optimizing your website's content and structure for better rankings."
    },
    {
        "title": "Competitor Analysis",
        "desc": "Understanding your market to find opportunities for growth."
    }
],
    benefits: [
    {
        "title": "Cost-Effective Growth",
        "desc": "Achieve sustainable growth without the high costs of traditional advertising."
    },
    {
        "title": "Increased Visibility",
        "desc": "Make it easier for potential customers to find your business online."
    },
    {
        "title": "Level Playing Field",
        "desc": "Compete effectively against larger competitors in your local market."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SmallBusinessSEO;
