export const profile = {
  name: 'Ramanand Sharma',
  roles: [
    'Backend-Focused Software Engineer',
    'System Design & Architecture',
    'DevOps Engineer',
    'Full-Stack Product Builder',
  ],
  tagline:
    '3.5+ yrs building & shipping production systems end-to-end — Java/Spring Boot, HLD/LLD, databases, DevOps, and mobile — solo, from whiteboard to production.',
  summary:
    "Backend-focused Software Engineer (3.5+ yrs) who designs, builds, and ships production systems end-to-end — Java/Spring Boot APIs, database architecture, HLD/LLD, and DevOps (Docker, CI/CD, cloud) — without needing a large team. Currently the sole engineer behind a live enterprise ticketing platform used daily in field operations. Comfortable owning a product from whiteboard to production: also builds the client (Flutter/iOS/Android) when speed matters. Startup-ready: fast, self-directed, and accountable for outcomes, not just code.",
  location: 'New Delhi, India',
  phone: '+91-8882098915',
  phoneRaw: '+918882098915',
  email: 'sde.ramanand@gmail.com',
  resumeUrl:
    'https://drive.google.com/uc?export=download&id=1MgltyZnst5tz-bvxe6lt2RCq-otKsmXW',
  social: {
    github: 'https://github.com/ramanand7',
    linkedin: 'https://www.linkedin.com/in/ramanand-sharma-b2a720194/',
    portfolio: 'https://portfolio-ruby-mu-92.vercel.app/',
  },
  competitive: [
    { platform: 'LeetCode', handle: 'Guardian · Top 1%', url: 'https://leetcode.com/u/greatguy2008/' },
    { platform: 'CodeChef', handle: '5★ · 2075', url: 'https://www.codechef.com/users/nova_2008' },
    { platform: 'Codeforces', handle: 'Expert · 1672', url: 'https://codeforces.com/profile/greatguy2008' },
  ],
  stats: [
    { label: 'Years Shipping Production Code', value: 3.5, suffix: '+' },
    { label: 'Solo-Owned Live Platform', value: 1, suffix: '', display: 'Winx' },
    { label: 'BFSI Banks Served (CRM)', value: 65, suffix: '+' },
    { label: 'LeetCode Percentile', value: 1, suffix: '%', prefix: 'Top ' },
  ],
};

export const experience = [
  {
    company: 'Excitel Broadband',
    role: 'Software Developer 2 — Backend, Architecture & DevOps',
    period: 'May 2026 — Present',
    duration: 'Current',
    highlight: true,
    achievements: [
      'Sole engineer, start to finish, on Winx — an enterprise ticketing system with role-based access for Managers, Calling Agents, and Field Agents: owned system design (HLD/LLD), Java Spring Boot backend, database architecture, Flutter frontend, web dashboard, and deployment — now live in daily field use.',
      'Built role-based analytics dashboards giving Field Agents, Managers, and Directors real-time KPIs and ticket resolution data for faster decisions.',
      'Architected the backend on PostgreSQL + Supabase with optimized SQL, cron-driven SLA escalation, and Dockerized services for repeatable, zero-downtime releases.',
      'Leading backend and architecture for Ops Geni, a field-sales execution platform: HLD/LLD, API contracts, database schema, and release management.',
      'Driving AI/LLM integrations — intelligent ticket routing and workflow automation — to cut manual operations effort.',
      'Built the DevOps pipeline from scratch: Docker environments, CI/CD, and monitoring, enabling fast, reliable releases with full ownership.',
    ],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Supabase', 'HLD/LLD', 'Docker', 'CI/CD', 'REST APIs', 'RBAC', 'Flutter', 'AI/LLM'],
  },
  {
    company: 'BusinessNext',
    role: 'Engineer — Full Stack Mobile (Flutter / iOS / Android)',
    period: 'Jul 2025 — Apr 2026',
    duration: '10 Mo',
    achievements: [
      'Built a multi-platform enterprise CRM serving 65+ global BFSI banks across Flutter, native iOS (Swift), and Android (Kotlin).',
      'Shipped live location tracking, media capture, and AES-encrypted storage; improved app performance 30% via BLoC-driven state management and render optimization.',
      'Owned CI/CD on Azure DevOps end-to-end — automated build, test, and store deployments, cutting release time significantly.',
      'Developed 40+ REST APIs with JWT auth; resolved client-reported bugs within strict SLA commitments.',
    ],
    stack: ['Flutter', 'Swift', 'Kotlin', 'Clean Architecture', 'REST APIs', 'JWT', 'Azure DevOps', 'CI/CD'],
  },
  {
    company: 'Cattle Guru Pvt. Ltd.',
    role: 'Software Developer — Backend & Flutter',
    period: 'Jul 2023 — May 2025',
    duration: '2 Yrs',
    achievements: [
      'Designed and built the Java Spring Boot REST & GraphQL backend with PostgreSQL/MongoDB, schema design, and Firebase Auth + payment gateway integration.',
      'Built a cross-platform e-commerce app (Flutter/Dart) with real-time order tracking and checkout — drove 40% revenue growth.',
      'Used AI-assisted development (GitHub Copilot) to cut feature delivery time by 20%.',
      'Ran CI/CD (GitHub Actions) for automated testing and Play Store releases across a 5-member team.',
    ],
    stack: ['Java', 'Spring Boot', 'GraphQL', 'PostgreSQL', 'MongoDB', 'JWT', 'Flutter', 'GitHub Actions'],
  },
  {
    company: 'Container Corporation of India Ltd.',
    role: 'App Developer — Cross-Platform',
    period: 'Jan 2023 — Jun 2023',
    duration: '6 Mo',
    achievements: [
      'Delivered a cross-platform Contractors App (Flutter/Dart, Kotlin modules) for contract management and vehicle tracking across Android & iOS.',
      'Automated commercial workflows, cutting manual effort 30%; built with MVVM + GetX on an Oracle SQL/PLSQL backend.',
    ],
    stack: ['Flutter', 'Kotlin', 'Java', 'SQL/PLSQL', 'MVVM', 'GetX'],
  },
];

export const skillGroups = [
  {
    title: 'Backend & APIs',
    icon: 'Server',
    items: ['Java (Spring Boot)', 'REST', 'GraphQL', 'PostgreSQL', 'Supabase', 'MongoDB', 'Firebase', 'JWT', 'RBAC', 'Oracle SQL/PLSQL', 'Cron Jobs', 'Query Optimization'],
  },
  {
    title: 'System Design & Architecture',
    icon: 'Network',
    items: ['High-Level Design (HLD)', 'Low-Level Design (LLD)', 'Database Schema Design', 'Scalable Architecture', 'Design Patterns', 'Microservices Fundamentals', 'Caching'],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    items: ['Docker', 'Azure DevOps', 'Azure Cloud', 'CI/CD (GitHub Actions)', 'Release Automation', 'Monitoring'],
  },
  {
    title: 'AI & ML',
    icon: 'Bot',
    items: ['LLM API Integration (OpenAI/Gemini)', 'AI Workflow Automation', 'GitHub Copilot', 'Prompt Engineering', 'TensorFlow Lite'],
  },
  {
    title: 'Mobile',
    icon: 'Smartphone',
    items: ['Flutter/Dart', 'iOS (Swift, SwiftUI)', 'Android (Kotlin, Jetpack Compose)', 'BLoC', 'MVVM', 'Clean Architecture'],
  },
  {
    title: 'CS Fundamentals',
    icon: 'BrainCircuit',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    items: ['Git/GitHub', 'Postman', 'Figma', 'Agile/Scrum', 'Code Review', 'Testing'],
  },
];

export const projects = [
  {
    title: 'Winx',
    subtitle: 'Enterprise Ticketing System (Excitel)',
    status: 'Live',
    description:
      'Solo-built, backend to frontend to deployment — multi-role platform (Manager / Calling Agent / Field Agent) shipped end-to-end by a single engineer. Designed HLD to LLD: role workflows, ticket lifecycle state machine, escalation logic, and real-time productivity dashboards. Automated SLA escalation via cron jobs; containerized services with Docker for reliable deployments.',
    tech: ['Java Spring Boot', 'PostgreSQL', 'Supabase', 'Docker', 'RBAC', 'Flutter'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.fieldopsstudio.winx&pli=1' },
      { label: 'Live Dashboard', url: 'https://device-recovery.web.app/winback-dashboard' },
    ],
    size: 'lg',
    featured: true,
  },
  {
    title: 'Ops Geni',
    subtitle: 'Field Sales Execution Platform (Excitel)',
    status: 'In Development',
    description:
      'Owning the full backend lifecycle — HLD/LLD, database schema, API design, and DevOps — for a next-gen field-sales platform. Embedding AI-driven insights to optimize lead allocation and field-agent productivity.',
    tech: ['Java Spring Boot', 'PostgreSQL', 'Supabase', 'Docker', 'HLD/LLD', 'AI'],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.prakriti.fieldops' }],
    size: 'md',
    featured: true,
  },
  {
    title: 'CRM Mobile Application',
    subtitle: 'Enterprise CRM for 65+ Global BFSI Clients',
    status: 'Live',
    description:
      'Enterprise CRM with offline-ready sync serving 65+ global BFSI clients, released on both stores via automated pipelines.',
    tech: ['Clean Architecture', 'CI/CD', 'Kotlin', 'Flutter', 'Java Spring Boot'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.crmnextmobile.crmnextofflineplay' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/businessnext/id1539856646' },
    ],
    size: 'md',
    featured: true,
  },
  {
    title: 'Flight Pass',
    subtitle: 'Cross-Platform Flight Management App',
    status: 'Live',
    description:
      'BLoC + JWT architecture cut crashes 30%, grew user acquisition 40%, and sped up delivery 20%.',
    tech: ['BLoC', 'JWT', 'GraphQL', 'CI/CD', 'Flutter', 'Java Spring Boot'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.mobile.optiontown' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/optiontown/id1227688716' },
    ],
    size: 'sm',
    featured: false,
  },
  {
    title: 'Stockpathshala',
    subtitle: 'Ed-Tech Platform, 100K+ Users',
    status: 'Live',
    description:
      'Ed-tech platform for 100K+ users with Razorpay payments, live WebSocket data, and AI content recommendations (Gemini API).',
    tech: ['Razorpay', 'GetX', 'AI Recommendations', 'WebSocket', 'Flutter'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.codeclinic.stockpathshala' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/stock-pathshala/id6566178182' },
    ],
    size: 'sm',
    featured: false,
  },
  {
    title: 'IYF Mobile Application',
    subtitle: 'Community App with AI Q&A Chatbot',
    status: 'Live',
    description:
      'Community app with an AI Q&A chatbot (OpenAI API); boosted engagement 45%, cut dev time 30%.',
    tech: ['Firebase', 'OpenAI API', 'REST APIs', 'Flutter'],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.iskcon.punjabibagh' }],
    size: 'sm',
    featured: false,
  },
];

export const education = [
  {
    school: 'Delhi Technological University (DTU), New Delhi',
    degree: 'B.Tech in Information Technology',
    meta: 'CGPA: 8.4 / 10.0',
    period: '2019 — 2023',
    detail: 'Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, Software Engineering, System Design.',
  },
  {
    school: 'GBSSS Badli, New Delhi',
    degree: 'Class XII (Senior Secondary) · CBSE',
    meta: '81%',
    period: '2019',
  },
  {
    school: 'GBSSS Siraspur, New Delhi',
    degree: 'Class X (Secondary) · CBSE',
    meta: 'CGPA: 7.4 / 10.0',
    period: '2017',
  },
];

export const achievements = {
  competitive: [
    { platform: 'LeetCode', detail: 'Guardian, 2144 rating (Top 1%)', url: 'https://leetcode.com/u/greatguy2008/' },
    { platform: 'CodeChef', detail: '5-star, 2075 rating', url: 'https://www.codechef.com/users/nova_2008' },
    { platform: 'Codeforces', detail: 'Expert, 1672 rating', url: 'https://codeforces.com/profile/greatguy2008' },
    { platform: 'AtCoder', detail: 'Expert, 1681 rating', url: null },
    { platform: 'GeeksforGeeks', detail: '5-star, 800+ DSA problems solved', url: 'https://www.geeksforgeeks.org/user/greatguy494/' },
  ],
  research: {
    title: 'ICIASC-2023 Publication',
    detail: 'ML-based missing person detection system (FaceNet/MobileFaceNet) — 98% facial recognition accuracy.',
    url: 'https://pubs.aip.org/aip/acp/article/3072/1/050006/3277818/',
  },
  leadership: {
    title: 'Robotics Society, DTU',
    detail: 'Team Leader & Developer, Coding & Development team',
    period: '05/2021 — 05/2023',
  },
};
