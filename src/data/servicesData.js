import {
  Code2,
  Smartphone,
  Palette,
  ShoppingCart,
  Search,
  TrendingUp,
  Plug,
  Bot,
  Cloud,
  Database,
  Zap
} from 'lucide-react';

export const servicesData = {
  'web-development': {
    title: 'Web Development',
    seoTitle: 'Custom Web Development Services | Scalable Web Applications',
    seoDesc: 'Professional custom web development services tailored to your business needs. We build fast, secure, and SEO-optimized web applications using React, Next.js, and Node.js.',
    icon: Code2,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    heroBg: 'from-blue-600/10 via-cyan-600/5 to-transparent',
    tagline: 'Fast, secure, and highly scalable web architectures built for the modern digital era.',
    overview: 'In today\'s digital landscape, your website is the cornerstone of your brand identity and the primary hub for customer acquisition. Our professional custom web development services are focused on delivering modern, highly performant, and search-engine-optimized websites and web applications. We utilize cutting-edge frameworks like React, Next.js, and Node.js to ensure lightning-fast loading speeds, robust security protocols, and exceptional user experiences across all screen sizes.',
    features: [
      {
        title: 'Custom Web Applications',
        desc: 'Tailor-made web solutions designed to automate business workflows, improve operational efficiency, and deliver bespoke features.'
      },
      {
        title: 'React & Next.js Development',
        desc: 'Leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) for ultra-fast performance, superior core web vitals, and search engine crawlability.'
      },
      {
        title: 'Full-Stack Node.js Solutions',
        desc: 'Secure and scalable backend architectures using Node.js, Express, and modern databases to handle heavy transaction volumes with ease.'
      },
      {
        title: 'Content Management Systems (CMS)',
        desc: 'User-friendly CMS platforms (WordPress, Strapi, Sanity) allowing non-technical teams to seamlessly manage and publish website content.'
      }
    ],
    benefits: [
      {
        title: 'SEO-Ready Architectures',
        desc: 'We structure site clean markup, structured data schema, and semantic tags, ensuring your content is fully readable and rankable by search engines.'
      },
      {
        title: 'Enhanced Conversion Rates',
        desc: 'Intuitive navigation paths, modern styling, and layout flows built to guide visitors effortlessly into lead funnels and purchase paths.'
      },
      {
        title: 'Enterprise-Grade Security',
        desc: 'Robust protection against cyber vulnerabilities (XSS, CSRF, SQL injections) with safe integrations and SSL configuration.'
      }
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Express', 'TailwindCSS', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    faqs: [
      {
        q: 'Why is custom web development better than standard templates?',
        a: 'Custom web development offers unlimited flexibility, superior performance, cleaner code, and better security. Templates often come with bloated code, slow loading times, and limited SEO adaptability.'
      },
      {
        q: 'Do you design mobile-responsive websites?',
        a: 'Absolutely. Every single site we design and build uses mobile-first responsive design, ensuring it functions flawlessly on smartphones, tablets, laptops, and desktop screens.'
      },
      {
        q: 'How does web development affect search engine optimization (SEO)?',
        a: 'Page speed, semantic HTML structure, mobile usability, and clean site architecture are critical ranking factors. Our clean development practices ensure search engine bots can index your pages efficiently.'
      }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    seoTitle: 'Mobile App Development | Premium iOS & Android App Development',
    seoDesc: 'Accelerate your brand\'s reach with custom mobile app development services. We design and build intuitive, high-performance apps for iOS and Android using Flutter and React Native.',
    icon: Smartphone,
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    heroBg: 'from-violet-600/10 via-fuchsia-600/5 to-transparent',
    tagline: 'Connect directly with your target audience through stunning, cross-platform mobile apps.',
    overview: 'Mobile applications have become the preferred medium for user interaction and business transaction. We develop top-tier iOS and Android apps using modern frameworks like Flutter and React Native, reducing time-to-market while keeping development costs optimized. Our mobile design methodology focuses on rich visual aesthetics, lag-free interactions, and robust background syncing, keeping your users engaged and returning.',
    features: [
      {
        title: 'iOS App Development',
        desc: 'Bespoke applications optimized specifically for Apple platforms, complying fully with App Store guidelines and iOS design patterns.'
      },
      {
        title: 'Android App Development',
        desc: 'Scalable and versatile Android apps built to operate smoothly across thousands of unique device sizes and hardware configurations.'
      },
      {
        title: 'Cross-Platform Solutions',
        desc: 'Using Flutter and React Native to write a single codebase that deploys perfectly on both major platforms, saving time and money.'
      },
      {
        title: 'Offline-First Apps',
        desc: 'Implementing local caching and data synchronization engines so users can access key features even without an active internet connection.'
      }
    ],
    benefits: [
      {
        title: 'Stunning App Store Presence',
        desc: 'We assist with complete App Store and Google Play Store Optimization (ASO) to maximize organic downloads and visibility.'
      },
      {
        title: 'Immersive Mobile Experiences',
        desc: 'Smooth native animations, push notification integrations, and fluid touch interactions for peak engagement.'
      },
      {
        title: 'High Scalability & Support',
        desc: 'From cloud database backend configuration to continuous post-launch security patches and performance updates.'
      }
    ],
    techStack: ['React Native', 'Flutter', 'Dart', 'JavaScript', 'Swift', 'Kotlin', 'Firebase', 'Supabase'],
    faqs: [
      {
        q: 'Which framework is best for my app: Flutter or React Native?',
        a: 'Both are incredible options. Flutter is great for custom UI designs and smooth animations, while React Native is excellent if you already have a React web app and want to reuse logic or code libraries.'
      },
      {
        q: 'Will you deploy the apps to the App Store and Google Play?',
        a: 'Yes, we guide you through the entire publication process, including creating developer accounts, asset preparation, configuration, and submitting the app for approval.'
      }
    ]
  },
  'ui-ux-design': {
    title: 'UI / UX Design',
    seoTitle: 'Custom UI/UX Design Services | Interface Design & Prototyping',
    seoDesc: 'Enhance digital interactions with professional UI/UX design services. We craft highly intuitive layouts, stunning wireframes, and design systems that maximize user engagement.',
    icon: Palette,
    gradient: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10 border-pink-500/20',
    heroBg: 'from-pink-600/10 via-rose-600/5 to-transparent',
    tagline: 'Designing gorgeous digital interfaces that tell your brand story and convert visitors.',
    overview: 'User interface (UI) and user experience (UX) design is about bridging the gap between business objectives and human psychology. We create beautiful, intuitive, and conversion-optimized wireframes, high-fidelity mockups, and interactive prototypes. By creating structured component design systems, we ensure that your product maintains visual consistency and is ready for swift developer hand-off.',
    features: [
      {
        title: 'Wireframing & Prototyping',
        desc: 'Mapping out user journeys and interface blueprints to test layouts and flow before jumping into color and visuals.'
      },
      {
        title: 'High-Fidelity Interface Design',
        desc: 'Applying premium styling, color palettes, modern typography, and glassmorphic designs to make your application look breathtaking.'
      },
      {
        title: 'Component-Based Design Systems',
        desc: 'Building reusable Figma libraries containing buttons, forms, navbars, and cards to keep future design changes structured and quick.'
      },
      {
        title: 'User Testing & Audits',
        desc: 'Testing design prototypes with real users to discover interaction hurdles and optimize overall usability.'
      }
    ],
    benefits: [
      {
        title: 'High User Retention',
        desc: 'By eliminating user confusion and friction points, customers enjoy using your platform longer.'
      },
      {
        title: 'Sleek Aesthetic Value',
        desc: 'A gorgeous app instantly establishes market authority and builds strong credibility for your brand.'
      },
      {
        title: 'Faster Development Setup',
        desc: 'Clear developer specs, design tokens, and CSS properties from Figma speed up the coding stage.'
      }
    ],
    techStack: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Miro', 'CSS Grid', 'Framer Motion'],
    faqs: [
      {
        q: 'What is the difference between UI and UX?',
        a: 'UX (User Experience) is about the skeleton, navigation flow, and how the app functions, while UI (User Interface) is about the skin, typography, colors, aesthetics, and overall look.'
      },
      {
        q: 'Do you provide developer hand-off files?',
        a: 'Yes, we provide fully-organized Figma files with structured components, auto-layouts, font hierarchies, and styling libraries ready for coding.'
      }
    ]
  },
  'ecommerce-development': {
    title: 'Ecommerce Development',
    seoTitle: 'Ecommerce Development Services | High-Converting Online Stores',
    seoDesc: 'Boost sales and optimize conversions with professional ecommerce development. We build custom Shopify, WooCommerce, and React-based online stores for modern shopping.',
    icon: ShoppingCart,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    heroBg: 'from-emerald-600/10 via-teal-600/5 to-transparent',
    tagline: 'Launch high-performing online stores optimized for customer conversions and sales.',
    overview: 'Your online store needs to do more than look good; it needs to drive revenue. Our ecommerce development services are focused on speed, reliable payment integrations, checkout page optimization, and high-performance product sorting. We build modern custom stores on Shopify, WooCommerce, and headless commerce engines that scale to handle heavy traffic spikes during peak sales seasons.',
    features: [
      {
        title: 'Shopify Store Setup & Design',
        desc: 'Complete brand setup, responsive design custom Shopify themes, and custom apps integration to create a unique shopping experience.'
      },
      {
        title: 'Headless Commerce Solutions',
        desc: 'Integrating Next.js storefronts with Shopify or BigCommerce APIs for unmatched page load speeds and complete layout freedom.'
      },
      {
        title: 'WooCommerce Customization',
        desc: 'Perfect for businesses seeking full ownership and flexibility over their store database and self-hosted server.'
      },
      {
        title: 'Secure Payments Setup',
        desc: 'Configuring safe checkout loops with Stripe, PayPal, Apple Pay, Google Pay, and localized bank transfer systems.'
      }
    ],
    benefits: [
      {
        title: 'Lightning-Fast Load Times',
        desc: 'Slow pages lead to abandoned carts. We optimize image compression, hosting, and code execution to keep bounce rates minimal.'
      },
      {
        title: 'Conversion-Focused Layouts',
        desc: 'One-click checkout paths, clear CTAs, trust badges, and intuitive filter systems to maximize average order value.'
      },
      {
        title: 'Easy Inventory Management',
        desc: 'Intuitive administrator dashboards to track stock levels, process customer returns, and manage promo codes.'
      }
    ],
    techStack: ['Shopify', 'WooCommerce', 'WordPress', 'Next.js', 'Stripe API', 'PayPal API', 'GraphQL', 'TailwindCSS'],
    faqs: [
      {
        q: 'Can you migrate my existing store to Shopify?',
        a: 'Yes, we handle complete database migrations including customers, products, collections, order histories, and reviews without losing SEO equity.'
      },
      {
        q: 'Is my store secure from hackers?',
        a: 'Absolutely. We configure SSL certificates, mandate PCI compliance for payment gateways, and implement strict database permissions to safeguard client data.'
      }
    ]
  },
  'seo-services': {
    title: 'SEO Services',
    seoTitle: 'Professional SEO Services | Rank Higher on Google & Bing',
    seoDesc: 'Grow your organic traffic and visibility with search engine optimization. We provide complete technical SEO audits, keyword research, on-page optimization, and authority link building.',
    icon: Search,
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    heroBg: 'from-amber-600/10 via-orange-600/5 to-transparent',
    tagline: 'Increase your search rankings, organic impressions, and real business leads.',
    overview: 'Ranking on the first page of Google is not a matter of luck; it is a matter of science. Our search engine optimization (SEO) services cover every facet of organic search, including deep technical site health, thorough keyword intent research, structural page-level optimization, and authoritative backlink acquisition. We focus on drive high-intent, converting keywords to your pages, boosting your bottom line organically.',
    features: [
      {
        title: 'Technical SEO Audits',
        desc: 'Resolving indexation issues, XML sitemaps, robots.txt configs, duplicate content, and Core Web Vitals performance.'
      },
      {
        title: 'On-Page Content Optimization',
        desc: 'Fine-tuning title tags, heading hierarchies, meta descriptions, image alt tags, and internal link structures for maximum relevancy.'
      },
      {
        title: 'High-Intent Keyword Research',
        desc: 'Analyzing what terms your prospective buyers are typing in search engines, allowing us to build a content plan that converts.'
      },
      {
        title: 'Authority Link Building',
        desc: 'Securing quality mentions and backlinks from high-domain-authority websites in your industry to build search engine trust.'
      }
    ],
    benefits: [
      {
        title: 'Sustainable Traffic Growth',
        desc: 'Unlike paid advertising, organic SEO traffic doesn\'t stop the moment you turn off ad budgets; it keeps growing over time.'
      },
      {
        title: 'Cost-Effective Acquisition',
        desc: 'Drive continuous warm leads and customer views at a fraction of the cost of pay-per-click advertising.'
      },
      {
        title: 'Market Authority & Trust',
        desc: 'Being ranked #1 on Google gives your business instant credibility and positions you as an industry leader.'
      }
    ],
    techStack: ['Google Search Console', 'Google Analytics', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Schema.org Markup'],
    faqs: [
      {
        q: 'How long does it take to see results from SEO?',
        a: 'Generally, you will start seeing initial ranking shifts and traffic increases within 3 to 6 months of launching an SEO strategy. SEO is a long-term investment that compounds over time.'
      },
      {
        q: 'What is Technical SEO vs. On-Page SEO?',
        a: 'Technical SEO is about helping search engines easily read and crawl your site (loading speeds, schema, sitemaps). On-Page SEO is about the visible content (keywords, paragraphs, headers, and media).'
      }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    seoTitle: 'Digital Marketing Services | Targeted PPC & Social Advertising',
    seoDesc: 'Boost sales and lead generation with target digital marketing campaigns. We manage ROI-driven Google Ads, Meta Ads (Facebook & Instagram), and marketing automation.',
    icon: TrendingUp,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    heroBg: 'from-cyan-600/10 via-blue-600/5 to-transparent',
    tagline: 'Scale your user acquisition and maximize ROI through data-backed paid advertising.',
    overview: 'Accelerate your business scaling with targeted, high-return paid media. We design and launch advertising strategies on Google Search, Google Display, Facebook, Instagram, and LinkedIn. Our digital marketing process centers around continuous audience segmentation, rigorous A/B testing of creative copies, and advanced funnel tracking to make sure every dollar of your ad budget is put to work.',
    features: [
      {
        title: 'Google PPC Ads Management',
        desc: 'Capture immediate buyer intent by appearing at the very top of Google Search result pages for high-value phrases.'
      },
      {
        title: 'Meta Ads (Facebook & Instagram)',
        desc: 'Reaching specific lifestyle demographics and purchasing patterns with rich visual carousels, video ads, and lead forms.'
      },
      {
        title: 'Retargeting & Remarketing',
        desc: 'Displaying strategic advertisements to website visitors who left without completing a purchase, drawing them back to finish.'
      },
      {
        title: 'Social Media Optimization',
        desc: 'Optimizing and designing profile structures across networks to maximize organic brand credibility and message resonance.'
      }
    ],
    benefits: [
      {
        title: 'Instant Traffic & Leads',
        desc: 'Start driving target customer clicks and inbound leads within hours of launching your paid search campaigns.'
      },
      {
        title: 'Highly Measurable Return',
        desc: 'Track conversions, sales, cost-per-acquisition (CPA), and click-through rates (CTR) with absolute transparency.'
      },
      {
        title: 'Rapid Market Validation',
        desc: 'Perfect for launching new products or entering fresh markets quickly to evaluate buyer demand.'
      }
    ],
    techStack: ['Google Ads Manager', 'Meta Ads Manager', 'Google Analytics 4', 'LinkedIn Campaign Manager', 'Hotjar'],
    faqs: [
      {
        q: 'How much ad spend should I start with?',
        a: 'This depends on your industry and locations. We typically recommend starting with a modest testing budget (e.g. $500–$1,000/month) to find winning ad combinations before scaling.'
      },
      {
        q: 'Do you design the ad graphics and write the copy?',
        a: 'Yes, our creative team writes all advertising copy, designs graphics, and sets up video structures optimized for click-through performance.'
      }
    ]
  },
  'api-development': {
    title: 'API Development',
    seoTitle: 'Custom API Development & Integrations | RESTful & GraphQL',
    seoDesc: 'Create secure and scalable backend connections. We build custom APIs (REST, GraphQL) and integrate third-party platforms, payment gateways, and CRMs.',
    icon: Plug,
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
    iconColor: 'text-fuchsia-400',
    iconBg: 'bg-fuchsia-500/10 border-fuchsia-500/20',
    heroBg: 'from-fuchsia-600/10 via-purple-600/5 to-transparent',
    tagline: 'Connect databases, software systems, and mobile apps with custom secure API layers.',
    overview: 'A robust digital platform is only as strong as the connections behind it. We design, write, test, and document custom REST and GraphQL APIs that operate as fast and secure data channels between your frontend apps, external databases, and third-party software tools. Our API configurations support high concurrency rates, strict token verification, and detailed logging structures.',
    features: [
      {
        title: 'RESTful API Development',
        desc: 'Writing clean, standard, and highly structured endpoints with proper HTTP response codes and error handling schemas.'
      },
      {
        title: 'Third-Party Software Integration',
        desc: 'Connecting Salesforce, HubSpot, Stripe, Twilio, and other SaaS tools directly into your core business system.'
      },
      {
        title: 'GraphQL API Design',
        desc: 'Constructing flexible queries and mutations so frontend systems only fetch the exact fields they require, reducing bandwidth.'
      },
      {
        title: 'API Security & Authentication',
        desc: 'Deploying OAuth2, JWT (JSON Web Tokens), secure header settings, and rate-limiting rules to prevent DDoS attacks.'
      }
    ],
    benefits: [
      {
        title: 'Seamless System Communication',
        desc: 'Break down data silos by allowing all your internal software assets to share records automatically.'
      },
      {
        title: 'Reduced Mobile Load Rates',
        desc: 'Lightweight payloads and fast server queries make sure your mobile users receive database updates instantly.'
      },
      {
        title: 'Extensive Developer Docs',
        desc: 'We supply complete Swagger/Postman documentation, enabling other software teams to interface with your system easily.'
      }
    ],
    techStack: ['Node.js', 'Express', 'GraphQL', 'Postman', 'Swagger', 'JWT', 'Redis', 'OAuth2'],
    faqs: [
      {
        q: 'What is the difference between REST and GraphQL?',
        a: 'REST APIs require hitting specific URLs for specific data structures. GraphQL lets the client query and request custom structures in a single request, reducing network calls.'
      },
      {
        q: 'How do you protect APIs from bad actors?',
        a: 'We implement API Keys, JWT verification, HTTPS encryption, CORS security rules, and rate-limiters that block IP addresses making too many requests.'
      }
    ]
  },
  'ai-solutions': {
    title: 'AI Solutions',
    seoTitle: 'AI Development Services | Custom AI Integration & Chatbots',
    seoDesc: 'Leverage artificial intelligence to automate business operations. We build custom OpenAI integrations, AI chatbots, automated agents, and smart tools.',
    icon: Bot,
    gradient: 'from-rose-500/20 to-red-500/20',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-500/10 border-rose-500/20',
    heroBg: 'from-rose-600/10 via-red-600/5 to-transparent',
    tagline: 'Automate manual workflows and amplify customer engagement with custom AI pipelines.',
    overview: 'Unlock new levels of business efficiency by integrating custom machine learning and Generative AI workflows. We build intelligent conversational agents, document parsing modules, and automation rules using OpenAI\'s GPT models, Claude, and Llama. From auto-answering client queries with RAG (Retrieval-Augmented Generation) systems to smart backend data routing, we bring the power of AI directly to your enterprise.',
    features: [
      {
        title: 'Conversational AI Chatbots',
        desc: 'Highly conversational bots trained on your internal documentation to resolve customer inquiries, book appointments, and capture leads.'
      },
      {
        title: 'Retrieval-Augmented Generation (RAG)',
        desc: 'Connecting Large Language Models safely to your internal knowledge databases so they produce zero-hallucination, accurate replies.'
      },
      {
        title: 'Workflow Automation & Pipelines',
        desc: 'Automating content drafting, data categorization, invoice analysis, and lead scoring via smart AI agent routing.'
      },
      {
        title: 'OpenAI & LLM Custom Integrations',
        desc: 'Setting up API connections, system prompts, vector databases, and parameter configurations for bespoke AI applications.'
      }
    ],
    benefits: [
      {
        title: '24/7 Intelligent Support',
        desc: 'Provide immediate, accurate answers to clients round-the-clock without needing to scale customer support staff.'
      },
      {
        title: 'Massive Operational Savings',
        desc: 'Automating high-volume manual text parsing, categorization, and entry workflows saves hundreds of employee hours.'
      },
      {
        title: 'Data-Driven Insights',
        desc: 'Analyze user conversations, search trends, and operational records to identify client pain points automatically.'
      }
    ],
    techStack: ['OpenAI API', 'LangChain', 'Pinecone', 'Vector Databases', 'Python', 'Node.js', 'Claude API', 'LlamaIndex'],
    faqs: [
      {
        q: 'Will my business data be safe when using LLM models?',
        a: 'Yes. We utilize enterprise API agreements and local vector databases to guarantee your proprietary data is never used for training public foundation models.'
      },
      {
        q: 'Can the chatbot connect to my CRM (like HubSpot or Salesforce)?',
        a: 'Absolutely. We configure webhooks and custom API integrations so the AI chatbot can push leads, schedule meetings, and update CRM records instantly.'
      }
    ]
  },
  'cloud-devops': {
    title: 'Cloud & DevOps',
    seoTitle: 'Cloud Infrastructure & DevOps Services | AWS & CI/CD Pipelines',
    seoDesc: 'Ensure 99.9% uptime and lightning deployments. We offer professional AWS cloud setups, Docker containerization, and modern CI/CD automation.',
    icon: Cloud,
    gradient: 'from-indigo-500/20 to-blue-500/20',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    heroBg: 'from-indigo-600/10 via-blue-600/5 to-transparent',
    tagline: 'Scale your web deployments smoothly with automated pipelines and bulletproof hosting.',
    overview: 'Manual application deployment and server restarts are practices of the past. Our Cloud and DevOps services build a Bridge between software creation and deployment. We configure automated Continuous Integration and Continuous Deployment (CI/CD) pipelines, orchestrate secure container clusters with Docker, and construct high-availability server networks on AWS. This ensures your app scales automatically with web traffic spikes while preventing downtime.',
    features: [
      {
        title: 'AWS Cloud Architecture',
        desc: 'Designing secure VPC networks, EC2 computing nodes, S3 buckets, and RDS databases set up for maximum uptime and recovery.'
      },
      {
        title: 'CI/CD Automation Pipelines',
        desc: 'Configuring GitHub Actions, GitLab CI, or Jenkins so every code push is tested, built, and deployed to servers automatically.'
      },
      {
        title: 'Docker Containerization',
        desc: 'Packaging your software code, libraries, and configurations into self-contained Docker images for identical runtimes everywhere.'
      },
      {
        title: 'CDN & Edge Caching Setup',
        desc: 'Configuring Cloudflare or AWS CloudFront to cache static files close to users globally, slashing loading times.'
      }
    ],
    benefits: [
      {
        title: '99.9% Application Uptime',
        desc: 'Auto-scaling groups and multi-region database replication shield your application from single points of failure.'
      },
      {
        title: 'Frictionless Developer Workflows',
        desc: 'Engineers push code and see it live on staging or production in minutes, bypassing manual server SSH procedures.'
      },
      {
        title: 'Optimized Server Expenses',
        desc: 'We audit your cloud resources, shut down unused nodes, and scale container specs down to reduce monthly AWS/GCP bills.'
      }
    ],
    techStack: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'Cloudflare', 'Linux Servers', 'Terraform', 'Vercel'],
    faqs: [
      {
        q: 'What is CI/CD and why do I need it?',
        a: 'Continuous Integration / Continuous Deployment automates code testing and server updates. It removes manual errors, speeds up release cycles, and ensures your application stays operational.'
      },
      {
        q: 'Can you help migrate my database from a local server to AWS?',
        a: 'Yes, we perform complete database migrations to managed cloud environments like AWS RDS, ensuring zero data loss and minimal transition downtime.'
      }
    ]
  },
  'database-solutions': {
    title: 'Database Solutions',
    seoTitle: 'Database Solutions & Architecture | PostgreSQL, MongoDB, Supabase',
    seoDesc: 'Design secure, optimized databases. We build high-availability database architectures, write optimized queries, and manage PostgreSQL, MongoDB, and Supabase.',
    icon: Database,
    gradient: 'from-teal-500/20 to-emerald-500/20',
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-500/10 border-teal-500/20',
    heroBg: 'from-teal-600/10 via-emerald-600/5 to-transparent',
    tagline: 'Construct highly performant, reliable data warehouses built for rapid search responses.',
    overview: 'Your database is the repository of your company\'s value. A poorly configured database leads to query bottlenecks, sluggish website performance, and potential data corruption. We engineer robust Relational (PostgreSQL, MySQL) and Non-Relational (MongoDB, Redis) databases built for high performance under load. We focus on normalized schemas, search index indexing, replication sets, and automated backup routines to keep your business records safe.',
    features: [
      {
        title: 'Database Schema Design',
        desc: 'Structuring logical database relationships, primary keys, and tables to eliminate duplicate records and speed up searches.'
      },
      {
        title: 'Query Speed Optimization',
        desc: 'Analyzing slow queries, creating database Indexes, and configuring query cache routines to reduce execution times.'
      },
      {
        title: 'Supabase & Firebase Configurations',
        desc: 'Leveraging modern serverless database solutions for real-time data sync, built-in user accounts, and rapid prototyping.'
      },
      {
        title: 'Automated Backup Structures',
        desc: 'Deploying point-in-time recovery rules and backing up database snapshots to independent cloud storage systems.'
      }
    ],
    benefits: [
      {
        title: 'Sub-Millisecond Query Speeds',
        desc: 'Highly optimized query logic and index keys make sure your application returns user data instantly.'
      },
      {
        title: 'Absolute Data Reliability',
        desc: 'Database replication and failover clustering ensure that if one server fails, another takes over instantly.'
      },
      {
        title: 'Smooth Scalability Paths',
        desc: 'We design storage frameworks prepared to scale from thousands of database rows to millions seamlessly.'
      }
    ],
    techStack: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Firebase', 'Prisma ORM', 'Mongoose'],
    faqs: [
      {
        q: 'When should I choose SQL (PostgreSQL) over NoSQL (MongoDB)?',
        a: 'SQL is best when you have structured data with complex relationships, transactions, and require strict accuracy (e.g. accounting, checkouts). NoSQL is great for flexible, changing data schemas and fast document writes.'
      },
      {
        q: 'How often are database backups taken?',
        a: 'We usually configure hourly incremental backups and daily full database snapshots stored on separate AWS S3 buckets with retention rules.'
      }
    ]
  },
  'website-optimization': {
    title: 'Website Optimization',
    seoTitle: 'Website Performance Optimization | Core Web Vitals Audit',
    seoDesc: 'Accelerate page load times to rank higher and convert more visitors. We optimize Core Web Vitals, compress media, audit scripts, and secure servers.',
    icon: Zap,
    gradient: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    heroBg: 'from-orange-600/10 via-amber-600/5 to-transparent',
    tagline: 'Drive up conversion rates by securing and accelerating your web page load speed.',
    overview: 'A one-second delay in page load time can cost your business a 7% reduction in conversion rates. Google has also made page speed and Core Web Vitals official ranking criteria. Our website optimization services systematically eliminate page bloat. We audit render-blocking JavaScript, compress images, fix code errors, set up edge CDNs, and harden server headers to make sure your site loads in under two seconds.',
    features: [
      {
        title: 'Core Web Vitals Audit & Fixes',
        desc: 'Resolving Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) issues.'
      },
      {
        title: 'Image & Assets Compression',
        desc: 'Converting bloated PNG/JPG files to modern WebP/AVIF formats, minifying CSS/JS code, and lazy-loading media.'
      },
      {
        title: 'Server-Side Speed Tuning',
        desc: 'Optimizing database calls, configuring Nginx caching rules, and enabling Gzip/Brotli compression protocols.'
      },
      {
        title: 'Security Audits & SSL Hardening',
        desc: 'Installing SSL certificates, setting up security headers, and protecting login pages from brute-force attempts.'
      }
    ],
    benefits: [
      {
        title: 'Superior Google Rankings',
        desc: 'Fast, technically-optimized websites receive a direct ranking boost in organic mobile search results.'
      },
      {
        title: 'Reduced User Abandonment',
        desc: 'Keep visitors engaged on your website instead of clicking away due to frustratingly slow load screens.'
      },
      {
        title: 'Reduced Cloud Storage Cost',
        desc: 'Lighter payloads and optimized web servers mean you consume less bandwidth, lowering hosting fees.'
      }
    ],
    techStack: ['Google PageSpeed Insights', 'GTmetrix', 'Lighthouse', 'Cloudflare CDN', 'Nginx', 'Brotli', 'SSL Labs'],
    faqs: [
      {
        q: 'What is a good page load time?',
        a: 'A page load time of under 2 seconds is considered excellent. Pages that take longer than 3 seconds experience an exponential increase in bounce rates.'
      },
      {
        q: 'Will optimization break the visual design of my website?',
        a: 'No. We perform all speed code refactoring, script deferrals, and asset compressions on a testing environment to make sure all styling remains identical.'
      }
    ]
  }
};
