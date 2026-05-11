"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedNumber, { ScaleIn } from "./AnimatedNumber";

const BUYER_BLOCKS: { label: string; body: React.ReactNode }[] = [
  {
    label: "The Buyer",
    body: (
      <>
        GitLab sells to the engineering leader who owns developer
        productivity and the platform underneath it. At Affirm that is
        Daniel Martin, Sr. Director of Engineering for Developer
        Productivity. He wrote the April 2026 blog post and named the
        pain himself. Above him: Eli Bingham (VP Engineering) and
        Libor Michalek (President, ex-CTO) sign off on platform spend.
      </>
    ),
  },
  {
    label: "The Pitch",
    body: (
      <>
        Affirm does not have to redo February. Keep Claude Code as the
        agent. Route it through GitLab's AI Gateway, either Bedrock or
        self-hosted. Run Duo Agent Platform as the orchestration layer
        on top. GitLab CI runners replace Buildkite and scale with the
        agent load that is currently jamming the queue. GitLab Wiki,
        Pages, and native project context end the multi-platform doc
        problem they wrote about. Built-in SAST, DAST, dependency,
        secret, and container scanning collapse the standalone tools.
        Every agent action lands in one audit trail their compliance
        team can actually hand to a regulator.
      </>
    ),
  },
  {
    label: "Why Affirm",
    body: (
      <>
        Affirm is not on GitLab. They are not on GitHub Actions and
        they explicitly passed on Copilot. Buildkite is a standalone
        vendor with no platform moat. They sit in the awkward middle.
        GitHub for source, Buildkite for CI, Claude for agents,
        scattered docs, point tools for scanning. This is the exact
        gap Duo Agent Platform was built to fill when it GA'd in
        January 2026.
      </>
    ),
  },
];

export default function AndelaFit() {
  return (
    <section
      id="fit"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10 bg-cream-200/40"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          kicker="Where GitLab fits"
          title="Where GitLab Fits Here"
        />

        {/* Buyer / Pitch / Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-36">
          <div className="lg:col-span-9 space-y-8">
            {BUYER_BLOCKS.map((b) => (
              <BuyerBlock key={b.label} label={b.label} body={b.body} />
            ))}
          </div>
        </div>

        {/* The big stat row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border-t border-b border-ink/10">
          <ScaleIn delay={0}>
            <StatBlock
              kicker="Agent-written PRs at Affirm"
              value={
                <>
                  <AnimatedNumber to={60} />
                  <span className="text-ink/45 ml-2">%+</span>
                </>
              }
              label="From near zero in Dec 2025 to 60%+ by April 2026. Their CI cannot keep up."
            />
          </ScaleIn>
          <ScaleIn delay={0.1}>
            <StatBlock
              kicker="GitLab consolidation savings"
              value={
                <>
                  <span className="text-ink/45 mr-1">$</span>
                  <AnimatedNumber to={350} />
                  <span className="text-ink/45 ml-2">K</span>
                </>
              }
              label="Carrefour cut $350K/year and halved time-to-market by consolidating to GitLab."
            />
          </ScaleIn>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-xs font-mono uppercase tracking-[0.18em] text-ink/45 text-right"
        >
          Source. Affirm Tech blog (April 2026) and GitLab customer disclosures.
        </motion.div>
      </div>
    </section>
  );
}

function BuyerBlock({
  label,
  body,
}: {
  label: string;
  body: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 pb-8 border-b border-ink/10 last:border-b-0 last:pb-0"
    >
      <div className="sm:col-span-3">
        <div className="font-pixel font-bold text-xl md:text-2xl uppercase tracking-[0.04em] text-accent leading-none">
          {label}
        </div>
      </div>
      <div className="sm:col-span-9">
        <p className="text-base md:text-lg leading-[1.7] text-ink/80">{body}</p>
      </div>
    </motion.div>
  );
}

function StatBlock({
  kicker,
  value,
  label,
}: {
  kicker: string;
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="bg-cream p-6 sm:p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between min-h-[200px] sm:min-h-[260px]">
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/50 mb-6 sm:mb-8">
        {kicker}
      </div>
      <div className="font-pixel font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-[0.02em] text-ink mb-4 sm:mb-6">
        {value}
      </div>
      <div className="text-sm md:text-base text-ink/65 leading-snug max-w-xs">
        {label}
      </div>
    </div>
  );
}
