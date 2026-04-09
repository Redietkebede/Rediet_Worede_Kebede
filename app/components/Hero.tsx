import { profile } from "@/app/data/portfolio";
import { Container, Heading, Lead, Reveal, Stagger, StaggerItem } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ctaBase =
  "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium tracking-wide transition-all duration-200";

export function Hero() {
  return (
    <section
      id="hero"
      className="snap-start snap-always flex min-h-dvh items-center pt-24 pb-14 md:pt-28 md:pb-16"
    >
      <Container>
        <div className="max-w-4xl">
          <Reveal duration={0.42} y={14}>
            <p className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {profile.headline}
            </p>
          </Reveal>
          <Reveal delay={0.05} duration={0.45} y={14}>
            <Heading level={1} className="mt-6 max-w-3xl">
              {profile.fullName}
            </Heading>
          </Reveal>
          <Reveal delay={0.1} duration={0.45} y={14}>
            <Lead className="mt-6 max-w-3xl">{profile.intro}</Lead>
          </Reveal>
          <Stagger className="mt-9 flex flex-wrap gap-3" delayChildren={0.14} staggerChildren={0.07}>
            <StaggerItem duration={0.36} y={10}>
              <Link
                href="/#projects"
                className={cn(
                  ctaBase,
                  "transform-gpu bg-accent text-text-primary hover:-translate-y-0.5 hover:bg-[#c90812]",
                )}
              >
                View Projects
              </Link>
            </StaggerItem>
            <StaggerItem duration={0.36} y={10}>
              <Link
                href="/#contact"
                className={cn(
                  ctaBase,
                  "transform-gpu border border-border-strong bg-surface text-text-primary hover:-translate-y-0.5 hover:border-text-secondary/45",
                )}
              >
                Contact
              </Link>
            </StaggerItem>
            <StaggerItem duration={0.36} y={10}>
              <Link
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  ctaBase,
                  "transform-gpu text-text-secondary hover:-translate-y-0.5 hover:bg-white/5 hover:text-text-primary",
                )}
              >
                Download Resume
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
