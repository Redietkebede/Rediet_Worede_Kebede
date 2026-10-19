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
  lazyChildren = false,
  lazyThreshold = 0.5,
  lazyMinHeight = 260,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-14 sm:py-16 lg:py-20", className)} {...props}>
      <Container>
        {(eyebrow ?? title ?? description) && (
          <Reveal>
            <header className="mb-10 max-w-2xl">
              {eyebrow && (
                <p className="border-accent/30 bg-accent/10 text-accent-text mb-4 inline-flex rounded-full border px-3 py-1.5 text-xs font-medium tracking-[0.16em] uppercase">
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
