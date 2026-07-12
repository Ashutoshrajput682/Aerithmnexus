const fs = require('fs');
const path = require('path');

const services = [
  {
    filename: 'EcommerceSEO.jsx',
    title: 'Ecommerce SEO Service',
    description: 'Boost your online store visibility and drive targeted traffic with our specialized Ecommerce SEO services. Increase sales and dominate search engine results.',
    badge: 'Ecommerce SEO',
    titlePrefix: 'Drive Sales with',
    titleHighlight: 'Ecommerce SEO',
    overviewTitle: 'Dominate the Digital Shelf',
    overviewParagraphs: [
      'Our Ecommerce SEO services are designed to help online stores increase their visibility, drive more organic traffic, and ultimately boost sales. We understand the unique challenges of ecommerce platforms and tailor our strategies to meet those specific needs.',
      'From optimizing product pages to improving site architecture and building high-quality backlinks, our comprehensive approach ensures your products are found by customers who are ready to buy.'
    ],
    features: [
      { title: 'Keyword Research', desc: 'In-depth analysis of high-intent keywords relevant to your products.' },
      { title: 'On-Page Optimization', desc: 'Optimization of product titles, descriptions, and meta tags.' },
      { title: 'Technical SEO', desc: 'Improving site speed, mobile-friendliness, and crawlability.' },
      { title: 'Link Building', desc: 'Acquiring high-quality backlinks to boost domain authority.' }
    ],
    benefits: [
      { title: 'Increased Traffic', desc: 'Drive more potential customers to your online store through higher search rankings.' },
      { title: 'Higher Conversions', desc: 'Targeting commercial intent keywords means the traffic you get is more likely to convert.' },
      { title: 'Better UX', desc: 'Our technical SEO improvements lead to a faster, more user-friendly website.' }
    ]
  },
  {
    filename: 'LocalSEO.jsx',
    title: 'Local SEO Service',
    description: 'Dominate local search results and attract nearby customers with our Local SEO strategies. Be the top choice in your neighborhood.',
    badge: 'Local SEO',
    titlePrefix: 'Capture Your Local Market with',
    titleHighlight: 'Local SEO',
    overviewTitle: 'Be the Top Choice Locally',
    overviewParagraphs: [
      'Local SEO is essential for businesses that serve specific geographic areas. Our services ensure that when potential customers in your area search for your products or services, your business appears at the top of the search results.',
      'We focus on optimizing your Google Business Profile, managing local citations, and generating positive reviews to build trust and visibility in your community.'
    ],
    features: [
      { title: 'Google Business Profile Optimization', desc: 'Complete setup and ongoing optimization of your GBP.' },
      { title: 'Local Citations', desc: 'Ensuring your business information is consistent across all local directories.' },
      { title: 'Review Management', desc: 'Strategies to generate and manage customer reviews.' },
      { title: 'Localized Content', desc: 'Creating content that speaks directly to your local audience.' }
    ],
    benefits: [
      { title: 'More Foot Traffic', desc: 'Increase the number of people visiting your physical location.' },
      { title: 'Targeted Reach', desc: 'Connect with customers who are actively searching in your area.' },
      { title: 'Enhanced Trust', desc: 'A strong local presence and positive reviews build credibility.' }
    ]
  },
  {
    filename: 'TechnicalSEO.jsx',
    title: 'Technical SEO Service',
    description: 'Optimize your website architecture for better crawling and indexing. Our Technical SEO services build a strong foundation for your site.',
    badge: 'Technical SEO',
    titlePrefix: 'Build a Strong Foundation with',
    titleHighlight: 'Technical SEO',
    overviewTitle: 'The Backbone of Your SEO Strategy',
    overviewParagraphs: [
      'Technical SEO involves optimizing your website for the crawling and indexing phase. It ensures that search engines can access, crawl, interpret, and index your website without any issues.',
      'Our team conducts comprehensive technical audits to identify and fix issues that may be holding your site back, from slow page speed to complex site architecture problems.'
    ],
    features: [
      { title: 'Site Audits', desc: 'In-depth analysis to identify technical barriers.' },
      { title: 'Speed Optimization', desc: 'Improving load times for better user experience and rankings.' },
      { title: 'Mobile Optimization', desc: 'Ensuring your site performs flawlessly on mobile devices.' },
      { title: 'Schema Markup', desc: 'Implementing structured data to help search engines understand your content.' }
    ],
    benefits: [
      { title: 'Improved Indexing', desc: 'Ensure all your important pages are found and indexed by search engines.' },
      { title: 'Faster Load Times', desc: 'Reduce bounce rates and improve user satisfaction with a faster site.' },
      { title: 'Enhanced Visibility', desc: 'A technically sound site is more likely to rank well in search results.' }
    ]
  },
  {
    filename: 'SEOReseller.jsx',
    title: 'SEO Reseller Service',
    description: 'Partner with us for reliable SEO delivery for your clients. Scale your agency with our white-label SEO reseller services.',
    badge: 'SEO Reseller',
    titlePrefix: 'Scale Your Agency with',
    titleHighlight: 'SEO Reselling',
    overviewTitle: 'Your Backend SEO Team',
    overviewParagraphs: [
      'Our SEO Reseller program allows you to offer high-quality SEO services to your clients without the need to build an in-house team. We handle the heavy lifting while you take the credit.',
      'We provide transparent reporting and consistent results, allowing you to focus on sales and client relationships while we deliver the technical expertise.'
    ],
    features: [
      { title: 'White-Label Reporting', desc: 'Reports branded with your agency\'s logo.' },
      { title: 'Dedicated Account Manager', desc: 'A single point of contact for all your client campaigns.' },
      { title: 'Scalable Solutions', desc: 'Easily add new clients without worrying about capacity.' },
      { title: 'Comprehensive SEO', desc: 'Full-service SEO including on-page, off-page, and technical.' }
    ],
    benefits: [
      { title: 'Increased Margins', desc: 'Add a profitable revenue stream to your agency without overhead costs.' },
      { title: 'Focus on Sales', desc: 'Spend more time acquiring clients while we handle fulfillment.' },
      { title: 'Guaranteed Quality', desc: 'Deliver top-tier SEO results to your clients consistently.' }
    ]
  },
  {
    filename: 'WhiteLabelSEO.jsx',
    title: 'White Label SEO Service',
    description: 'Premium SEO services delivered entirely under your brand. Let us be your silent partner in success.',
    badge: 'White Label SEO',
    titlePrefix: 'Premium Results Under',
    titleHighlight: 'Your Brand',
    overviewTitle: 'Seamless Integration, Maximum Impact',
    overviewParagraphs: [
      'Our White Label SEO services are designed to seamlessly integrate with your existing offerings. We work behind the scenes as an extension of your team, providing expert SEO strategies and execution.',
      'From strategy development to monthly reporting, everything is delivered under your brand, ensuring a cohesive experience for your clients.'
    ],
    features: [
      { title: 'Custom Strategies', desc: 'Tailored SEO plans for each of your clients.' },
      { title: 'Unbranded Deliverables', desc: 'All documents and reports are completely unbranded or branded to you.' },
      { title: 'Confidentiality', desc: 'Strict non-disclosure agreements ensure our partnership remains private.' },
      { title: 'Expert Execution', desc: 'Access to our team of seasoned SEO professionals.' }
    ],
    benefits: [
      { title: 'Brand Enhancement', desc: 'Boost your agency\'s reputation by delivering exceptional SEO results.' },
      { title: 'Cost-Effective', desc: 'Avoid the costs of hiring and training an in-house SEO team.' },
      { title: 'Client Retention', desc: 'Keep clients happy and engaged with consistent, positive outcomes.' }
    ]
  },
  {
    filename: 'PPCAds.jsx',
    title: 'PPC Ads Management',
    description: 'Drive instant traffic and conversions with Google pay-per-click ads. Maximize your ROI with our targeted campaigns.',
    badge: 'PPC Advertising',
    titlePrefix: 'Drive Instant Traffic with',
    titleHighlight: 'PPC Ads',
    overviewTitle: 'Targeted Campaigns, Measurable Results',
    overviewParagraphs: [
      'Pay-Per-Click (PPC) advertising is one of the most effective ways to drive immediate, targeted traffic to your website. Our PPC management services ensure your ad spend is optimized for maximum return on investment.',
      'We handle everything from keyword research and ad creation to bid management and performance tracking, ensuring your campaigns deliver the best possible results.'
    ],
    features: [
      { title: 'Keyword Strategy', desc: 'Identifying the most cost-effective and high-converting keywords.' },
      { title: 'Ad Copywriting', desc: 'Creating compelling ad copy that drives clicks.' },
      { title: 'Bid Management', desc: 'Continuous optimization of bids to maximize ROI.' },
      { title: 'Performance Reporting', desc: 'Detailed insights into campaign performance and conversions.' }
    ],
    benefits: [
      { title: 'Immediate Results', desc: 'Start seeing traffic and conversions as soon as your campaigns launch.' },
      { title: 'Cost Control', desc: 'Set a budget and only pay when someone clicks on your ad.' },
      { title: 'Highly Targeted', desc: 'Reach your ideal customers based on their search intent and demographics.' }
    ]
  },
  {
    filename: 'MetaAds.jsx',
    title: 'Meta Ads Management',
    description: 'Highly targeted advertising campaigns on Facebook & Instagram. Connect with your audience where they spend their time.',
    badge: 'Meta Ads',
    titlePrefix: 'Engage Your Audience with',
    titleHighlight: 'Meta Ads',
    overviewTitle: 'Social Advertising That Converts',
    overviewParagraphs: [
      'Meta Ads (Facebook and Instagram) offer unparalleled targeting capabilities, allowing you to reach your ideal customers with precision. Our Meta Ads management services are designed to build brand awareness, generate leads, and drive sales.',
      'We create visually stunning ads and compelling copy, combined with strategic audience targeting, to ensure your campaigns resonate and convert.'
    ],
    features: [
      { title: 'Audience Targeting', desc: 'Pinpoint targeting based on demographics, interests, and behaviors.' },
      { title: 'Creative Development', desc: 'Designing eye-catching images and videos for your ads.' },
      { title: 'A/B Testing', desc: 'Continuous testing of ad creatives and copy to improve performance.' },
      { title: 'Retargeting Campaigns', desc: 'Re-engaging users who have previously interacted with your brand.' }
    ],
    benefits: [
      { title: 'Massive Reach', desc: 'Access billions of active users across Facebook and Instagram.' },
      { title: 'Visual Impact', desc: 'Showcase your products or services with highly visual ad formats.' },
      { title: 'Detailed Analytics', desc: 'Track every interaction and optimize campaigns for better results.' }
    ]
  },
  {
    filename: 'WordPressDev.jsx',
    title: 'WordPress Development',
    description: 'Custom, fast, and secure WordPress websites and blogs. Build a powerful online presence with our WordPress solutions.',
    badge: 'WordPress Development',
    titlePrefix: 'Build Your Online Presence with',
    titleHighlight: 'WordPress',
    overviewTitle: 'Custom Solutions for Your Business',
    overviewParagraphs: [
      'WordPress is the world\'s most popular content management system for a reason. Our WordPress development services provide you with a highly customizable, easy-to-manage, and SEO-friendly website.',
      'Whether you need a simple blog, a corporate website, or a complex custom solution, our developers have the expertise to bring your vision to life.'
    ],
    features: [
      { title: 'Custom Theme Design', desc: 'Unique designs tailored to your brand identity.' },
      { title: 'Plugin Development', desc: 'Custom functionality built specifically for your needs.' },
      { title: 'Performance Optimization', desc: 'Ensuring your site loads quickly and efficiently.' },
      { title: 'Security Hardening', desc: 'Implementing best practices to keep your site safe from threats.' }
    ],
    benefits: [
      { title: 'Easy Content Management', desc: 'Update your website easily without needing technical knowledge.' },
      { title: 'Scalability', desc: 'Your website can grow alongside your business with thousands of available plugins.' },
      { title: 'SEO Friendly', desc: 'WordPress is built with SEO in mind, giving you a head start in search rankings.' }
    ]
  },
  {
    filename: 'SmallBusinessSEO.jsx',
    title: 'Small Business SEO',
    description: 'Tailored and affordable SEO strategies for small enterprises. Grow your local and online presence efficiently.',
    badge: 'Small Business SEO',
    titlePrefix: 'Grow Your Enterprise with',
    titleHighlight: 'Tailored SEO',
    overviewTitle: 'Affordable Strategies for Growth',
    overviewParagraphs: [
      'We understand that small businesses have unique challenges and budgets. Our Small Business SEO services are designed to provide maximum impact without breaking the bank.',
      'We focus on the most effective strategies to improve your online visibility, attract more local customers, and help you compete with larger businesses in your industry.'
    ],
    features: [
      { title: 'Local Search Optimization', desc: 'Improving visibility for location-based searches.' },
      { title: 'Content Marketing', desc: 'Creating valuable content that attracts and engages your target audience.' },
      { title: 'On-Page SEO', desc: 'Optimizing your website\'s content and structure for better rankings.' },
      { title: 'Competitor Analysis', desc: 'Understanding your market to find opportunities for growth.' }
    ],
    benefits: [
      { title: 'Cost-Effective Growth', desc: 'Achieve sustainable growth without the high costs of traditional advertising.' },
      { title: 'Increased Visibility', desc: 'Make it easier for potential customers to find your business online.' },
      { title: 'Level Playing Field', desc: 'Compete effectively against larger competitors in your local market.' }
    ]
  },
  {
    filename: 'ShopifyDev.jsx',
    title: 'Shopify Development',
    description: 'Build scalable and high-converting Shopify ecommerce stores. Launch and grow your online business with ease.',
    badge: 'Shopify Development',
    titlePrefix: 'Launch Your Store with',
    titleHighlight: 'Shopify',
    overviewTitle: 'High-Converting Ecommerce Solutions',
    overviewParagraphs: [
      'Shopify is the leading ecommerce platform for businesses of all sizes. Our Shopify development services help you build a beautiful, user-friendly, and high-converting online store.',
      'From custom theme development to app integration and store setup, we provide everything you need to succeed in the competitive world of ecommerce.'
    ],
    features: [
      { title: 'Custom Theme Development', desc: 'Bespoke designs that reflect your brand and improve UX.' },
      { title: 'Store Setup & Configuration', desc: 'Complete setup of your store, including payment gateways and shipping.' },
      { title: 'App Integration', desc: 'Adding functionality to your store with carefully selected Shopify apps.' },
      { title: 'Migration Services', desc: 'Seamlessly move your existing store to the Shopify platform.' }
    ],
    benefits: [
      { title: 'User-Friendly Platform', desc: 'Easily manage your products, orders, and customers.' },
      { title: 'Reliability & Security', desc: 'Shopify provides top-tier hosting and security out of the box.' },
      { title: 'Built for Growth', desc: 'Scalable solutions that can handle increased traffic and sales.' }
    ]
  },
  {
    filename: 'SocialMediaOpt.jsx',
    title: 'Social Media Optimization',
    description: 'Build your brand and community organically on social platforms. Engage with your audience and foster loyalty.',
    badge: 'SMO Services',
    titlePrefix: 'Build Your Community with',
    titleHighlight: 'Social Media Optimization',
    overviewTitle: 'Organic Growth and Engagement',
    overviewParagraphs: [
      'Social Media Optimization (SMO) is about building a strong, organic presence on social media platforms. It\'s not just about posting; it\'s about creating a community and fostering engagement.',
      'Our SMO services focus on optimizing your profiles, creating shareable content, and interacting with your audience to build brand loyalty and increase your reach.'
    ],
    features: [
      { title: 'Profile Optimization', desc: 'Ensuring your social profiles are complete, branded, and optimized for search.' },
      { title: 'Content Strategy', desc: 'Developing a plan for consistent, engaging content.' },
      { title: 'Community Management', desc: 'Actively engaging with followers and responding to comments.' },
      { title: 'Performance Tracking', desc: 'Monitoring engagement metrics to refine our strategy.' }
    ],
    benefits: [
      { title: 'Brand Awareness', desc: 'Increase your visibility and reach a wider audience organically.' },
      { title: 'Customer Loyalty', desc: 'Build stronger relationships with your customers through active engagement.' },
      { title: 'Increased Traffic', desc: 'Drive more traffic to your website through shareable content.' }
    ]
  },
  {
    filename: 'SocialMediaAds.jsx',
    title: 'Social Media Advertising',
    description: 'Drive massive ROI with targeted social media advertising. Reach your ideal customers across multiple platforms.',
    badge: 'Social Ads',
    titlePrefix: 'Maximize ROI with',
    titleHighlight: 'Social Media Ads',
    overviewTitle: 'Targeted Advertising for Maximum Impact',
    overviewParagraphs: [
      'Social Media Advertising allows you to reach highly specific audiences based on their demographics, interests, and behaviors. Our services help you leverage platforms like LinkedIn, Twitter, and Pinterest to drive conversions.',
      'We create compelling ad campaigns designed to achieve your specific business goals, whether that\'s lead generation, brand awareness, or direct sales.'
    ],
    features: [
      { title: 'Multi-Platform Strategy', desc: 'Campaigns tailored to the strengths of each social network.' },
      { title: 'Advanced Targeting', desc: 'Reaching your ideal customer with precision.' },
      { title: 'Creative Development', desc: 'Designing ads that capture attention and drive action.' },
      { title: 'Conversion Tracking', desc: 'Implementing pixels and tracking to measure ROI accurately.' }
    ],
    benefits: [
      { title: 'Fast Results', desc: 'Generate leads and sales quickly with targeted ad campaigns.' },
      { title: 'High ROI', desc: 'Optimize your ad spend for the best possible return.' },
      { title: 'Scalable Campaigns', desc: 'Easily scale your advertising efforts as you see positive results.' }
    ]
  }
];

const targetDir = path.join(__dirname, 'src', 'pages', 'services');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

services.forEach(service => {
  const content = `import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const ${service.filename.replace('.jsx', '')} = () => {
  const pageData = {
    seo: {
      title: '${service.title} | Premium Digital Agency',
      description: '${service.description}'
    },
    hero: {
      badge: '${service.badge}',
      titlePrefix: '${service.titlePrefix}',
      titleHighlight: '${service.titleHighlight}',
      description: '${service.description}'
    },
    overview: {
      title: '${service.overviewTitle}',
      paragraphs: ${JSON.stringify(service.overviewParagraphs)}
    },
    features: ${JSON.stringify(service.features, null, 4)},
    benefits: ${JSON.stringify(service.benefits, null, 4)}
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ${service.filename.replace('.jsx', '')};
`;

  fs.writeFileSync(path.join(targetDir, service.filename), content);
});

console.log('Successfully generated 12 service pages.');
