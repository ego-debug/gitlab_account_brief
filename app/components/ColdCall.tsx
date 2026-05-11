"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

type Stage = 0 | 1 | 2;

const STAGES = [
  {
    label: "Permission opener",
    sub: "Earn the next 30 seconds.",
    duration: "≈ 12 sec",
    body: (
      <>
        <p>
          Hey Daniel, congrats on the April write-up. This is Jovan
          from GitLab.
        </p>
        <p className="mt-5">
          This is a cold call. Want to give me 30 seconds, or should I
          let you go?
        </p>
      </>
    ),
  },
  {
    label: "Value prop",
    sub: "Their pain, fast.",
    duration: "≈ 12 sec",
    body: (
      <>
        <p>
          You wrote that agents are now submitting PRs faster than
          Buildkite can clear them, and that your docs sit on multiple
          platforms with inconsistent MCP coverage. Most regulated
          companies that retool around agentic AI hit that exact wall
          a quarter in.
        </p>
        <p className="mt-5">
          GitLab Duo Agent Platform sits over your existing repo and
          replaces Buildkite with runners that scale with the agents.
          You keep Claude Code, route it through our AI Gateway, and
          every agent action lands in one audit trail.
        </p>
        <p className="mt-5">
          You do not have to redo February. The platform is the
          wrapper, not the model.
        </p>
      </>
    ),
  },
  {
    label: "Discovery question",
    sub: "Open it up.",
    duration: "≈ 4 sec",
    body: (
      <p className="font-pixel font-bold text-3xl md:text-5xl leading-[1.1] tracking-[0.02em] uppercase">
        Which hurts more right now, the Buildkite queue or the doc gaps?
      </p>
    ),
  },
];

export default function ColdCall() {
  const [stage, setStage] = useState<Stage>(0);
  const [played, setPlayed] = useState<Set<number>>(new Set([0]));

  const advance = (next: Stage) => {
    setStage(next);
    setPlayed((p) => new Set(p).add(next));
  };

  return (
    <section
      id="call"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          kicker="The cold call"
          title="Sample Call: Daniel Martin, Affirm"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Stage rail */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible -mx-5 sm:-mx-6 px-5 sm:px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0 snap-x snap-mandatory lg:snap-none">
            {STAGES.map((s, i) => {
              const isActive = stage === i;
              const isPlayed = played.has(i);
              return (
                <button
                  key={i}
                  onClick={() => advance(i as Stage)}
                  className={`group text-left flex-shrink-0 lg:flex-shrink lg:w-full min-w-[180px] lg:min-w-0 px-4 sm:px-5 py-4 lg:py-5 border-l-2 transition-all duration-300 snap-start lg:snap-align-none ${
                    isActive
                      ? "border-accent bg-accent/[0.04]"
                      : "border-ink/15 hover:border-ink/40 hover:bg-ink/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-[0.22em] tabular ${
                        isActive ? "text-accent" : "text-ink/50"
                      }`}
                    >
                      Stage 0{i + 1}
                    </span>
                    {isPlayed && !isActive && (
                      <span className="text-[10px] text-accent">●</span>
                    )}
                  </div>
                  <div
                    className={`text-base font-medium leading-snug whitespace-nowrap lg:whitespace-normal ${
                      isActive ? "text-ink" : "text-ink/70"
                    }`}
                  >
                    {s.label}
                  </div>
                  <div
                    className={`text-xs mt-1 hidden lg:block ${
                      isActive ? "text-ink/65" : "text-ink/45"
                    }`}
                  >
                    {s.sub}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Phone-style stage */}
          <div className="lg:col-span-9">
            <div className="bg-cream-50 text-ink rounded-sm overflow-hidden relative shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] border border-ink/10">
              {/* Caller info */}
              <div className="px-4 sm:px-6 md:px-10 py-5 sm:py-6 border-b border-cream/10">
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-ink/45 mb-1">
                  Calling
                </div>
                <div className="font-pixel font-bold text-xl sm:text-2xl text-ink tracking-[0.02em] truncate">
                  Daniel Martin, Affirm
                </div>
                <div className="text-xs sm:text-sm text-ink/55">
                  Sr. Director of Engineering, Developer Productivity
                </div>
              </div>

              {/* Stage content */}
              <div className="px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-16 min-h-[360px] sm:min-h-[400px] md:min-h-[440px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                      <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-accent-warm">
                        {STAGES[stage].label}
                      </span>
                      <span className="h-px w-8 sm:w-12 bg-accent-warm/40" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/40">
                        {STAGES[stage].sub}
                      </span>
                    </div>

                    <div className="text-lg sm:text-xl md:text-2xl leading-[1.55] text-ink/90 max-w-3xl">
                      {STAGES[stage].body}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="px-4 sm:px-6 md:px-10 py-4 sm:py-5 border-t border-cream/10 flex items-center justify-between gap-2 sm:gap-4">
                <button
                  onClick={() => advance(Math.max(0, stage - 1) as Stage)}
                  disabled={stage === 0}
                  className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-ink/55 hover:text-ink transition disabled:opacity-25 disabled:cursor-not-allowed py-2 px-1"
                >
                  ← Prev
                </button>
                <div className="flex gap-1.5 sm:gap-2">
                  {STAGES.map((_, i) => (
                    <span
                      key={i}
                      className={`block h-[3px] rounded-full transition-all duration-500 ${
                        stage === i
                          ? "w-8 sm:w-10 bg-accent-warm"
                          : played.has(i)
                          ? "w-5 sm:w-6 bg-cream/40"
                          : "w-5 sm:w-6 bg-cream/15"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    advance(Math.min(2, stage + 1) as Stage)
                  }
                  disabled={stage === 2}
                  className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-accent-warm hover:text-ink transition disabled:opacity-25 disabled:cursor-not-allowed py-2 px-1"
                >
                  {stage === 2 ? "End" : "Next →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

