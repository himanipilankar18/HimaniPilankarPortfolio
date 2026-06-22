import { createFileRoute } from "@tanstack/react-router";

import { PageBody, PageHeader } from "@/components/site/page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Himani's Portfolio" },
      {
        name: "description",
        content: "Background, philosophy, and the questions that drive Himani's engineering work.",
      },
      { property: "og:title", content: "About · Himani's Portfolio" },
      {
        property: "og:description",
        content: "Background, philosophy, and the questions that drive Himani's engineering work.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow=""
        title={
          <>
            I&apos;m a computer engineer in{" "}
            <em className="italic text-muted-foreground">progress</em>.
          </>
        }
        lead="I'm a third-year Computer Engineering student at SPIT with a strong interest in Full Stack Development and Artificial Intelligence. I enjoy building applications that solve real-world problems and continuously learning through projects, hackathons, and exploration."
      />
      <PageBody>
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <article className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m an undergraduate in Computer Engineering, drawn to the intersection of
              full-stack development, AI systems, and product design. I care about the craft of
              building and the architectural decisions that look small at the time and large in
              retrospect.
            </p>
            <p>
              The tools I reach for most often are React, TypeScript, Python, and Postgres. The
              ideas I return to most often come from systems thinking, design history, and the
              strange habit of reading documentation cover to cover.
            </p>
            <p>
              I believe the best software disappears. It gets out of the way, leaves the user
              smarter, and respects their attention. I try to build that way.
            </p>
            <p>
              Outside the editor I draw, write, and walk a lot. Some of the best engineering
              decisions happen when you are not at your desk.
            </p>
          </article>
          <aside className="space-y-6">
            {[
              { label: "Education", value: "B.Tech, Computer Engineering · 2023 to 2027" },
              { label: "Based in", value: "New Delhi, India" },
              { label: "Focus", value: "Full-stack · AI agents · Product" },
              { label: "Reading", value: "Designing Data-Intensive Applications" },
              { label: "Recent win", value: "Top 10 finalist · National Hackathon 2025" },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-border bg-card/40 p-5 backdrop-blur-xl"
              >
                <div className="label-mono">{row.label}</div>
                <div className="mt-2 text-sm text-foreground">{row.value}</div>
              </div>
            ))}
          </aside>
        </div>

        <div className="mt-20">
          <div className="label-mono">Principles I work by</div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Clarity over cleverness",
                body: "If a junior engineer cannot read it, I have not finished writing it.",
              },
              {
                title: "Ship small, often, honest",
                body: "Tiny improvements compound. Tiny lies do not.",
              },
              {
                title: "Design is a verb",
                body: "It is not a finishing pass. It is part of the work itself.",
              },
              {
                title: "Strong opinions, loosely held",
                body: "Have a stance. Update it the moment evidence asks you to.",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-border bg-card/40 p-6 backdrop-blur-xl"
              >
                <h3 className="font-serif text-xl">{principle.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageBody>
    </>
  );
}
