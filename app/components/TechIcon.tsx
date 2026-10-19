import Image from "next/image";
import {
  Cable,
  ChartNoAxesCombined,
  Database,
  LockKeyhole,
  TrendingUp,
  Wrench,
} from "lucide-react";

const brandIcons: Record<string, string> = {
  TypeScript: "typescript.svg",
  JavaScript: "javascript.svg",
  Python: "python.svg",
  Bash: "bash.svg",
  React: "react.svg",
  "Next.js": "nextjs.svg",
  "Tailwind CSS": "tailwindcss.svg",
  "shadcn/ui": "shadcnui.svg",
  "Framer Motion": "framermotion.svg",
  "Node.js": "nodejs.svg",
  "Express.js": "express.svg",
  Supabase: "supabase.svg",
  PostgreSQL: "postgresql.svg",
  "Prisma ORM": "prisma.svg",
  NextAuth: "nextauth.png",
  FastAPI: "fastapi.svg",
  OpenRouter: "openrouter.svg",
  OpenAI: "openai.svg",
  Gemini: "gemini.svg",
  Vercel: "vercel.svg",
  GitHub: "github.svg",
  Zod: "zod.svg",
  "React Hook Form": "reacthookform.svg",
  MongoDB: "mongodb.svg",
};

export function TechIcon({ name }: { name: string }) {
  const asset = brandIcons[name];
  if (asset) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white/95 p-0.5"
      >
        <Image
          src={`/icons/tech/${asset}`}
          alt=""
          width={16}
          height={16}
          unoptimized
          className="h-4 w-4 object-contain"
        />
      </span>
    );
  }
  const Icon =
    name === "SQL"
      ? Database
      : name === "REST API"
        ? Cable
        : name === "bcryptjs"
          ? LockKeyhole
          : name === "Alpha Vantage"
            ? TrendingUp
            : ["Recharts", "FRED API"].includes(name)
              ? ChartNoAxesCombined
              : Wrench;
  return <Icon aria-hidden="true" className="text-text-secondary h-5 w-5 shrink-0" />;
}
