import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const SEOReseller = () => {
  const pageData = {
    seo: {
      title: 'SEO Reseller Service | Premium Digital Agency',
      description: 'Partner with us for reliable SEO delivery for your clients. Scale your agency with our white-label SEO reseller services.'
    },
    hero: {
      badge: 'SEO Reseller',
      titlePrefix: 'Scale Your Agency with',
      titleHighlight: 'SEO Reselling',
      description: 'Partner with us for reliable SEO delivery for your clients. Scale your agency with our white-label SEO reseller services.'
    },
    overview: {
      title: 'Your Backend SEO Team',
      paragraphs: ["Our SEO Reseller program allows you to offer high-quality SEO services to your clients without the need to build an in-house team. We handle the heavy lifting while you take the credit.","We provide transparent reporting and consistent results, allowing you to focus on sales and client relationships while we deliver the technical expertise."]
    },
    features: [
    {
        "title": "White-Label Reporting",
        "desc": "Reports branded with your agency's logo."
    },
    {
        "title": "Dedicated Account Manager",
        "desc": "A single point of contact for all your client campaigns."
    },
    {
        "title": "Scalable Solutions",
        "desc": "Easily add new clients without worrying about capacity."
    },
    {
        "title": "Comprehensive SEO",
        "desc": "Full-service SEO including on-page, off-page, and technical."
    }
],
    benefits: [
    {
        "title": "Increased Margins",
        "desc": "Add a profitable revenue stream to your agency without overhead costs."
    },
    {
        "title": "Focus on Sales",
        "desc": "Spend more time acquiring clients while we handle fulfillment."
    },
    {
        "title": "Guaranteed Quality",
        "desc": "Deliver top-tier SEO results to your clients consistently."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SEOReseller;
