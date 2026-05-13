module.exports = [
"[project]/Desktop/Portfolio2026/portfolio26/app/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 1,
        slug: "e-commerce-platform",
        title: "E-Commerce Platform: Beaute",
        category: "Web Development",
        description: "Full-stack marketplace with real-time inventory management",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: [
            "Vue.js",
            "Node.js & Express",
            "MongoDB"
        ],
        fullDescription: "A comprehensive e-commerce solution built for a mid-sized retail business transitioning to online sales. The platform handles thousands of SKUs with real-time inventory synchronization across multiple warehouses.",
        challenge: "The client needed a scalable solution that could handle high traffic during seasonal sales while maintaining accurate inventory levels across physical and online stores.",
        solution: "Implemented a microservices architecture with Redis caching for inventory management, integrated with their existing ERP system via custom APIs. Built a responsive React frontend with optimistic UI updates for seamless user experience.",
        results: "40% increase in online sales, 99.9% uptime during peak seasons, reduced inventory discrepancies by 85%",
        images: [
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        links: {
            live: "https://example.com",
            github: "https://github.com",
            caseStudy: "https://example.com/case-study"
        }
    },
    {
        id: 2,
        slug: "brand-identity-system",
        title: "Branding & Packaging: MrEatz",
        category: "Graphic Design",
        description: "Complete visual identity for sustainable lifestyle brand",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: [
            "Branding",
            "Print",
            "Digital"
        ],
        fullDescription: "A comprehensive brand identity for an eco-conscious lifestyle brand focused on sustainable home goods. The project included logo design, color palette, typography system, packaging design, and brand guidelines.",
        challenge: "Create a premium visual identity that communicates environmental responsibility without appearing overly earnest or sacrificing aesthetic appeal.",
        solution: "Developed a refined, minimal identity using earthy tones and organic shapes. Created a flexible system that works across digital and physical touchpoints, with sustainable printing considerations built into the guidelines.",
        results: "Brand recognition increased by 65%, featured in 3 major design publications, successfully launched in 50+ retail locations",
        images: [
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1676282831194-f7dcd46eafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        links: {
            behance: "https://behance.net",
            documentation: "https://example.com/case-study",
            canva: "https://canva.com/design/brand-identity",
            figma: "https://figma.com/design/brand-identity"
        }
    },
    {
        id: 3,
        slug: "admin-dashboard",
        title: "Admin Dashboard",
        category: "Web Development",
        description: "Analytics platform with interactive data visualization",
        image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: [
            "TypeScript",
            "Next.js",
            "Tailwind",
            "shadcn/ui",
            "PostgreSQL"
        ],
        fullDescription: "An enterprise analytics dashboard for a auto repair shop, providing real-time insights into repair status, customer CRM, inventory management, analytics KPIs,billing and invoicing. Built with performance and data security as top priorities.",
        challenge: "Display complex financial data in an intuitive, scannable interface while handling millions of data points with sub-second query times.",
        solution: "Architected a highly optimized TypeScript application with custom D3.js visualizations, implementing data aggregation at the API level and progressive loading for large datasets. Designed a clean, functional UI prioritizing key metrics.",
        results: "Reduced decision-making time by 60%, processed 10M+ transactions daily, achieved 95% user satisfaction score",
        images: [
            "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        links: {
            live: "https://example.com",
            caseStudy: "https://example.com/case-study",
            documentation: "https://example.com/docs"
        }
    },
    {
        id: 4,
        slug: "editorial-design",
        title: "Editorial Design",
        category: "Graphic Design",
        description: "Art direction and layout for quarterly design magazine",
        image: "https://images.unsplash.com/photo-1676282831194-f7dcd46eafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: [
            "Typography",
            "Layout",
            "Print"
        ],
        fullDescription: "Complete art direction and layout design for a 120-page quarterly publication celebrating contemporary design and architecture. Responsible for establishing the visual language, typography system, and grid structure.",
        challenge: "Create a distinctive editorial voice that serves diverse content types while maintaining visual coherence across feature articles, interviews, and portfolios.",
        solution: "Developed a flexible grid system with strong typographic hierarchy. Used generous whitespace and large-scale photography to create breathing room. Established clear section identities through color coding and typographic variations.",
        results: "Circulation increased 45%, won 2 regional design awards, reader engagement up 70%",
        images: [
            "https://images.unsplash.com/photo-1676282831194-f7dcd46eafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        links: {
            caseStudy: "https://example.com/case-study"
        }
    },
    {
        id: 5,
        slug: "API/ CRUD Application",
        title: "Movie API Database",
        category: "Web Development",
        description: "TMDB API integration with comprehensive documentation",
        image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: [
            "React",
            "Node.js",
            "Figma"
        ],
        fullDescription: "The Movie API Database is a full-stack application that integrates with The Movie Database (TMDB) API to provide users with comprehensive movie information, including details, ratings, and reviews. The project includes a React frontend for browsing and searching movies, a Node.js backend for handling API requests and data processing, and detailed documentation for developers.",
        challenge: "Multiple product teams were building redundant components with inconsistent styles, leading to UX fragmentation and development inefficiency.",
        solution: "Built a scalable component library in React with TypeScript, documented in Storybook. Created parallel Figma components with detailed usage guidelines. Established governance processes for contributions and updates.",
        results: "Reduced development time by 50%, improved design consistency across 8 products, 95% adoption rate",
        images: [
            "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        links: {
            github: "https://github.com",
            documentation: "https://example.com/docs",
            figma: "https://figma.com/design/component-library"
        }
    },
    {
        id: 6,
        slug: "logo-design-collection",
        title: "Logo Design Collection",
        category: "Graphic Design",
        description: "Diverse logomarks and wordmarks for brands across industries",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tags: [
            "Logo Design",
            "Branding",
            "Illustrator"
        ],
        fullDescription: "A curated collection of logo designs created for clients spanning tech startups, food & beverage, and professional services. Each mark was crafted to capture the essence of the brand while ensuring versatility across digital and print applications.",
        challenge: "Create memorable, distinctive logos that work at any size and across all touchpoints, from social media avatars to building signage. Each brand required a unique visual language that would set them apart in competitive markets.",
        solution: "Conducted comprehensive brand research and competitive analysis for each client. Developed multiple concepts exploring various typographic and symbolic approaches. Refined selected directions through iterative feedback, ensuring each logo system included primary mark, alternative versions, color palette, and clear usage guidelines.",
        results: "12+ logos designed in past year, 90% client approval on first revision, featured in LogoLounge and Brand New",
        images: [
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1758914224092-2aba0d39c923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBzeW1ib2xzfGVufDF8fHx8MTc3NjMyNzk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1773844914284-498c0e049b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBsb2dvJTIwbWFya3N8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        logoCollections: [
            {
                title: "Tech Startup",
                description: "Modern, minimal marks for innovative technology companie",
                logos: [
                    {
                        image: "/BROWN2025.png",
                        description: "CloudSync - Minimalist cloud computing platform logo with modern geometric design"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                        description: "DataFlow - Contemporary analytics startup identity emphasizing data movement"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1758914224092-2aba0d39c923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "PixelAI - Next-gen artificial intelligence company with clean, futuristic branding"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBzeW1ib2xzfGVufDF8fHx8MTc3NjMyNzk3Nnww&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "VectorLabs - Cybersecurity startup with bold, modern brand mark"
                    }
                ]
            },
            {
                title: "Food & Beverage",
                description: "Appetizing marks for restaurants, cafes, and food brands",
                logos: [
                    {
                        image: "https://images.unsplash.com/photo-1773844914284-498c0e049b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBsb2dvJTIwbWFya3N8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "Urban Grill House - Sophisticated restaurant branding with geometric dining symbol"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                        description: "Brew & Bean - Artisanal coffee shop identity with minimalist aesthetic"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                        description: "Sweet Indulgence - Dessert and pastry brand with elegant, modern approach"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1758914224092-2aba0d39c923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "Harvest Farm-to-Table - Organic cuisine restaurant brand with natural elements"
                    }
                ]
            },
            {
                title: "Wellness & Lifestyle",
                description: "Calming, organic logos for health and wellness brands",
                logos: [
                    {
                        image: "https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBzeW1ib2xzfGVufDF8fHx8MTc3NjMyNzk3Nnww&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "ZenFlow Yoga Studio - Calming brand identity for holistic wellness practices"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1773844914284-498c0e049b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBsb2dvJTIwbWFya3N8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "Pure Skin - Organic skincare brand with natural, earthy aesthetic"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                        description: "Mindful Living - Lifestyle brand promoting mindfulness and wellbeing"
                    }
                ]
            },
            {
                title: "Professional Services",
                description: "Sophisticated, trustworthy marks for consultants and agencies",
                logos: [
                    {
                        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                        description: "Apex Consulting - Executive business consultant branding with authority"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1758914224092-2aba0d39c923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "Strategic Partners - Corporate advisory firm with professional, modern identity"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kJTIwaWRlbnRpdHklMjBzeW1ib2xzfGVufDF8fHx8MTc3NjMyNzk3Nnww&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "Growth Analytics - Market research agency with analytical focus"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1773844914284-498c0e049b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBsb2dvJTIwbWFya3N8ZW58MXx8fHwxNzc2MzI3OTc2fDA&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral",
                        description: "Catalyst Ventures - Investment and venture capital firm identity"
                    }
                ]
            }
        ],
        links: {
            behance: "https://behance.net",
            caseStudy: "https://example.com/case-study"
        }
    }
];
}),
"[project]/Desktop/Portfolio2026/portfolio26/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-12 px-6 lg:px-12 bg-zinc-950 text-zinc-500 text-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "© 2026 Chrishaun Jones. All rights reserved."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/components/footer.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Remote / Freelancer"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/components/footer.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Portfolio2026/portfolio26/components/footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Portfolio2026/portfolio26/components/footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/app/data/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/components/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function ProjectDetail() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const projectId = params.projectId;
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === projectId);
    // Reset slide when project changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentSlide(0);
        window.scrollTo(0, 0);
    }, [
        projectId
    ]);
    // Handle keyboard escape key for preview
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === "Escape") {
                setPreviewImage(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, []);
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].findIndex((p)=>p.slug === projectId);
    const previousProject = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][currentIndex === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].length - 1 : currentIndex - 1];
    const nextProject = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][currentIndex === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].length - 1 ? 0 : currentIndex + 1];
    const isLogoCollection = project.id === 6;
    const totalImages = project.images.length;
    const nextSlide = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % totalImages);
    };
    const prevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + totalImages) % totalImages);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "#project",
                className: "relative min-h-[60vh] flex items-center bg-zinc-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.image,
                            alt: "",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#work",
                                    className: "inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-4 h-4 group-hover:-translate-x-1 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        "Back to Work"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-zinc-400 tracking-wider mb-4 uppercase text-sm",
                                    children: project.category
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl text-white mb-6 tracking-tight",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-zinc-300 max-w-3xl",
                                    children: project.fullDescription
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 lg:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            className: "mb-20",
                            children: isLogoCollection && project.logoCollections ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-16",
                                children: project.logoCollections.map((collection, collectionIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.1 * collectionIdx
                                        },
                                        className: "bg-zinc-50 rounded-2xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 pb-6 border-b border-zinc-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-3xl mb-3",
                                                        children: collection.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-600 text-lg",
                                                        children: collection.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8",
                                                children: [
                                                    collectionIdx === 0 && /* Tech Startups - 2x2 Grid */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-4",
                                                        children: collection.logos.map((logo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "relative aspect-square overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer",
                                                                whileHover: {
                                                                    scale: 1.02
                                                                },
                                                                transition: {
                                                                    duration: 0.3
                                                                },
                                                                onClick: ()=>setPreviewImage({
                                                                        image: logo.image,
                                                                        description: logo.description
                                                                    }),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: logo.image,
                                                                        alt: `${collection.title} logo ${idx + 1}`,
                                                                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                        lineNumber: 156,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 25
                                                    }, this),
                                                    collectionIdx === 1 && /* Food & Beverage - Asymmetric Layout */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "col-span-2 row-span-2 relative aspect-square overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer",
                                                                whileHover: {
                                                                    scale: 1.02
                                                                },
                                                                onClick: ()=>setPreviewImage({
                                                                        image: collection.logos[0].image,
                                                                        description: collection.logos[0].description
                                                                    }),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: collection.logos[0].image,
                                                                    alt: `${collection.title} logo 1`,
                                                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 27
                                                            }, this),
                                                            collection.logos.slice(1).map((logo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "relative aspect-square overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer",
                                                                    whileHover: {
                                                                        scale: 1.02
                                                                    },
                                                                    onClick: ()=>setPreviewImage({
                                                                            image: logo.image,
                                                                            description: logo.description
                                                                        }),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: logo.image,
                                                                        alt: `${collection.title} logo ${idx + 2}`,
                                                                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, idx, false, {
                                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 29
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 25
                                                    }, this),
                                                    collectionIdx === 2 && /* Wellness & Lifestyle - Horizontal Strip */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-4",
                                                        children: collection.logos.map((logo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "relative aspect-[4/3] overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer",
                                                                whileHover: {
                                                                    scale: 1.02
                                                                },
                                                                onClick: ()=>setPreviewImage({
                                                                        image: logo.image,
                                                                        description: logo.description
                                                                    }),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: logo.image,
                                                                    alt: `${collection.title} logo ${idx + 1}`,
                                                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, idx, false, {
                                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 25
                                                    }, this),
                                                    collectionIdx === 3 && /* Professional Services - Masonry Layout */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "col-span-2 relative aspect-square overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer",
                                                                whileHover: {
                                                                    scale: 1.02
                                                                },
                                                                onClick: ()=>setPreviewImage({
                                                                        image: collection.logos[0].image,
                                                                        description: collection.logos[0].description
                                                                    }),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: collection.logos[0].image,
                                                                    alt: `${collection.title} logo 1`,
                                                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "col-span-2 relative aspect-square overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer",
                                                                whileHover: {
                                                                    scale: 1.02
                                                                },
                                                                onClick: ()=>setPreviewImage({
                                                                        image: collection.logos[1].image,
                                                                        description: collection.logos[1].description
                                                                    }),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: collection.logos[1].image,
                                                                    alt: `${collection.title} logo 2`,
                                                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 27
                                                            }, this),
                                                            collection.logos.slice(2).map((logo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "col-span-2 relative aspect-[2/1] overflow-hidden rounded-lg bg-white border border-zinc-200 group hover:shadow-xl transition-all duration-300 cursor-pointer",
                                                                    whileHover: {
                                                                        scale: 1.02
                                                                    },
                                                                    onClick: ()=>setPreviewImage({
                                                                            image: logo.image,
                                                                            description: logo.description
                                                                        }),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: logo.image,
                                                                        alt: `${collection.title} logo ${idx + 3}`,
                                                                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, idx, false, {
                                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 29
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, collectionIdx, true, {
                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-6",
                                children: project.images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video overflow-hidden bg-zinc-100 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img,
                                            alt: `${project.title} ${idx + 1}`,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 21
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-12 mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl mb-4",
                                            children: "Challenge"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-700 leading-relaxed text-lg",
                                            children: project.challenge
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl mb-4",
                                            children: "Solution"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-700 leading-relaxed text-lg",
                                            children: project.solution
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.5
                            },
                            className: "mb-16 p-8 bg-zinc-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl mb-4",
                                    children: "Results"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-700 leading-relaxed text-lg",
                                    children: project.results
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.6
                            },
                            className: "mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl mb-4",
                                    children: "Technologies"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-5 py-2.5 bg-zinc-900 text-white text-sm rounded-full",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.7
                            },
                            className: "pt-8 border-t border-zinc-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl mb-6",
                                    children: "View Project"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4",
                                    children: [
                                        project.links.live && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.links.live,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "px-8 py-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors inline-flex items-center gap-2 rounded-lg",
                                            children: [
                                                "Live Site",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this),
                                        project.links.github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.links.github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "px-8 py-4 border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors inline-flex items-center gap-2 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, this),
                                                "GitHub"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this),
                                        project.links.caseStudy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.links.caseStudy,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "px-8 py-4 border-2 border-zinc-300 text-zinc-900 hover:border-zinc-900 transition-colors inline-flex items-center gap-2 rounded-lg",
                                            children: [
                                                "Case Study",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        project.links.behance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.links.behance,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "px-8 py-4 border-2 border-zinc-300 text-zinc-900 hover:border-zinc-900 transition-colors inline-flex items-center gap-2 rounded-lg",
                                            children: [
                                                "Behance",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this),
                                        project.links.documentation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.links.documentation,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "px-8 py-4 border-2 border-zinc-300 text-zinc-900 hover:border-zinc-900 transition-colors inline-flex items-center gap-2 rounded-lg",
                                            children: [
                                                "Documentation",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-6 lg:px-12 border-t border-zinc-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-center text-sm uppercase tracking-wider text-zinc-500 mb-12",
                            children: "More Projects"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/project/${previousProject.slug}`,
                                    className: "group relative overflow-hidden bg-zinc-100 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-[16/9] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: previousProject.image,
                                                alt: previousProject.title,
                                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-white/70 text-sm mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "uppercase tracking-wider",
                                                            children: "Previous"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white text-2xl mb-1 group-hover:translate-x-1 transition-transform",
                                                    children: previousProject.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-sm",
                                                    children: previousProject.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/project/${nextProject.slug}`,
                                    className: "group relative overflow-hidden bg-zinc-100 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-[16/9] overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: nextProject.image,
                                                alt: nextProject.title,
                                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end gap-2 text-white/70 text-sm mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "uppercase tracking-wider",
                                                            children: "Next"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white text-2xl mb-1 text-right group-hover:translate-x-1 transition-transform",
                                                    children: nextProject.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-sm text-right",
                                                    children: nextProject.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            previewImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 0.2
                },
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4",
                onClick: ()=>setPreviewImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.9,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: 0.9,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPreviewImage(null),
                            className: "absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                lineNumber: 526,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[90vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: previewImage.image,
                                    alt: "Preview",
                                    className: "w-full h-auto object-contain bg-zinc-50"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 bg-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-zinc-800 leading-relaxed font-medium",
                                        children: previewImage.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                            lineNumber: 528,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                    lineNumber: 514,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
                lineNumber: 506,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Portfolio2026/portfolio26/app/project/[projectId]/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Portfolio2026_portfolio26_08fr-9n._.js.map