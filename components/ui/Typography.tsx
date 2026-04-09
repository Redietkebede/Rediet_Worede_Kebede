import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

const headingClasses: Record<HeadingLevel, string> = {
  1: "text-4xl leading-tight md:text-5xl",
  2: "text-3xl leading-tight md:text-4xl",
  3: "text-2xl leading-snug md:text-3xl",
  4: "text-xl leading-snug md:text-2xl",
};

export interface HeadingProps extends ComponentPropsWithoutRef<"h2"> {
  level?: HeadingLevel;
}

export function Heading({ level = 2, className, children, ...props }: HeadingProps) {
  const classes = cn("font-semibold tracking-tight text-text-primary", headingClasses[level], className);

  if (level === 1) {
    return (
      <h1 className={classes} {...props}>
        {children}
      </h1>
    );
  }
  if (level === 2) {
    return (
      <h2 className={classes} {...props}>
        {children}
      </h2>
    );
  }
  if (level === 3) {
    return (
      <h3 className={classes} {...props}>
        {children}
      </h3>
    );
  }
  return (
    <h4 className={classes} {...props}>
      {children}
    </h4>
  );
}

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
  tone?: "primary" | "secondary";
}

export function Text({ tone = "secondary", className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "text-base leading-7",
        tone === "primary" ? "text-text-primary" : "text-text-secondary",
        className,
      )}
      {...props}
    />
  );
}

export type LeadProps = ComponentPropsWithoutRef<"p">;

export function Lead({ className, ...props }: LeadProps) {
  return <p className={cn("text-lg leading-8 text-text-secondary md:text-xl", className)} {...props} />;
}
