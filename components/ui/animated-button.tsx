"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  const content = (
    <>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-[#0052CC] to-[#003D99]"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.15) 0%, transparent 45%)",
            "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.15) 0%, transparent 45%)",
          ],
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      />
    </>
  );

  const classes = cn(
    "group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

