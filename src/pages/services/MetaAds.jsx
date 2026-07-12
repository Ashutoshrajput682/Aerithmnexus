import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const MetaAds = () => {
  const pageData = {
    seo: {
      title: 'Meta Ads Management | Premium Digital Agency',
      description: 'Highly targeted advertising campaigns on Facebook & Instagram. Connect with your audience where they spend their time.'
    },
    hero: {
      badge: 'Meta Ads',
      titlePrefix: 'Engage Your Audience with',
      titleHighlight: 'Meta Ads',
      description: 'Highly targeted advertising campaigns on Facebook & Instagram. Connect with your audience where they spend their time.'
    },
    overview: {
      title: 'Social Advertising That Converts',
      paragraphs: ["Meta Ads (Facebook and Instagram) offer unparalleled targeting capabilities, allowing you to reach your ideal customers with precision. Our Meta Ads management services are designed to build brand awareness, generate leads, and drive sales.","We create visually stunning ads and compelling copy, combined with strategic audience targeting, to ensure your campaigns resonate and convert."]
    },
    features: [
    {
        "title": "Audience Targeting",
        "desc": "Pinpoint targeting based on demographics, interests, and behaviors."
    },
    {
        "title": "Creative Development",
        "desc": "Designing eye-catching images and videos for your ads."
    },
    {
        "title": "A/B Testing",
        "desc": "Continuous testing of ad creatives and copy to improve performance."
    },
    {
        "title": "Retargeting Campaigns",
        "desc": "Re-engaging users who have previously interacted with your brand."
    }
],
    benefits: [
    {
        "title": "Massive Reach",
        "desc": "Access billions of active users across Facebook and Instagram."
    },
    {
        "title": "Visual Impact",
        "desc": "Showcase your products or services with highly visual ad formats."
    },
    {
        "title": "Detailed Analytics",
        "desc": "Track every interaction and optimize campaigns for better results."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default MetaAds;
