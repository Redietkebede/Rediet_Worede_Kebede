import { Section, Stagger, StaggerItem } from "@/components/ui";
import { ContactForm } from "./ContactForm";
import { profile } from "@/app/data/portfolio";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let’s build something useful together"
      className="border-border-soft bg-surface/45 border-y"
    >
      <Stagger
        className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
        delayChildren={0.1}
        staggerChildren={0.12}
      >
        <StaggerItem className="min-w-0" duration={0.4} y={12}>
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="text-text-secondary mt-3 text-sm leading-7">{profile.availability}</p>
          <a
            href={`mailto:${profile.email}`}
            className="text-accent-text mt-5 inline-flex min-h-11 max-w-full items-center text-sm font-medium break-all underline underline-offset-4"
          >
            {profile.email}
          </a>
          <p className="text-text-secondary mt-3 text-sm leading-7">Based in {profile.location}.</p>
        </StaggerItem>
        <StaggerItem className="w-full min-w-0" duration={0.52} y={16}>
          <ContactForm />
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
