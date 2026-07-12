import React from 'react';
import PricingTemplate from '../components/PricingTemplate';

const PricingSMO = () => {
  const packages = [
    {
      name: 'ESSENTIAL',
      price: '200',
      originalPrice: '300',
      savePercent: '33',
      isPopular: false,
      features: [
        { text: 'Posts - 12/month', status: 'included' },
        { text: 'Platforms - 1 (Instagram or Facebook)', status: 'included' },
        { text: 'Post Design - Basic (Statics)', status: 'included' },
        { text: 'Caption Writing + Hashtags', status: 'included' },
        { text: 'Content Calendar', status: 'included' },
        { text: 'Analytics Tracking', status: 'included' },
        { text: 'Competitor Research', status: 'not-included' },
        { text: 'Engagement - Basic (Reply to Comments)', status: 'included' },
        { text: 'Story Posting', status: 'not-included' },
        { text: 'Community Building', status: 'not-included' },
        { text: 'Community Building - 1', status: 'included' },
        { text: 'Monthly Performance Report', status: 'included' }
      ],
      reports: [
        { text: 'Monthly Report with Insights', status: 'included' },
        { text: 'Plan of Action for next month', status: 'included' }
      ],
      customerSupport: [
        { text: 'Email', status: 'included' },
        { text: 'Phone', status: 'included' },
        { text: 'chat', status: 'included' }
      ]
    },
    {
      name: 'GROWTH',
      price: '500',
      originalPrice: '600',
      savePercent: '17',
      isPopular: true,
      features: [
        { text: 'Posts - 20/month', status: 'included' },
        { text: 'Platforms - 2 (Instagram or Facebook)', status: 'included' },
        { text: 'Post Design - High-Quality (Static + Basic Reels)', status: 'included' },
        { text: 'Caption Writing + Hashtags', status: 'included' },
        { text: 'Content Calendar', status: 'included' },
        { text: 'Analytics Tracking', status: 'included' },
        { text: 'Competitor Research', status: 'included' },
        { text: 'Engagement - Engagement (Comments + Replies to DM)', status: 'included' },
        { text: 'Story Posting - 2-4 (Festivals & Special Occasions)', status: 'included' },
        { text: 'Community Building', status: 'not-included' },
        { text: 'Community Building - 2', status: 'included' },
        { text: 'Monthly Performance Report', status: 'included' }
      ],
      reports: [
        { text: 'Monthly Report with Insights', status: 'included' },
        { text: 'Plan of Action for next month', status: 'included' }
      ],
      customerSupport: [
        { text: 'Email', status: 'included' },
        { text: 'Phone', status: 'included' },
        { text: 'chat', status: 'included' }
      ]
    },
    {
      name: 'DOMINANCE',
      price: '700',
      originalPrice: null,
      savePercent: null,
      isPopular: false,
      features: [
        { text: 'Posts - 30/month', status: 'included' },
        { text: 'Platforms - 3 (Instagram, Facebook & LinkedIn)', status: 'included' },
        { text: 'Post Design - Premium (Static + Reels + Carousels)', status: 'included' },
        { text: 'Caption Writing + Hashtags', status: 'included' },
        { text: 'Content Calendar', status: 'included' },
        { text: 'Analytics Tracking', status: 'included' },
        { text: 'Competitor Research', status: 'included' },
        { text: 'Engagement - Engagement (Comments + Replies to DM)', status: 'included' },
        { text: 'Story Posting - 10-15', status: 'included' },
        { text: 'Community Building', status: 'included' },
        { text: 'Community Building - 3', status: 'included' },
        { text: 'Monthly Performance Report', status: 'included' }
      ],
      reports: [
        { text: 'Monthly Report with Insights', status: 'included' },
        { text: 'Plan of Action for next month', status: 'included' }
      ],
      customerSupport: [
        { text: 'Email', status: 'included' },
        { text: 'Phone', status: 'included' },
        { text: 'chat', status: 'included' }
      ]
    }
  ];

  return <PricingTemplate title="SMO Packages" packages={packages} />;
};

export default PricingSMO;
