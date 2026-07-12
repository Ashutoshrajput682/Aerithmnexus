import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const SocialMediaAds = () => {
  const pageData = {
    seo: {
      title: 'Social Media Advertising | Premium Digital Agency',
      description: 'Drive massive ROI with targeted social media advertising. Reach your ideal customers across multiple platforms.'
    },
    hero: {
      badge: 'Social Ads',
      titlePrefix: 'Maximize ROI with',
      titleHighlight: 'Social Media Ads',
      description: 'Drive massive ROI with targeted social media advertising. Reach your ideal customers across multiple platforms.'
    },
    overview: {
      title: 'Targeted Advertising for Maximum Impact',
      paragraphs: ["Social Media Advertising allows you to reach highly specific audiences based on their demographics, interests, and behaviors. Our services help you leverage platforms like LinkedIn, Twitter, and Pinterest to drive conversions.","We create compelling ad campaigns designed to achieve your specific business goals, whether that's lead generation, brand awareness, or direct sales."]
    },
    features: [
    {
        "title": "Multi-Platform Strategy",
        "desc": "Campaigns tailored to the strengths of each social network."
    },
    {
        "title": "Advanced Targeting",
        "desc": "Reaching your ideal customer with precision."
    },
    {
        "title": "Creative Development",
        "desc": "Designing ads that capture attention and drive action."
    },
    {
        "title": "Conversion Tracking",
        "desc": "Implementing pixels and tracking to measure ROI accurately."
    }
],
    benefits: [
    {
        "title": "Fast Results",
        "desc": "Generate leads and sales quickly with targeted ad campaigns."
    },
    {
        "title": "High ROI",
        "desc": "Optimize your ad spend for the best possible return."
    },
    {
        "title": "Scalable Campaigns",
        "desc": "Easily scale your advertising efforts as you see positive results."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SocialMediaAds;
