"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function WhyMe() {
  return (
    <section
      id="rep"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10 bg-cream-200/40"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="07"
          kicker="The rep"
          title="Why I'm The Right Rep"
        />

        <div>
          {/* Essay */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 max-w-3xl"
          >
            <Block num="01" title="Operations Background">
              <p className="text-lg md:text-xl leading-[1.7] text-ink/85">
                Six years of jobs where the day ran longer than the
                schedule. Night shift
                warehouse ops at 3B Logistics. Managing a Chipotle through
                800+ daily transactions. Leading Dunkin morning rushes.
                None of it was sales. All of it was volume, pressure, and
                showing up the next day.
              </p>
            </Block>

            <Block num="02" title="Builder Experience">
              <p className="text-lg md:text-xl leading-[1.7] text-ink/85">
                I've shipped three SaaS products solo. One is in the
                agent-tooling space, live with paid users. Two years
                of being the only engineer when the work needed three.
                I know what it feels like when CI is the ceiling, when
                the docs are scattered, and when one bad commit has no
                audit trail. That is the seat your customer sits in.
              </p>
            </Block>

            <Block num="03" title="Active Outbound">
              <p className="text-lg md:text-xl leading-[1.7] text-ink/85">
                I started running outbound this week. Halal restaurants
                and masjids in South Jersey and Philly. The same kind
                of calls I'd be making for GitLab.
              </p>
            </Block>

            <Block num="04" title="Why GitLab">
              <p className="text-lg md:text-xl leading-[1.7] text-ink/85">
                GitLab is the SDR role I want. Inbound queue and
                outbound sequences from day one. BDR seat earned, not
                assumed. Act 2 named the
                bet I'd be selling against. Speed with quality.
                Ownership mindset. Customer outcomes. Affirm is what
                Act 2 looks like inside a real ICP. Duo Agent Platform
                GA'd in January. AWS Bedrock and Vertex AI landed this
                year. I run my prep inside Claude. The Affirm research,
                the call, the email. All of it from there. The
                conversation I'd be having with Daniel is one I already
                understand. I want to earn this role, earn the BDR
                seat, earn the AE seat, and build a career here. I'm
                coachable, I take feedback, and I show up.
              </p>
            </Block>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function Block({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={`thread-${num}`}
      className="border-b border-ink/10 pb-10 last:border-b-0 last:pb-0"
    >
      <div className="flex items-baseline gap-5 mb-5">
        <span className="font-pixel font-bold text-3xl md:text-4xl text-accent tabular leading-none">
          {num}
        </span>
        <h3 className="font-pixel font-bold text-2xl md:text-3xl text-ink tracking-[0.02em] uppercase leading-none">
          {title}
        </h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
