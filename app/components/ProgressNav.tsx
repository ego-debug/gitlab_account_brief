"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "01" },
  { id: "account", label: "02" },
  { id: "fit", label: "03" },
  { id: "call", label: "04" },
  { id: "email", label: "05" },
  { id: "built", label: "06" },
  { id: "rep", label: "07" },
  { id: "thirty", label: "08" },
  { id: "contact", label: "09" },
];

const LABELS: Record<string, string> = {
  hero: "Brief",
  account: "Affirm",
  fit: "GitLab Fit",
  call: "The Call",
  email: "The Email",
  built: "What I've Built",
  rep: "The Rep",
  thirty: "First 30",
  contact: "Contact",
};

export default function ProgressNav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  const [active, setActive] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Sticky top label */}
      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-cream/70 border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 h-12 sm:h-14 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink/70 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            <span className="hidden sm:inline">Account Brief</span>
            <span className="sm:hidden">Brief</span>
            <span className="text-ink/30">/</span>
            <span className="text-ink truncate">GitLab</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] sm:tracking-[0.18em] flex-shrink-0">
            <span className="text-ink/40 hidden md:inline">
              {mounted ? LABELS[active] || "" : ""}
            </span>
            <span className="text-ink tabular">
              {mounted
                ? String(SECTIONS.findIndex((s) => s.id === active) + 1).padStart(2, "0")
                : "01"}
              <span className="text-ink/30"> / 09</span>
            </span>
          </div>
        </div>
      </div>

      {/* Side dot rail (desktop only) */}
      <nav
        aria-label="Section navigation"
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
      >
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={`Jump to ${LABELS[s.id]}`}
            className="group flex items-center gap-3 justify-end"
          >
            <span
              className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                active === s.id
                  ? "opacity-100 translate-x-0 text-ink"
                  : "opacity-0 group-hover:opacity-60 translate-x-2 text-ink/60"
              }`}
            >
              {LABELS[s.id]}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === s.id
                  ? "w-2 h-2 bg-accent"
                  : "w-1.5 h-1.5 bg-ink/30 group-hover:bg-ink/60"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
