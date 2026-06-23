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
        lead="A little more about my journey, interests, and the experiences shaping me as an engineer."
      />
      <PageBody>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">

          {/* Left Column */}
          <article>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Hi, I'm a third-year Computer Engineering student at
              Sardar Patel Institute of Technology (SPIT) with a strong interest in
              Full Stack Development and Artificial Intelligence.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              I enjoy transforming ideas into practical applications that solve
              real-world problems. Through projects, hackathons, and continuous
              learning, I have explored different areas of software development while
              strengthening my problem-solving and engineering skills.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Beyond academics, I enjoy exploring emerging
              technologies, and continuously challenging myself through projects,
              coding practice, and hands-on learning experiences.
            </p>

            <blockquote className="mt-10 border-l border-accent pl-5 font-serif italic text-xl text-foreground">
              "The best way to learn engineering is by building."
            </blockquote>
          </article>

          {/* Right Column */}
          <aside className="space-y-5">

            <div className="rounded-xl border border-border bg-card/40 p-6 backdrop-blur-xl">
              <div className="label-mono">Education</div>

              <div className="mt-4">
                <p className="font-medium text-foreground">
                  B.Tech Computer Engineering
                </p>
                <p className="text-sm text-muted-foreground">
                  SPIT • 2023 – 2027
                </p>
              </div>

              <div className="mt-5">
                <p className="font-medium text-foreground">
                  Diploma in Computer Engineering
                </p>
                <p className="text-sm text-muted-foreground">
                  KJ Somaiya Polytechnic • 2020 – 2023
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card/40 p-6 backdrop-blur-xl">
              <div className="label-mono">Quick Facts</div>

              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li>10+ Projects Built</li>
                <li>3+ Hackathons Participated</li>
                <li>Full Stack Development</li>
                <li>Artificial Intelligence</li>
                <li>Mumbai, India</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card/40 p-6 backdrop-blur-xl">
              <div className="label-mono">Current Focus</div>

              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li>Data Structures & Algorithms</li>
                <li>Backend Development</li>
                <li>System Design Fundamentals</li>
                <li>AI & Machine Learning</li>
              </ul>
            </div>

          </aside>

        </div>
      </PageBody>
    </>
  );
}
