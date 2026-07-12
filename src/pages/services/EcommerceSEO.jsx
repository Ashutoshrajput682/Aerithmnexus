import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const EcommerceSEO = () => {
  const pageData = {
    seo: {
      title: 'Ecommerce SEO Service | Premium Digital Agency',
      description: 'Boost your online store visibility and drive targeted traffic with our specialized Ecommerce SEO services. Increase sales and dominate search engine results.'
    },
    hero: {
      badge: 'Ecommerce SEO',
      titlePrefix: 'Drive Sales with',
      titleHighlight: 'Ecommerce SEO',
      description: 'Boost your online store visibility and drive targeted traffic with our specialized Ecommerce SEO services. Increase sales and dominate search engine results.'
    },
    overview: {
      title: 'Dominate the Digital Shelf',
      paragraphs: ["Our Ecommerce SEO services are designed to help online stores increase their visibility, drive more organic traffic, and ultimately boost sales. We understand the unique challenges of ecommerce platforms and tailor our strategies to meet those specific needs.","From optimizing product pages to improving site architecture and building high-quality backlinks, our comprehensive approach ensures your products are found by customers who are ready to buy."]
    },
    features: [
    {
        "title": "Keyword Research",
        "desc": "In-depth analysis of high-intent keywords relevant to your products."
    },
    {
        "title": "On-Page Optimization",
        "desc": "Optimization of product titles, descriptions, and meta tags."
    },
    {
        "title": "Technical SEO",
        "desc": "Improving site speed, mobile-friendliness, and crawlability."
    },
    {
        "title": "Link Building",
        "desc": "Acquiring high-quality backlinks to boost domain authority."
    }
],
    benefits: [
    {
        "title": "Increased Traffic",
        "desc": "Drive more potential customers to your online store through higher search rankings."
    },
    {
        "title": "Higher Conversions",
        "desc": "Targeting commercial intent keywords means the traffic you get is more likely to convert."
    },
    {
        "title": "Better UX",
        "desc": "Our technical SEO improvements lead to a faster, more user-friendly website."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default EcommerceSEO;
