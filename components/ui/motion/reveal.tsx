"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/tailwind";

type Direction = "up" | "down" | "left" | "right" | "fade";
type Tag = "div" | "li" | "article" | "figure";

type HoverConfig = { scale?: number; y?: number };

type Props = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  /** Travel distance in px. Defaults to 80 for up/down, 60 for left/right. */
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  /** Fraction of the element that must be visible before it reveals. */
  amount?: number;
  /** Adds a springy lift/scale on hover (and a slight press-down on tap). */
  hover?: boolean | HoverConfig;
  as?: Tag;
};

const AXIS: Record<Direction, "x" | "y" | null> = {
  up: "y",
  down: "y",
  left: "x",
  right: "x",
  fade: null,
};

const SIGN: Record<Direction, 1 | -1> = {
  up: 1,
  down: -1,
  left: 1,
  right: -1,
  fade: 1,
};

const DEFAULT_DISTANCE: Record<Direction, number> = {
  up: 80,
  down: 80,
  left: 60,
  right: 60,
  fade: 0,
};

/**
 * Generic scroll-triggered reveal wrapper used for paragraphs, cards,
 * images, and other blocks. Animates opacity + an optional directional
 * offset once the element enters the viewport, and can layer a springy
 * hover/tap effect on top for interactive elements like cards.
 */
export const Reveal = ({
  children,
  className,
  direction = "up",
  distance,
  delay = 0,
  duration = 0.65,
  once = true,
  amount = 0.2,
  hover = false,
  as = "div",
}: Props) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const axis = AXIS[direction];
  const offset = distance ?? DEFAULT_DISTANCE[direction];
  const initial = {
    opacity: 0,
    ...(axis ? { [axis]: offset * SIGN[direction] } : {}),
  };

  const hoverConfig: HoverConfig | undefined =
    hover === true ? { scale: 1.03, y: -6 } : hover || undefined;

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn(hoverConfig && "will-change-transform", className)}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hoverConfig
          ? {
              scale: hoverConfig.scale,
              y: hoverConfig.y,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }
          : undefined
      }
      whileTap={hoverConfig ? { scale: 0.98 } : undefined}
    >
      {children}
    </MotionTag>
  );
};
