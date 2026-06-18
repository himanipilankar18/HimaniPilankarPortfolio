import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/site/page";

export const Route = createFileRoute("/explorations")({
  head: () => ({
    meta: [
      { title: "Current Explorations — Himani" },
      {
        name: "description",
        content:
          "Open questions and directions Himani is following right now — AI agents, advanced system design, product engineering, entrepreneurship.",
      },
      { property: "og:title", content: "Current Explorations — Himani" },
      {
        property: "og:description",
        content: "Open questions and directions Himani is following right now.",
      },
    ],
  }),
  component: ExplorationsPage,
});

const horizons = [
  {
    title: "AI agents that respect attention",
    status: "Active",
    body: "Building small, narrow agents that do one thing visibly well — and learning when delegating is actually slower than doing.",
  },
  {
    title: "System design at small scale",
    status: "Active",
    body: "Most real systems aren't web-scale. I'm interested in the harder, less glamorous question of doing the right design for the right scale.",
  },
  {
    title: "Product engineering",
    status: "Active",
    body: "What does it mean to be the engineer who also holds the product question? Reading, building, and noticing what changes when I do both.",
  },
  {
    title: "Entrepreneurship",
    status: "Watching",
    body: "Curious about founder craft — not as a career move, but as a discipline of taking responsibility for the whole thing.",
  },
];

function ExplorationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Horizons · 07"
        title={
          <>
            Open questions I'm <em className="italic text-muted-foreground">following</em> now.
          </>
        }
        lead="This page changes more than the others. It's where the atlas grows new edges — half-finished ideas, half-formed opinions, fully committed curiosity."
      />
      <PageBody>
        <div className="grid gap-5 md:grid-cols-2">
          {horizons.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <span className="label-mono">{h.title.split(" ")[0]}</span>
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {h.status}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-2xl leading-tight">{h.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>
      </PageBody>
    </>
  );
}
