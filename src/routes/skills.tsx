import { createFileRoute } from "@tanstack/react-router";

import { PageBody, PageHeader } from "@/components/site/page";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills · Himani's Portfolio" },
      {
        name: "description",
        content:
          "The territories Himani works across: frontend, backend, data, engineering fundamentals, and AI.",
      },
      { property: "og:title", content: "Skills · Himani's Portfolio" },
      {
        property: "og:description",
        content:
          "The territories Himani works across: frontend, backend, data, engineering fundamentals, and AI.",
      },
    ],
  }),
  component: SkillsPage,
});

const territories = [
  {
    name: "Frontend",
    note: "Where interfaces become experiences.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
  },
  {
    name: "Backend",
    note: "The quiet machinery behind the surface.",
    items: ["Node.js", "Express", "REST & GraphQL APIs", "Auth flows", "Webhooks"],
  },
  {
    name: "Data",
    note: "Where state is remembered.",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "pgvector", "Prisma"],
  },
  {
    name: "Engineering Fundamentals",
    note: "The terrain under everything else.",
    items: ["DSA", "OOP", "System Design", "Git workflows", "Testing"],
  },
  {
    name: "AI & Agents",
    note: "The newest, fastest-moving territory.",
    items: ["RAG pipelines", "LLM prompting", "Agent design", "Embeddings", "Eval loops"],
  },
  {
    name: "Adjacent",
    note: "Borders I keep crossing.",
    items: ["Product thinking", "Design systems", "Technical writing", "Workshop facilitation"],
  },
];

function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Territories · 03"
        title={
          <>
            A map of <em className="italic text-muted-foreground">where</em> I work.
          </>
        }
        lead="I do not think in skill bars. I think in territories: places I keep returning to, deepening, and connecting back to the rest of the portfolio."
      />
      <PageBody>
        <div className="grid gap-5 md:grid-cols-2">
          {territories.map((territory, index) => (
            <div
              key={territory.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-xl transition-colors hover:border-primary/40"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30"
                style={{ background: "var(--grad-primary)" }}
              />
              <div className="relative flex items-baseline justify-between">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Territory {String(index + 1).padStart(2, "0")}
                </div>
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: "var(--grad-primary)" }}
                />
              </div>
              <h2 className="relative mt-4 font-serif text-3xl tracking-tight">{territory.name}</h2>
              <p className="relative mt-1 text-sm italic text-muted-foreground">{territory.note}</p>
              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {territory.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-[11px] text-foreground/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageBody>
    </>
  );
}
