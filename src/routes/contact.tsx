import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/site/page";
import { Mail, Github, Linkedin, MapPin, FileText, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Himani" },
      {
        name: "description",
        content:
          "Get in touch with Himani for internships, research collaborations, and meaningful builds.",
      },
      { property: "og:title", content: "Contact — Himani" },
      {
        property: "og:description",
        content:
          "Get in touch with Himani for internships, research collaborations, and meaningful builds.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { Icon: Mail, label: "Email", value: "hello@himani.dev", href: "mailto:hello@himani.dev" },
  { Icon: Linkedin, label: "LinkedIn", value: "/in/himani", href: "https://linkedin.com/" },
  { Icon: Github, label: "GitHub", value: "@himani", href: "https://github.com/" },
  { Icon: FileText, label: "Resume", value: "Download PDF", href: "/resume.pdf" },
  { Icon: MapPin, label: "Location", value: "New Delhi, India" },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Endpoint · 08"
        title={
          <>
            Let's build something <em className="italic text-muted-foreground">meaningful</em>.
          </>
        }
        lead="I'm open to internships, research collaborations, and conversations with anyone making thoughtful software. The fastest way to reach me is email."
      />
      <PageBody>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border/40">
          {channels.map(({ Icon, label, value, href }) => {
            const inner = (
              <div className="group flex items-center gap-5 bg-background p-6 transition-colors hover:bg-surface/60">
                <div className="grid size-11 place-items-center rounded-full border border-border bg-card/60">
                  <Icon className="size-4 text-foreground/80" />
                </div>
                <div className="flex-1">
                  <div className="label-mono">{label}</div>
                  <div className="mt-1 text-base text-foreground">{value}</div>
                </div>
                {href && (
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                )}
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        <p className="mt-12 max-w-2xl font-serif text-2xl leading-snug text-foreground sm:text-3xl">
          If you've read this far, we probably already have something to talk about.
        </p>
      </PageBody>
    </>
  );
}
