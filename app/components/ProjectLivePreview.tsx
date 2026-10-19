"use client";

import { useEffect, useRef, useState } from "react";

export function ProjectLivePreview({ title, url }: { title: string; url: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [frame, setFrame] = useState({ width: 1366, height: 768, scale: 1 });

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const resize = () => {
      const mobile = window.matchMedia("(max-width: 639px)").matches;
      const width = mobile ? 390 : 1366;
      setFrame({ width, height: mobile ? 520 : 768, scale: node.clientWidth / width });
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(node);
    resize();
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          visibilityObserver.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    visibilityObserver.observe(node);
    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!visible || status !== "loading") return;
    const timeout = window.setTimeout(() => setStatus("error"), 20000);
    return () => window.clearTimeout(timeout);
  }, [visible, status]);

  return (
    <div className="border-border-soft bg-surface border-b">
      <div
        ref={frameRef}
        className="relative isolate aspect-[390/520] w-full overflow-hidden sm:aspect-[1366/768]"
        aria-busy={status === "loading"}
      >
        {visible && status !== "error" ? (
          <iframe
            src={url}
            title={`${title} live preview`}
            loading="lazy"
            tabIndex={-1}
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => setStatus("ready")}
            onError={() => setStatus("error")}
            className="pointer-events-none absolute top-0 left-0 origin-top-left border-0 sm:pointer-events-auto"
            style={{ width: frame.width, height: frame.height, transform: `scale(${frame.scale})` }}
          />
        ) : null}
        {status !== "ready" ? (
          <div className="bg-surface text-text-secondary pointer-events-none absolute inset-0 grid place-items-center p-5 text-center text-sm leading-6">
            <p>
              {status === "error"
                ? "Preview unavailable. You can open the live page below."
                : "Loading live preview…"}
            </p>
          </div>
        ) : null}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-text-primary flex min-h-11 items-center justify-between gap-3 px-5 py-2 text-xs transition-colors"
      >
        <span>Live page preview</span>
        <span>Open live page ↗</span>
      </a>
    </div>
  );
}
