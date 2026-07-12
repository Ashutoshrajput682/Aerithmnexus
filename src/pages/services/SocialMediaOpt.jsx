import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const SocialMediaOpt = () => {
  const pageData = {
    seo: {
      title: 'Social Media Optimization | Premium Digital Agency',
      description: 'Build your brand and community organically on social platforms. Engage with your audience and foster loyalty.'
    },
    hero: {
      badge: 'SMO Services',
      titlePrefix: 'Build Your Community with',
      titleHighlight: 'Social Media Optimization',
      description: 'Build your brand and community organically on social platforms. Engage with your audience and foster loyalty.'
    },
    overview: {
      title: 'Organic Growth and Engagement',
      paragraphs: ["Social Media Optimization (SMO) is about building a strong, organic presence on social media platforms. It's not just about posting; it's about creating a community and fostering engagement.","Our SMO services focus on optimizing your profiles, creating shareable content, and interacting with your audience to build brand loyalty and increase your reach."]
    },
    features: [
    {
        "title": "Profile Optimization",
        "desc": "Ensuring your social profiles are complete, branded, and optimized for search."
    },
    {
        "title": "Content Strategy",
        "desc": "Developing a plan for consistent, engaging content."
    },
    {
        "title": "Community Management",
        "desc": "Actively engaging with followers and responding to comments."
    },
    {
        "title": "Performance Tracking",
        "desc": "Monitoring engagement metrics to refine our strategy."
    }
],
    benefits: [
    {
        "title": "Brand Awareness",
        "desc": "Increase your visibility and reach a wider audience organically."
    },
    {
        "title": "Customer Loyalty",
        "desc": "Build stronger relationships with your customers through active engagement."
    },
    {
        "title": "Increased Traffic",
        "desc": "Drive more traffic to your website through shareable content."
    }
]
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SocialMediaOpt;
