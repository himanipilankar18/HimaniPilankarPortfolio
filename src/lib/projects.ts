export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  category: string;
  status: "Live" | "In Progress" | "Concept" | "Shipped";
  year: string;
  stack: string[];
  links?: { github?: string; demo?: string };
  problem: string;
  approach: string;
  architecture: string[];
  decisions: { title: string; body: string }[];
  challenges: string[];
  results: string[];
  lessons: string[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "arthsaathi",
    name: "ArthSaathi",
    tagline: "AI financial literacy, in your language.",
    summary:
      "A multilingual AI companion that turns intimidating financial concepts into conversational guidance for first-time earners across India.",
    category: "AI · Product",
    status: "Live",
    year: "2025",
    stack: ["Next.js", "TypeScript", "RAG", "Postgres", "OpenAI", "Tailwind"],
    links: { github: "https://github.com/", demo: "https://example.com" },
    problem:
      "Most financial literacy tools assume English fluency, a banking vocabulary, and infinite patience. The people who need help the most get the worst experience.",
    approach:
      "Lead with conversation. Strip jargon. Ground every answer in verifiable sources so the assistant is helpful, not hallucinating.",
    architecture: [
      "Next.js app router with edge-rendered chat surface",
      "Retrieval pipeline over a curated corpus of RBI and SEBI material",
      "Postgres plus pgvector for embeddings and chat history",
      "Streaming responses with cost-aware model routing",
    ],
    decisions: [
      {
        title: "RAG over fine-tuning",
        body: "Source-grounded answers matter more than stylistic mimicry for a financial tool.",
      },
      {
        title: "Multilingual at the prompt boundary",
        body: "Translate at the edges so the retrieval layer stays in a single semantic space.",
      },
    ],
    challenges: [
      "Designing prompts that refuse to give investment advice without sounding evasive",
      "Latency budget for streaming under 800 ms to first token in low-bandwidth regions",
    ],
    results: [
      "Early pilots with 200+ users across three languages",
      "Average session length 4x longer than the equivalent FAQ page",
    ],
    lessons: [
      "Trust is a UI problem as much as a model problem",
      "The most-used feature was the simplest: define this word for me",
    ],
    future: [
      "Voice-first interface for users who do not type comfortably",
      "Personalized goal tracking with privacy-preserving local storage",
    ],
  },
  {
    slug: "atlas-os",
    name: "Atlas OS",
    tagline: "A second brain for engineering students.",
    summary:
      "A spatial note-taking surface that maps how concepts connect across courses, built for the way engineers actually think.",
    category: "Productivity · Web",
    status: "In Progress",
    year: "2025",
    stack: ["React", "TypeScript", "Tldraw", "Supabase", "Tailwind"],
    problem:
      "Traditional notes are linear. Engineering knowledge is not. Existing tools either over-engineer the graph or under-deliver on writing.",
    approach:
      "Treat notes as nodes on a canvas, with first-class connections, and an editor that disappears when you are thinking.",
    architecture: [
      "React plus Tldraw canvas with custom shape primitives",
      "Supabase realtime for multiplayer cursors",
      "Local-first persistence with background sync",
    ],
    decisions: [
      {
        title: "Markdown as source of truth",
        body: "Portability beats lock-in. Notes export cleanly without losing structure.",
      },
    ],
    challenges: [
      "Performance at 1000+ nodes without giving up rich previews",
      "Conflict resolution for offline edits",
    ],
    results: ["Used daily across a semester of coursework"],
    lessons: ["Constraints like a fixed canvas size make tools feel calmer"],
    future: ["AI-assisted concept linking", "Public study graphs"],
  },
  {
    slug: "signal-lab",
    name: "Signal Lab",
    tagline: "Realtime sensor playground for makers.",
    summary:
      "A browser-based oscilloscope and event recorder that pairs with low-cost microcontrollers over Web Serial.",
    category: "Hardware · Tooling",
    status: "Shipped",
    year: "2024",
    stack: ["TypeScript", "Web Serial", "Canvas", "Vite"],
    problem:
      "Lab-grade signal tools cost more than a student's tuition. Most beginner projects fail not for lack of effort but for lack of visibility into the system.",
    approach:
      "Build a free, browser-native scope that makes invisible behavior obvious, with no installs and no drivers.",
    architecture: [
      "Web Serial transport with framed protocol",
      "Canvas renderer with windowed sampling",
      "Recordings exportable as CSV and shareable URLs",
    ],
    decisions: [
      {
        title: "Web-native over Electron",
        body: "Lower the activation energy. A link should be enough.",
      },
    ],
    challenges: ["Throughput across browsers", "Drift correction without a hardware clock"],
    results: ["Used in three university workshops"],
    lessons: [
      "Latency hiding matters more than raw throughput when the user is watching a line move",
    ],
    future: ["Logic-analyzer mode", "Collaborative recordings"],
  },
  {
    slug: "fieldnotes",
    name: "Fieldnotes",
    tagline: "Writing companion for technical thinkers.",
    summary:
      "A focused, distraction-free writing surface with inline citations and a built-in second-pass editor that asks better questions of your draft.",
    category: "Writing · AI",
    status: "Concept",
    year: "2026",
    stack: ["React", "Tiptap", "Anthropic"],
    problem:
      "AI writing tools optimize for output volume. The best writing comes from being asked the right question at the right moment.",
    approach: "Pair a quiet editor with a sparingly used assistant that asks, not answers.",
    architecture: [
      "Tiptap editor with custom marks for citations",
      "Server functions for assistant prompts",
    ],
    decisions: [
      {
        title: "Ask, do not generate",
        body: "The assistant returns questions by default. Generation is opt-in.",
      },
    ],
    challenges: ["Prompting models to be Socratic without being annoying"],
    results: ["Internal use across two semesters of essays"],
    lessons: ["Tools that respect silence get used more"],
    future: ["Citation graph", "Voice memos as drafting input"],
  },
];

export const findProject = (slug: string) => projects.find((project) => project.slug === slug);
