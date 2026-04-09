import { projects } from "@/app/data/portfolio";
import { Section } from "@/components/ui";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";

const previewImages = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
];

const projectIconKeys = ["exam", "fitness", "learning", "finance"] as const;

export function Projects() {
  const tabs = projects.map((project, index) => ({
    iconKey: projectIconKeys[Math.min(index, projectIconKeys.length - 1)],
    value: `tab-${index + 1}`,
    label: project.title,
    content: {
      badge: `Project ${String(index + 1).padStart(2, "0")}`,
      title: project.title,
      description: `${project.problem} ${project.solution}`,
      imageSrc: previewImages[index % previewImages.length],
      imageAlt: `${project.title} preview`,
      previewUrl: project.demoUrl,
      liveUrl: project.demoUrl,
      githubUrl: project.githubUrl,
      techStack: [...project.techStack],
    },
  }));

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Work"
      lazyMinHeight={460}
      className="border-y border-border-soft bg-surface/45"
    >
      <Feature108 tabs={tabs} />
    </Section>
  );
}
