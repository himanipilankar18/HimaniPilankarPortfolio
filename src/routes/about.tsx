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

        <div className="grid gap-12 min-[1150px]:grid-cols-[1.7fr_1fr]">
          {/* Left Side */}
          <article className="max-w-4xl">
            <h2 className="font-serif text-3xl text-foreground">
              About Me
            </h2>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-muted-foreground">
              Hi, I'm Himani Pilankar, a third-year Computer Engineering student at
              Sardar Patel Institute of Technology (SPIT) with a strong interest in
              Full Stack Development and Artificial Intelligence.
            </p>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-muted-foreground">
              I enjoy transforming ideas into practical applications that solve
              real-world problems. Through projects, hackathons, and continuous
              learning, I have explored different areas of software development while
              strengthening my problem-solving and engineering skills.
            </p>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-muted-foreground">
              Beyond academics, I enjoy exploring emerging technologies,
              participating in hackathons, mentoring students, and continuously
              challenging myself through projects, coding practice, and hands-on
              learning experiences.
            </p>

          </article>

          {/* Right Side */}
          <aside>

            <div className="rounded-xl border border-border bg-card/40 p-8 backdrop-blur-xl">

              <h3 className="font-serif text-2xl text-foreground">
                Education
              </h3>

              <div className="mt-8 space-y-8">

                {/* BTech */}
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />

                  <h4 className="text-lg font-semibold text-foreground">
                    B.Tech Computer Engineering
                  </h4>

                  <p className="mt-1 text-muted-foreground">
                    Sardar Patel Institute of Technology
                  </p>

                  <p className="text-sm text-muted-foreground">
                    2023 – 2027
                  </p>

                  <p className="mt-2 text-sm text-foreground">
                    CGPA: 8.17
                  </p>
                </div>

                {/* Diploma */}
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />

                  <h4 className="text-lg font-semibold text-foreground">
                    Diploma in Computer Engineering
                  </h4>

                  <p className="mt-1 text-muted-foreground">
                    KJ Somaiya Polytechnic
                  </p>

                  <p className="text-sm text-muted-foreground">
                    2020 – 2023
                  </p>

                  <p className="mt-2 text-sm text-foreground">
                    Percentage: 97.10%
                  </p>
                </div>

                {/* SSC */}
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />

                  <h4 className="text-lg font-semibold text-foreground">
                    X (SSC board)
                  </h4>
                  <p className="mt-1 text-muted-backgroun">
                    Swami Vivekanand Vidyamandir, Dombivali
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Completed in 2020
                  </p>

                  <p className="mt-2 text-sm text-foreground">
                    Percentage: 94.80%
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>

      </PageBody>
    </>
  );
}
