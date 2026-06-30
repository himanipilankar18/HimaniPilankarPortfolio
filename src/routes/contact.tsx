import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageBody } from "@/components/site/page";
import { Mail, Github, Linkedin, MapPin, FileText,ArrowUpRight} from "lucide-react";
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
        eyebrow=""
        title={
          <>
            One message can start a great{" "}
            <em className="italic text-muted-foreground">collaboration</em>.
          </>
        }
        lead="Whether it's an internship, a research opportunity, or an interesting idea, I'd love to hear from you."
      />

      <PageBody>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/30 p-6 sm:p-8 lg:p-10">
          <form className="space-y-8">
            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="label-mono mb-2 block">
                  Full Name <span className="text-destructive">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label className="label-mono mb-2 block">
                  Email Address <span className="text-destructive">*</span>
                </label>

                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            {/* Company + Designation */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="label-mono mb-2 block">Company / Organization</label>

                <input
                  type="text"
                  placeholder="Acme Technologies"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label className="label-mono mb-2 block">Designation</label>

                <input
                  type="text"
                  placeholder="Software Engineer"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="label-mono mb-2 block">
                Subject <span className="text-destructive">*</span>
              </label>

              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20">
                <option>Internship Opportunity</option>
                <option>Research Collaboration</option>
                <option>Freelance Project</option>
                <option>Open Source</option>
                <option>General Inquiry</option>
                <option>Other</option>
              </select>
            </div>

            {/* Preferred Contact */}
            <div>
              <label className="label-mono mb-3 block">Preferred Contact Method</label>

              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" />
                  <span>Email</span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" />
                  <span>LinkedIn</span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" />
                  <span>Phone</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="label-mono mb-2 block">
                Message <span className="text-destructive">*</span>
              </label>

              <textarea
                rows={8}
                placeholder="Tell me about your opportunity, project, research idea, or anything you'd like to discuss..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            {/* Submit */}
            <div className="border-t border-border pt-8">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-medium text-accent-foreground transition-all hover:gap-4 sm:w-auto"
              >
                Send Message

                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center font-serif text-2xl leading-snug text-foreground sm:text-3xl">
          I will get back to you soon.
        </p>
      </PageBody>
    </>
  );
}