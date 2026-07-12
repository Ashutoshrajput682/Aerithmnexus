import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const LocalSEO = () => {
  const pageData = {
    seo: {
      title: 'Local SEO Service | Premium Digital Agency',
      description: 'Dominate local search results and attract nearby customers with our Local SEO strategies. Be the top choice in your neighborhood.'
    },
    hero: {
      badge: 'Local SEO',
      titlePrefix: 'Capture Your Local Market with',
      titleHighlight: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers with our Local SEO strategies. Be the top choice in your neighborhood.'
    },
    overview: {
      title: 'Be the Top Choice Locally',
      paragraphs: ["Local SEO is essential for businesses that serve specific geographic areas. Our services ensure that when potential customers in your area search for your products or services, your business appears at the top of the search results.","We focus on optimizing your Google Business Profile, managing local citations, and generating positive reviews to build trust and visibility in your community."]
    },
    features: [
    {
        "title": "Google Business Profile Optimization",
        "desc": "Complete setup and ongoing optimization of your GBP."
    },
    {
        "title": "Local Citations",
        "desc": "Ensuring your business information is consistent across all local directories."
    },
    {
        "title": "Review Management",
        "desc": "Strategies to generate and manage customer reviews."
    },
    {
        "title": "Localized Content",
        "desc": "Creating content that speaks directly to your local audience."
    }
],
    benefits: [
    {
        "title": "More Foot Traffic",
        "desc": "Increase the number of people visiting your physical location."
    },
    {
        "title": "Targeted Reach",
        "desc": "Connect with customers who are actively searching in your area."
    },
    {
        "title": "Enhanced Trust",
        "desc": "A strong local presence and positive reviews build credibility."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default LocalSEO;
