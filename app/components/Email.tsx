"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

type Block =
  | { kind: "p"; text: string }
  | { kind: "sig"; text: string };

const BLOCKS: Block[] = [
  { kind: "p", text: "Hi Daniel," },
  {
    kind: "p",
    text: "Read the April write-up on the one-week retool. Picking Claude over Copilot was the right call. The honest part about Buildkite queues and inconsistent MCP coverage is the part most leaders would have left out.",
  },
  {
    kind: "p",
    text: "Companies in your spot usually find the same three things in the second quarter of agent rollout. The CI vendor becomes the ceiling once PR throughput climbs past 60 percent. The doc surface fragments because every team picks a different MCP-friendly tool. And the audit story for AI-generated code does not exist yet, which a regulator will eventually ask about.",
  },
  {
    kind: "p",
    text: "GitLab Duo Agent Platform GA'd in January 2026. You keep Claude Code, route it through our AI Gateway (Bedrock or self-hosted), and run GitLab CI runners that scale with the agent load. Native security scanning lands in the same audit trail every agent action does. Carrefour consolidated this way and cut $350K a year while halving time-to-market.",
  },
  {
    kind: "p",
    text: "Worth 15 minutes next week to compare your Buildkite queue numbers and doc surface against what we would put on the table?",
  },
  { kind: "sig", text: "Jovan Marrero, GitLab" },
];

export default function Email() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= BLOCKS.length) clearInterval(id);
    }, 240);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section
      id="email"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10 bg-cream-200/40"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          kicker="The first email"
          title="Sample Email: Daniel Martin, Affirm"
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-accent/60" />
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-ink/60">
              What I'd send on day one once I'm at GitLab
            </p>
          </div>
          {/* Email client mock */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="bg-cream-200 rounded-sm overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] border border-ink/10"
            >
              {/* Window chrome */}
              <div className="px-5 py-3 border-b border-ink/10 flex items-center justify-between bg-cream-50">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.16em] text-ink/45">
                  New Message · Drafting
                </div>
                <div className="w-12" />
              </div>

              {/* Header row */}
              <div className="px-5 sm:px-6 md:px-10 py-5 sm:py-6 space-y-3 border-b border-ink/10">
                <HeaderRow
                  label="From"
                  value={
                    <>
                      Jovan Marrero{" "}
                      <span className="text-ink/45">
                        &lt;jovan.marrero@gitlab.com&gt;
                      </span>
                    </>
                  }
                />
                <HeaderRow
                  label="To"
                  value={
                    <>
                      Daniel Martin, Affirm{" "}
                      <span className="text-ink/45">
                        &lt;[confirmed before send]&gt;
                      </span>
                    </>
                  }
                />
                <HeaderRow
                  label="Subject"
                  value={
                    <span className="font-medium">
                      About that April post. The Buildkite part.
                    </span>
                  }
                />
              </div>

              {/* Body */}
              <div className="px-5 sm:px-6 md:px-10 py-8 sm:py-10 md:py-14 min-h-[420px] sm:min-h-[480px] text-[14px] sm:text-[15px] md:text-base text-ink leading-[1.7] sm:leading-[1.75] space-y-4 sm:space-y-5 font-sans">
                {BLOCKS.map((block, i) => {
                  const visible = revealed > i;
                  const motionProps = {
                    initial: { opacity: 0, y: 6 },
                    animate: visible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 6 },
                    transition: { duration: 0.3, ease: "easeOut" as const },
                  };
                  if (block.kind === "sig") {
                    return (
                      <motion.p
                        key={i}
                        {...motionProps}
                        className="pt-3 border-t border-ink/10 text-ink/75"
                      >
                        {block.text}
                      </motion.p>
                    );
                  }
                  return (
                    <motion.p
                      key={i}
                      {...motionProps}
                      className="text-ink/85"
                    >
                      {block.text}
                    </motion.p>
                  );
                })}
                <motion.span
                  animate={{ opacity: revealed >= BLOCKS.length ? 0 : 1 }}
                  className="inline-block w-[2px] h-5 bg-accent align-middle animate-blink ml-0.5"
                />
              </div>

              {/* Footer */}
              <div className="px-5 sm:px-6 md:px-10 py-3 sm:py-4 border-t border-ink/10 flex items-center justify-between bg-cream-50">
                <div className="flex items-center gap-3">
                  <button className="text-xs font-mono uppercase tracking-[0.16em] bg-ink text-cream-100 px-4 py-2 rounded-sm cursor-default">
                    Send
                  </button>
                  <span className="text-xs text-ink/45 font-mono">
                    Draft · Saved
                  </span>
                </div>
                <div className="text-xs text-ink/45 font-mono hidden sm:block">
                  ⌘ + Enter to send
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeaderRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm">
      <span className="text-xs font-mono uppercase tracking-[0.18em] text-ink/45 sm:w-16 flex-shrink-0">
        {label}
      </span>
      <span className="text-ink/85 break-all sm:break-normal">{value}</span>
    </div>
  );
}
