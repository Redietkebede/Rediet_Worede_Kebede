import { Section, Stagger, StaggerItem } from "@/components/ui";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s Build Something Valuable"
      description="Open to full-time roles, freelance opportunities, and technical collaboration."
      className="border-y border-border-soft bg-surface/45"
    >
      <Stagger className="grid gap-8" delayChildren={0.1} staggerChildren={0.12}>
        <StaggerItem className="mx-auto w-full max-w-3xl" duration={0.52} y={16}>
          <ContactForm />
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
