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
        thumbnail: '/projects/thumbnail/vision-guard-ai.webp',
        longThumbnail: '/projects/long/vision-guard-ai.webp',
        images: [
            '/projects/images/vision-guard-ai-1.webp',
            '/projects/images/vision-guard-ai-2.webp',
        ],
    },
    {
        title: 'RentMate',
        slug: 'rentmate',
        liveUrl: '',
        year: 2025,
        description: `
            A rental property management platform with role-based dashboards for landlords and tenants, handling listings, payments, and document management.<br/><br/>

            Key Features:<br/>
            <ul>
                <li>🔐 Role-based dashboards with dynamic UI rendering based on user permissions</li>
                <li>🏠 Property listing, search, and detail pages with fully responsive layouts</li>
                <li>📋 Multi-step forms for posting rental properties and submitting maintenance requests</li>
                <li>💳 Backend API integration for authentication, payments, and document management</li>
            </ul>
        `,
        role: `
            Frontend Developer<br/><br/>
            <ul>
                <li>✅ Developed role-based dashboards for landlords and tenants</li>
                <li>🎨 Converted Figma designs into pixel-accurate, production-ready React components</li>
                <li>🔗 Integrated frontend with backend APIs for authentication, payments, and documents</li>
                <li>📱 Built multi-step forms and fully responsive layouts</li>
            </ul>
        `,
        techStack: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'ShadCN/UI',
            'REST APIs',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/rentmate.webp',
        longThumbnail: '/projects/long/rentmate.webp',
        images: [
            '/projects/images/rentmate-1.webp',
            '/projects/images/rentmate-2.webp',
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
        thumbnail: '/projects/thumbnail/devision.webp',
        longThumbnail: '/projects/long/devision.webp',
        images: [
            '/projects/images/devision-1.webp',
            '/projects/images/devision-2.webp',
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
