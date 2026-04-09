import { about } from "@/app/data/portfolio";
import { Section, Stagger, StaggerItem, Text } from "@/components/ui";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building End-to-End Systems With Practical AI"
      description={about.bio}
      className="border-y border-border-soft bg-surface/45"
    >
      <Stagger className="grid gap-8 md:grid-cols-12 md:gap-10" delayChildren={0.1} staggerChildren={0.1}>
        <StaggerItem className="md:col-span-7" duration={0.48} y={14}>
          <h3 className="text-lg font-semibold text-text-primary">Focus Areas</h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-text-secondary md:text-base">
            {about.focusAreas.map((item) => (
              <li
                key={item}
                className="transform-gpu rounded-xl border border-border-soft bg-background/65 px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </StaggerItem>
        <StaggerItem className="md:col-span-5" duration={0.5} y={14}>
          <div className="transform-gpu rounded-2xl border border-border-soft bg-background/65 p-6 transition-transform duration-300 hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold text-text-primary">Engineering Philosophy</h3>
            <Text className="mt-4">{about.philosophy}</Text>
          </div>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
