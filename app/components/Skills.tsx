import { skillCategories } from "@/app/data/portfolio";
import { Section, Stagger, StaggerItem } from "@/components/ui";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical Stack"
      description="Categorized technologies used across frontend, backend, AI integration, and infrastructure delivery."
    >
      <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" delayChildren={0.06} staggerChildren={0.06}>
        {skillCategories.map((group) => (
          <StaggerItem key={group.category} duration={0.38} y={12}>
            <article className="transform-gpu rounded-2xl border border-border-soft bg-surface/70 p-5 transition-transform duration-300 hover:-translate-y-0.5">
              <h3 className="text-base font-semibold text-text-primary">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border-strong bg-background px-3 py-1 text-xs font-medium text-text-secondary"
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
