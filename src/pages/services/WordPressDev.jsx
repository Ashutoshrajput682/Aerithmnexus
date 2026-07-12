import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const WordPressDev = () => {
  const pageData = {
    seo: {
      title: 'WordPress Development | Premium Digital Agency',
      description: 'Custom, fast, and secure WordPress websites and blogs. Build a powerful online presence with our WordPress solutions.'
    },
    hero: {
      badge: 'WordPress Development',
      titlePrefix: 'Build Your Online Presence with',
      titleHighlight: 'WordPress',
      description: 'Custom, fast, and secure WordPress websites and blogs. Build a powerful online presence with our WordPress solutions.'
    },
    overview: {
      title: 'Custom Solutions for Your Business',
      paragraphs: ["WordPress is the world's most popular content management system for a reason. Our WordPress development services provide you with a highly customizable, easy-to-manage, and SEO-friendly website.","Whether you need a simple blog, a corporate website, or a complex custom solution, our developers have the expertise to bring your vision to life."]
    },
    features: [
    {
        "title": "Custom Theme Design",
        "desc": "Unique designs tailored to your brand identity."
    },
    {
        "title": "Plugin Development",
        "desc": "Custom functionality built specifically for your needs."
    },
    {
        "title": "Performance Optimization",
        "desc": "Ensuring your site loads quickly and efficiently."
    },
    {
        "title": "Security Hardening",
        "desc": "Implementing best practices to keep your site safe from threats."
    }
],
    benefits: [
    {
        "title": "Easy Content Management",
        "desc": "Update your website easily without needing technical knowledge."
    },
    {
        "title": "Scalability",
        "desc": "Your website can grow alongside your business with thousands of available plugins."
    },
    {
        "title": "SEO Friendly",
        "desc": "WordPress is built with SEO in mind, giving you a head start in search rankings."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default WordPressDev;
