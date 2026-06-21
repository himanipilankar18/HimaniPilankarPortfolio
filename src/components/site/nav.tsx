import { Link, useRouterState } from "@tanstack/react-router";
import { useMemo } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
type Destination = {
  id: string;
  label: string;
  kicker: string;
  to:
  | "/"
  | "/about"
  | "/skills"
  | "/projects"
  | "/hackathons"
  | "/experience"
  | "/creative"
  | "/contact";
};

const DESTINATIONS: Destination[] = [
  { id: "home", label: "Home", kicker: "I", to: "/" },
  { id: "about", label: "About", kicker: "II", to: "/about" },
  { id: "skills", label: "Skills", kicker: "III", to: "/skills" },
  { id: "projects", label: "Projects", kicker: "IV", to: "/projects" },
  {
    id: "cocurricular",
    label: "CoCurricular",
    kicker: "V",
    to: "/hackathons",
  },
  { id: "experience", label: "Experience", kicker: "VI", to: "/experience" },
  {
    id: "beyond-tech",
    label: "Beyond Tech",
    kicker: "VII",
    to: "/creative",
  },
  { id: "contact", label: "Contact", kicker: "VIII", to: "/contact" },
];

export function SiteNav() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            "linear-gradient(to bottom, color-mix(in oklab, var(--background) 82%, transparent), color-mix(in oklab, var(--background) 44%, transparent) 70%, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-[80rem] px-4 py-2 sm:px-5 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="shrink-0 font-serif text-[24px] font-medium tracking-tight text-foreground"
          >
            Himani Pilankar
          </Link>

          <>
            <RouteLine activeIndex={activeIndex} />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-full border border-border bg-card/70 p-2 backdrop-blur-xl min-[1000px]:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </>
        </div>

        <div className="min-[1000px]:hidden">
          {mobileMenuOpen && (
            <div className="mt-3 rounded-2xl border border-border bg-card/90 p-3 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {DESTINATIONS.map((destination) => (
                  <Link
                    key={destination.id}
                    to={destination.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 transition-colors hover:bg-white/5"
                  >
                    <span className="font-serif text-[17px]">
                      {destination.label}
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {destination.kicker}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hairline relative" />
    </header>
  );
}

function RouteLine({ activeIndex }: { activeIndex: number }) {
  const width = 760;
  const height = 40;
  const paddingX = 24;
  const innerWidth = width - paddingX * 2;
  const step = innerWidth / (DESTINATIONS.length - 1);
  const yMid = height / 2 + 1;

  const points = DESTINATIONS.map((_, index) => ({ x: paddingX + index * step, y: yMid }));
  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
  const beacon = points[activeIndex];

  return (
    <nav
      aria-label="Journey navigation"
      className="relative hidden flex-1 justify-center min-[1000px]:flex"
    >
      <div className="relative">
        <svg
          width={width}
          height={height + 24}
          viewBox={`0 0 ${width} ${height + 24}`}
          className="overflow-visible"
        >
          <path d={path} stroke="var(--border)" strokeWidth={1} fill="none" />
          <path
            d={points
              .slice(0, activeIndex + 1)
              .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
              .join(" ")}
            stroke="var(--accent)"
            strokeOpacity={0.58}
            strokeWidth={1.35}
            fill="none"
            style={{ transition: "all 900ms cubic-bezier(0.22, 1, 0.36, 1)" }}
          />

          {points.map((point, index) => {
            const isActive = index === activeIndex;

            return (
              <g key={DESTINATIONS[index].id} transform={`translate(${point.x} ${point.y})`}>
                <circle
                  r={isActive ? 4 : 2.6}
                  fill={isActive ? "var(--accent)" : "var(--background)"}
                  stroke={isActive ? "var(--accent)" : "var(--muted-foreground)"}
                  strokeOpacity={isActive ? 1 : 0.52}
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
                style={{ left: point.x, top: height + 1 }}
              >
                <Link
                  to={destination.to}
                  className="group flex flex-col items-center gap-0.5"
                  title={destination.label}
                >
                  <span
                    className="font-serif italic transition-all duration-700"
                    style={{
                      fontSize: isActive ? 16 : 14,
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                      letterSpacing: isActive ? "0" : "0.005em",
                      opacity: isActive ? 1 : 0.86,
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

// function MobileRouteNavigator({ activeIndex }: { activeIndex: number }) {
//   return (
//     <div className="mt-2.5 lg:hidden">
//       <div className="flex items-center justify-between gap-3">
//         <div className="min-w-0">
//           <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground/80">
//             Currently
//           </div>
//           <div className="truncate font-serif italic text-[17px] font-medium text-foreground">
//             {DESTINATIONS[activeIndex].label}
//           </div>
//         </div>
//         <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
//           {DESTINATIONS[activeIndex].kicker}
//         </span>
//       </div>

//       <div className="-mx-1 mt-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         <ul className="flex w-max items-center gap-4 px-1">
//           {DESTINATIONS.map((destination, index) => {
//             const isActive = index === activeIndex;

//             return (
//               <li key={destination.id} className="flex items-center gap-4">
//                 <Link to={destination.to} className="flex flex-col items-center gap-1">
//                   <span
//                     className="block size-[7px] rounded-full transition-all"
//                     style={{
//                       background: isActive ? "var(--accent)" : "transparent",
//                       border: isActive
//                         ? "1px solid var(--accent)"
//                         : "1px solid color-mix(in oklab, var(--muted-foreground) 50%, transparent)",
//                       boxShadow: isActive ? "0 0 0 5px rgba(212,164,77,0.10)" : "none",
//                     }}
//                   />
//                   <span
//                     className="font-mono text-[9px] font-medium uppercase tracking-[0.18em]"
//                     style={{
//                       color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
//                     }}
//                   >
//                     {destination.label}
//                   </span>
//                 </Link>
//                 {index < DESTINATIONS.length - 1 ? (
//                   <span
//                     aria-hidden
//                     className="block h-px w-6"
//                     style={{ background: "var(--border)" }}
//                   />
//                 ) : null}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

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
        </div>
      </div>
    </footer>
  );
}
