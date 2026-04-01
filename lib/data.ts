import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'nhatnam0110@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Nhat Nam, I am reaching out to you because...',

    upworkProfile: 'https://www.upwork.com/freelancers/nhatnam0110',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/nhatnam0110' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/namle0110' },
    { name: 'facebook', url: 'https://www.facebook.com/nam.le.01102002' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Vite', icon: '/logo/vite.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Sass', icon: '/logo/sass.png' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Spring Boot', icon: '/logo/spring.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Figma', icon: '/logo/figma.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Vision-Guard AI',
        slug: 'vision-guard-ai',
        liveUrl: '',
        year: 2025,
        description: `
            A real-time monitoring and analytics dashboard for an AI-powered industrial inspection system used in semiconductor manufacturing.<br/><br/>

            Key Features:<br/>
            <ul>
                <li>📊 Real-time visualization of AI metrics: defect rates, confidence scores, and inference latency</li>
                <li>🔌 Low-latency data updates via tRPC and REST API integration</li>
                <li>🧩 Reusable component library built with ShadCN/UI and Tailwind CSS</li>
                <li>📱 Fully responsive layout optimized across screen sizes</li>
            </ul>
        `,
        role: `
            Frontend Developer (Industry Capstone – Intel Vietnam)<br/><br/>
            <ul>
                <li>✅ Built scalable frontend architecture using React, TypeScript, and Vite</li>
                <li>🎨 Created reusable UI components with Tailwind CSS and ShadCN/UI</li>
                <li>🔗 Integrated frontend with backend inference services via tRPC and REST APIs</li>
                <li>🤝 Collaborated with AI engineers to align UI behavior with model outputs and factory workflows</li>
            </ul>
        `,
        techStack: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'ShadCN/UI',
            'tRPC',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/aicreek2.0.png',
        longThumbnail: '/projects/long/aicreek2.0.png',
        images: [
            '/projects/images/aicreek2.0-1.png',
            '/projects/images/aicreek2.0-2.png',
            '/projects/images/aicreek2.0-3.png',
            '/projects/images/aicreek2.0-4.png',
            '/projects/images/aicreek2.0-5.png',
        ],
    },
    {
        title: 'FuelWise',
        slug: 'fuelwise',
        liveUrl: 'https://fuelwise-beta.vercel.app',
        year: 2025,
        description: `
            A personal AI-powered nutrition coach web app that helps users track their diet, generate recipes, and reach their fitness goals.<br/><br/>

            Key Features:<br/>
            <ul>
                <li>🎯 Personalized macro & calorie targets via TDEE calculation</li>
                <li>🤖 AI recipe generation powered by Claude (Anthropic)</li>
                <li>🍽️ Meal logging with food search via Open Food Facts API</li>
                <li>📊 Daily macro tracking with interactive progress rings</li>
                <li>⚖️ Weight history & progress charts</li>
                <li>📅 Full meal-level food history with date filters</li>
                <li>🌐 Bilingual UI (English / Vietnamese)</li>
                <li>📱 PWA-ready, mobile-first design</li>
            </ul>
        `,
        role: `
            Sole Developer<br/><br/>
            <ul>
                <li>✅ Designed and built the entire app from scratch — UI/UX, architecture, and deployment</li>
                <li>🤖 Integrated Claude API (Anthropic) for personalized AI recipe generation</li>
                <li>🍎 Connected Open Food Facts API for food search and meal logging</li>
                <li>🗂️ Architected global state management with Zustand for nutrition and user data</li>
                <li>🎨 Built a mobile-first, PWA-ready interface with Tailwind CSS and Framer Motion animations</li>
                <li>🚀 Deployed to Vercel with full CI/CD pipeline</li>
            </ul>
        `,
        techStack: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'Zustand',
            'Framer Motion',
            'Claude API',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/fuelwise.png',
        longThumbnail: '/projects/long/fuelwise.png',
        images: [
            '/projects/images/fuelwise-1.png',
            '/projects/images/fuelwise-2.png',
            '/projects/images/fuelwise-3.png',
            '/projects/images/fuelwise-4.png',
        ],
    },
    {
        title: 'RentMate',
        slug: 'rentmate',
        liveUrl: '',
        year: 2025,
        description: `
            A full-stack rental property management platform connecting tenants, landlords, and property managers through role-based dashboards, real-time communication, and automated workflows.<br/><br/>

            Key Features:<br/>
            <ul>
                <li>🔐 Three distinct role-based dashboards (Tenant, Landlord, Property Manager) with server-side role guards and dynamic UI per permission level</li>
                <li>🏠 Property browsing with filters (type, price range, availability, city), paginated listings, and an interactive Leaflet map that focuses on selected properties</li>
                <li>📋 Full rental lifecycle — rent requests, lease agreement generation, security deposit handling, and lease document uploads</li>
                <li>💳 Stripe-powered checkout for monthly rent payments with success and cancellation redirect pages</li>
                <li>🔧 Maintenance request system with urgency levels, photo uploads, and status tracking (Pending → In Progress → Completed)</li>
                <li>💬 Real-time messaging between tenants, landlords, and property managers via WebSocket (STOMP over SockJS)</li>
                <li>🔔 Live in-app notifications via WebSocket with toast alerts and a notification centre with mark-as-read support</li>
                <li>👥 Property manager invitation and assignment flow — landlords invite managers, managers accept or decline, and can relinquish properties</li>
            </ul>
        `,
        role: `
            Frontend Developer<br/><br/>
            <ul>
                <li>✅ Architected the entire Next.js frontend with App Router, server-side layout guards per role, and a shared protected layout with WebSocket context</li>
                <li>🎨 Built all three role dashboards from scratch — Tenant, Landlord, and Property Manager — each with their own stat cards, quick actions, and work queues</li>
                <li>🔗 Integrated with a Spring Boot backend via Axios, handling auth tokens from StackAuth, multipart form uploads, paginated responses, and blob downloads for PDF reports</li>
                <li>💬 Implemented real-time WebSocket connection using STOMP and SockJS, feeding a global notification context accessible across all authenticated pages</li>
                <li>🗺️ Integrated Leaflet maps for property location browsing and static map pins on property detail pages using OpenStreetMap and Nominatim reverse geocoding</li>
            </ul>
        `,
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'ShadCN/UI',
            'WebSocket',
            'Stripe',
            'Leaflet',
            'Spring Boot',
        ],
        thumbnail: '/projects/thumbnail/rentmate.png',
        longThumbnail: '/projects/long/rentmate.png',
        images: [
            '/projects/images/rentmate-1.png',
            '/projects/images/rentmate-2.png',
            '/projects/images/rentmate-3.png',
            '/projects/images/rentmate-4.png',
            '/projects/images/rentmate-5.png',
            '/projects/images/rentmate-6.png',
            '/projects/images/rentmate-7.png',
        ],
    },
    {
        title: 'DEVision',
        slug: 'devision',
        liveUrl: '',
        year: 2024,
        description: `
            A job manager and recruitment platform for companies to manage job postings, applicant pipelines, and recruitment workflows.<br/><br/>

            Key Features:<br/>
            <ul>
                <li>💼 Company dashboard for managing job postings and applicant pipelines</li>
                <li>🔍 Job listing, filtering, and search with an intuitive user experience</li>
                <li>🔐 Full authentication flows: login, registration, and profile management</li>
                <li>📡 Real-time job and applicant data via backend API integration</li>
            </ul>
        `,
        role: `
            Frontend Developer<br/><br/>
            <ul>
                <li>✅ Built company dashboard interfaces for managing job postings and applicants</li>
                <li>🔗 Integrated frontend components with backend APIs for real-time data</li>
                <li>🧩 Applied component-based architecture with clear state separation</li>
                <li>🔐 Developed authentication flows including login, registration, and profile management</li>
            </ul>
        `,
        techStack: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'REST APIs',
            'Git',
        ],
        thumbnail: '/projects/thumbnail/devision.png',
        longThumbnail: '/projects/long/devision.png',
        images: [
            '/projects/images/devision-1.png',
            '/projects/images/devision-2.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer Intern',
        company: 'Intel Vietnam (Industry Capstone)',
        duration: 'Mar 2025 – Sep 2025',
    },
];
