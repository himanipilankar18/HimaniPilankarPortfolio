import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

type Frame = {
  chapter: string;
  title: string;
  category: string;
  hue: string;
  slug?: string;
};

const COPPER = "196, 122, 63";
const NAVY = "15, 23, 42";

const FRAMES: Frame[] = [
  { chapter: "01", title: "ArthSaathi", category: "AI · Product", hue: COPPER, slug: "arthsaathi" },
  { chapter: "02", title: "Atlas OS", category: "Productivity · Web", hue: NAVY, slug: "atlas-os" },
  {
    chapter: "03",
    title: "Signal Lab",
    category: "Hardware · Tooling",
    hue: COPPER,
    slug: "signal-lab",
  },
  { chapter: "04", title: "Hack the North", category: "Hackathon", hue: NAVY },
  { chapter: "05", title: "Embedded Research", category: "Research", hue: COPPER },
  { chapter: "06", title: "Fieldnotes", category: "Writing · AI", hue: NAVY, slug: "fieldnotes" },
  { chapter: "07", title: "Summer Internship", category: "Experience", hue: COPPER },
  { chapter: "08", title: "Cartography Studies", category: "Creative", hue: NAVY },
  { chapter: "09", title: "Coastal Workshop", category: "Expedition", hue: COPPER },
];

export function FilmStrip() {
  const [paused, setPaused] = useState(false);
  const loop = [...FRAMES, ...FRAMES];

  return (
    <section className="relative mt-32 overflow-hidden py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 topo opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--hairline), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--hairline), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="label-mono">The Archive</div>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Journey Through <span className="italic text-accent">My Work</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              A visual reel of projects, experiences, experiments, and milestones that shaped my
              engineering journey.
            </p>
          </div>
          <div className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:block">
            Reel 01 · {FRAMES.length} chapters
          </div>
        </div>
      </div>

      <div
        className="relative mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
        />

        <Perforations />

        <motion.div
          className="flex gap-5 px-5 py-5 will-change-transform"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{ duration: 70, ease: "linear", repeat: Infinity }}
        >
          {loop.map((frame, index) => (
            <FrameCard key={`${frame.title}-${index}`} frame={frame} />
          ))}
        </motion.div>

        <Perforations />
      </div>

      <div className="mx-auto mt-6 max-w-6xl px-5 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 sm:px-8">
        Hover to pause · drag the reel
      </div>
    </section>
  );
}

function FrameCard({ frame }: { frame: Frame }) {
  const card = (
    <div
      className="group relative h-[260px] w-[360px] shrink-0 overflow-hidden rounded-sm border border-border bg-surface transition-all duration-700 hover:scale-[1.025]"
      style={{ boxShadow: "var(--shadow-frame)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(70% 55% at 30% 25%, rgba(${frame.hue}, 0.20), transparent 65%),
            radial-gradient(60% 55% at 80% 90%, rgba(${frame.hue}, 0.10), transparent 65%),
            linear-gradient(180deg, #0B1426 0%, #0F172A 100%)
          `,
        }}
      />
      <div aria-hidden className="absolute inset-0 grid-fine opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)" }}
      />

      <CornerTicks />

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/90">
            Chapter {frame.chapter}
          </span>
          <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
            {frame.category}
          </span>
        </div>

        <div>
          <h3 className="font-serif text-2xl leading-tight text-foreground">{frame.title}</h3>
          <div className="mt-2 flex items-center gap-2">
            <span
              className="block h-px w-6"
              style={{ background: "var(--accent)", opacity: 0.7 }}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Field record
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (!frame.slug) {
    return card;
  }

  return (
    <Link to="/projects/$slug" params={{ slug: frame.slug }} className="block">
      {card}
    </Link>
  );
}

function CornerTicks() {
  const baseClass = "absolute size-3 border-accent/40";

  return (
    <>
      <span className={`${baseClass} left-2 top-2 border-l border-t`} />
      <span className={`${baseClass} right-2 top-2 border-r border-t`} />
      <span className={`${baseClass} bottom-2 left-2 border-b border-l`} />
      <span className={`${baseClass} bottom-2 right-2 border-b border-r`} />
    </>
  );
}

function Perforations() {
  const holes = Array.from({ length: 40 });

  return (
    <div
      aria-hidden
      className="relative flex items-center justify-between gap-3 border-y border-border bg-[color:var(--background)] px-3 py-2"
    >
      {holes.map((_, index) => (
        <span
          key={index}
          className="block h-3 w-6 shrink-0 rounded-[2px]"
          style={{ background: "color-mix(in oklab, var(--foreground) 6%, transparent)" }}
        />
      ))}
    </div>
  );
}
