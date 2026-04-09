import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-text-primary shadow-[0_8px_24px_rgba(229,9,20,0.28)] hover:bg-[#c90812]",
  secondary:
    "bg-surface text-text-primary border border-border-strong hover:border-text-secondary/40",
  ghost:
    "bg-transparent text-text-secondary hover:bg-white/5 hover:text-text-primary border border-transparent",
  outline:
    "border border-border-strong bg-background text-text-primary hover:border-accent hover:text-accent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-9 w-9 p-0",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        "disabled:pointer-events-none disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
