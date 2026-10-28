import { projects } from "@/app/data/portfolio";
import { Section } from "@/components/ui";
import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";
import { CaseStudyDialog } from "./CaseStudyDialog";
import { TechIcon } from "./TechIcon";

export function Projects() {
  return (
    <Section
      id="projects"
      title="See what I build"
      description="Selected applications, my contributions, and the results. Explore demos, interface previews, and source code."
      className="border-border-soft bg-surface/45 border-y"
    >
      <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8">
        {projects.map((project) => (
          <article
            key={project.slug}
            id={`project-${project.slug}`}
            className="border-border-strong bg-background flex min-w-0 flex-col overflow-hidden rounded-2xl border"
          >
            <div className="border-border-soft bg-surface relative aspect-[8/5] overflow-hidden border-b">
              <Image
                src={`/projects/${project.slug}.png`}
                alt={`${project.title} interface screenshot`}
                fill
                sizes="(min-width: 1152px) 512px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-accent-text text-xs font-medium tracking-wide">
                {project.category}
              </p>
              <h3 className="mt-3 text-xl leading-snug font-semibold sm:text-2xl">
                {project.title}
              </h3>
              <p className="text-text-secondary mt-3 text-sm leading-7 sm:text-base">
                {project.summary}
              </p>
              <dl className="mt-4 space-y-2 text-sm leading-6">
                <div>
                  <dt className="inline font-semibold">Role: </dt>
                  <dd className="text-text-secondary inline">{project.role}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold">Delivered: </dt>
                  <dd className="text-text-secondary inline">{project.outcome}</dd>
                </div>
              </dl>
              {"demoNote" in project ? (
                <p className="border-border-soft bg-surface text-text-secondary mt-3 rounded-xl border p-3 text-xs leading-6">
                  {project.demoNote}
                </p>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project technologies">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="border-border-strong bg-surface text-text-secondary inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs leading-5"
                  >
                    <TechIcon name={tech} />
                    {tech}
                  </li>
                ))}
              </ul>
              <CaseStudyDialog slug={project.slug} title={project.title}>
                <dl className="mt-2 grid gap-4 text-sm leading-6">
                  {[
                    ["The problem", project.problem],
                    ["My contribution", project.solution],
                    ["My role", project.role],
                    ["What I delivered", project.outcome],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-text-primary font-semibold">{label}</dt>
                      <dd className="text-text-secondary mt-1">{value}</dd>
                    </div>
                  ))}
                </dl>
                <h4 className="mt-4 text-sm font-semibold">Key features</h4>
                <ul className="text-text-secondary mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </CaseStudyDialog>
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c90812]"
                  aria-label={`${"demoNote" in project ? "View interface" : "Open demo"}: ${project.title}`}
                >
                  {"demoNote" in project ? "View Interface" : "Open Demo"}{" "}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border-strong hover:border-text-secondary inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors"
                  aria-label={`View source code: ${project.title}`}
                >
                  <Code2 className="h-4 w-4" aria-hidden="true" /> Source Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
