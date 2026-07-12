import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const PPCAds = () => {
  const pageData = {
    seo: {
      title: 'PPC Ads Management | Premium Digital Agency',
      description: 'Drive instant traffic and conversions with Google pay-per-click ads. Maximize your ROI with our targeted campaigns.'
    },
    hero: {
      badge: 'PPC Advertising',
      titlePrefix: 'Drive Instant Traffic with',
      titleHighlight: 'PPC Ads',
      description: 'Drive instant traffic and conversions with Google pay-per-click ads. Maximize your ROI with our targeted campaigns.'
    },
    overview: {
      title: 'Targeted Campaigns, Measurable Results',
      paragraphs: ["Pay-Per-Click (PPC) advertising is one of the most effective ways to drive immediate, targeted traffic to your website. Our PPC management services ensure your ad spend is optimized for maximum return on investment.","We handle everything from keyword research and ad creation to bid management and performance tracking, ensuring your campaigns deliver the best possible results."]
    },
    features: [
    {
        "title": "Keyword Strategy",
        "desc": "Identifying the most cost-effective and high-converting keywords."
    },
    {
        "title": "Ad Copywriting",
        "desc": "Creating compelling ad copy that drives clicks."
    },
    {
        "title": "Bid Management",
        "desc": "Continuous optimization of bids to maximize ROI."
    },
    {
        "title": "Performance Reporting",
        "desc": "Detailed insights into campaign performance and conversions."
    }
],
    benefits: [
    {
        "title": "Immediate Results",
        "desc": "Start seeing traffic and conversions as soon as your campaigns launch."
    },
    {
        "title": "Cost Control",
        "desc": "Set a budget and only pay when someone clicks on your ad."
    },
    {
        "title": "Highly Targeted",
        "desc": "Reach your ideal customers based on their search intent and demographics."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default PPCAds;
