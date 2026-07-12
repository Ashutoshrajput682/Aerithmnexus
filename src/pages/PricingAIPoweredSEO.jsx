import React from 'react';
import PricingTemplate from '../components/PricingTemplate';

const PricingAIPoweredSEO = () => {
  const packages = [
    {
      name: 'BASIC',
      price: '750.00',
      originalPrice: '1000.00',
      savePercent: '25',
      isPopular: false,
      sections: [
        {
          title: 'SCOPE OF WORK',
          features: [
            { text: 'Initial Website Audit & SEO Checklist Check - 1', status: 'included' },
            { text: 'Keyword Analysis & Finalization - Primary & Secondary - 30', status: 'included' },
            { text: 'Competitor Backlink Analysis - 1', status: 'included' },
            { text: 'Competitor Website Analysis - 1', status: 'included' },
            { text: 'Website Backlink Audit - 1', status: 'included' }
          ]
        },
        {
          title: 'ON-PAGE OPTIMIZATION ACTIVITIES',
          features: [
            { text: 'Title Tag Optimization - 10 pages', status: 'included' },
            { text: 'Meta Tag Optimization - 10 pages', status: 'included' },
            { text: 'Image Optimization (ALT Tag) - 20 Images', status: 'included' },
            { text: 'Heading Tags Optimization - 10 pages', status: 'included' },
            { text: 'Schema Implementation', status: 'included' },
            { text: 'Website Speed Analysis & Recommendations', status: 'included' },
            { text: 'Website Canonical Tag Analysis', status: 'included' },
            { text: 'XML Sitemap Optimization', status: 'included' },
            { text: 'Robots File Optimization', status: 'included' },
            { text: 'SEO Friendly URL Setup', status: 'included' },
            { text: 'Site Navigation Analysis', status: 'included' },
            { text: '404 Page Implementation', status: 'included' },
            { text: 'Broken Links Analysis & Redirection', status: 'included' },
            { text: 'Website Speed Analysis', status: 'included' },
            { text: 'Google Indexed Pages Analysis', status: 'included' },
            { text: 'HTML Sitemap (If Available)', status: 'included' },
            { text: 'Website Responsiveness', status: 'included' },
            { text: 'On Site Blog Section Creation', status: 'included' },
            { text: 'Onsite Blog Posting & Optimization - 1', status: 'included' },
            { text: 'Google Webmaster Tool Setup', status: 'included' },
            { text: 'Google Analytics Setup', status: 'included' },
            { text: 'Bing Webmaster Tools Setup', status: 'not-included' },
            { text: 'Website Content Interlinking', status: 'not-included' },
            { text: 'Website Content Optimization', status: 'not-included' },
            { text: 'Structured Data Setup', status: 'not-included' }
          ]
        },
        {
          title: 'OFF-PAGE OPTIMIZATION ACTIVITIES',
          features: [
            { text: 'Guest Post - 1', status: 'included' },
            { text: 'Guest Post Promotion - 5', status: 'included' },
            { text: 'Article Writing - 1', status: 'included' },
            { text: 'Article Post - 1', status: 'included' },
            { text: 'Article Post Promotion - 5', status: 'included' },
            { text: 'Blog Writing - 1', status: 'included' },
            { text: 'Blog Submission - 1', status: 'included' },
            { text: 'Blog Post Promotion - 5', status: 'included' },
            { text: 'Quora Q&A/ Reddit - 3', status: 'included' },
            { text: 'Image Submission - 5', status: 'included' },
            { text: 'Video Submission - 5', status: 'included' },
            { text: 'Classified Ads - 7', status: 'included' },
            { text: 'Social Bookmarking - 5', status: 'included' },
            { text: 'Social Sharing - 5', status: 'included' },
            { text: 'PPT Creation & Submission - 5', status: 'included' },
            { text: 'PDF Submission - 5', status: 'included' },
            { text: 'Infographics Creation / Month - 5', status: 'included' }
          ]
        },
        {
          title: 'AI SEARCH VISIBILITY',
          features: [
            { text: 'AI Visibility Score', status: 'included' },
            { text: 'AI Monthly Audience', status: 'included' },
            { text: 'AI Competitor Visibility Comparison', status: 'included' },
            { text: 'AI Share of Voice', status: 'included' },
            { text: 'AI Sentiment', status: 'included' }
          ]
        },
        {
          title: 'SMO ACTIVITIES',
          features: [
            { text: 'Facebook Profile Creation', status: 'not-included' },
            { text: 'Facebook Fan Page Creation', status: 'not-included' },
            { text: 'Facebook Posting & Sharing', status: 'not-included' },
            { text: 'Instagram Profile Creation', status: 'not-included' },
            { text: 'Instagram Posting & Sharing', status: 'not-included' }
          ]
        },
        {
          title: 'REPORTS',
          features: [
            { text: 'Monthly Website Analytics Report', status: 'included' },
            { text: 'Monthly Keywords Ranking Report', status: 'included' },
            { text: 'Monthly Off Page Submission Report', status: 'included' }
          ]
        }
      ]
    },
    {
      name: 'PLUS',
      price: '1250.00',
      originalPrice: '1500.00',
      savePercent: '17',
      isPopular: false,
      sections: [
        {
          title: 'SCOPE OF WORK',
          features: [
            { text: 'Initial Website Audit & SEO Checklist Check - 1', status: 'included' },
            { text: 'Keyword Analysis & Finalization - Primary & Secondary - 40', status: 'included' },
            { text: 'Competitor Backlink Analysis - 2', status: 'included' },
            { text: 'Competitor Website Analysis - 2', status: 'included' },
            { text: 'Website Backlink Audit - 1', status: 'included' }
          ]
        },
        {
          title: 'ON-PAGE OPTIMIZATION ACTIVITIES',
          features: [
            { text: 'Title Tag Optimization - 20 pages', status: 'included' },
            { text: 'Meta Tag Optimization - 20 pages', status: 'included' },
            { text: 'Image Optimization (ALT Tag) - 40 Images', status: 'included' },
            { text: 'Heading Tags Optimization - 20 pages', status: 'included' },
            { text: 'Schema Implementation', status: 'included' },
            { text: 'Website Speed Analysis & Recommendations', status: 'included' },
            { text: 'Website Canonical Tag Analysis', status: 'included' },
            { text: 'XML Sitemap Optimization', status: 'included' },
            { text: 'Robots File Optimization', status: 'included' },
            { text: 'SEO Friendly URL Setup', status: 'included' },
            { text: 'Site Navigation Analysis', status: 'included' },
            { text: '404 Page Implementation', status: 'included' },
            { text: 'Broken Links Analysis & Redirection', status: 'included' },
            { text: 'Website Speed Analysis', status: 'included' },
            { text: 'Google Indexed Pages Analysis', status: 'included' },
            { text: 'HTML Sitemap (If Available)', status: 'included' },
            { text: 'Website Responsiveness', status: 'included' },
            { text: 'On Site Blog Section Creation', status: 'included' },
            { text: 'Onsite Blog Posting & Optimization - 2', status: 'included' },
            { text: 'Google Webmaster Tool Setup', status: 'included' },
            { text: 'Google Analytics Setup', status: 'included' },
            { text: 'Bing Webmaster Tools Setup', status: 'not-included' },
            { text: 'Website Content Interlinking', status: 'not-included' },
            { text: 'Website Content Optimization', status: 'not-included' },
            { text: 'Structured Data Setup', status: 'not-included' }
          ]
        },
        {
          title: 'OFF-PAGE OPTIMIZATION ACTIVITIES',
          features: [
            { text: 'Guest Post - 2', status: 'included' },
            { text: 'Guest Post Promotion - 10', status: 'included' },
            { text: 'Article Writing - 2', status: 'included' },
            { text: 'Article Post - 2', status: 'included' },
            { text: 'Article Post Promotion - 10', status: 'included' },
            { text: 'Blog Writing - 2', status: 'included' },
            { text: 'Blog Submission - 2', status: 'included' },
            { text: 'Blog Post Promotion - 10', status: 'included' },
            { text: 'Quora Q&A/ Reddit - 5', status: 'included' },
            { text: 'Image Submission - 10', status: 'included' },
            { text: 'Video Submission - 8', status: 'included' },
            { text: 'Classified Ads - 10', status: 'included' },
            { text: 'Social Bookmarking - 10', status: 'included' },
            { text: 'Social Sharing - 10', status: 'included' },
            { text: 'PPT Creation & Submission - 10', status: 'included' },
            { text: 'PDF Submission - 10', status: 'included' },
            { text: 'Infographics Creation / Month - 10', status: 'included' }
          ]
        },
        {
          title: 'AI SEARCH VISIBILITY',
          features: [
            { text: 'AI Visibility Score', status: 'included' },
            { text: 'AI Monthly Audience', status: 'included' },
            { text: 'AI Competitor Visibility Comparison', status: 'included' },
            { text: 'AI Share of Voice', status: 'included' },
            { text: 'AI Sentiment', status: 'included' }
          ]
        },
        {
          title: 'SMO ACTIVITIES',
          features: [
            { text: 'Facebook Profile Creation', status: 'not-included' },
            { text: 'Facebook Fan Page Creation', status: 'not-included' },
            { text: 'Facebook Posting & Sharing - 4', status: 'included' },
            { text: 'Instagram Profile Creation', status: 'not-included' },
            { text: 'Instagram Posting & Sharing', status: 'included' }
          ]
        },
        {
          title: 'REPORTS',
          features: [
            { text: 'Monthly Website Analytics Report', status: 'included' },
            { text: 'Monthly Keywords Ranking Report', status: 'included' },
            { text: 'Monthly Off Page Submission Report', status: 'included' }
          ]
        }
      ]
    },
    {
      name: 'PRIME',
      price: '1750.00',
      originalPrice: '2000.00',
      savePercent: '13',
      isPopular: true,
      sections: [
        {
          title: 'SCOPE OF WORK',
          features: [
            { text: 'Initial Website Audit & SEO Checklist Check - 1', status: 'included' },
            { text: 'Keyword Analysis & Finalization - Primary & Secondary - 50', status: 'included' },
            { text: 'Competitor Backlink Analysis - 3', status: 'included' },
            { text: 'Competitor Website Analysis - 3', status: 'included' },
            { text: 'Website Backlink Audit - 1', status: 'included' }
          ]
        },
        {
          title: 'ON-PAGE OPTIMIZATION ACTIVITIES',
          features: [
            { text: 'Title Tag Optimization - 40 pages', status: 'included' },
            { text: 'Meta Tag Optimization - 40 pages', status: 'included' },
            { text: 'Image Optimization (ALT Tag) - 60 Images', status: 'included' },
            { text: 'Heading Tags Optimization - 30 pages', status: 'included' },
            { text: 'Schema Implementation', status: 'included' },
            { text: 'Website Speed Analysis & Recommendations', status: 'included' },
            { text: 'Website Canonical Tag Analysis', status: 'included' },
            { text: 'XML Sitemap Optimization', status: 'included' },
            { text: 'Robots File Optimization', status: 'included' },
            { text: 'SEO Friendly URL Setup', status: 'included' },
            { text: 'Site Navigation Analysis', status: 'included' },
            { text: '404 Page Implementation', status: 'included' },
            { text: 'Broken Links Analysis & Redirection', status: 'included' },
            { text: 'Website Speed Analysis', status: 'included' },
            { text: 'Google Indexed Pages Analysis', status: 'included' },
            { text: 'HTML Sitemap (If Available)', status: 'included' },
            { text: 'Website Responsiveness', status: 'included' },
            { text: 'On Site Blog Section Creation', status: 'included' },
            { text: 'Onsite Blog Posting & Optimization - 3', status: 'included' },
            { text: 'Google Webmaster Tool Setup', status: 'included' },
            { text: 'Google Analytics Setup', status: 'included' },
            { text: 'Bing Webmaster Tools Setup', status: 'included' },
            { text: 'Website Content Interlinking', status: 'included' },
            { text: 'Website Content Optimization', status: 'included' },
            { text: 'Structured Data Setup', status: 'included' }
          ]
        },
        {
          title: 'OFF-PAGE OPTIMIZATION ACTIVITIES',
          features: [
            { text: 'Guest Post - 3', status: 'included' },
            { text: 'Guest Post Promotion - 15', status: 'included' },
            { text: 'Article Writing - 3', status: 'included' },
            { text: 'Article Post - 3', status: 'included' },
            { text: 'Article Post Promotion - 20', status: 'included' },
            { text: 'Blog Writing - 3', status: 'included' },
            { text: 'Blog Submission - 3', status: 'included' },
            { text: 'Blog Post Promotion - 20', status: 'included' },
            { text: 'Quora Q&A/ Reddit - 7', status: 'included' },
            { text: 'Image Submission - 15', status: 'included' },
            { text: 'Video Submission - 10', status: 'included' },
            { text: 'Classified Ads - 15', status: 'included' },
            { text: 'Social Bookmarking - 15', status: 'included' },
            { text: 'Social Sharing - 15', status: 'included' },
            { text: 'PPT Creation & Submission - 15', status: 'included' },
            { text: 'PDF Submission - 15', status: 'included' },
            { text: 'Infographics Creation / Month - 15', status: 'included' }
          ]
        },
        {
          title: 'AI SEARCH VISIBILITY',
          features: [
            { text: 'AI Visibility Score', status: 'included' },
            { text: 'AI Monthly Audience', status: 'included' },
            { text: 'AI Competitor Visibility Comparison', status: 'included' },
            { text: 'AI Share of Voice', status: 'included' },
            { text: 'AI Sentiment', status: 'included' }
          ]
        },
        {
          title: 'SMO ACTIVITIES',
          features: [
            { text: 'Facebook Profile Creation', status: 'included' },
            { text: 'Facebook Fan Page Creation', status: 'included' },
            { text: 'Facebook Posting & Sharing - 8', status: 'included' },
            { text: 'Instagram Profile Creation', status: 'included' },
            { text: 'Instagram Posting & Sharing', status: 'included' }
          ]
        },
        {
          title: 'REPORTS',
          features: [
            { text: 'Monthly Website Analytics Report', status: 'included' },
            { text: 'Monthly Keywords Ranking Report', status: 'included' },
            { text: 'Monthly Off Page Submission Report', status: 'included' }
          ]
        }
      ]
    },
    {
      name: 'MAX',
      price: '3250.00',
      originalPrice: '3500.00',
      savePercent: '7',
      isPopular: false,
      sections: [
        {
          title: 'SCOPE OF WORK',
          features: [
            { text: 'Initial Website Audit & SEO Checklist Check - 1', status: 'included' },
            { text: 'Keyword Analysis & Finalization - Primary & Secondary - 100', status: 'included' },
            { text: 'Competitor Backlink Analysis - 4', status: 'included' },
            { text: 'Competitor Website Analysis - 4', status: 'included' },
            { text: 'Website Backlink Audit - 1', status: 'included' }
          ]
        },
        {
          title: 'ON-PAGE OPTIMIZATION ACTIVITIES',
          features: [
            { text: 'Title Tag Optimization - 50 pages', status: 'included' },
            { text: 'Meta Tag Optimization - 50 pages', status: 'included' },
            { text: 'Image Optimization (ALT Tag) - 80 Images', status: 'included' },
            { text: 'Heading Tags Optimization - 40 pages', status: 'included' },
            { text: 'Schema Implementation', status: 'included' },
            { text: 'Website Speed Analysis & Recommendations', status: 'included' },
            { text: 'Website Canonical Tag Analysis', status: 'included' },
            { text: 'XML Sitemap Optimization', status: 'included' },
            { text: 'Robots File Optimization', status: 'included' },
            { text: 'SEO Friendly URL Setup', status: 'included' },
            { text: 'Site Navigation Analysis', status: 'included' },
            { text: '404 Page Implementation', status: 'included' },
            { text: 'Broken Links Analysis & Redirection', status: 'included' },
            { text: 'Website Speed Analysis', status: 'included' },
            { text: 'Google Indexed Pages Analysis', status: 'included' },
            { text: 'HTML Sitemap (If Available)', status: 'included' },
            { text: 'Website Responsiveness', status: 'included' },
            { text: 'On Site Blog Section Creation', status: 'included' },
            { text: 'Onsite Blog Posting & Optimization - 4', status: 'included' },
            { text: 'Google Webmaster Tool Setup', status: 'included' },
            { text: 'Google Analytics Setup', status: 'included' },
            { text: 'Bing Webmaster Tools Setup', status: 'included' },
            { text: 'Website Content Interlinking', status: 'included' },
            { text: 'Website Content Optimization', status: 'included' },
            { text: 'Structured Data Setup', status: 'included' }
          ]
        },
        {
          title: 'OFF-PAGE OPTIMIZATION ACTIVITIES',
          features: [
            { text: 'Guest Post - 4', status: 'included' },
            { text: 'Guest Post Promotion - 20', status: 'included' },
            { text: 'Article Writing - 4', status: 'included' },
            { text: 'Article Post - 4', status: 'included' },
            { text: 'Article Post Promotion - 30', status: 'included' },
            { text: 'Blog Writing - 4', status: 'included' },
            { text: 'Blog Submission - 4', status: 'included' },
            { text: 'Blog Post Promotion - 30', status: 'included' },
            { text: 'Quora Q&A/ Reddit - 10', status: 'included' },
            { text: 'Image Submission - 20', status: 'included' },
            { text: 'Video Submission - 15', status: 'included' },
            { text: 'Classified Ads - 20', status: 'included' },
            { text: 'Social Bookmarking - 20', status: 'included' },
            { text: 'Social Sharing - 20', status: 'included' },
            { text: 'PPT Creation & Submission - 20', status: 'included' },
            { text: 'PDF Submission - 20', status: 'included' },
            { text: 'Infographics Creation / Month - 20', status: 'included' }
          ]
        },
        {
          title: 'AI SEARCH VISIBILITY',
          features: [
            { text: 'AI Visibility Score', status: 'included' },
            { text: 'AI Monthly Audience', status: 'included' },
            { text: 'AI Competitor Visibility Comparison', status: 'included' },
            { text: 'AI Share of Voice', status: 'included' },
            { text: 'AI Sentiment', status: 'included' }
          ]
        },
        {
          title: 'SMO ACTIVITIES',
          features: [
            { text: 'Facebook Profile Creation', status: 'included' },
            { text: 'Facebook Fan Page Creation', status: 'included' },
            { text: 'Facebook Posting & Sharing - 16', status: 'included' },
            { text: 'Instagram Profile Creation', status: 'included' },
            { text: 'Instagram Posting & Sharing', status: 'included' }
          ]
        },
        {
          title: 'REPORTS',
          features: [
            { text: 'Monthly Website Analytics Report', status: 'included' },
            { text: 'Monthly Keywords Ranking Report', status: 'included' },
            { text: 'Monthly Off Page Submission Report', status: 'included' }
          ]
        }
      ]
    }
  ];

  return <PricingTemplate title="AI-Powered SEO" packages={packages} />;
};

export default PricingAIPoweredSEO;
