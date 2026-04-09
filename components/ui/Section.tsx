import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { LazyMount } from "@/components/ui/LazyMount";
import { Reveal } from "@/components/ui/Reveal";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  lazyChildren?: boolean;
  lazyThreshold?: number;
  lazyMinHeight?: number;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  lazyChildren = true,
  lazyThreshold = 0.5,
  lazyMinHeight = 260,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "snap-start snap-always flex min-h-[calc(100dvh-4rem)] items-start pt-6 pb-14 md:pt-8 md:pb-16",
        className,
      )}
      {...props}
    >
      <Container>
        {(eyebrow ?? title ?? description) && (
          <Reveal>
            <header className="mb-10 max-w-2xl">
              {eyebrow && (
                <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  {eyebrow}
                </p>
              )}
              {title && (
                <Heading level={2} className="mb-4">
                  {title}
                </Heading>
              )}
              {description && <Text>{description}</Text>}
            </header>
          </Reveal>
        )}
        {lazyChildren ? (
          <LazyMount threshold={lazyThreshold} minHeight={lazyMinHeight}>
            {children}
          </LazyMount>
        ) : (
          children
        )}
      </Container>
    </section>
  );
}
