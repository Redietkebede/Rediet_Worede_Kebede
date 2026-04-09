"use client";

import type { ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Brain, Code2, Dumbbell, GraduationCap, Layout, LineChart, Pointer, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button-shadcn";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  previewUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack?: string[];
}

interface Tab {
  value: string;
  icon?: ReactNode;
  iconKey?: "exam" | "fitness" | "learning" | "finance";
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const defaultTabs: Tab[] = [
  {
    value: "tab-1",
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: "Boost Revenue",
    content: {
      badge: "Modern Tactics",
      title: "Make your site a true standout.",
      description:
        "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
      imageSrc:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Code editor on a large screen",
    },
  },
  {
    value: "tab-2",
    icon: <Pointer className="h-auto w-4 shrink-0" />,
    label: "Higher Engagement",
    content: {
      badge: "Expert Features",
      title: "Boost your site with top-tier design.",
      description:
        "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
      imageSrc:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Laptop setup with code and analytics",
    },
  },
  {
    value: "tab-3",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Stunning Layouts",
    content: {
      badge: "Elite Solutions",
      title: "Build an advanced web experience.",
      description:
        "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Dark abstract technical background",
    },
  },
];

const fallbackIcons = [Zap, Pointer, Layout];

function getTabIcon(
  tab: Tab,
  idx: number,
  className = "h-auto w-4 shrink-0",
) {
  if (tab.icon) return tab.icon;

  const keyIconMap = {
    exam: Brain,
    fitness: Dumbbell,
    learning: GraduationCap,
    finance: LineChart,
  } as const;

  const Icon = tab.iconKey ? keyIconMap[tab.iconKey] : fallbackIcons[idx % fallbackIcons.length];
  return <Icon className={className} />;
}

function PreviewPane({ content }: { content: TabContent }) {
  return (
    <div>
      <div className="relative min-h-[330px] overflow-hidden rounded-xl border border-border-soft bg-black lg:min-h-[460px]">
        {content.previewUrl ? (
          <iframe
            src={content.previewUrl}
            title={`${content.title} preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div
            role="img"
            aria-label={content.imageAlt}
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${content.imageSrc})` }}
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>
      <p className="mt-2 text-xs text-text-secondary">
        Live preview uses the project URL. Some hosts block iframe embedding, use Open Demo if needed.
      </p>
    </div>
  );
}

const Feature108 = ({
  badge,
  heading,
  description,
  tabs = defaultTabs,
}: Feature108Props) => {
  if (tabs.length === 0) return null;

  return (
    <div className="w-full">
      {(badge ?? heading ?? description) && (
        <div className="flex flex-col items-center gap-4 text-center">
          {badge ? <Badge variant="outline">{badge}</Badge> : null}
          {heading ? <h3 className="max-w-2xl text-3xl font-semibold md:text-4xl">{heading}</h3> : null}
          {description ? <p className="text-text-secondary">{description}</p> : null}
        </div>
      )}

      <Tabs.Root defaultValue={tabs[0].value} className="mt-8 w-full">
        <Tabs.List className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {tabs.map((tab, idx) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="inline-flex items-center gap-2 rounded-xl border border-border-soft bg-background/65 px-4 py-2.5 text-sm font-semibold text-text-secondary transition data-[state=active]:border-border-strong data-[state=active]:bg-surface data-[state=active]:text-text-primary"
            >
              {getTabIcon(tab, idx)}
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="mx-auto mt-8 w-full rounded-2xl border border-border-soft bg-surface/45 p-5 lg:p-8">
          {tabs.map((tab, idx) => (
            <Tabs.Content
              key={tab.value}
              value={tab.value}
              className="grid items-start gap-8 data-[state=inactive]:hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]"
            >
              <div className="flex flex-col gap-5">
                <Badge variant="outline" className="w-fit bg-background">
                  {tab.content.badge}
                </Badge>
                <h4 className="text-2xl font-semibold lg:text-4xl">{tab.content.title}</h4>
                <p className="text-text-secondary lg:text-lg">{tab.content.description}</p>

                {tab.content.techStack?.length ? (
                  <ul className="flex flex-wrap gap-2">
                    {tab.content.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border-strong bg-background px-3 py-1 text-xs text-text-secondary"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="flex flex-wrap items-center gap-2">
                  {tab.content.liveUrl ? (
                    <Button asChild size="sm">
                      <a href={tab.content.liveUrl} target="_blank" rel="noopener noreferrer">
                        Open Demo
                        {getTabIcon(tab, idx, "ml-1 h-3.5 w-3.5")}
                      </a>
                    </Button>
                  ) : null}
                  {tab.content.githubUrl ? (
                    <Button asChild variant="outline" size="sm">
                      <a href={tab.content.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                        <Code2 className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  ) : null}
                </div>

              </div>

              <PreviewPane content={tab.content} />
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
};

export { Feature108 };
