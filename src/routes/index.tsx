import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

import portraitImage from "../../pp_for_portfoliowebsite-withoutbg.png";
import { FilmStrip } from "@/components/site/film-strip";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himani Pilankar | Portfolio" },
      {
        name: "description",
        content:
          "Computer Engineering student at SPIT with a passion for full-stack development, artificial intelligence, and solving real-world problems through projects.",
      },
      { property: "og:title", content: "Himani Pilankar | Portfolio" },
      {
        property: "og:description",
        content:
          "Computer Engineering student at SPIT building full-stack and AI projects with a focus on real-world problem solving.",
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

        <div className="relative mx-auto grid min-h-[100svh] max-w-[90rem] grid-cols-1 items-center gap-12 px-5 pb-16 pt-24 sm:px-6 md:gap-8 md:px-8 md:pb-20 md:pt-32 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10 mt-8 max-w-[42rem] md:mt-0">
            <div className="mb-5">
              <p className="font-serif text-[22px] text-foreground sm:text-[26px] md:text-[34px]">
                Hi, I&apos;m <span className="italic">Himani Pilankar</span>
              </p>
            </div>

            <h1 className="font-serif leading-[0.95] tracking-tight text-foreground text-[42px] sm:text-[52px] md:text-[60px] lg:text-[64px]">
              a developer who loves to
              <span className="mt-2 block italic text-accent">
                solve real world problems.
              </span>
            </h1>

            <div className="mt-6 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted-foreground sm:text-[17px] md:text-[19px]">
              <p>
                Computer Engineering student at SPIT with a passion for full-stack development and
                Artificial Intelligence.
              </p>
              <p>
                I enjoy transforming ideas into applications, participating in hackathons, and
                continuously learning through projects and exploration.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {[
                { value: "10+", label: "Projects" },
                { value: "3+", label: "Hackathons" },
                { value: "AI + Full Stack", label: "Focus" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-full border border-border bg-card/55 px-3 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">
                      {stat.value}
                    </span>

                    <span className="text-[15px] font-medium text-foreground">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/projects"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-accent/60 bg-[rgba(212,164,77,0.05)] px-6 py-3 text-[15px] font-medium text-foreground transition-all duration-300 hover:bg-[rgba(212,164,77,0.10)]"
              >
                View Projects
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <a
                href="/resume.pdf"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-accent/35 bg-[rgba(212,164,77,0.03)] px-6 py-3 text-[15px] font-medium text-foreground transition-all duration-300 hover:border-accent/60"
              >
                <Download className="size-4" />
                Download Resume
              </a>

              <Link
                to="/contact"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-accent/35 bg-[rgba(212,164,77,0.03)] px-6 py-3 text-[15px] font-medium text-foreground transition-all duration-300 hover:border-accent/60"
              >
                Let's Connect
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-foreground"
              >
                <Github className="size-5 sm:size-6" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <Linkedin className="size-5 sm:size-6" />
              </a>
              <a
                href="mailto:hello@himani.dev"
                aria-label="Email"
                className="transition-colors hover:text-foreground"
              >
                <Mail className="size-5 sm:size-6" />
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
                Open to opportunities
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto flex h-[320px] w-full max-w-[320px] items-center justify-center sm:h-[420px] sm:max-w-[420px] md:h-[520px] md:max-w-[520px] lg:h-[600px] lg:max-w-[560px]">
              {/* Outer Glow */}
              <div
                className="absolute h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px] rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,164,77,0.22), transparent 70%)",
                }}
              />

              {/* Copper Ring */}
              <div
                className="absolute h-[240px] w-[240px] sm:h-[340px] sm:w-[340px] md:h-[450px] md:w-[450px] rounded-full"
                style={{
                  border: "10px solid rgba(212,164,77,0.55)",
                }}
              />

              {/* Portrait */}
              <img
                src={portraitImage}
                alt="Himani Pilankar"
                className="relative z-10 h-[280px] object-contain sm:h-[380px] md:h-[480px] lg:h-[520px]" />

              <FloatingMotivationCard />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
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

function FloatingMotivationCard() {
  return (
    <div className="absolute left-[5%] top-[10%] rotate-[-4deg] hidden rounded-2xl border border-border bg-card/82 p-4 shadow-[0_20px_50px_-26px_rgba(0,0,0,0.9)] backdrop-blur-xl md:block">
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/85">
        Field Note
      </div>
      <div className="mt-3 space-y-1 font-serif text-[15px] italic leading-tight text-foreground/92">
        <div>Learn.</div>
        <div>Build.</div>
        <div>Improve.</div>
        <div>Repeat.</div>
      </div>
    </div>
  );
}
