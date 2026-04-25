import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

import Avatar from "../../components/Avatar";
import { fadeIn } from "../../variants";
const PROJECTS = [
  {
    id: 0,
    projectId: "revona",
    category: "backend",
    tech: "react",
    large: true,
    img: "https://www.abcodify.com/images/revona.png",
    tag: "NestJS · React",
    title: "Revona — Car Service Platform",
    desc: "Multi-product car service platform: service types, appointment booking, Stripe payments, S3 uploads, Mailgun mail, push notifications, Swagger APIs, AWS + Railway.",
    stack: [
      "NestJS",
      "React",
      "Refine.dev",
      "Stripe",
      "AWS S3",
      "Mailgun",
      "PostgreSQL",
      "Railway",
    ],
    url: null,
    challenge:
      "Build a multi-product car service platform supporting service types, appointment booking, Stripe payments with webhook verification, image uploads via S3, transactional email via Mailgun, push notifications, and full Swagger API docs for both admin and app — deployed on AWS with Railway for staging.",
    solution:
      "NestJS backend + PostgreSQL. Implemented product types, service types, booking flow with date selection, Stripe webhook verification, S3 image upload pipeline, Mailgun integration, notification system. React + Refine.dev admin panel. Full Swagger docs per audience. AWS production, Railway staging.",
    results: [
      "Stripe + webhook payment verification",
      "S3 image upload pipeline",
      "Mailgun transactional mail",
      "Swagger for admin + app APIs",
      "AWS prod + Railway staging",
    ],
    ar: {
      title: "Revona — منصة خدمات السيارات",
      tag: "NestJS · React",
      desc: "منصة خدمات سيارات متعددة المنتجات: أنواع الخدمات، حجز المواعيد، Stripe، S3، Mailgun، إشعارات.",
      challenge:
        "بناء منصة خدمات سيارات مع Stripe Webhook وS3 وMailgun والإشعارات وSwagger API.",
      solution:
        "NestJS + PostgreSQL. Stripe Webhook، S3، Mailgun، إشعارات. React + Refine.dev. AWS إنتاج.",
      results: [
        "التحقق من Stripe Webhook",
        "خط رفع الصور S3",
        "البريد عبر Mailgun",
        "Swagger للإدارة والتطبيق",
        "AWS إنتاج + Railway تطوير",
      ],
    },
  },

  {
    id: 1,
    category: "web",
    projectId: "trumeid",
    tech: "react",
    large: false,
    img: "https://www.abcodify.com/images/trumeid.png",
    tag: "React · KYC",
    title: "Trumeid — KYC Verification",
    desc: "Mobile-responsive KYC platform for document validation and face recognition using Sumsub. Users verify identity and authenticity through the platform.",
    stack: [
      "React",
      "Sumsub",
      "Face Recognition",
      "Document Verification",
      "Node.js",
    ],
    url: null,
    challenge:
      "Build a mobile-responsive KYC platform for document card validation and face recognition, letting companies verify user authenticity via Sumsub third-party integration.",
    solution:
      "React frontend integrated with Sumsub SDK for face recognition and document verification flows. Mobile-first responsive design. Node.js backend handles verification callbacks and user state management.",
    results: [
      "Sumsub SDK integration",
      "Face recognition flow",
      "Document verification",
      "Mobile-responsive design",
    ],
    ar: {
      title: "Trumeid — التحقق من الهوية",
      tag: "React · KYC",
      desc: "منصة KYC متجاوبة للتحقق من الوثائق والتعرف على الوجه باستخدام Sumsub.",
      challenge:
        "بناء منصة KYC للتحقق من البطاقات والتعرف على الوجه عبر Sumsub.",
      solution:
        "React + Sumsub SDK. تصميم متجاوب. Node.js يدير استجابات التحقق.",
      results: [
        "تكامل Sumsub SDK",
        "تدفق التعرف على الوجه",
        "التحقق من الوثائق",
        "تصميم متجاوب",
      ],
    },
  },

  {
    id: 2,
    category: "web",
    tech: "react",
    projectId: "trumeid-dashboard",
    large: false,
    img: "https://www.abcodify.com/images/trumeid-dashboard.png",
    tag: "React · Vite",
    title: "Trumeid Dashboard",
    desc: "Company dashboard to create user login links, manage verification flows, and let users check and validate their authenticity.",
    stack: ["React", "Vite", "Node.js", "REST API", "JWT"],
    url: null,
    challenge:
      "Company dashboard where businesses create user login links so their users can validate authenticity through the Trumeid verification system.",
    solution:
      "React + Vite dashboard with Node.js backend. Create, manage and share user login links. Real-time verification status, user management, and audit logs.",
    results: [
      "Login link generator",
      "Real-time verification status",
      "User management",
      "Company-level access control",
    ],
    ar: {
      title: "لوحة تحكم Trumeid",
      tag: "React · Vite",
      desc: "لوحة تحكم للشركات لإنشاء روابط دخول المستخدمين وإدارة تدفقات التحقق.",
      challenge: "لوحة تحكم للشركات لإنشاء روابط دخول للتحقق من الهوية.",
      solution:
        "React + Vite + Node.js. إنشاء وإدارة روابط الدخول وتتبع التحقق.",
      results: [
        "مولد روابط الدخول",
        "تتبع التحقق الفوري",
        "إدارة المستخدمين",
        "تحكم على مستوى الشركة",
      ],
    },
  },

  {
    id: 3,
    category: "web",
    tech: "vue",
    large: false,
    projectId: "invoice",
    img: "",
    tag: "Vue · Billing",
    title: "Invoice Management System",
    desc: "Vue.js invoice management with billing workflows, role-based authentication, and client management for streamlined financial operations.",
    stack: ["Vue.js", "Node.js", "PostgreSQL", "JWT Auth"],
    url: null,
    challenge:
      "Invoice management system with billing workflows, proper role-based auth, client management.",
    solution:
      "Full invoice CRUD, client management, billing workflow, JWT RBAC, status tracking (draft/sent/paid).",
    results: [
      "Full invoice CRUD",
      "Role-based auth",
      "Client billing",
      "Status tracking",
    ],
    ar: {
      title: "نظام إدارة الفواتير",
      tag: "Vue · فوترة",
      desc: "إدارة فواتير Vue.js مع تدفقات الفوترة والمصادقة المبنية على الأدوار وإدارة العملاء.",
      challenge:
        "نظام إدارة فواتير مع تدفقات الفوترة والمصادقة المبنية على الأدوار.",
      solution: "CRUD كامل للفواتير. إدارة العملاء. JWT RBAC. تتبع الحالة.",
      results: [
        "CRUD كامل للفواتير",
        "مصادقة مبنية على الأدوار",
        "فوترة العملاء",
        "تتبع الحالة",
      ],
    },
  },

  {
    id: 4,
    category: "web",
    projectId: "usalottomax-admin",
    tech: "react",
    large: false,
    img: "https://www.abcodify.com/images/usalottomax-admin.png",
    tag: "Refine.dev · Admin",
    title: "Admin Dashboard — Lottomax",
    desc: "Admin panel to view and create draws for UsaLottomax. Complete CRUD for draw management built with Refine.dev.",
    stack: ["Refine.dev", "React", "Node.js", "REST API", "CRUD"],
    url: null,
    challenge:
      "Admin dashboard for UsaLottomax where administrators can view, create, update and delete lottery draws.",
    solution:
      "Refine.dev-based admin with full CRUD for draw management. Draw type configuration, scheduling, result entry, and status management.",
    results: [
      "Full CRUD for draws",
      "Draw type management",
      "Scheduling + results",
      "Refine.dev architecture",
    ],
    ar: {
      title: "لوحة إدارة Lottomax",
      tag: "Refine.dev · إدارة",
      desc: "لوحة تحكم إدارية لعرض وإنشاء السحوبات مع CRUD كامل باستخدام Refine.dev.",
      challenge: "لوحة إدارية لـ UsaLottomax لإدارة السحوبات بالكامل.",
      solution:
        "Refine.dev مع CRUD كامل للسحوبات. تهيئة الأنواع والجدولة والنتائج.",
      results: [
        "CRUD كامل للسحوبات",
        "إدارة أنواع السحوبات",
        "الجدولة والنتائج",
        "معمارية Refine.dev",
      ],
    },
  },

  {
    id: 5,
    category: "backend",
    tech: "vue",
    projectId: "icecream",
    large: true,
    img: "https://www.abcodify.com/images/icecream.png",
    tag: "Vue · Multi-Vendor",
    title: "Ice Cream Inventory System",
    desc: "Multi-vendor platform — vendors purchase and supply ice cream, manage pricing, daily end-of-day billing, sales tracking, supplier charges and inventory return management.",
    stack: ["Vue.js", "NestJS", "PostgreSQL", "Billing Engine", "TypeScript"],
    url: null,
    challenge:
      "Multi-vendor ice cream inventory system: vendors purchase, supply to suppliers, manage pricing, run end-of-day billing, charge suppliers for sales, track return inventory.",
    solution:
      "Vue.js + NestJS + PostgreSQL. Multi-vendor architecture with independent dashboards. Inventory flows, daily pricing, end-of-day automated billing, sales reports, return tracking.",
    results: [
      "Multi-vendor architecture",
      "End-of-day automated billing",
      "Sales tracking + reporting",
      "Return inventory management",
    ],
    ar: {
      title: "نظام مخزون الآيس كريم",
      tag: "Vue · متعدد البائعين",
      desc: "منصة متعددة البائعين للآيس كريم: شراء، توريد، فوترة يومية، تتبع مبيعات، مرتجعات.",
      challenge:
        "نظام مخزون متعدد البائعين: شراء، توريد، أسعار، فوترة يومية، مرتجعات.",
      solution:
        "Vue.js + NestJS + PostgreSQL. لوحات مستقلة للبائعين. تدفقات الشراء والتوريد والفوترة الآلية.",
      results: [
        "معمارية متعددة البائعين",
        "فوترة آلية يومية",
        "تتبع المبيعات والتقارير",
        "إدارة مرتجعات المخزون",
      ],
    },
  },

  {
    id: 6,
    category: "web",
    projectId: "aqarlink",
    tech: "react",
    large: false,
    img: "https://www.abcodify.com/images/aqarlink.png",
    tag: "React · NestJS",
    title: "AqarLink — Rental Platform",
    desc: "Automated rental platform with PMS integration for real-time booking sync and streamlined property management. Built end-to-end as standalone developer.",
    stack: ["React", "NestJS", "PostgreSQL", "PMS API", "Vercel", "Railway"],
    url: null,
    challenge:
      "Automated rental platform with PMS integration for real-time booking sync, multi-tenant property management, and streamlined workflows.",
    solution:
      "React.js + NestJS + PostgreSQL. PMS API integration for real-time booking sync. Role-based access, property listing, subscription workflows. Vercel + Railway deployment.",
    results: [
      "Real-time PMS booking sync",
      "Multi-tenant property management",
      "Standalone delivery",
      "Vercel + Railway deployment",
    ],
    ar: {
      title: "AqarLink — منصة الإيجار",
      tag: "React · NestJS",
      desc: "منصة إيجار مؤتمتة مع تكامل PMS لمزامنة الحجوزات الفورية وإدارة العقارات.",
      challenge:
        "منصة إيجار مؤتمتة مع PMS لمزامنة الحجوزات وإدارة متعددة المستأجرين.",
      solution:
        "React.js + NestJS + PostgreSQL. تكامل PMS. تحكم مبني على الأدوار. Vercel + Railway.",
      results: [
        "مزامنة PMS الفورية",
        "إدارة متعددة المستأجرين",
        "تسليم مستقل",
        "نشر Vercel + Railway",
      ],
    },
  },

  {
    id: 7,
    category: "web",
    projectId: "discord-bot",
    tech: "react",
    large: false,
    img: "",
    tag: "Python · React",
    title: "Discord Mod Notifier Bot",
    desc: "Python Discord bot + React frontend. Subscribe to games and auto-receive notifications when mods are available. Manage subscriptions via Discord or web UI.",
    stack: [
      "Python",
      "Discord.py",
      "React",
      "Node.js",
      "REST API",
      "PostgreSQL",
    ],
    url: null,
    challenge:
      "Discord bot that auto-notifies subscribed users when game mods become available. Manage subscriptions from both Discord and a React web frontend.",
    solution:
      "Python Discord bot polls mod availability and fires DM notifications. React frontend for web subscription management. Node.js API bridges both interfaces.",
    results: [
      "Auto-notification when mod available",
      "Discord command management",
      "React web frontend",
      "Dual-channel subscriptions",
    ],
    ar: {
      title: "بوت Discord للإشعارات",
      tag: "Python · React",
      desc: "بوت Discord بـ Python + واجهة React. اشترك في الألعاب واستقبل إشعارات عند توفر Mods.",
      challenge:
        "بوت Discord يشعر المشتركين تلقائياً عند توفر Mods مع إدارة عبر Discord والويب.",
      solution:
        "بوت Python يرصد Mods ويرسل إشعارات. React للإدارة. Node.js API يربط الواجهتين.",
      results: [
        "إشعار تلقائي عند توفر Mod",
        "إدارة عبر Discord",
        "واجهة ويب React",
        "اشتراكات ثنائية القناة",
      ],
    },
  },

  {
    id: 8,
    category: "ai",
    tech: "angular",
    large: false,
    projectId: "ai-seo",
    img: "https://www.abcodify.com/images/ai-seo.png",
    tag: "Angular · AI",
    title: "AI + SEO Optimisation",
    desc: "AI image analysis auto-fills product metadata. Angular app with SEO best practices, robots.txt, JSON-LD schema and Google crawler structure.",
    stack: ["Angular", "AI / LLM", "Node.js", "SEO", "robots.txt", "JSON-LD"],
    url: null,
    challenge:
      "Integrate AI into an Angular product to auto-fill image metadata and update site structure for Google crawler and SEO.",
    solution:
      "LLM image analysis pipeline auto-populates product descriptions, alt text and metadata. Updated robots.txt, sitemap, JSON-LD schema markup.",
    results: [
      "AI auto-fills metadata",
      "Google crawler coverage",
      "JSON-LD schema",
      "robots.txt updated",
    ],
    ar: {
      title: "تكامل الذكاء الاصطناعي وSEO",
      tag: "Angular · ذكاء اصطناعي",
      desc: "تحليل صور بالذكاء الاصطناعي يملأ بيانات المنتجات تلقائياً. Angular مع أفضل ممارسات SEO.",
      challenge:
        "دمج الذكاء الاصطناعي في Angular لملء بيانات الصور تلقائياً وتحسين SEO.",
      solution:
        "LLM يحلل الصور ويملأ الأوصاف تلقائياً. تحديث robots.txt وJSON-LD وخريطة الموقع.",
      results: [
        "الذكاء الاصطناعي يملأ البيانات",
        "تغطية Google Crawler",
        "مخطط JSON-LD",
        "تحديث robots.txt",
      ],
    },
  },

  {
    id: 9,
    category: "web",
    tech: "react",
    large: false,
    img: "https://www.abcodify.com/images/usalottomax.png",
    projectId: "usalottomax",
    tag: "React · Node.js",
    title: "UsaLottomax — Draws Client",
    desc: "Client web app for viewing draws of defined types, filtered by any date or time — plus integrated live TV streaming. Built from scratch, frontend and backend.",
    stack: ["React", "Node.js", "WebSockets", "Live TV API", "PostgreSQL"],
    url: null,
    challenge:
      "Client-facing lottery draws app where users can view draws by type and date/time filter, with live TV stream integration — built from scratch.",
    solution:
      "React frontend with real-time draw updates via WebSocket. Node.js backend serving draw data by type and date range. Live TV streaming API for concurrent viewing.",
    results: [
      "Real-time draw tracking",
      "Date/time filtering",
      "Live TV integration",
      "Full-stack from scratch",
    ],
    ar: {
      title: "UsaLottomax — عميل السحوبات",
      tag: "React · Node.js",
      desc: "تطبيق ويب لعرض السحوبات حسب النوع والتاريخ والوقت مع بث تلفزيوني مباشر.",
      challenge: "تطبيق عميل لسحوبات اليانصيب مع فلترة وتكامل البث.",
      solution:
        "React + Node.js + WebSocket. بيانات السحوبات حسب النوع والنطاق الزمني. API البث.",
      results: [
        "تتبع السحوبات الفوري",
        "فلترة التاريخ والوقت",
        "تكامل البث المباشر",
        "مكتمل من الصفر",
      ],
    },
  },

  {
    id: 10,
    category: "web",
    tech: "angular",
    projectId: "glass-calc",
    large: false,
    img: "",
    tag: "Angular · TypeScript",
    title: "Glass Calculator",
    desc: "Migrated entire codebase from JavaScript to TypeScript — improving type safety, maintainability and developer experience.",
    stack: ["Angular", "TypeScript", "JS → TS Migration"],
    url: null,
    challenge:
      "Migrate an existing Angular Glass Calculator from JavaScript to TypeScript without breaking any calculation logic.",
    solution:
      "Systematic type annotation of all components, services and utilities. Interfaces for calculation models. Strict mode enabled.",
    results: [
      "Full JS → TS migration",
      "Strict TypeScript mode",
      "Zero calculation regressions",
      "Improved maintainability",
    ],
    ar: {
      title: "حاسبة الزجاج",
      tag: "Angular · TypeScript",
      desc: "ترحيل كامل من JavaScript إلى TypeScript لتحسين سلامة الأنواع وقابلية الصيانة.",
      challenge:
        "ترحيل حاسبة زجاج Angular من JS إلى TypeScript دون كسر الحسابات.",
      solution:
        "تعليق نوع منهجي. واجهات لنماذج الحسابات. الوضع الصارم مفعّل.",
      results: [
        "ترحيل كامل JS إلى TS",
        "وضع TypeScript الصارم",
        "صفر انحدارات",
        "قابلية صيانة محسنة",
      ],
    },
  },

  {
    id: 11,
    category: "web",
    tech: "vue",
    projectId: "usalottomax",
    large: true,
    img: "https://www.abcodify.com/images/usalottomax.png",
    tag: "Vue · WebSockets",
    title: "UsaLottomax",
    desc: "Full-stack real-time lottery draw tracking and Live TV streaming platform, built for performance and scalability under high concurrent load.",
    stack: [
      "Vue.js",
      "Node.js",
      "WebSockets",
      "Live Streaming API",
      "PostgreSQL",
    ],
    url: null,
    challenge:
      "Real-time lottery draw tracking with Live TV streaming, built for performance under high concurrent load.",
    solution:
      "Vue.js with reactive real-time WebSocket updates. Node.js backend with live feeds. Live streaming API. Optimised for low latency and mobile.",
    results: [
      "Real-time draw tracking",
      "Live TV streaming",
      "Scalable concurrent users",
      "Mobile-responsive",
    ],
    ar: {
      title: "UsaLottomax",
      tag: "Vue · WebSockets",
      desc: "منصة تتبع سحوبات اليانصيب الفورية والبث التلفزيوني المباشر للأداء العالي.",
      challenge:
        "تتبع سحوبات فوري مع بث تلفزيوني مباشر للأداء تحت الحمل العالي.",
      solution:
        "Vue.js + WebSocket. Node.js + تغذيات حية. API البث. محسّن للكمون المنخفض.",
      results: [
        "تتبع السحوبات الفوري",
        "بث تلفزيوني مباشر",
        "مستخدمون متزامنون",
        "متجاوب مع الهاتف",
      ],
    },
  },
  
  {
    id: 12,
    category: "web",
    tech: "next",
    projectId: "pitchlane",
    large: false,
    img: "https://www.abcodify.com/images/pitchlane.png",
    tag: "Next.js · Node.js",
    title: "Pitchlane",
    desc: "Added Notification Events, Notification Panel, and customizable page colours in their viewer. Next.js + Express Node server.",
    stack: [
      "Next.js",
      "Node.js",
      "Express",
      "Notifications",
      "UI Customization",
    ],
    url: null,
    challenge:
      "Extend an existing Next.js platform with a notification events system, notification panel UI, and page colour customization in the viewer.",
    solution:
      "Built notification event triggers and a real-time notification panel. Theming system for page colour customization. Integrated with existing Express backend.",
    results: [
      "Notification events system",
      "Notification panel UI",
      "Page colour customization",
      "Next.js + Express integration",
    ],
    ar: {
      title: "Pitchlane",
      tag: "Next.js · Node.js",
      desc: "إضافة أحداث الإشعارات ولوحتها وتخصيص ألوان الصفحة. Next.js + Express.",
      challenge: "توسيع منصة Next.js بنظام إشعارات ولوحة وتخصيص ألوان.",
      solution:
        "أحداث إشعارات فورية ولوحة. نظام سمات لألوان الصفحة. تكامل مع Express.",
      results: [
        "نظام أحداث الإشعارات",
        "واجهة لوحة الإشعارات",
        "تخصيص ألوان الصفحة",
        "تكامل Next.js + Express",
      ],
    },
  },

  {
    id: 13,
    projectId: "raap-builder",
    category: "web",
    tech: "react",
    large: false,
    img: "",
    tag: "React · UI",
    title: "Raap Builder",
    desc: "UI responsiveness improvements on a calculation site — ensuring existing complex calculation logic remained intact while making the interface fully responsive.",
    stack: ["React", "CSS", "Responsive Design", "UI Refactor"],
    url: null,
    challenge:
      "Make an existing React calculation site fully mobile-responsive without touching the underlying calculation logic.",
    solution:
      "Audited all breakpoints, refactored layout components with responsive CSS, fixed mobile navigation and form layouts. Calculation logic untouched.",
    results: [
      "Fully responsive layout",
      "Mobile navigation fixed",
      "Preserved calculation logic",
      "Clean breakpoint system",
    ],
    ar: {
      title: "Raap Builder",
      tag: "React · واجهة",
      desc: "تحسين استجابة الواجهة على موقع حسابات مع الحفاظ على منطق الحسابات.",
      challenge: "جعل موقع حسابات React متجاوباً دون المساس بمنطق الحسابات.",
      solution:
        "مراجعة نقاط التوقف، إعادة تصميم التخطيط، إصلاح التنقل على الهاتف.",
      results: [
        "تخطيط متجاوب بالكامل",
        "تنقل الهاتف مصلح",
        "منطق الحسابات محفوظ",
        "نظام نقاط توقف نظيف",
      ],
    },
  },

  {
    id: 14,
    category: "web",
    projectId: "admin-aqarlink",
    tech: "react",
    large: false,
    img: "https://www.abcodify.com/images/admin-aqarlink.png",
    tag: "Refine.dev · Ant Design",
    title: "Admin Panel — AqarLink",
    desc: "Complete standalone admin panel — User, Property, Subscription and Configuration Management built with Refine.dev and Ant Design.",
    stack: ["React", "Refine.dev", "Ant Design", "TypeScript", "JWT"],
    url: null,
    challenge:
      "Complete admin panel from scratch covering User, Property, Subscription and Configuration Management as standalone developer.",
    solution:
      "Refine.dev + Ant Design. Comprehensive CRUD, role-based access control, real-time data tables, JWT auth.",
    results: [
      "CRUD across 5+ modules",
      "Role-based access",
      "Ant Design UI system",
      "JWT authentication",
    ],
    ar: {
      title: "لوحة الإدارة — AqarLink",
      tag: "Refine.dev · Ant Design",
      desc: "لوحة إدارة مستقلة كاملة للمستخدمين والعقارات والاشتراكات والإعدادات.",
      challenge:
        "لوحة إدارة كاملة من الصفر للمستخدمين والعقارات والاشتراكات والإعدادات.",
      solution:
        "Refine.dev + Ant Design. CRUD شامل. تحكم مبني على الأدوار. جداول فورية. JWT.",
      results: [
        "CRUD عبر 5+ وحدات",
        "تحكم الوصول",
        "نظام Ant Design",
        "مصادقة JWT",
      ],
    },
  },

  {
    id: 15,
    category: "ecommerce",
    tech: "react",
    projectId: "admiaro",
    large: true,
    img: "https://www.abcodify.com/images/admiaro.png",
    tag: "React · NestJS · E-Commerce",
    title: "Admiaro — Frozen Seafood Platform",
    desc: "Full-stack e-commerce platform for frozen seafood distribution — handles sales, purchasing, inventory management, and supply chain with a clean admin interface.",
    stack: [
      "React",
      "NestJS",
      "PostgreSQL",
      "Inventory Management",
      "E-Commerce",
      "TypeScript",
    ],
    url: null,
    challenge:
      "Build a complete e-commerce and distribution platform for frozen seafood. Needs full inventory management, purchase and sales flows, supplier management, and real-time stock tracking across the supply chain.",
    solution:
      "React frontend with NestJS backend and PostgreSQL. Implemented product catalogue with seafood-specific attributes, purchase order management, sales order workflows, real-time inventory tracking, supplier management, and stock level alerts. Full admin dashboard for operations.",
    results: [
      "Full purchase + sales order flows",
      "Real-time inventory tracking",
      "Supplier management system",
      "Stock level alerts",
      "Seafood-specific product catalogue",
    ],
    ar: {
      title: "Admiaro — منصة المأكولات البحرية",
      tag: "React · NestJS · تجارة",
      desc: "منصة تجارة إلكترونية لتوزيع المأكولات البحرية المجمدة مع المخزون والمبيعات والمشتريات.",
      challenge:
        "منصة تجارة إلكترونية وتوزيع للمأكولات البحرية مع إدارة المخزون والموردين.",
      solution:
        "React + NestJS + PostgreSQL. كتالوج منتجات. أوامر شراء ومبيعات. تتبع مخزون فوري.",
      results: [
        "تدفقات الشراء والمبيعات",
        "تتبع المخزون الفوري",
        "إدارة الموردين",
        "تنبيهات المخزون",
        "كتالوج متخصص",
      ],
    },
  },

  {
    id: 16,
    category: "native",
    projectId: "order-app",
    tech: "native",
    large: false,
    img: "https://www.abcodify.com/images/order-app.png",
    tag: "React Native · NestJS",
    title: "Order Management & Delivery System",
    desc: "Complete multi-app delivery ecosystem — Customer, Rider, and Restaurant apps powered by a single NestJS backend with real-time order tracking.",
    stack: [
      "React Native",
      "NestJS",
      "PostgreSQL",
      "Maps API",
      "Real-time Tracking",
    ],
    url: null,
    challenge:
      "Build a fast, scalable multi-app system for customers, riders, and restaurants with real-time order tracking and efficient delivery handling.",
    solution:
      "Three React Native apps connected to a centralized NestJS backend. Map-based tracking, optimized order flow, improved UI/UX for smoother interactions.",
    results: [
      "Seamless multi-app ecosystem",
      "Real-time order & rider tracking",
      "Faster delivery workflow",
      "Improved UI responsiveness",
      "Scalable backend architecture",
    ],
    ar: {
      title: "نظام إدارة الطلبات والتوصيل",
      tag: "React Native · NestJS",
      desc: "منظومة توصيل: تطبيقات العميل والسائق والمطعم بخادم NestJS واحد.",
      challenge:
        "نظام متعدد التطبيقات للعملاء والسائقين والمطاعم مع تتبع الطلبات الفوري.",
      solution:
        "ثلاثة تطبيقات React Native بخادم NestJS. تتبع خريطة. تدفق طلبات محسّن.",
      results: [
        "منظومة متعددة التطبيقات",
        "تتبع الطلب والسائق الفوري",
        "توصيل أسرع",
        "UI محسّن",
        "معمارية قابلة للتوسع",
      ],
    },
  },

  {
    id: 17,
    category: "services",
    tech: "react",
    projectId: "assistmein",
    large: true,
    img: "https://www.abcodify.com/images/assistmein.png",
    tag: "React · NestJS · Services",
    title: "Assistme.in — Service Marketplace",
    desc: "Two-sided service marketplace: providers create listings and customers book — plus a reverse-bid model where customers post needs, providers bid, then chat and confirm.",
    stack: [
      "React",
      "NestJS",
      "PostgreSQL",
      "Real-time Chat",
      "Socket.io",
      "Bidding Engine",
    ],
    url: null,
    challenge:
      "Build a dual-flow service marketplace: (1) providers list services and customers browse/book if they match requirements, and (2) customers post service requests, providers bid, negotiate via real-time chat, and confirm orders. Also includes car booking as a service vertical.",
    solution:
      "React frontend with NestJS backend. Implemented dual service flow — listing-based booking and reverse-bid marketplace. Real-time chat powered by Socket.io for provider-customer negotiation. Car booking vertical with provider listings and availability management. Bidding engine with bid comparison, chat confirmation, and order management.",
    results: [
      "Dual-flow marketplace (listing + reverse-bid)",
      "Real-time chat via Socket.io",
      "Car booking service vertical",
      "Bid management + comparison",
      "Provider listing + customer request flows",
    ],
    ar: {
      title: "Assistme.in — سوق الخدمات",
      tag: "React · NestJS · خدمات",
      desc: "سوق خدمات ثنائي الاتجاه: قوائم المزودين وحجز العملاء + مزايدة عكسية مع محادثة فورية.",
      challenge:
        "سوق خدمات بتدفقين: قوائم وحجز + مزايدة عكسية مع محادثة Socket.io وحجز سيارات.",
      solution:
        "React + NestJS. تدفق خدمة مزدوج. محادثة Socket.io. حجز سيارات. محرك مزايدة.",
      results: [
        "سوق مزدوج التدفق",
        "محادثة فورية Socket.io",
        "خدمة حجز سيارات",
        "إدارة المزايدات",
        "تدفقات القوائم والطلبات",
      ],
    },
  },

  {
    id: 18,
    category: "backend",
    tech: "react",
    projectId: "madina-stand",
    large: true,
    img: "https://www.abcodify.com/images/madina-stand.png",
    tag: "React · Node.js · QR System",
    title: "Madina Motorcycle Stand Management System",
    desc: "Complete motorcycle stand management system with QR-based check-in/out, automated and manual checkout, receipt generation, lost ticket handling, and full admin control over pricing and staff.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "QR Code Scanner",
      "Receipt Generator",
      "Admin Panel",
      "Authentication",
    ],
    url: null,
    challenge:
      "Build a real-time motorcycle stand system with QR-based entry/exit, automatic checkout calculation, manual override, receipt generation, lost receipt handling, and full admin control over pricing and staff management.",
    solution:
      "Developed a full-stack system using React and Node.js with MongoDB. Implemented QR code generation and scanning for entry/exit tracking, automatic time-based billing, manual checkout override, receipt generation system, and lost ticket recovery mechanism. Admin panel allows dynamic pricing control and full CRUD operations for staff management.",
    results: [
      "QR-based check-in & checkout",
      "Auto + manual billing system",
      "Receipt generation + recovery system",
      "Admin-controlled pricing",
      "Staff management (create/delete roles)",
      "Real-time stand operations",
    ],
    ar: {
      title: "نظام إدارة موقف الدراجات — Madina",
      tag: "React · Node.js · QR",
      desc: "نظام متكامل لإدارة مواقف الدراجات باستخدام QR مع الفوترة التلقائية وإدارة الموظفين.",
      challenge:
        "نظام موقف دراجات مع QR وتسجيل دخول وخروج وفوترة تلقائية واسترجاع الإيصالات.",
      solution:
        "React + Node.js + MongoDB مع نظام QR وفوترة تلقائية ولوحة تحكم للإدارة.",
      results: [
        "تسجيل دخول وخروج عبر QR",
        "فوترة تلقائية ويدوية",
        "نظام إيصالات واسترجاع",
        "تحكم كامل من الإدارة",
      ],
    },
  },
  
  {
    id: 19,
    category: "web",
    tech: "next",
    projectId: "portfolio",
    large: false,
    img: "https://www.abcodify.com/images/portfolio.png",
    tag: "Next.js · MongoDB · Auth",
    title: "Developer Portfolio Platform",
    desc: "Modern portfolio built with Next.js featuring dynamic project system, MongoDB integration, authentication, and admin-controlled content management.",
    stack: [
      "Next.js",
      "MongoDB",
      "NextAuth / JWT",
      "Tailwind CSS",
      "Framer Motion",
    ],
    url: null,
    challenge:
      "Create a modern, scalable portfolio system with dynamic project rendering, authentication, and database-driven content instead of static hardcoding.",
    solution:
      "Built using Next.js with MongoDB for dynamic data storage. Implemented authentication system for admin access, dynamic project pages, reusable components, and smooth UI animations using Framer Motion.",
    results: [
      "Dynamic project rendering",
      "MongoDB database integration",
      "Authentication system",
      "Reusable component architecture",
      "Modern UI with animations",
    ],
    ar: {
      title: "منصة بورتفوليو للمطور",
      tag: "Next.js · MongoDB",
      desc: "بورتفوليو حديث مع مشاريع ديناميكية ونظام تسجيل دخول وقاعدة بيانات.",
      challenge:
        "إنشاء بورتفوليو ديناميكي مع قاعدة بيانات ونظام تسجيل دخول.",
      solution:
        "Next.js + MongoDB مع صفحات ديناميكية ونظام مصادقة.",
      results: [
        "عرض مشاريع ديناميكي",
        "تكامل MongoDB",
        "نظام تسجيل دخول",
        "واجهة حديثة",
      ],
    },
  }
];

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) return null;

  const project = PROJECTS.find((p) => p.projectId === slug);

  if (!project) {
    return <div className="text-white p-10">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-primary/30 py-20 xl:py-36 text-center xl:text-left relative overflow-auto h-6">
      
      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        className="hidden xl:flex absolute bottom-0 -left-[300px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto flex flex-col xl:flex-row gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold mb-6"
          >
            {project.title}
          </motion.h1>

          <p className="text-white/70 mb-6">{project.desc}</p>

          {/* STACK */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center xl:justify-start">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-white/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CHALLENGE */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Challenge</h3>
            <p className="text-white/60">{project.challenge}</p>
          </div>

          {/* SOLUTION */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Solution</h3>
            <p className="text-white/60">{project.solution}</p>
          </div>

          {/* RESULTS */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Results</h3>
            <ul className="list-disc list-inside text-white/60">
              {project.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {project.img && (
          <div className="relative w-full max-w-xl h-[400px]">
            <Image
              src={`${project.img}`}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}