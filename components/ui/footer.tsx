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
    <footer className="border-border-soft bg-surface/55 border-t pt-7 pb-6 lg:pt-10 lg:pb-8">
      <div className="px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <Link
            href="/"
            className="inline-flex max-w-full items-center gap-x-2.5"
            aria-label={brandName}
          >
            {logo}
            <span className="text-text-primary min-w-0 text-base font-semibold tracking-tight sm:text-lg">
              {brandName}
            </span>
          </Link>

          <ul className="mt-6 flex list-none gap-3 md:mt-0">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border-strong bg-background/75 text-text-secondary hover:border-accent hover:text-text-primary h-10 w-10 rounded-full"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            "border-border-soft mt-6 border-t pt-6 md:mt-4 md:pt-8",
            hasRightLinks ? "lg:grid lg:grid-cols-10" : "",
          )}
        >
          <div
            className={cn(
              "text-text-secondary text-sm leading-6",
              hasRightLinks ? "space-y-4 lg:col-[1/4] lg:row-[1/3]" : "",
            )}
          >
            {hasRightLinks ? (
              <>
                {profileInfo.length ? (
                  <ul className="space-y-2.5">
                    {profileInfo.map((item) => (
                      <li key={item.label} className="flex min-w-0 items-start gap-2.5">
                        <span className="text-text-secondary shrink-0 pt-1">{item.icon}</span>
                        <span className="text-text-secondary shrink-0 text-xs leading-6 tracking-[0.08em] uppercase">
                          {item.label}:
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-text-primary hover:text-accent-text min-w-0 break-all transition"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-text-primary min-w-0 break-words">
                            {item.value}
                          </span>
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
                      <li key={item.label} className="flex min-w-0 items-start gap-2.5">
                        <span className="text-text-secondary shrink-0 pt-1">{item.icon}</span>
                        <span className="text-text-secondary shrink-0 text-xs leading-6 tracking-[0.08em] uppercase">
                          {item.label}:
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-text-primary hover:text-accent-text min-w-0 break-all transition"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-text-primary min-w-0 break-words">
                            {item.value}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div
                  className={cn(
                    profileInfo.length ? "mt-4 md:mt-0 md:text-right" : "md:text-right",
                  )}
                >
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
                      <Link
                        href={link.href}
                        className="text-text-primary text-sm underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-text-primary text-sm underline-offset-4 hover:underline"
                      >
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
                      <Link
                        href={link.href}
                        className="text-text-secondary text-sm underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-text-secondary text-sm underline-offset-4 hover:underline"
                      >
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
