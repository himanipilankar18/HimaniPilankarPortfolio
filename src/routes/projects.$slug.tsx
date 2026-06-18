import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { ReactNode } from "react";

import { findProject, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) {
      throw notFound();
    }

    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} · Himani's Portfolio` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.name} · Himani's Portfolio` },
          { property: "og:description", content: loaderData.project.summary },
        ]
      : [],
  }),
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 pb-32 pt-48 text-center">
      <h1 className="font-serif text-4xl">Off the map</h1>
      <p className="mt-3 text-muted-foreground">
        That destination does not exist in the portfolio.
      </p>
      <Link to="/projects" className="mt-6 inline-flex text-sm text-primary hover:underline">
        Back to projects
      </Link>
    </div>
  ),
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <article>
      <section className="relative pb-12 pt-36 sm:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-70"
          style={{ background: "var(--grad-aurora)" }}
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px]">
            <Pill>{project.category}</Pill>
            <Pill>{project.status}</Pill>
            <Pill>{project.year}</Pill>
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>
          {project.links ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm hover:bg-surface"
                >
                  <Github className="size-4" /> Code
                </a>
              ) : null}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-primary-foreground"
                  style={{ background: "var(--grad-primary)" }}
                >
                  <ExternalLink className="size-4" /> Live demo
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
        <div className="hairline my-2" />
        <div className="grid gap-12 py-12 md:grid-cols-[1fr_2fr]">
          <div className="label-mono">Stack</div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Section label="Problem">{project.problem}</Section>
        <Section label="Approach">{project.approach}</Section>
        <SectionList label="Architecture" items={project.architecture} />

        <div className="hairline my-12" />

        <div className="label-mono mb-6">Technical decisions</div>
        <div className="grid gap-5 md:grid-cols-2">
          {project.decisions.map((decision) => (
            <div key={decision.title} className="rounded-xl border border-border bg-card/40 p-6">
              <h3 className="font-serif text-xl">{decision.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{decision.body}</p>
            </div>
          ))}
        </div>

        <SectionList label="Challenges" items={project.challenges} />
        <SectionList label="Results" items={project.results} />
        <SectionList label="Lessons learned" items={project.lessons} />
        <SectionList label="Future improvements" items={project.future} />

        <div className="hairline my-12" />
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to all projects
        </Link>
      </div>
    </article>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-1 font-mono uppercase tracking-widest text-muted-foreground">
      {children}
    </span>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-6 py-10 md:grid-cols-[1fr_2fr]">
      <div className="label-mono">{label}</div>
      <p className="text-lg leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}

function SectionList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid gap-6 py-10 md:grid-cols-[1fr_2fr]">
      <div className="label-mono">{label}</div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base text-foreground/90">
            <span
              className="mt-2.5 size-1.5 shrink-0 rounded-full"
              style={{ background: "var(--grad-primary)" }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
