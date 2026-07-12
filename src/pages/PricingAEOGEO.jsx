import React from 'react';
import PricingTemplate from '../components/PricingTemplate';

const PricingAEOGEO = () => {
  const packages = [
    {
      name: 'BASIC',
      price: '1000.00',
      originalPrice: '1300.00',
      savePercent: '23',
      isPopular: false,
      features: [
        { text: 'Voice Search Audit & Keyword Research', status: 'included' },
        { text: 'Conversational Content Optimization (10 Pages)', status: 'included' },
        { text: 'Basic Knowledge Graph Implementation', status: 'included' },
        { text: 'Featured Snippet Targeting', status: 'conditional' },
        { text: 'Multilingual Optimization (1 Language)', status: 'not-included' },
        { text: 'Global Search Engine Submission', status: 'included' }
      ]
    },
    {
      name: 'PLUS',
      price: '1800.00',
      originalPrice: '2200.00',
      savePercent: '18',
      isPopular: false,
      features: [
        { text: 'Voice Search Audit & Keyword Research', status: 'included' },
        { text: 'Conversational Content Optimization (30 Pages)', status: 'included' },
        { text: 'Advanced Knowledge Graph Implementation', status: 'included' },
        { text: 'Featured Snippet Targeting', status: 'included' },
        { text: 'Multilingual Optimization (Up to 3 Languages)', status: 'conditional' },
        { text: 'Global Search Engine Submission & Tracking', status: 'included' }
      ]
    },
    {
      name: 'PRIME',
      price: '2800.00',
      originalPrice: '3300.00',
      savePercent: '15',
      isPopular: true,
      features: [
        { text: 'Comprehensive AEO Strategy & Execution', status: 'included' },
        { text: 'Conversational Content Optimization (All Pages)', status: 'included' },
        { text: 'Custom Knowledge Panel Creation', status: 'included' },
        { text: 'Aggressive Featured Snippet Targeting', status: 'included' },
        { text: 'Multilingual Optimization (Up to 5 Languages)', status: 'included' },
        { text: 'International SEO Architecture Setup', status: 'included' }
      ]
    },
    {
      name: 'MAX',
      price: '5000.00',
      originalPrice: '6000.00',
      savePercent: '16',
      isPopular: false,
      features: [
        { text: 'Enterprise AEO & GEO Strategy', status: 'included' },
        { text: 'AI Assistant Intent Optimization (Alexa, Siri, Google)', status: 'included' },
        { text: 'Entity-Based SEO Optimization', status: 'included' },
        { text: 'Market-Specific Global Domain Strategy', status: 'included' },
        { text: 'Unlimited Multilingual Optimization', status: 'included' },
        { text: 'Dedicated International Growth Manager', status: 'included' }
      ]
    }
  ];

  return <PricingTemplate title="AEO + GEO Packages" packages={packages} />;
};

export default PricingAEOGEO;
