import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] opacity-60"
        style={{ background: "var(--grad-aurora)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="label-mono">{eyebrow}</div>
        <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{lead}</p>
        )}
        <div className="hairline mt-12" />
      </div>
    </section>
  );
}

export function PageBody({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">{children}</div>;
}
