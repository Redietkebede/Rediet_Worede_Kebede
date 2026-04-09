"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

type BaseMotionProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  once?: boolean;
  amount?: number;
};

export interface RevealProps extends BaseMotionProps {
  delay?: number;
  duration?: number;
  y?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.55,
  y = 18,
  once = true,
  amount = 0.24,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once, amount }}
      transition={reduceMotion ? undefined : { duration, delay, ease: easeOut }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerProps extends BaseMotionProps {
  delayChildren?: number;
  staggerChildren?: number;
}

export function Stagger({
  children,
  className,
  once = true,
  amount = 0.18,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  ...props
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={reduceMotion ? undefined : { once, amount }}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: {},
              show: {
                transition: {
                  delayChildren,
                  staggerChildren,
                },
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export type StaggerItemProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  duration?: number;
  y?: number;
};

export function StaggerItem({
  children,
  className,
  duration = 0.45,
  y = 16,
  ...props
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration, ease: easeOut },
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
