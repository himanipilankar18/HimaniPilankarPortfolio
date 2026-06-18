import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import heroAvatar from "@/assets/hero-avatar.png";
import { FilmStrip } from "@/components/site/film-strip";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himani's Portfolio" },
      {
        name: "description",
        content:
          "A documentary archive of projects, research, and creative explorations from a computer engineering student.",
      },
      { property: "og:title", content: "Himani's Portfolio" },
      {
        property: "og:description",
        content: "A documentary archive of projects, research, and creative explorations.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 topo opacity-70" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, rgba(212,164,77,0.35), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, rgba(212,164,77,0.25), transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 pt-40 sm:px-8 md:grid-cols-[1.05fr_1fr] md:gap-6 md:pt-44">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span
                className="block h-px w-8"
                style={{ background: "var(--accent)", opacity: 0.7 }}
              />
              <span className="label-mono">Field Notes · Vol. I</span>
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-[80px]">
              I am <span className="italic">Himani</span>,
              <span className="mt-3 block text-foreground/90">
                an engineer documenting <span className="italic text-accent">the journey</span>.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Computer engineering student. Builder of full-stack systems, AI-assisted experiences,
              and thoughtful products, kept as field notes from an ongoing expedition through
              software.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#archive"
                className="group inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-5 py-3 text-sm font-medium text-foreground transition-all duration-500 hover:bg-accent/20"
              >
                Open the archive
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-3 text-sm font-medium text-muted-foreground backdrop-blur-xl transition-colors hover:text-foreground"
              >
                Resume
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-muted-foreground">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-foreground"
              >
                <Github className="size-[18px]" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <Linkedin className="size-[18px]" />
              </a>
              <a
                href="mailto:hello@himani.dev"
                aria-label="Email"
                className="transition-colors hover:text-foreground"
              >
                <Mail className="size-[18px]" />
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
                India · open to internships
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[560px]">
              <div
                aria-hidden
                className="absolute inset-x-10 bottom-10 top-16 rounded-[40%] opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(212,164,77,0.32), transparent 70%)",
                }}
              />
              <FloatingFragments />

              <img
                src={heroAvatar}
                alt="Editorial illustration of Himani at work"
                width={1080}
                height={1440}
                className="relative h-full w-full object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]"
                style={{ filter: "saturate(0.85) hue-rotate(-8deg) contrast(1.02)" }}
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
            Scroll · the route continues
          </span>
        </div>
      </section>

      <div id="archive" />
      <FilmStrip />

      <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="label-mono">Selected dispatches</div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-5xl">
              Recent <span className="italic text-accent">expeditions</span>.
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline"
          >
            Full portfolio →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-sm border border-border bg-card/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
                style={{ background: "var(--accent)" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} · {project.category}
                  </span>
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-tight">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>
              </div>
              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function FloatingFragments() {
  return (
    <>
      <div
        aria-hidden
        className="absolute left-[2%] top-[18%] hidden w-[200px] -rotate-3 rounded-sm border border-border bg-card/80 p-3 font-mono text-[10px] leading-relaxed text-muted-foreground shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl md:block"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.22em] text-accent/80">Entry 14</span>
          <span className="text-[9px] text-muted-foreground/70">2026·06</span>
        </div>
        <div className="font-serif text-[12px] italic text-foreground/90">
          &quot;Build calmly. Document everything.&quot;
        </div>
      </div>

      <svg
        aria-hidden
        className="absolute right-[-2%] top-[12%] hidden h-[140px] w-[140px] md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="44" stroke="var(--accent)" strokeOpacity="0.45" />
        <circle
          cx="50"
          cy="50"
          r="32"
          stroke="var(--accent)"
          strokeOpacity="0.2"
          strokeDasharray="2 4"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((degrees) => (
          <line
            key={degrees}
            x1="50"
            y1="50"
            x2="50"
            y2="8"
            stroke="var(--accent)"
            strokeOpacity={degrees % 90 === 0 ? 0.5 : 0.2}
            transform={`rotate(${degrees} 50 50)`}
          />
        ))}
        <path d="M50 14 L54 50 L50 46 L46 50 Z" fill="var(--accent)" opacity="0.9" />
        <circle cx="50" cy="50" r="2" fill="var(--accent)" />
      </svg>

      <div
        aria-hidden
        className="absolute bottom-[18%] left-[-2%] hidden rounded-full border border-border bg-card/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-xl md:block"
      >
        <span className="mr-1.5 inline-block size-1.5 translate-y-[-1px] rounded-full bg-accent" />
        28.6139° N · 77.2090° E
      </div>
    </>
  );
}
