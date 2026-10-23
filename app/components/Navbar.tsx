"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { HoverGlowButton, StarButton } from "@/components/ui";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Capabilities", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

function AnimatedDesktopNavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group text-text-secondary hover:text-text-primary focus-visible:text-text-primary relative inline-flex min-h-11 items-center text-sm font-medium transition-colors"
    >
      <span className="relative block h-[1.5em] overflow-hidden leading-[1.5]">
        <span className="block h-full transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="text-text-primary absolute top-full left-0 block h-full transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full"
        >
          {label}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="bg-accent pointer-events-none absolute bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
      />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRootRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutside = (event: PointerEvent) => {
      if (!menuRootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6">
      <div className="border-border-strong bg-background/65 flex items-center justify-between gap-3 rounded-full border px-3 py-2.5 backdrop-blur-xl sm:px-5">
        <StarButton
          onClick={() => {
            setOpen(false);
            window.location.assign("/#hero");
          }}
          aria-label="Rediet Worede Kebede — home"
          duration={2.8}
          lightWidth={72}
          lightColor="rgba(229, 9, 20, 0.85)"
          backgroundColor="rgba(18, 18, 18, 0.95)"
          borderWidth={1}
          className="min-h-11 shrink-0 rounded-full px-3 text-xs font-semibold tracking-[0.16em] uppercase"
        >
          RWK
        </StarButton>
        <nav aria-label="Main navigation" className="hidden items-center gap-4 md:flex lg:gap-7">
          {navItems.map((item) => (
            <AnimatedDesktopNavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <div ref={menuRootRef} className="relative flex shrink-0 items-center gap-2">
          <HoverGlowButton
            onClick={() => {
              setOpen(false);
              window.location.assign("/#contact");
            }}
            glowColor="rgba(229, 9, 20, 0.62)"
            backgroundColor="rgba(18, 18, 18, 0.9)"
            textColor="#ffffff"
            hoverTextColor="#ffffff"
            className="border-border-strong focus-visible:outline-accent-text min-h-11 shrink-0 gap-1.5 px-3.5 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-sm"
          >
            Let&apos;s Talk <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </HoverGlowButton>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-border-strong bg-surface focus-visible:outline-accent-text inline-flex h-11 w-11 items-center justify-center rounded-full border focus-visible:outline-2 focus-visible:outline-offset-4 md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            hidden={!open}
            className="border-border-strong bg-background absolute top-[calc(100%+1rem)] right-0 max-h-[calc(100svh-7rem)] w-56 max-w-[calc(100vw-2.5rem)] overflow-y-auto rounded-2xl border p-2 shadow-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-text-secondary hover:bg-surface flex min-h-11 items-center rounded-xl px-3 py-2 text-sm transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
