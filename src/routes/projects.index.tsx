import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageBody, PageHeader } from "@/components/site/page";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects · Himani's Portfolio" },
      {
        name: "description",
        content: "Case studies of products, tools, and systems Himani has designed and built.",
      },
      { property: "og:title", content: "Projects · Himani's Portfolio" },
      {
        property: "og:description",
        content: "Case studies of products, tools, and systems Himani has designed and built.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work · 02"
        title={
          <>
            Systems I&apos;ve designed, <em className="italic text-muted-foreground">built</em>, and
            shipped.
          </>
        }
        lead="Each project below is a destination in the portfolio. Open one to read the full case study, including problem framing, architecture, and what I would do differently next time."
      />
      <PageBody>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40"
                style={{ background: "var(--grad-primary)" }}
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}{" "}
                  · {project.year}
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {project.status}
                </span>
              </div>
              <h2 className="relative mt-6 font-serif text-3xl leading-tight">{project.name}</h2>
              <p className="relative mt-2 text-sm text-muted-foreground">{project.tagline}</p>
              <p className="relative mt-4 text-sm text-foreground/80">{project.summary}</p>
              <div className="relative mt-auto flex items-end justify-between pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-surface/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </PageBody>
    </>
  );
}
