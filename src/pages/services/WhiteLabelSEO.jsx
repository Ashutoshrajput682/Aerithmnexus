import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const WhiteLabelSEO = () => {
  const pageData = {
    seo: {
      title: 'White Label SEO Service | Premium Digital Agency',
      description: 'Premium SEO services delivered entirely under your brand. Let us be your silent partner in success.'
    },
    hero: {
      badge: 'White Label SEO',
      titlePrefix: 'Premium Results Under',
      titleHighlight: 'Your Brand',
      description: 'Premium SEO services delivered entirely under your brand. Let us be your silent partner in success.'
    },
    overview: {
      title: 'Seamless Integration, Maximum Impact',
      paragraphs: ["Our White Label SEO services are designed to seamlessly integrate with your existing offerings. We work behind the scenes as an extension of your team, providing expert SEO strategies and execution.","From strategy development to monthly reporting, everything is delivered under your brand, ensuring a cohesive experience for your clients."]
    },
    features: [
    {
        "title": "Custom Strategies",
        "desc": "Tailored SEO plans for each of your clients."
    },
    {
        "title": "Unbranded Deliverables",
        "desc": "All documents and reports are completely unbranded or branded to you."
    },
    {
        "title": "Confidentiality",
        "desc": "Strict non-disclosure agreements ensure our partnership remains private."
    },
    {
        "title": "Expert Execution",
        "desc": "Access to our team of seasoned SEO professionals."
    }
],
    benefits: [
    {
        "title": "Brand Enhancement",
        "desc": "Boost your agency's reputation by delivering exceptional SEO results."
    },
    {
        "title": "Cost-Effective",
        "desc": "Avoid the costs of hiring and training an in-house SEO team."
    },
    {
        "title": "Client Retention",
        "desc": "Keep clients happy and engaged with consistent, positive outcomes."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default WhiteLabelSEO;
