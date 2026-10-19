"use client";

import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

export function CaseStudyDialog({
  slug,
  title,
  children,
}: {
  slug: string;
  title: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");

  useEffect(() => {
    const dialog = dialogRef.current;
    return () => {
      if (dialog?.open) document.documentElement.style.overflow = previousOverflow.current;
    };
  }, []);

  const open = () => {
    if (!dialogRef.current || dialogRef.current.open) return;
    previousOverflow.current = document.documentElement.style.overflow;
    dialogRef.current.showModal();
    document.documentElement.style.overflow = "hidden";
  };

  return (
    <div className="border-border-soft mt-5 border-t pt-2">
      <button
        ref={triggerRef}
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-controls={`${slug}-case-study`}
        className="text-text-primary decoration-border-strong hover:text-accent-text focus-visible:outline-accent-text inline-flex min-h-11 cursor-pointer items-center gap-2 py-3 text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        Read case study<span aria-hidden="true">↗</span>
        <span className="sr-only">: {title}</span>
      </button>
      <dialog
        ref={dialogRef}
        id={`${slug}-case-study`}
        aria-labelledby={`${slug}-case-title`}
        onClose={() => {
          document.documentElement.style.overflow = previousOverflow.current;
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]',
            ),
          ).filter((element) => element.getClientRects().length > 0);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (!first || !last) {
            event.preventDefault();
            return;
          }
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            event.currentTarget.close();
        }}
        className="border-border-strong bg-background text-text-primary m-auto max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border p-0 shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="border-border-soft bg-background sticky top-0 z-10 flex items-start justify-between gap-4 border-b p-5 sm:p-6">
          <div>
            <p className="text-accent-text text-xs font-medium tracking-wider uppercase">
              Case study
            </p>
            <h2
              id={`${slug}-case-title`}
              className="mt-2 text-xl leading-snug font-semibold sm:text-2xl"
            >
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close case study"
            className="border-border-strong bg-surface text-text-primary hover:border-accent-text focus-visible:outline-accent-text inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="p-5 sm:p-6">{children}</div>
      </dialog>
    </div>
  );
}
