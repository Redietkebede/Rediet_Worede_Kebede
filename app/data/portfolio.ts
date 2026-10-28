export const profile = {
  fullName: "Rediet Worede Kebede",
  headline: "Full-stack Developer · Backend & AI Integration",
  intro:
    "I turn complex requirements into clear interfaces, connected APIs, and reliable data workflows, with AI features where they add value.",
  email: "KebedeRedietWro@gmail.com",
  phone: "+251-935-008-474",
  location: "Addis Ababa, Ethiopia",
  availability:
    "I’m interested in collaborating on software that makes everyday work clearer and easier.",
  linkedinUrl: "https://www.linkedin.com/in/rediet-worede-kebede",
  githubUrl: "https://github.com/Redietkebede",
  resumeUrl: "/Rediet-Worede-Kebede-Resume.pdf",
} as const;

export const about = {
  bio: "I’m a full-stack developer based in Addis Ababa. I build web applications, connect existing AI models to useful product features, and turn data into dashboards people can use.",
  philosophy:
    "I start with the workflow a person needs to complete, then connect the interface, business rules, and data behind it. I focus on predictable behavior, consistent information, and permissions that make each feature useful to the people who rely on it.",
} as const;

export const capabilities = [
  {
    title: "Full-stack applications",
    description: "Usable interfaces backed by reliable application logic and data.",
    deliverables: [
      "Responsive forms, search, and dashboards",
      "APIs, authentication, and role-based access",
    ],
  },
  {
    title: "Practical AI integration",
    description: "Existing AI models connected to useful product workflows.",
    deliverables: [
      "Question generation and personalized learning",
      "Model APIs connected to application data",
    ],
  },
  {
    title: "Data workflows & reporting",
    description: "Source data organized into information people can explore and use.",
    deliverables: [
      "Python and SQL pipelines with validation",
      "Interactive charts, indicators, and reporting",
    ],
  },
] as const;

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
    slug: "exams",
    category: "Education · AI integration",
    summary:
      "A study platform that generates topic-based questions and offers three ways to practice.",
    role: "Full-stack development and AI integration",
    outcome:
      "A working exam application with generated questions, saved sessions, and performance tracking.",
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
    slug: "booking",
    category: "Booking · Business workflows",
    summary:
      "A fitness booking application connecting customer reservations with service and booking management.",
    role: "Full-stack development and relational database design",
    outcome: "Customer booking and staff administration connected through a PostgreSQL database.",
    problem:
      "Gym schedules and bookings were being managed manually, causing inefficiency and errors.",
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
    slug: "learning",
    category: "Learning · AI integration",
    summary: "Personalized learning roadmaps based on a learner’s goals and current skill level.",
    role: "Full-stack development and AI integration",
    outcome:
      "A roadmap generation workflow with supporting marketing pages, blog routes, and event tracking.",
    problem:
      "Self-learning is often unstructured, making progress inconsistent and hard to sustain.",
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
    slug: "finance",
    demoNote: "Interface preview only. Live data views are currently unavailable.",
    category: "Analytics · Data engineering",
    summary:
      "An interactive dashboard bringing economic indicators and market signals into one place.",
    role: "Dashboard development and data pipeline engineering",
    outcome:
      "An explorable dashboard with macroeconomic indicators, a Macro Risk Index, and currency strength rankings.",
    problem:
      "Economic and market datasets are fragmented and difficult to convert into actionable insights.",
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
    location: "Addis Ababa, Ethiopia",
    mode: "On-site",
    achievements: [
      "Built configurable workflows with custom states, validation rules, and relationships between records.",
      "Improved consistency across connected views by tracing and resolving data discrepancies.",
      "Implemented role-based access and notification behavior so people see relevant information and actions.",
      "Translated business requirements into application logic, including scheduling and approval checks.",
    ],
  },
] as const;
