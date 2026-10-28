import { about } from "@/app/data/portfolio";
import { Section, Text } from "@/components/ui";

export function About() {
  return (
    <Section
      id="about"
      title="A little about me"
      description={about.bio}
      className="border-border-soft bg-surface/45 border-y"
    >
      <div className="max-w-2xl">
        <h3 className="text-text-primary text-lg font-semibold">How I approach the work</h3>
        <Text className="mt-4">{about.philosophy}</Text>
      </div>
    </Section>
  );
}
