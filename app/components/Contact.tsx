import { profile } from "@/app/data/portfolio";
import { Button, Section, Stagger, StaggerItem, Text } from "@/components/ui";
import Link from "next/link";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s Build Something Valuable"
      description="Open to full-time roles, freelance opportunities, and technical collaboration."
      className="border-y border-border-soft bg-surface/45"
    >
      <Stagger className="grid gap-8 md:grid-cols-12 md:gap-10" delayChildren={0.1} staggerChildren={0.12}>
        <StaggerItem className="md:col-span-5" duration={0.5} y={16}>
          <div className="transform-gpu rounded-2xl border border-border-soft bg-background/70 p-6 transition-transform duration-300 hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold text-text-primary">Direct Contact</h3>
            <ul className="mt-4 grid gap-2 text-sm text-text-secondary">
              <li>
                Email:{" "}
                <Link href={`mailto:${profile.email}`} className="text-text-primary hover:text-accent">
                  {profile.email}
                </Link>
              </li>
              <li>
                Phone:{" "}
                <Link href={`tel:${profile.phone}`} className="text-text-primary hover:text-accent">
                  {profile.phone}
                </Link>
              </li>
              <li>Location: {profile.location}</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transform-gpu rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-text-secondary transition hover:-translate-y-0.5 hover:border-accent hover:text-text-primary"
              >
                LinkedIn
              </Link>
              <Link
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transform-gpu rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-text-secondary transition hover:-translate-y-0.5 hover:border-accent hover:text-text-primary"
              >
                GitHub
              </Link>
              <Link
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transform-gpu rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-text-secondary transition hover:-translate-y-0.5 hover:border-accent hover:text-text-primary"
              >
                Resume
              </Link>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem className="md:col-span-7" duration={0.52} y={16}>
          <form className="transform-gpu rounded-2xl border border-border-soft bg-background/70 p-6 transition-transform duration-300 hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold text-text-primary">Send a Message</h3>
            <Text className="mt-2">Share your project idea, role details, or collaboration scope.</Text>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-text-secondary">
                Name
                <input
                  type="text"
                  name="name"
                  className="h-11 rounded-xl border border-border-strong bg-surface px-3 text-sm text-text-primary outline-none transition focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm text-text-secondary">
                Email
                <input
                  type="email"
                  name="email"
                  className="h-11 rounded-xl border border-border-strong bg-surface px-3 text-sm text-text-primary outline-none transition focus:border-accent"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm text-text-secondary sm:col-span-2">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className="rounded-xl border border-border-strong bg-surface px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
                  placeholder="Tell me about your project or opportunity."
                />
              </label>
            </div>
            <div className="mt-5">
              <Button type="submit" className="transform-gpu hover:-translate-y-0.5">
                Send Message
              </Button>
            </div>
          </form>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
