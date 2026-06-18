import { Link, useRouterState } from "@tanstack/react-router";
import { useMemo } from "react";

type Destination = {
  id: string;
  label: string;
  kicker: string;
  to:
    | "/"
    | "/about"
    | "/skills"
    | "/projects"
    | "/experience"
    | "/creative"
    | "/explorations"
    | "/contact";
};

const DESTINATIONS: Destination[] = [
  { id: "origin", label: "Origin", kicker: "I", to: "/" },
  { id: "foundations", label: "Foundations", kicker: "II", to: "/about" },
  { id: "skills", label: "Skills", kicker: "III", to: "/skills" },
  { id: "projects", label: "Projects", kicker: "IV", to: "/projects" },
  { id: "experiences", label: "Experiences", kicker: "V", to: "/experience" },
  { id: "creative", label: "Creative Work", kicker: "VI", to: "/creative" },
  { id: "explorations", label: "Explorations", kicker: "VII", to: "/explorations" },
  { id: "contact", label: "Contact", kicker: "VIII", to: "/contact" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const activeIndex = useMemo(() => {
    let bestIndex = 0;
    let bestLength = -1;

    DESTINATIONS.forEach((destination, index) => {
      const matches =
        destination.to === "/" ? pathname === "/" : pathname.startsWith(destination.to);

      if (matches && destination.to.length > bestLength) {
        bestIndex = index;
        bestLength = destination.to.length;
      }
    });

    return bestIndex;
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--background) 80%, transparent), color-mix(in oklab, var(--background) 40%, transparent) 70%, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <Compass />
            <span className="font-serif text-[15px] tracking-tight text-foreground">
              himani<span className="text-muted-foreground/80">.dev</span>
            </span>
          </Link>

          <RouteLine activeIndex={activeIndex} />

          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
              Vol. I · MMXXVI
            </span>
          </div>
        </div>

        <MobileRouteNavigator activeIndex={activeIndex} />
      </div>
      <div className="hairline relative" />
    </header>
  );
}

function RouteLine({ activeIndex }: { activeIndex: number }) {
  const width = 720;
  const height = 56;
  const paddingX = 20;
  const innerWidth = width - paddingX * 2;
  const step = innerWidth / (DESTINATIONS.length - 1);
  const yMid = height / 2 + 6;

  const points = DESTINATIONS.map((_, index) => ({ x: paddingX + index * step, y: yMid }));
  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
  const beacon = points[activeIndex];

  return (
    <nav aria-label="Exploration route" className="relative hidden flex-1 justify-center md:flex">
      <div className="relative">
        <svg
          width={width}
          height={height + 18}
          viewBox={`0 0 ${width} ${height + 18}`}
          className="overflow-visible"
        >
          <path d={path} stroke="var(--border)" strokeWidth={1} fill="none" />
          <path
            d={points
              .slice(0, activeIndex + 1)
              .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
              .join(" ")}
            stroke="var(--accent)"
            strokeOpacity={0.55}
            strokeWidth={1.25}
            fill="none"
            style={{ transition: "all 900ms cubic-bezier(0.22, 1, 0.36, 1)" }}
          />

          {points.map((point, index) => {
            const isActive = index === activeIndex;

            return (
              <g key={DESTINATIONS[index].id} transform={`translate(${point.x} ${point.y})`}>
                <circle
                  r={isActive ? 4 : 2.5}
                  fill={isActive ? "var(--accent)" : "var(--background)"}
                  stroke={isActive ? "var(--accent)" : "var(--muted-foreground)"}
                  strokeOpacity={isActive ? 1 : 0.45}
                  strokeWidth={1}
                  style={{ transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
                {isActive ? (
                  <circle r={10} fill="none" stroke="var(--accent)" strokeOpacity={0.3} />
                ) : null}
              </g>
            );
          })}

          <g
            transform={`translate(${beacon.x} ${beacon.y})`}
            style={{ transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <circle r={18} fill="var(--accent)" opacity={0.08} />
          </g>
        </svg>

        <ul className="pointer-events-none absolute inset-0">
          {points.map((point, index) => {
            const destination = DESTINATIONS[index];
            const isActive = index === activeIndex;

            return (
              <li
                key={destination.id}
                className="pointer-events-auto absolute -translate-x-1/2"
                style={{ left: point.x, top: height + 2 }}
              >
                <Link
                  to={destination.to}
                  className="group flex flex-col items-center gap-0.5"
                  title={destination.label}
                >
                  <span
                    className="font-serif italic transition-all duration-700"
                    style={{
                      fontSize: isActive ? 13 : 11,
                      color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                      letterSpacing: isActive ? "0" : "0.01em",
                      opacity: isActive ? 1 : 0.78,
                    }}
                  >
                    {destination.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function MobileRouteNavigator({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="mt-3 md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground/80">
            Currently
          </div>
          <div className="truncate font-serif italic text-base text-foreground">
            {DESTINATIONS[activeIndex].label}
          </div>
        </div>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {DESTINATIONS[activeIndex].kicker} / VIII
        </span>
      </div>

      <div className="-mx-1 mt-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex w-max items-center gap-4 px-1">
          {DESTINATIONS.map((destination, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={destination.id} className="flex items-center gap-4">
                <Link to={destination.to} className="flex flex-col items-center gap-1">
                  <span
                    className="block size-[7px] rounded-full transition-all"
                    style={{
                      background: isActive ? "var(--accent)" : "transparent",
                      border: isActive
                        ? "1px solid var(--accent)"
                        : "1px solid color-mix(in oklab, var(--muted-foreground) 50%, transparent)",
                      boxShadow: isActive ? "0 0 0 5px rgba(212,164,77,0.10)" : "none",
                    }}
                  />
                  <span
                    className="font-mono text-[9px] uppercase tracking-[0.22em]"
                    style={{
                      color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                    }}
                  >
                    {destination.label}
                  </span>
                </Link>
                {index < DESTINATIONS.length - 1 ? (
                  <span
                    aria-hidden
                    className="block h-px w-6"
                    style={{ background: "var(--border)" }}
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Compass() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.5" stroke="var(--accent)" strokeOpacity="0.5" />
      <circle cx="12" cy="12" r="1.3" fill="var(--accent)" />
      <path d="M12 4.5 L13.4 11 L12 12.5 L10.6 11 Z" fill="var(--accent)" opacity="0.9" />
      <path d="M12 19.5 L13.2 13.5 L12 12.5 L10.8 13.5 Z" fill="var(--foreground)" opacity="0.55" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="label-mono">A closing note</div>
          <div className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Let&apos;s build something <span className="italic text-accent">meaningful</span>.
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Always up for thoughtful conversations about engineering, design, and the products in
            between.
          </p>
        </div>
        <div>
          <div className="label-mono mb-3">Route</div>
          <ul className="space-y-2 text-sm">
            {DESTINATIONS.slice(1, 6).map((destination) => (
              <li key={destination.id}>
                <Link
                  to={destination.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {destination.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="label-mono mb-3">Elsewhere</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:hello@himani.dev"
                className="text-muted-foreground hover:text-foreground"
              >
                hello@himani.dev
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/resume.pdf" className="text-muted-foreground hover:text-foreground">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <span className="font-mono">
            &copy; {new Date().getFullYear()} Himani · Field notes from an engineer&apos;s journey.
          </span>
          <span className="font-mono">Vol. I · MMXXVI</span>
        </div>
      </div>
    </footer>
  );
}
