import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/site/page";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Himani" },
      {
        name: "description",
        content:
          "Internships, research, and collaborations that shaped Himani's engineering practice.",
      },
      { property: "og:title", content: "Experience — Himani" },
      {
        property: "og:description",
        content:
          "Internships, research, and collaborations that shaped Himani's engineering practice.",
      },
    ],
  }),
  component: ExperiencePage,
});

const entries = [
  {
    role: "Software Engineering Intern",
    org: "Stealth AI startup",
    period: "Summer 2025",
    body: "Owned the data ingestion path for a RAG product — designed schemas, wrote the chunker, set up evals. Shipped to production users in week three.",
  },
  {
    role: "Open Source Contributor",
    org: "Various TypeScript projects",
    period: "2024 — present",
    body: "Small, careful pull requests: docs fixes, edge-case patches, accessibility tweaks. The best way I've found to learn other people's mental models.",
  },
  {
    role: "Teaching Assistant",
    org: "Intro to Programming · University",
    period: "2024",
    body: "Ran weekly labs for 60 first-year students. Discovered that the hardest part of teaching code is unteaching the fear of breaking things.",
  },
  {
    role: "Design Lead",
    org: "Campus Tech Society",
    period: "2023 — 2024",
    body: "Rebuilt the society's visual identity and the workshop curriculum. Membership doubled; my appreciation for graphic designers tripled.",
  },
];

function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Trajectories · 05"
        title={
          <>
            Where I've built <em className="italic text-muted-foreground">alongside</em> others.
          </>
        }
        lead="A short list, chosen for what each role actually taught me — not for what it looked good as on a one-pager."
      />
      <PageBody>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border/40">
          {entries.map((e) => (
            <div
              key={e.role + e.org}
              className="grid gap-4 bg-background p-7 md:grid-cols-[1fr_2fr] md:gap-10 md:p-10"
            >
              <div>
                <div className="label-mono">{e.period}</div>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{e.role}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{e.org}</div>
              </div>
              <p className="text-base leading-relaxed text-foreground/90">{e.body}</p>
            </div>
          ))}
        </div>
      </PageBody>
    </>
  );
}
