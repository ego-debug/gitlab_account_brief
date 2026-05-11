"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-12 sm:pt-16 pb-8 sm:pb-10 px-5 sm:px-6 md:px-10"
    >
      {/* Background flourish */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[50vw] h-[50vw] rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      {/* Spacer to push content into vertical center */}
      <div />

      {/* Main hero block - centered */}
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <div
          className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-accent mb-6 sm:mb-8 animate-slide-up px-2"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-5 sm:w-8 h-px bg-accent flex-shrink-0" />
          <span>A real qualified lead for GitLab</span>
          <span className="w-5 sm:w-8 h-px bg-accent flex-shrink-0" />
        </div>

        <h1
          className="font-pixel font-bold text-[19vw] sm:text-[14vw] md:text-[13vw] lg:text-[12vw] leading-[0.95] tracking-[0.01em] text-ink animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Affirm
        </h1>

        <div
          className="mt-4 sm:mt-8 md:mt-10 font-pixel font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-[0.04em] uppercase text-ink/70 animate-slide-up"
          style={{ animationDelay: "0.35s" }}
        >
          Account Brief
        </div>

        <div
          className="mt-10 sm:mt-14 md:mt-16 max-w-2xl animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-base md:text-lg leading-relaxed text-ink/75 mx-auto px-2">
            A working document on Affirm, the account I'd lead with on
            day one and how I'd start the conversation.
          </p>
        </div>
      </div>

      {/* Bottom row. Centered prepared-by + scroll cue */}
      <div
        className="flex flex-col items-center gap-4 sm:gap-5 animate-slide-up"
        style={{ animationDelay: "0.65s" }}
      >
        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-ink/55">
          Prepared by Jovan Marrero
        </div>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-ink/40">
          <ScrollIcon />
          <span>Scroll to read</span>
        </div>
      </div>
    </section>
  );
}

function ScrollIcon() {
  return (
    <svg width="12" height="18" viewBox="0 0 14 20" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="13"
        height="19"
        rx="6.5"
        stroke="currentColor"
        opacity="0.5"
      />
      <rect
        x="6"
        y="4"
        width="2"
        height="5"
        rx="1"
        fill="currentColor"
        style={{
          animation: "scrollDot 1.8s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(5px); opacity: 0.3; }
        }
      `}</style>
    </svg>
  );
}
