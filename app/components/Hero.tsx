import { profile } from "@/app/data/portfolio";
import { AetherFlowHero, Container, Heading, Lead } from "@/components/ui";
import Link from "next/link";

const ctaBase =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-16"
      aria-labelledby="hero-title"
    >
      <AetherFlowHero className="pointer-events-none absolute inset-0 z-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(11,11,11,0.7),rgba(11,11,11,0.2)),linear-gradient(to_bottom,transparent,rgba(11,11,11,0.85))]" />
      <Container>
        <div className="relative z-10 max-w-3xl">
          <p className="border-accent/35 bg-background/90 text-accent-text inline-flex max-w-full rounded-full border px-3 py-1.5 text-xs leading-5 font-medium sm:text-sm">
            {profile.headline}
          </p>
          <Heading
            level={1}
            id="hero-title"
            className="mt-5 text-[2rem] leading-[1.08] sm:mt-6 sm:text-5xl lg:text-6xl"
          >
            {profile.fullName}
          </Heading>
          <Lead className="mt-4 max-w-2xl text-base leading-7 sm:mt-6 sm:text-lg lg:text-xl">
            {profile.intro}
          </Lead>
          <div className="mt-6 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
            <Link
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} bg-accent font-semibold text-white hover:bg-[#c90812]`}
            >
              View Résumé
            </Link>
            <Link
              href="/#contact"
              className={`${ctaBase} border-border-strong bg-surface text-text-primary hover:border-text-secondary border`}
            >
              Let’s Collaborate
            </Link>
          </div>
          <p className="text-text-secondary mt-5 text-xs leading-6 sm:mt-7 sm:text-sm">
            Based in {profile.location}
          </p>
        </div>
      </Container>
    </section>
  );
}
