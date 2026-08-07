"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils/tailwind";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type Props = {
  text: string;
  as?: HeadingTag;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Splits `text` into words/characters and reveals them with a staggered
 * opacity + upward slide as the heading scrolls into view. Words stay
 * intact (no mid-word wraps); the full string is still exposed to
 * assistive tech via aria-label since the split spans are aria-hidden.
 */
export const RevealHeading = ({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.02,
  once = true,
}: Props) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Plain = as;
    return <Plain className={className}>{text}</Plain>;
  }

  const MotionTag = motion[as];
  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={cn("inline-block whitespace-nowrap", wordIndex < words.length - 1 && "mr-[0.28em]")}
          aria-hidden="true"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} className="inline-block" variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </MotionTag>
  );
};
