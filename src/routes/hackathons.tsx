import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/site/page";

export const Route = createFileRoute("/hackathons")({
  head: () => ({
    meta: [
      { title: "Hackathons — Himani" },
      {
        name: "description",
        content:
          "Short, intense expeditions across product, design, and engineering — the hackathons Himani has shipped at.",
      },
      { property: "og:title", content: "Hackathons — Himani" },
      {
        property: "og:description",
        content: "Short, intense expeditions across product, design, and engineering.",
      },
    ],
  }),
  component: HackathonsPage,
});

const expeditions = [
  {
    name: "Smart India Hackathon",
    year: "2025",
    role: "Full-stack lead",
    team: "4 engineers, 1 designer",
    challenge:
      "Build a citizen-facing portal for grievance redressal that works on patchy connections.",
    tech: ["Next.js", "Postgres", "PWA", "i18n"],
    outcome: "Finalist · Top 10 of 1,200 teams",
    learnings: "Offline-first isn't a feature; it's an architecture decision you make on day one.",
  },
  {
    name: "AI for Bharat Hack",
    year: "2024",
    role: "AI engineer",
    team: "3 engineers",
    challenge: "Make a regional-language tutor that's helpful without being preachy.",
    tech: ["RAG", "Whisper", "Translation APIs"],
    outcome: "Winner · Most Useful AI Tool",
    learnings: "Evaluation harnesses pay for themselves by the second day.",
  },
  {
    name: "Devfolio Build Sprint",
    year: "2024",
    role: "Designer / engineer",
    team: "Solo",
    challenge: "Ship a working developer tool in 48 hours.",
    tech: ["TypeScript", "Vite", "Web APIs"],
    outcome: "Top project of weekend",
    learnings: "Solo hackathons are a writing exercise: you ship as much as you can decide.",
  },
];

function HackathonsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Expeditions · 04"
        title={
          <>
            Short, intense <em className="italic text-muted-foreground">expeditions</em>.
          </>
        }
        lead="Hackathons are how I stress-test ideas. 36 hours, a small team, no slack in the schedule — every decision shows up immediately in the product."
      />
      <PageBody>
        <ol className="relative space-y-10 border-l border-border pl-8">
          {expeditions.map((e, i) => (
            <li key={e.name} className="relative">
              <span
                className="absolute -left-[37px] top-2 grid size-3 place-items-center rounded-full"
                style={{
                  background: "var(--grad-primary)",
                  boxShadow: "0 0 16px oklch(0.66 0.21 295 / 0.7)",
                }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-serif text-3xl tracking-tight">{e.name}</h2>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {e.year} · Expedition {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-base text-foreground/90">{e.challenge}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <Meta k="Role" v={e.role} />
                <Meta k="Team" v={e.team} />
                <Meta k="Outcome" v={e.outcome} />
                <Meta k="Stack" v={e.tech.join(" · ")} />
              </div>
              <p className="mt-5 max-w-3xl border-l-2 border-primary/40 pl-4 text-sm italic text-muted-foreground">
                {e.learnings}
              </p>
            </li>
          ))}
        </ol>
      </PageBody>
    </>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/40 p-4">
      <div className="label-mono">{k}</div>
      <div className="mt-1.5 text-sm text-foreground">{v}</div>
    </div>
  );
}
