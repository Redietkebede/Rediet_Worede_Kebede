import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { LazyMount } from "@/components/ui/LazyMount";
import { Reveal } from "@/components/ui/Reveal";
import { Heading, Text } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  title?: string;
  description?: string;
  children: ReactNode;
  lazyChildren?: boolean;
  lazyThreshold?: number;
  lazyMinHeight?: number;
}

export function Section({
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
    <section
      className={cn(
        "-scroll-mt-14 py-14 sm:-scroll-mt-16 sm:py-16 lg:-scroll-mt-20 lg:py-20",
        className,
      )}
      {...props}
    >
      <Container>
        {(title ?? description) && (
          <Reveal>
            <header className="mb-10 max-w-2xl">
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
