"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-6 md:px-10 py-24 sm:py-32 md:py-48 border-t border-ink/10 bg-cream-50 text-ink overflow-hidden"
    >
      {/* Decorative blur */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute inset-0 -z-0 pointer-events-none"
      >
        <div className="absolute -top-1/2 -right-1/4 w-[80vw] h-[80vw] rounded-full bg-forest/30 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-accent-warm/10 blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-10 md:mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-warm tabular">
            09
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-cream/25" />
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-ink/55">
            Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-pixel font-bold text-[20vw] sm:text-[16vw] md:text-[12vw] lg:text-[11vw] leading-[0.95] tracking-[0.02em] uppercase"
        >
          Let's talk
        </motion.h2>

        {/* Contact grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-5"
          >
            <div className="font-pixel font-bold text-4xl sm:text-5xl md:text-6xl text-ink tracking-[0.02em] uppercase mb-2">
              Jovan Marrero
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-7 md:col-start-6 grid grid-cols-1 gap-px bg-ink/15 border border-ink/15 rounded-sm overflow-hidden"
          >
            <ContactLink
              label="Phone"
              value="856-813-0080"
              href="tel:+18568130080"
              copy="856-813-0080"
            />
            <ContactLink
              label="Email"
              value="marrerojovan.contact@gmail.com"
              href="mailto:marrerojovan.contact@gmail.com"
            />
            <ContactLink
              label="LinkedIn"
              value="linkedin.com/in/jovan-marrero"
              href="https://linkedin.com/in/jovan-marrero"
              external
            />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 md:mt-36 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-ink/45"
        >
          <span>Account Brief. GitLab. 2026.</span>
          <span>Designed &amp; built solo, for GitLab.</span>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
  external,
  quiet,
  copy,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  quiet?: boolean;
  copy?: string;
}) {
  const [copied, setCopied] = useState(false);
  const display = copy ?? value;

  const handleClick = () => {
    // Copy alongside the native href firing. Works regardless of OS
    // having a tel:/mailto: handler.
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(display)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        })
        .catch(() => {
          /* clipboard might be blocked; native href still fires */
        });
    }
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      aria-label={`${label}: ${display} (click to copy or open)`}
      className={`group bg-cream p-6 md:p-7 transition-colors duration-300 ${
        quiet ? "hover:bg-cream-200" : "hover:bg-forest"
      }`}
    >
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/45 mb-2">
        {label}
      </div>
      <div className="text-sm md:text-base text-ink group-hover:text-ink break-all flex items-center justify-between gap-3">
        <span>{display}</span>
        {!quiet && (
          <span className="flex-shrink-0 flex items-center gap-1.5">
            {copied ? (
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-accent-warm">
                Copied
              </span>
            ) : (
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/35 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                Copy
              </span>
            )}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className={`text-ink/45 group-hover:text-accent-warm transition-all ${
                copied
                  ? "opacity-0 -translate-y-0.5 translate-x-0.5"
                  : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              }`}
            >
              <path
                d="M3 11L11 3M11 3H4M11 3V10"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="square"
              />
            </svg>
          </span>
        )}
      </div>
    </a>
  );
}
