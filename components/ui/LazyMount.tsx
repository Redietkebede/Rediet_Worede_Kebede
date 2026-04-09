"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyMountProps {
  children: ReactNode;
  threshold?: number;
  minHeight?: number;
  once?: boolean;
  className?: string;
  placeholderClassName?: string;
}

export function LazyMount({
  children,
  threshold = 0.5,
  minHeight = 260,
  once = true,
  className,
  placeholderClassName,
}: LazyMountProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || (once && isMounted)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.intersectionRatio >= threshold) {
          setIsMounted(true);
          if (once) observer.disconnect();
        }
      },
      { threshold: [0, threshold, 1] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isMounted, once, threshold]);

  return (
    <div ref={rootRef} className={className}>
      {isMounted ? (
        children
      ) : (
        <div
          className={cn("w-full rounded-2xl border border-border-soft/70 bg-surface/35", placeholderClassName)}
          style={{ minHeight: `${minHeight}px` }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
