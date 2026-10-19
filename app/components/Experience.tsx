import { experiences } from "@/app/data/portfolio";
import { Section, Stagger, StaggerItem } from "@/components/ui";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional Experience"
      description="Building reliable application features, improving data consistency, and translating requirements into maintainable software."
    >
      <Stagger className="grid gap-4" delayChildren={0.11} staggerChildren={0.13}>
        {experiences.map((experience) => (
          <StaggerItem key={`${experience.company}-${experience.role}`} duration={0.5} y={18}>
            <article className="border-border-soft bg-surface/70 transform-gpu rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-text-primary text-xl font-semibold">{experience.role}</h3>
                  <p className="text-text-secondary mt-1 text-sm">
                    {experience.company} · {experience.employmentType}
                  </p>
                  <p className="text-text-secondary mt-1 text-sm">
                    {experience.period} · {experience.location} · {experience.mode}
                  </p>
                </div>
              </div>
              <ul className="text-text-secondary mt-5 grid gap-2 text-sm">
                {experience.achievements.map((item) => (
                  <li
                    key={item}
                    className="border-border-soft bg-background/65 rounded-xl border px-3 py-2"
                  >
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
