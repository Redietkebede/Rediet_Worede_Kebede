import { about } from "@/app/data/portfolio";
import { Section, Stagger, StaggerItem, Text } from "@/components/ui";

export function About() {
  return (
    <Section
      id="about"
      title="Practical software, from interface to data"
      description={about.bio}
      className="border-border-soft bg-surface/45 border-y"
    >
      <Stagger
        className="grid gap-8 md:grid-cols-12 md:gap-10"
        delayChildren={0.1}
        staggerChildren={0.1}
      >
        <StaggerItem className="md:col-span-7" duration={0.48} y={14}>
          <h3 className="text-text-primary text-lg font-semibold">Focus Areas</h3>
          <ul className="text-text-secondary mt-4 grid gap-3 text-sm leading-6 md:text-base">
            {about.focusAreas.map((item) => (
              <li
                key={item}
                className="border-border-soft bg-background/65 transform-gpu rounded-xl border px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </StaggerItem>
        <StaggerItem className="md:col-span-5" duration={0.5} y={14}>
          <div className="border-border-soft bg-background/65 transform-gpu rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-0.5">
            <h3 className="text-text-primary text-lg font-semibold">How I approach the work</h3>
            <Text className="mt-4">{about.philosophy}</Text>
          </div>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
