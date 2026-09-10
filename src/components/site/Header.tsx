import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/skinny-bean-logo-transparent.png";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="The Skinny Bean Cafe logo" className="h-12 w-12 object-contain" />
          <span className="font-display text-lg leading-5 font-bold tracking-tight">
            The Skinny
            <br />
            Bean Cafe
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-teal-deep"
              activeProps={{ className: "text-teal-deep underline underline-offset-8 decoration-2" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Order Online
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="rounded-full border border-border p-2.5 md:hidden"
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 font-display text-xl"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Order Online
          </a>
        </nav>
      )}
    </header>
  );
}
