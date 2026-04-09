export const profile = {
  fullName: "Rediet Worede Kebede",
  headline: "Full-Stack Developer | AI Integration · Data Pipelines · APIs | TypeScript & Python",
  intro:
    "I develop reliable web applications and AI systems from the ground up, ranging from user interfaces to RESTful APIs and implementing LLMs. I prefer constructing scalable architectures, with emphasis on performance, efficiency, and results.",
  email: "KebedeRedietWro@gmail.com",
  phone: "+251-935-008-474",
  location: "Addis Abeba, Ethiopia",
  linkedinUrl: "https://www.linkedin.com/in/rediet-worede-kebede",
  githubUrl: "https://github.com/Redietkebede",
  resumeUrl: "/Rediet-Worede-Kebede-Resume.pdf",
} as const;

export const about = {
  bio: "My areas of expertise include developing production-quality web applications and systems using AI, ranging from the front end to REST services and data pipelines as well as building LLMs.",
  focusAreas: [
    "Full-stack web development (TypeScript/JavaScript + React/Next.js)",
    "Frontend UI/UX (Tailwind CSS, shadcn/ui, Framer Motion, Recharts)",
    "Backend engineering & REST APIs (Node.js, Express.js, FastAPI)",
    "AI/LLM integration in products (OpenRouter, OpenAI, Gemini)",
    "Data pipelines / ETL & analytics (Python, SQL)",
    "Database-driven app development (Supabase, PostgreSQL, Prisma ORM, MongoDB)",
    "Auth & app infrastructure (NextAuth, Zod, React Hook Form, Vercel)",
    "Fintech/economic data applications & dashboards (FRED API, Alpha Vantage)",
  ],
  philosophy:
    "I believe that an engineer should design robust, production-ready, end-to-end solutions with clear architectural designs and high efficiency, leveraging AI integration and sound API/data pipeline design to solve real-world user problems effectively.",
} as const;

export const skillCategories = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Recharts"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth",
      "REST API",
      "FastAPI",
    ],
  },
  {
    category: "AI & APIs",
    items: ["OpenRouter", "OpenAI", "Gemini", "FRED API", "Alpha Vantage"],
  },
  {
    category: "Tools & Platforms",
    items: ["Vercel", "GitHub", "Zod", "React Hook Form", "bcryptjs", "MongoDB"],
  },
] as const;

export const projects = [
  {
    title: "Demo Examination Platform",
    problem: "Manual and static exam generation is slow, repetitive, and hard to personalize.",
    solution:
      "Built an AI-powered exam system with Practice, Timed, and Survival modes that generates MCQs in real time and persists question sets with user analytics.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenRouter", "Supabase"],
    features: [
      "Real-time topic-based MCQ generation with OpenRouter",
      "Three adaptive modes: Practice, Timed, and Survival",
      "Persistent exam/session data in Supabase",
      "Local performance and statistics tracking",
    ],
    githubUrl: "https://github.com/Redietkebede/demo-examination-platform",
    demoUrl: "https://demo-examination-platform.vercel.app",
  },
  {
    title: "Gym Booking System",
    problem: "Gym schedules and bookings were being managed manually, causing inefficiency and errors.",
    solution:
      "Developed a full-stack booking platform with an admin workflow for booking, services, and status management backed by relational data models.",
    techStack: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Customer flow for services discovery and booking",
      "Admin panel for services and booking lifecycle management",
      "Relational schema design with Prisma ORM + PostgreSQL",
      "Role-based operational controls for studio staff",
    ],
    githubUrl: "https://github.com/Redietkebede/gym_booking_system",
    demoUrl: "https://gym-booking-system-one.vercel.app",
  },
  {
    title: "AI Learning Path Generator Platform",
    problem: "Self-learning is often unstructured, making progress inconsistent and hard to sustain.",
    solution:
      "Created a personalized roadmap generator that tailors learning paths to user goals and proficiency, paired with SaaS-style growth features.",
    techStack: ["Next.js", "TypeScript", "OpenRouter", "Supabase", "Framer Motion"],
    features: [
      "Goal-driven personalized roadmap generation",
      "LLM-backed recommendation workflows",
      "Lead generation and event-tracking flows",
      "SEO-friendly blog routing with animated marketing pages",
    ],
    githubUrl: "https://github.com/Redietkebede/AI-Learning-Path-Generator-Platform",
    demoUrl: "https://ai-learning-path-generator-platform.vercel.app",
  },
  {
    title: "Financial & Economic Intelligence Dashboard",
    problem: "Economic and market datasets are fragmented and difficult to convert into actionable insights.",
    solution:
      "Built an end-to-end intelligence dashboard with ETL ingestion, macro-signal computation, and web delivery for analysis-ready decision support.",
    techStack: ["Next.js", "TypeScript", "Python", "FRED API", "Alpha Vantage", "SQL"],
    features: [
      "Python ETL for macroeconomic and market feeds",
      "Macro Risk Index and Currency Strength ranking metrics",
      "Integrated data pipeline with transformation and storage",
      "Interactive Next.js interface for signal exploration",
    ],
    githubUrl: "https://github.com/Redietkebede/Financial-Economic-Intelligence-Dashboard",
    demoUrl: "https://financial-economic-intelligence-monitoring.vercel.app/",
  },
] as const;

export const experiences = [
  {
    role: "Junior Software Engineer",
    company: "MMCY",
    employmentType: "Full-time",
    period: "Jul 2025 - Present",
    location: "Addis Abeba, Ethiopia",
    mode: "On-site",
    achievements: [
      "Web Development and Full-Stack Development",
      "Collaborating on production-focused engineering tasks in an on-site team environment",
    ],
  },
] as const;
