import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ShopifyDev = () => {
  const pageData = {
    seo: {
      title: 'Shopify Development | Premium Digital Agency',
      description: 'Build scalable and high-converting Shopify ecommerce stores. Launch and grow your online business with ease.'
    },
    hero: {
      badge: 'Shopify Development',
      titlePrefix: 'Launch Your Store with',
      titleHighlight: 'Shopify',
      description: 'Build scalable and high-converting Shopify ecommerce stores. Launch and grow your online business with ease.'
    },
    overview: {
      title: 'High-Converting Ecommerce Solutions',
      paragraphs: ["Shopify is the leading ecommerce platform for businesses of all sizes. Our Shopify development services help you build a beautiful, user-friendly, and high-converting online store.","From custom theme development to app integration and store setup, we provide everything you need to succeed in the competitive world of ecommerce."]
    },
    features: [
    {
        "title": "Custom Theme Development",
        "desc": "Bespoke designs that reflect your brand and improve UX."
    },
    {
        "title": "Store Setup & Configuration",
        "desc": "Complete setup of your store, including payment gateways and shipping."
    },
    {
        "title": "App Integration",
        "desc": "Adding functionality to your store with carefully selected Shopify apps."
    },
    {
        "title": "Migration Services",
        "desc": "Seamlessly move your existing store to the Shopify platform."
    }
],
    benefits: [
    {
        "title": "User-Friendly Platform",
        "desc": "Easily manage your products, orders, and customers."
    },
    {
        "title": "Reliability & Security",
        "desc": "Shopify provides top-tier hosting and security out of the box."
    },
    {
        "title": "Built for Growth",
        "desc": "Scalable solutions that can handle increased traffic and sales."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ShopifyDev;
