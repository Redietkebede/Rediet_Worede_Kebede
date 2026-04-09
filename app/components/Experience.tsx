import { experiences } from "@/app/data/portfolio";
import { Section, Stagger, StaggerItem } from "@/components/ui";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional Experience"
      description="Role-based record of software engineering work."
    >
      <Stagger className="grid gap-4" delayChildren={0.11} staggerChildren={0.13}>
        {experiences.map((experience) => (
          <StaggerItem key={`${experience.company}-${experience.role}`} duration={0.5} y={18}>
            <article className="transform-gpu rounded-2xl border border-border-soft bg-surface/70 p-6 transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{experience.role}</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {experience.company} · {experience.employmentType}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {experience.period} · {experience.location} · {experience.mode}
                  </p>
                </div>
              </div>
              <ul className="mt-5 grid gap-2 text-sm text-text-secondary">
                {experience.achievements.map((item) => (
                  <li key={item} className="rounded-xl border border-border-soft bg-background/65 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
