"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

const HoverGlowButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  glowColor = "rgba(229, 9, 20, 0.56)",
  backgroundColor = "rgba(18, 18, 18, 0.85)",
  textColor = "#ffffff",
  hoverTextColor = "#ffffff",
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCapability = () => setCanHover(mediaQuery.matches);
    updateCapability();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateCapability);
      return () => mediaQuery.removeEventListener("change", updateCapability);
    }

    mediaQuery.addListener(updateCapability);
    return () => mediaQuery.removeListener(updateCapability);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!canHover) return;
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setGlowPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseMove={canHover ? handleMouseMove : undefined}
      onMouseEnter={canHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={canHover ? () => setIsHovered(false) : undefined}
      className={[
        "relative inline-flex items-center overflow-hidden border transition-colors duration-300",
        "cursor-pointer rounded-full",
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundColor,
        color: canHover && isHovered ? hoverTextColor : textColor,
      }}

    >
      <div
        className={[
          "pointer-events-none absolute h-[180px] w-[180px] rounded-full opacity-60",
          "transition-transform duration-[400ms] ease-out -translate-x-1/2 -translate-y-1/2",
          canHover && isHovered ? "scale-125" : "scale-0",
        ].join(" ")}
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          background: `radial-gradient(circle, ${glowColor} 8%, transparent 68%)`,
          zIndex: 0,
        }}
      />

      <span className="relative z-10 inline-flex items-center gap-1.5 leading-none">{children}</span>
    </button>
  );
};

export { HoverGlowButton };
