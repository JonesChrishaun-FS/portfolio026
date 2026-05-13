export interface Logo {
  image: string;
  description: string;
}

export interface LogoCollection {
  title: string;
  description: string;
  logos: Logo[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  images: string[];
  logoCollections?: LogoCollection[];
  links: {
    live?: string;
    github?: string;
    canva?: string;
    figma?: string;
    caseStudy?: string;
    documentation?: string;
    behance?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform: Beaute",
    category: "Web Development",
    description: "Full-stack marketplace with real-time inventory management",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Vue.js", "Node.js & Express", "MongoDB"],
    fullDescription:
      "A comprehensive e-commerce solution built for a mid-sized retail business transitioning to online sales. The platform handles thousands of SKUs with real-time inventory synchronization across multiple warehouses.",
    challenge:
      "The client needed a scalable solution that could handle high traffic during seasonal sales while maintaining accurate inventory levels across physical and online stores.",
    solution:
      "Implemented a microservices architecture with Redis caching for inventory management, integrated with their existing ERP system via custom APIs. Built a responsive React frontend with optimistic UI updates for seamless user experience.",
    results:
      "40% increase in online sales, 99.9% uptime during peak seasons, reduced inventory discrepancies by 85%",
    images: [
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    links: {
      live: "https://example.com",
      github: "https://github.com",
      caseStudy: "https://example.com/case-study",
    },
  },
  {
    id: 2,
    slug: "brand-identity-system",
    title: "Branding & Packaging: MrEatz",
    category: "Graphic Design",
    description: "Complete visual identity for sustainable lifestyle brand",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Branding", "Print", "Digital"],
    fullDescription:
      "A comprehensive brand identity for an eco-conscious lifestyle brand focused on sustainable home goods. The project included logo design, color palette, typography system, packaging design, and brand guidelines.",
    challenge:
      "Create a premium visual identity that communicates environmental responsibility without appearing overly earnest or sacrificing aesthetic appeal.",
    solution:
      "Developed a refined, minimal identity using earthy tones and organic shapes. Created a flexible system that works across digital and physical touchpoints, with sustainable printing considerations built into the guidelines.",
    results:
      "Brand recognition increased by 65%, featured in 3 major design publications, successfully launched in 50+ retail locations",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1676282831194-f7dcd46eafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    links: {
      behance: "https://behance.net",
      documentation: "https://example.com/case-study",
      canva: "https://canva.com/design/brand-identity",
      figma: "https://figma.com/design/brand-identity",
    },
  },
  {
    id: 3,
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    category: "Web Development",
    description: "Analytics platform with interactive data visualization",
    image:
      "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["TypeScript", "Next.js", "Tailwind", "shadcn/ui", "PostgreSQL"],
    fullDescription:
      "An enterprise analytics dashboard for a auto repair shop, providing real-time insights into repair status, customer CRM, inventory management, analytics KPIs,billing and invoicing. Built with performance and data security as top priorities.",
    challenge:
      "Display complex financial data in an intuitive, scannable interface while handling millions of data points with sub-second query times.",
    solution:
      "Architected a highly optimized TypeScript application with custom D3.js visualizations, implementing data aggregation at the API level and progressive loading for large datasets. Designed a clean, functional UI prioritizing key metrics.",
    results:
      "Reduced decision-making time by 60%, processed 10M+ transactions daily, achieved 95% user satisfaction score",
    images: [
      "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    links: {
      live: "https://example.com",
      caseStudy: "https://example.com/case-study",
      documentation: "https://example.com/docs",
    },
  },
  {
    id: 4,
    slug: "editorial-design",
    title: "Editorial Design",
    category: "Graphic Design",
    description: "Art direction and layout for quarterly design magazine",
    image:
      "https://images.unsplash.com/photo-1676282831194-f7dcd46eafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Typography", "Layout", "Print"],
    fullDescription:
      "Complete art direction and layout design for a 120-page quarterly publication celebrating contemporary design and architecture. Responsible for establishing the visual language, typography system, and grid structure.",
    challenge:
      "Create a distinctive editorial voice that serves diverse content types while maintaining visual coherence across feature articles, interviews, and portfolios.",
    solution:
      "Developed a flexible grid system with strong typographic hierarchy. Used generous whitespace and large-scale photography to create breathing room. Established clear section identities through color coding and typographic variations.",
    results:
      "Circulation increased 45%, won 2 regional design awards, reader engagement up 70%",
    images: [
      "https://images.unsplash.com/photo-1676282831194-f7dcd46eafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    links: {
      caseStudy: "https://example.com/case-study",
    },
  },
  {
    id: 5,
    slug: "API/ CRUD Application",
    title: "Movie API Database",
    category: "Web Development",
    description: "TMDB API integration with comprehensive documentation",
    image:
      "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Node.js", "Figma"],
    fullDescription:
      "The Movie API Database is a full-stack application that integrates with The Movie Database (TMDB) API to provide users with comprehensive movie information, including details, ratings, and reviews. The project includes a React frontend for browsing and searching movies, a Node.js backend for handling API requests and data processing, and detailed documentation for developers.",
    challenge:
      "Multiple product teams were building redundant components with inconsistent styles, leading to UX fragmentation and development inefficiency.",
    solution:
      "Built a scalable component library in React with TypeScript, documented in Storybook. Created parallel Figma components with detailed usage guidelines. Established governance processes for contributions and updates.",
    results:
      "Reduced development time by 50%, improved design consistency across 8 products, 95% adoption rate",
    images: [
      "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    links: {
      github: "https://github.com",
      documentation: "https://example.com/docs",
      figma: "https://figma.com/design/component-library",
    },
  },
  {
    id: 6,
    slug: "logo-design-collection",
    title: "Logo Design Collection",
    category: "Graphic Design",
    description: "Diverse logomarks and wordmarks for brands across industries",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Logo Design", "Branding", "Illustrator"],
    fullDescription:
      "A curated collection of logo designs created for clients spanning tech startups, food & beverage, and professional services. Each mark was crafted to capture the essence of the brand while ensuring versatility across digital and print applications.",
    challenge:
      "Create memorable, distinctive logos that work at any size and across all touchpoints, from social media avatars to building signage. Each brand required a unique visual language that would set them apart in competitive markets.",
    solution:
      "Conducted comprehensive brand research and competitive analysis for each client. Developed multiple concepts exploring various typographic and symbolic approaches. Refined selected directions through iterative feedback, ensuring each logo system included primary mark, alternative versions, color palette, and clear usage guidelines.",
    results:
      "12+ logos designed in past year, 90% client approval on first revision, featured in LogoLounge and Brand New",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1758914224092-2aba0d39c923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBzeW1ib2xzfGVufDF8fHx8MTc3NjMyNzk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1773844914284-498c0e049b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBsb2dvJTIwbWFya3N8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    logoCollections: [
      {
        title: "Tech Startup",
        description: "Modern, minimal marks for innovative technology company",
        logos: [
          {
            image: "/BROWN2025.png",
            description:
              "CloudSync - Minimalist cloud computing platform logo with modern geometric design",
          },
          {
            image: "/BROWN2025-02.png",
            description:
              "DataFlow - Contemporary analytics startup identity emphasizing data movement",
          },
          {
            image: "/BROWN2025-03.png",
            description:
              "PixelAI - Next-gen artificial intelligence company with clean, futuristic branding",
          },
        ],
      },

      {
        title: "Food & Beverage",
        description: "Appetizing marks for restaurants, cafes, and food brands",
        logos: [
          {
            image: "/TheJoint2025.png",
            description:
              "Urban Grill House - Sophisticated restaurant branding with geometric dining symbol",
          },
          {
            image: "/TheJoint-01.png",
            description:
              "Brew & Bean - Artisanal coffee shop identity with minimalist aesthetic",
          },
          {
            image: "/TheJoint-04.png",
            description:
              "Sweet Indulgence - Dessert and pastry brand with elegant, modern approach",
          },
          {
            image: "/TheJoint-02.png",
            description:
              "Harvest Farm-to-Table - Organic cuisine restaurant brand with natural elements",
          },
          {
            image: "/TheJoint-03.png",
            description:
              "Harvest Farm-to-Table - Organic cuisine restaurant brand with natural elements",
          },
          {
            image: "/TheJoint-05.png",
            description:
              "Harvest Farm-to-Table - Organic cuisine restaurant brand with natural elements",
          },
        ],
      },
      {
        title: "Wellness & Lifestyle",
        description: "Calming, organic logos for health and wellness brands",
        logos: [
          {
            image:
              "https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBzeW1ib2xzfGVufDF8fHx8MTc3NjMyNzk3Nnww&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
            description:
              "ZenFlow Yoga Studio - Calming brand identity for holistic wellness practices",
          },
          {
            image:
              "https://images.unsplash.com/photo-1773844914284-498c0e049b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBsb2dvJTIwbWFya3N8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
            description:
              "Pure Skin - Organic skincare brand with natural, earthy aesthetic",
          },
          {
            image:
              "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            description:
              "Mindful Living - Lifestyle brand promoting mindfulness and wellbeing",
          },
        ],
      },
      {
        title: "Professional Services",
        description:
          "Sophisticated, trustworthy marks for consultants and agencies",
        logos: [
          {
            image:
              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            description:
              "Apex Consulting - Executive business consultant branding with authority",
          },
          {
            image:
              "https://images.unsplash.com/photo-1758914224092-2aba0d39c923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
            description:
              "Strategic Partners - Corporate advisory firm with professional, modern identity",
          },
          {
            image:
              "https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBzeW1ib2xzfGVufDF8fHx8MTc3NjMyNzk3Nnww&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
            description:
              "Growth Analytics - Market research agency with analytical focus",
          },
          {
            image:
              "https://images.unsplash.com/photo-1773844914284-498c0e049b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBsb2dvJTIwbWFya3N8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
            description:
              "Catalyst Ventures - Investment and venture capital firm identity",
          },
        ],
      },
    ],
    links: {
      behance: "https://behance.net",
      caseStudy: "https://example.com/case-study",
    },
  },
];
