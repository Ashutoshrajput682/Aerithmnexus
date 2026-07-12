import React from 'react';
import PricingTemplate from '../components/PricingTemplate';

const PricingWebDev = () => {
  const packages = [
    {
      name: 'STARTER',
      price: '500',
      originalPrice: null,
      savePercent: null,
      isPopular: false,
      sections: [
        {
          title: 'INCLUSIONS',
          features: [
            { text: 'No.of Pages – Upto 5', status: 'included' },
            { text: 'UI design (template-based) – Basic', status: 'included' },
            { text: 'Responsive Design – Mobile', status: 'included' },
            { text: 'Form Integration – Contact Form', status: 'included' }
          ]
        },
        {
          title: 'CMS FEATURES (WORDPRESS / JOOMLA! / C5 / DRUPAL)',
          features: [
            { text: 'Social Media Integration', status: 'included' },
            { text: 'Security Setup', status: 'included' },
            { text: 'Content Migration', status: 'included' },
            { text: 'Products Migration', status: 'included' },
            { text: 'WhatsApp Chat Integration', status: 'not-included' },
            { text: 'E-commerce Functionality', status: 'not-included' },
            { text: 'Payment Gateway Integration', status: 'not-included' },
            { text: 'Basic SEO Setup (meta tags, titles)', status: 'not-included' },
            { text: 'Speed Optimization', status: 'not-included' },
            { text: 'Newsletter Module', status: 'not-included' },
            { text: 'Shopping Cart', status: 'not-included' },
            { text: 'Order Migration', status: 'not-included' },
            { text: 'User Migration', status: 'not-included' },
            { text: 'Dynamic Blog Section Creation', status: 'not-included' },
            { text: 'Case Studies Section Creation', status: 'not-included' },
            { text: 'CMS Integration', status: 'not-included' },
            { text: 'Advanced SEO Structure Setup', status: 'not-included' },
            { text: 'Dealer/ Affiliate Section', status: 'not-included' },
            { text: 'Revision Round - 1', status: 'included' },
            { text: 'Delivery Time - 5-7 days', status: 'included' }
          ]
        },
        {
          title: 'CUSTOMER SUPPORT',
          features: [
            { text: 'Email', status: 'included' },
            { text: 'Phone', status: 'included' },
            { text: 'Chat', status: 'included' }
          ]
        }
      ]
    },
    {
      name: 'GROWTH',
      price: '1500',
      originalPrice: null,
      savePercent: null,
      isPopular: true,
      sections: [
        {
          title: 'INCLUSIONS',
          features: [
            { text: 'No.of Pages – Upto 30', status: 'included' },
            { text: 'UI design (template-based) – Custom', status: 'included' },
            { text: 'Responsive Design – Mobile + Tablet', status: 'included' },
            { text: 'Form Integration – Lead + Email', status: 'included' }
          ]
        },
        {
          title: 'WORDPRESS / JOOMLA! / C5 / DRUPAL / MAGENTO / PRESTASHOP / SHOPIFY / BIGCOMMERCE',
          features: [
            { text: 'Social Media Integration', status: 'included' },
            { text: 'Security Setup', status: 'included' },
            { text: 'Content Migration', status: 'included' },
            { text: 'Products Migration', status: 'included' },
            { text: 'WhatsApp Chat Integration', status: 'included' },
            { text: 'E-commerce Functionality', status: 'included' },
            { text: 'Payment Gateway Integration', status: 'included' },
            { text: 'Basic SEO Setup (meta tags, titles)', status: 'included' },
            { text: 'Speed Optimization', status: 'included' },
            { text: 'Newsletter Module', status: 'included' },
            { text: 'Shopping Cart', status: 'included' },
            { text: 'Order Migration', status: 'included' },
            { text: 'User Migration', status: 'not-included' },
            { text: 'Dynamic Blog Section Creation', status: 'not-included' },
            { text: 'Case Studies Section Creation', status: 'not-included' },
            { text: 'CMS Integration', status: 'not-included' },
            { text: 'Advanced SEO Structure Setup', status: 'not-included' },
            { text: 'Dealer/ Affiliate Section', status: 'not-included' },
            { text: 'Revision Round - 2-3', status: 'included' },
            { text: 'Delivery Time - 1-2 week', status: 'included' }
          ]
        },
        {
          title: 'CUSTOMER SUPPORT',
          features: [
            { text: 'Email', status: 'included' },
            { text: 'Phone', status: 'included' },
            { text: 'Chat', status: 'included' }
          ]
        }
      ]
    },
    {
      name: 'PRO',
      price: '3100',
      originalPrice: null,
      savePercent: null,
      isPopular: false,
      sections: [
        {
          title: 'INCLUSIONS',
          features: [
            { text: 'No.of Pages – Upto 80', status: 'included' },
            { text: 'UI design (template-based) – Fully Custom', status: 'included' },
            { text: 'Responsive Design – All Devices', status: 'included' },
            { text: 'Form Integration – Lead + Subscription + Email', status: 'included' }
          ]
        },
        {
          title: 'CUSTOM FRAMEWORK / WORDPRESS / JOOMLA! / C5 / DRUPAL / MAGENTO / PRESTASHOP / SHOPIFY / BIGCOMMERCE',
          features: [
            { text: 'Social Media Integration', status: 'included' },
            { text: 'Security Setup', status: 'included' },
            { text: 'Content Migration', status: 'included' },
            { text: 'Products Migration', status: 'included' },
            { text: 'WhatsApp Chat Integration', status: 'included' },
            { text: 'E-commerce Functionality', status: 'included' },
            { text: 'Payment Gateway Integration', status: 'included' },
            { text: 'Basic SEO Setup (meta tags, titles)', status: 'included' },
            { text: 'Speed Optimization', status: 'included' },
            { text: 'Newsletter Module', status: 'included' },
            { text: 'Shopping Cart', status: 'included' },
            { text: 'Order Migration', status: 'included' },
            { text: 'User Migration', status: 'included' },
            { text: 'Dynamic Blog Section Creation', status: 'included' },
            { text: 'Case Studies Section Creation', status: 'included' },
            { text: 'CMS Integration', status: 'included' },
            { text: 'Advanced SEO Structure Setup', status: 'included' },
            { text: 'Dealer/ Affiliate Section', status: 'included' },
            { text: 'Revision Round - 4-5', status: 'included' },
            { text: 'Delivery Time - 3-4 week', status: 'included' }
          ]
        },
        {
          title: 'CUSTOMER SUPPORT',
          features: [
            { text: 'Email', status: 'included' },
            { text: 'Phone', status: 'included' },
            { text: 'Chat', status: 'included' }
          ]
        }
      ]
    }
  ];

  return <PricingTemplate title="Web Dev Packages" packages={packages} />;
};

export default PricingWebDev;
