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
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "Backend",
    note: "Powering applications behind the scenes.",
    items: ["Node.js", "Express", "JWT Authentication", "REST APIs"],
  },
  {
    name: "Databases",
    note: "Managing and organizing application data.",
    items: ["MySQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    name: "Engineering Fundamentals",
    note: "The fundamentals behind every application.",
    // items: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating System", "Computer Networks", "Git & GitHub"].
    items: ["DSA", "OOP", "DBMS", "OS", "CN", "Git & GitHub"],
  },
  {
    name: "AI",
    note: "Exploring AI to build smarter applications.",
    items: ["Prompt Engineering", "OpenAI APIs","RAG Pipelines", "Vector Embeddings"]
  },
  {
    name: "Currently Exploring",
    note: "Topics I'm actively studying and trying to apply through projects.",
    items: ["Agentic AI", "System Design", "Cloud Fundamentals", "Deep Learning", "Natural Language Processing"]
  },
];

function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow=""
        title={
          <>
            The <em className="italic text-muted-foreground">technologies</em> I work with.
          </>
        }
lead="Technology is always evolving, and so am I. Here's a snapshot of the tools, languages, and concepts I work with today while continuing to learn more every day."      />
      <PageBody>
        <div className="grid gap-5 md:grid-cols-2">
          {territories.map((territory, index) => (
            <div
              key={territory.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-xl transition-colors hover:border-primary/40"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30"
                style={{ background: "var(--grad-primary)" }}
              />
              <div className="relative flex items-baseline justify-between">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {/* Territory {String(index + 1).padStart(2, "0")} */}
                </div>
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: "var(--grad-primary)" }}
                />
              </div>
              <h2 className="relative mt-4 font-serif text-3xl tracking-tight">{territory.name}</h2>
              <p className="relative mt-1 text-[xs] italic text-muted-foreground">{territory.note}</p>
              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {territory.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-surface/60 px-3 py-1 font-mono text-[xs] text-foreground/85"
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
