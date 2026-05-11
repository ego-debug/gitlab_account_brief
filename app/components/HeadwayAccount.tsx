"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeadwayAccount() {
  return (
    <section
      id="account"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          kicker="The Account"
          title="The Affirm Account"
        />

        {/* Lead paragraph + sidebar facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="lg:col-span-7 space-y-6"
          >
            <motion.p
              variants={reveal}
              className="text-xl md:text-[1.4rem] leading-[1.55] text-ink/85"
            >
              Affirm is a public BNPL lender on NASDAQ with about 2,400
              employees and more than 800 engineers. In February 2026
              they paused engineering for a full week to retool the org
              around agentic AI. They picked Claude Code as the default
              agent, not Copilot. Four months later their PRs went from
              roughly zero agent-assist to more than 60 percent. The
              gains broke their CI, scattered their docs, and left a
              regulated lender with no unified audit trail over
              AI-generated code.
            </motion.p>
          </motion.div>

          {/* Side facts */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-ink/15 lg:pl-8 space-y-8"
          >
            <FactRow label="Stage" value="Public, NASDAQ: AFRM (IPO Jan 2021)" />
            <FactRow label="HQ" value="San Francisco, CA" />
            <FactRow label="CEO" value="Max Levchin (Co-Founder)" />
            <FactRow label="Scale" value="~2,400 employees, 800+ engineers" />
            <FactRow label="Merchants" value="Amazon, Shopify, Walmart, Target" />
            <FactRow label="AI moment" value="60%+ of PRs now agent-written. April 2026." />
          </motion.aside>
        </div>

        {/* The Affirm AI retool moment - full visual callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-36 relative"
        >
          <div className="bg-forest text-ink rounded-sm overflow-hidden relative">
            {/* Decorative date stamp - inline on mobile, absolute on md+ */}
            <div className="md:absolute md:top-10 md:right-10 md:text-right pt-6 md:pt-0 px-6 md:px-0 flex items-baseline md:items-end gap-3 md:gap-0 md:flex-col">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] sm:tracking-[0.25em] text-ink/50 md:mb-1 whitespace-nowrap">
                Affirm Engineering
              </div>
              <div className="font-pixel font-bold text-2xl sm:text-3xl md:text-4xl text-ink tabular tracking-[0.04em]">
                04 / 2026
              </div>
            </div>

            <div className="px-6 sm:px-8 md:px-16 py-10 sm:py-14 md:py-24 max-w-4xl">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-accent-warm mb-6 sm:mb-8">
                The story right now
              </div>
              <p className="text-xl md:text-2xl text-ink/90 leading-[1.5] max-w-3xl">
                In April 2026, Daniel Martin, Affirm's Sr. Director of
                Engineering for Developer Productivity, published the
                post-mortem on Medium. Two admissions matter for an
                outbound rep. First, their docs and specs live on
                multiple platforms with inconsistent MCP coverage, and
                engineers bridge the gaps by hand. Second, agents now
                submit PRs faster than Buildkite can clear its queue,
                so their CI is the new bottleneck. Both are platform
                problems, not model problems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent">
              The setup
            </div>
          </div>
          <div className="lg:col-span-10">
            <p className="text-xl md:text-2xl leading-[1.55] text-ink/90 max-w-4xl">
              Affirm is a regulated public lender under CFPB and state
              scrutiny. SOX, PCI-DSS, and state lending licenses already
              demand an audit on every change. Now 60 percent of their
              code changes are written by an agent. My read: the
              February decision was the right one, but the wrappers
              around it are the wrong ones. They need a platform that
              keeps Claude, replaces Buildkite, unifies the docs, and
              gives a regulator one place to look.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/50">
        {label}
      </div>
      <div className="text-base text-ink">{value}</div>
    </div>
  );
}
