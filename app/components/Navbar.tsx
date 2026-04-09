"use client";

import { ArrowUpRight } from "lucide-react";
import { Button, HoverGlowButton, StarButton } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

function AnimatedDesktopNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center py-1 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
    >
      <span className="relative block h-[1.15em] overflow-hidden leading-none">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute left-0 top-full block text-text-primary transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {label}
        </span>
      </span>
      <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRootRef.current) return;
      if (!menuRootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-6">
      <div className="w-full rounded-full border border-border-strong bg-background/65 px-3 py-2.5 backdrop-blur-xl sm:px-5">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <StarButton
            onClick={() => {
              setOpen(false);
              router.push("/#hero");
            }}
            aria-label="Go to hero"
            duration={2.8}
            lightWidth={72}
            lightColor="rgba(229, 9, 20, 0.85)"
            backgroundColor="rgba(18, 18, 18, 0.95)"
            borderWidth={1}
            className="h-9 shrink-0 rounded-full px-3 text-[12px] font-semibold tracking-[0.16em] uppercase"
          >
            RWK
          </StarButton>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <AnimatedDesktopNavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div ref={menuRootRef} className="relative flex items-center gap-2">
            <HoverGlowButton
              onClick={() => {
                setOpen(false);
                router.push("/#contact");
              }}
              glowColor="rgba(229, 9, 20, 0.62)"
              backgroundColor="rgba(18, 18, 18, 0.9)"
              textColor="#ffffff"
              hoverTextColor="#ffffff"
              className="h-9 shrink-0 items-center gap-1.5 border-border-strong px-3.5 text-[11px] font-medium sm:text-xs"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
            </HoverGlowButton>

            <Button
              className="group rounded-xl md:hidden"
              variant="outline"
              size="icon"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <svg
                className="pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L20 12"
                  className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                />
                <path
                  d="M4 12H20"
                  className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                />
                <path
                  d="M4 12H20"
                  className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                />
              </svg>
            </Button>

            <div
              className={cn(
                "absolute top-[calc(100%+0.6rem)] right-0 min-w-[200px] rounded-2xl border border-border-strong bg-background/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-200 md:hidden",
                open
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0",
              )}
            >
              <nav className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
