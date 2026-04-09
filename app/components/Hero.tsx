import { profile } from "@/app/data/portfolio";
import { AetherFlowHero, Container, Heading, Lead, Reveal, Stagger, StaggerItem } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ctaBase =
  "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium tracking-wide transition-all duration-200 sm:h-11 sm:px-5";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate snap-start snap-always flex min-h-svh items-center overflow-hidden pt-16 pb-10 sm:min-h-dvh sm:pt-20 sm:pb-12 md:pt-28 md:pb-16"
    >
      <AetherFlowHero className="absolute inset-0 z-0" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_48%),linear-gradient(to_bottom,rgba(11,11,11,0.2),rgba(11,11,11,0.75))]" />
      <Container>
        <div className="relative z-10 max-w-4xl pt-2 md:pt-0">
          <Reveal duration={0.42} y={14}>
            <p className="inline-flex max-w-full rounded-full border border-accent/35 bg-black/90 px-3 py-1 text-[10px] leading-4 font-medium whitespace-normal uppercase tracking-[0.14em] text-accent sm:text-xs sm:tracking-[0.2em]">
              {profile.headline}
            </p>
          </Reveal>
          <Reveal delay={0.05} duration={0.45} y={14}>
            <Heading level={1} className="mt-7 max-w-[13ch] text-[2.85rem] leading-[1.02] sm:mt-8 sm:max-w-3xl sm:text-5xl">
              {profile.fullName}
            </Heading>
          </Reveal>
          <Reveal delay={0.1} duration={0.45} y={14}>
            <Lead className="mt-5 max-w-[38ch] text-base leading-8 sm:mt-6 sm:max-w-3xl sm:text-lg md:text-xl">
              {profile.intro}
            </Lead>
          </Reveal>
          <Stagger className="mt-8 flex flex-wrap items-center gap-2.5 sm:mt-9 sm:gap-3" delayChildren={0.14} staggerChildren={0.07}>
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
