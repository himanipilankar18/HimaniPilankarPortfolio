import { Link, useRouterState } from "@tanstack/react-router";
import { useMemo } from "react";
import { Menu, X, Github, Linkedin, Download, Mail } from "lucide-react";
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

function SocialLinks({
  iconSize = "size-6",
}: {
  iconSize?: string;
}) {
  return (
    <>
      <NavIcon
        href="https://github.com/himanipilankar18"
        label="GitHub"
      >
        <Github className={iconSize} />
      </NavIcon>

      <NavIcon
        href="https://linkedin.com/in/YOUR_LINKEDIN"
        label="LinkedIn"
      >
        <Linkedin className={iconSize} />
      </NavIcon>

      <NavIcon
        href="/resume.pdf"
        label="Resume"
      >
        <Download className={iconSize} />
      </NavIcon>

      <NavIcon
        href="mailto:himanipilankar18@gmail.com"
        label="Email"
      >
        <Mail className={iconSize} />
      </NavIcon>
    </>
  );
}
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
      <div className="relative mx-auto max-w-[90rem] px-4 py-2 sm:px-5 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="shrink-0 w-[220px] font-serif text-[24px] font-medium tracking-tight text-foreground"
          >
            Himani Pilankar
          </Link>

          <>
            <RouteLine activeIndex={activeIndex} />
            <div className="hidden min-[1150px]:flex items-center justify-end gap-2 text-muted-foreground">
              <SocialLinks />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-full border border-border bg-card/70 p-2 backdrop-blur-xl min-[1150px]:hidden"
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

        <div className="min-[1150px]:hidden">
          {mobileMenuOpen && (
            <div className="mt-3 rounded-2xl border border-border bg-card/90 p-3 backdrop-blur-xl">

              {/* Navigation Links */}
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

              {/* Divider */}
              <div className="my-3 border-t border-border" />

              {/* Social Links */}
              <div className="flex items-center justify-center gap-5 py-2 text-muted-foreground">
                <SocialLinks iconSize="size-5" />
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
  const width = 680;
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
      className="relative hidden flex-1 justify-center min-[1150px]:flex"
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
                      fontSize: isActive ? 15 : 13,
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
function NavIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative transition-colors hover:text-foreground"
    >
      {children}

      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs opacity-0 transition-all duration-200 group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}
export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[2fr_0.8fr]">
        <div>
          <div className="label-mono"></div>
          <div className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Let&apos;s build something <span className="italic text-accent">meaningful</span>.
          </div>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Always up for thoughtful conversations, collaboration, or simply exchanging ideas.
          </p>
          <a
            href="mailto:himanipilankar18@gmail.com"
            className="mt-4 block text-sm text-accent hover:underline "
          >
            himanipilankar@gmail.com
          </a>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>
        </div>
        <div>
          <div className="label-mono mb-3"></div>
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
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-5 text-xs text-muted-foreground">
          <span className="font-mono text-center">
            &copy; {new Date().getFullYear()} Himani Pilankar · Crafted with ❤️ and endless curiosity.
          </span>
        </div>
      </div>
    </footer>
  );
}
