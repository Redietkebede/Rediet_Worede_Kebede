import type { ReactNode } from "react";
import { Button } from "@/components/ui/button-shadcn";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterProps {
  logo: ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  profileInfo?: Array<{
    icon: ReactNode;
    label: string;
    value: string;
    href?: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  profileInfo = [],
  copyright,
}: FooterProps) {
  const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//");
  const hasMainLinks = mainLinks.length > 0;
  const hasLegalLinks = legalLinks.length > 0;
  const hasRightLinks = hasMainLinks || hasLegalLinks;

  return (
    <footer className="border-t border-border-soft bg-surface/55 pb-6 pt-7 lg:pb-8 lg:pt-10">
      <div className="px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <Link href="/" className="inline-flex items-center gap-x-2.5" aria-label={brandName}>
            {logo}
            <span className="text-lg font-semibold tracking-tight text-text-primary">{brandName}</span>
          </Link>

          <ul className="mt-6 flex list-none gap-3 md:mt-0">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-border-strong bg-background/75 text-text-secondary hover:border-accent hover:text-text-primary"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            "mt-6 border-t border-border-soft pt-6 md:mt-4 md:pt-8",
            hasRightLinks ? "lg:grid lg:grid-cols-10" : "",
          )}
        >
          <div className={cn("text-sm leading-6 text-text-secondary", hasRightLinks ? "space-y-4 lg:col-[1/4] lg:row-[1/3]" : "")}>
            {hasRightLinks ? (
              <>
                {profileInfo.length ? (
                  <ul className="space-y-2.5">
                    {profileInfo.map((item) => (
                      <li key={item.label} className="flex items-center gap-2.5">
                        <span className="text-text-secondary">{item.icon}</span>
                        <span className="text-xs uppercase tracking-[0.14em] text-text-secondary/80">{item.label}:</span>
                        {item.href ? (
                          <a href={item.href} className="text-text-primary transition hover:text-accent">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-text-primary">{item.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className={cn(profileInfo.length ? "pt-1" : "")}>
                  <div>{copyright.text}</div>
                  {copyright.license && <div>{copyright.license}</div>}
                </div>
              </>
            ) : (
              <div className="md:flex md:items-start md:justify-between md:gap-6">
                {profileInfo.length ? (
                  <ul className="space-y-2.5">
                    {profileInfo.map((item) => (
                      <li key={item.label} className="flex items-center gap-2.5">
                        <span className="text-text-secondary">{item.icon}</span>
                        <span className="text-xs uppercase tracking-[0.14em] text-text-secondary/80">{item.label}:</span>
                        {item.href ? (
                          <a href={item.href} className="text-text-primary transition hover:text-accent">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-text-primary">{item.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className={cn(profileInfo.length ? "mt-4 md:mt-0 md:text-right" : "md:text-right")}>
                  <div>{copyright.text}</div>
                  {copyright.license && <div>{copyright.license}</div>}
                </div>
              </div>
            )}
          </div>

          {hasMainLinks ? (
            <nav className="mt-6 lg:col-[4/11] lg:mt-0">
              <ul className="-mx-2 -my-1 flex list-none flex-wrap lg:justify-end">
                {mainLinks.map((link) => (
                  <li key={link.label} className="mx-2 my-1 shrink-0">
                    {isInternal(link.href) ? (
                      <Link href={link.href} className="text-sm text-text-primary underline-offset-4 hover:underline">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-text-primary underline-offset-4 hover:underline">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          {hasLegalLinks ? (
            <div className="mt-6 lg:col-[4/11] lg:mt-0">
              <ul className="-mx-3 -my-1 flex list-none flex-wrap lg:justify-end">
                {legalLinks.map((link) => (
                  <li key={link.label} className="mx-3 my-1 shrink-0">
                    {isInternal(link.href) ? (
                      <Link href={link.href} className="text-sm text-text-secondary underline-offset-4 hover:underline">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-text-secondary underline-offset-4 hover:underline">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
