"use client";

import { ArrowUpRight } from "lucide-react";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

function AnimatedNavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group relative inline-flex h-6 items-start overflow-hidden text-sm leading-6">
      <span className="flex transform-gpu flex-col transition-transform duration-[400ms] ease-out group-hover:-translate-y-6">
        <span className="block h-6 text-text-secondary">{children}</span>
        <span className="block h-6 text-text-primary">{children}</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const router = useRouter();

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6">
      <div className="w-full rounded-full border border-border-strong bg-background/65 px-3 py-2.5 backdrop-blur-xl sm:px-5">
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/#hero"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface/80 text-[10px] font-semibold tracking-[0.16em] text-text-primary uppercase transition hover:border-accent hover:text-accent"
            aria-label="Go to hero"
          >
            RWK
          </Link>

          <nav className="flex min-w-0 flex-1 items-center justify-center gap-4 overflow-x-auto whitespace-nowrap text-center [scrollbar-width:none] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [&::-webkit-scrollbar]:hidden sm:gap-7">
            {navItems.map((item) => (
              <AnimatedNavLink key={item.href} href={item.href}>
                {item.label}
              </AnimatedNavLink>
            ))}
          </nav>

          <HoverGlowButton
            onClick={() => router.push("/#contact")}
            glowColor="rgba(229, 9, 20, 0.62)"
            backgroundColor="rgba(18, 18, 18, 0.9)"
            textColor="#ffffff"
            hoverTextColor="#ffffff"
            className="hidden h-9 shrink-0 items-center gap-1.5 border-border-strong px-3.5 text-xs font-medium sm:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
          </HoverGlowButton>
        </div>
      </div>
    </header>
  );
}
