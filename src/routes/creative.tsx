import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/site/page";

export const Route = createFileRoute("/creative")({
  head: () => ({
    meta: [
      { title: "Beyond Engineering — Himani" },
      {
        name: "description",
        content: "How drawing, design, and writing shape the engineering decisions Himani makes.",
      },
      { property: "og:title", content: "Beyond Engineering — Himani" },
      {
        property: "og:description",
        content: "How drawing, design, and writing shape the engineering decisions Himani makes.",
      },
    ],
  }),
  component: CreativePage,
});

const threads = [
  {
    title: "Drawing",
    body: "Mostly ink, mostly hands. Drawing has taught me more about UI hierarchy than any framework — when a line is wrong on paper, it's loud.",
  },
  {
    title: "Visual storytelling",
    body: "I sketch problem statements before I write code for them. If a system can't be drawn on one page, I've probably misunderstood it.",
  },
  {
    title: "Reading",
    body: "Currently: design history, distributed systems, and the occasional Borges. The unexpected adjacencies are where the best ideas come from.",
  },
  {
    title: "Writing",
    body: "Engineering memos, build notes, postmortems. Writing is the rubber duck I trust the most.",
  },
];

function CreativePage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond engineering · 06"
        title={
          <>
            Practices that make the <em className="italic text-muted-foreground">engineering</em>{" "}
            better.
          </>
        }
        lead="These aren't hobbies in the corner of a résumé. They directly shape the decisions I make as an engineer — which interfaces feel honest, which abstractions feel earned."
      />
      <PageBody>
        <div className="grid gap-5 md:grid-cols-2">
          {threads.map((t, i) => (
            <div
              key={t.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-xl"
            >
              <div className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="font-serif text-3xl tracking-tight">{t.title}</h2>
              <p className="mt-4 max-w-md text-base text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-20 max-w-3xl">
          <p className="font-serif text-3xl leading-snug text-foreground sm:text-4xl">
            "The discipline of drawing is the discipline of seeing carefully. Engineering, when it's
            good, is the same."
          </p>
          <footer className="mt-4 label-mono">A note from the margin</footer>
        </blockquote>
      </PageBody>
    </>
  );
}
