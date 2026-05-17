"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const PRODUCTS = [
  {
    name: "SafeShip.dev",
    domain: "safeship.dev",
    url: "https://www.safeship.dev",
    body: "Regression tests for AI agents. Production failures become assertions that block the next deploy. Live with paid users.",
    image: "/screenshots/safeship.jpg",
  },
  {
    name: "TayibEats.com",
    domain: "tayibeats.com",
    url: "https://tayibeats.com",
    body: "A commission-free halal food ordering platform, Muslim business directory, and masjid hub. Built solo. Pre-launch.",
    image: "/screenshots/tayibeats.jpg",
  },
  {
    name: "HVACLaunch.io",
    domain: "hvaclaunch.io",
    url: "https://hvaclaunch.io",
    body: "Multi-tenant B2B SaaS for HVAC contractors. Built solo as a learning project.",
    image: "/screenshots/hvaclaunch.jpg",
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="built"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          kicker="What I've built"
          title="What I've Built"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {PRODUCTS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-cream-200 rounded-sm overflow-hidden border border-ink/10 transition-all duration-500 cursor-pointer block"
              style={{
                transform:
                  hovered === i ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hovered === i
                    ? "0 30px 80px -30px rgba(0,0,0,0.6)"
                    : "0 8px 20px -10px rgba(0,0,0,0.3)",
              }}
            >
              {/* Screenshot area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-300">
                {/* Browser chrome */}
                <div className="absolute top-0 left-0 right-0 h-9 bg-cream-50 border-b border-ink/10 z-10 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="text-[10px] font-mono text-ink/55 bg-cream border border-ink/15 rounded-full px-3 py-0.5">
                      {p.domain}
                    </div>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Live screenshot */}
                <img
                  src={p.image}
                  alt={`${p.name} homepage`}
                  loading="lazy"
                  className="absolute inset-0 top-9 w-full h-[calc(100%-2.25rem)] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Open-link indicator on hover */}
                <div
                  className="absolute top-12 right-4 z-20 pointer-events-none transition-all duration-300"
                  style={{
                    opacity: hovered === i ? 1 : 0,
                    transform:
                      hovered === i ? "translateY(0)" : "translateY(-4px)",
                  }}
                >
                  <div className="flex items-center gap-2 bg-cream-50/90 backdrop-blur-sm border border-ink/15 rounded-full px-3 py-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink">
                      Visit live
                    </span>
                    <svg width="10" height="10" viewBox="0 0 14 14" className="text-accent">
                      <path
                        d="M3 11L11 3M11 3H4M11 3V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="font-pixel font-bold text-2xl sm:text-3xl md:text-4xl tracking-[0.02em] text-ink uppercase mb-3 sm:mb-4 break-all">
                  {p.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-ink/80 leading-[1.6]">
                  {p.body}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-12 border-t border-ink/10"
        >
          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-ink/50">
              Why this matters
            </div>
          </div>
          <div className="lg:col-span-10">
            <p className="font-pixel font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.25] tracking-[0.02em] uppercase text-ink max-w-4xl">
              Three products solo. SafeShip, my latest, catches agent
              code regressions before they ship. That same audit-trail
              gap is what's eating Affirm's CI right now. GitLab sells
              the platform answer. Now I want to be the one selling
              the fix.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
