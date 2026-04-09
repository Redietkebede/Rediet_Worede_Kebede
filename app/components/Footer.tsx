import { profile } from "@/app/data/portfolio";
import { Footer as FooterUI } from "@/components/ui";
import { Mail, MapPin, Phone } from "lucide-react";

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.162 19.49c.5.092.682-.217.682-.482 0-.237-.008-.865-.013-1.698-2.776.603-3.363-1.338-3.363-1.338-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.03 1.532 1.03.892 1.528 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.217-.252-4.549-1.108-4.549-4.932 0-1.089.39-1.98 1.029-2.678-.103-.253-.446-1.268.098-2.643 0 0 .84-.269 2.75 1.023A9.61 9.61 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.292 2.748-1.023 2.748-1.023.546 1.375.203 2.39.1 2.643.64.698 1.027 1.589 1.027 2.678 0 3.833-2.336 4.677-4.56 4.925.36.31.681.923.681 1.86 0 1.343-.012 2.426-.012 2.756 0 .268.18.579.688.481A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M4.983 3.5a2.483 2.483 0 1 1 0 4.967 2.483 2.483 0 0 1 0-4.967ZM2.8 9h4.366v12H2.8V9Zm6.766 0h4.186v1.64h.06c.583-1.105 2.007-2.27 4.132-2.27 4.42 0 5.236 2.91 5.236 6.692V21h-4.365v-5.265c0-1.256-.023-2.87-1.748-2.87-1.75 0-2.018 1.368-2.018 2.778V21H9.566V9Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterUI
      logo={
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-background/80 text-[10px] font-semibold tracking-[0.16em] text-text-primary uppercase">
          RWK
        </span>
      }
      brandName={profile.fullName}
      socialLinks={[
        {
          icon: <LinkedInMark />,
          href: profile.linkedinUrl,
          label: "LinkedIn",
        },
        {
          icon: <GitHubMark />,
          href: profile.githubUrl,
          label: "GitHub",
        },
      ]}
      mainLinks={[]}
      legalLinks={[]}
      profileInfo={[
        {
          icon: <Mail className="h-4 w-4" />,
          label: "Email",
          value: profile.email,
          href: `mailto:${profile.email}`,
        },
        {
          icon: <Phone className="h-4 w-4" />,
          label: "Phone",
          value: profile.phone,
          href: `tel:${profile.phone}`,
        },
        {
          icon: <MapPin className="h-4 w-4" />,
          label: "Location",
          value: profile.location,
        },
      ]}
      copyright={{
        text: `© ${currentYear} ${profile.fullName}`,
        license: "All rights reserved",
      }}
    />
  );
}
