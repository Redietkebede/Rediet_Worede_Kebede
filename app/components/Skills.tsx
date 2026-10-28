import { skillCategories } from "@/app/data/portfolio";
import { Section, Stagger, StaggerItem } from "@/components/ui";
import { TechIcon } from "./TechIcon";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Stack"
      className="border-border-soft border-t bg-[linear-gradient(to_bottom,var(--background),var(--surface)_25%,var(--surface)_75%,var(--background))]"
      description="The languages, frameworks, and tools I work with across interfaces, APIs, AI features, and data workflows."
    >
      <Stagger
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        delayChildren={0.06}
        staggerChildren={0.06}
      >
        {skillCategories.map((group) => (
          <StaggerItem key={group.category} duration={0.38} y={12}>
            <article className="border-border-soft border-t pt-5">
              <h3 className="text-text-primary text-base font-semibold">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-border-strong bg-background text-text-secondary inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium"
                  >
                    <TechIcon name={item} />
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
