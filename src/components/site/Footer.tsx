import { Link } from "@tanstack/react-router";
import logo from "@/assets/skinny-bean-logo-transparent.png";
import { hours, site } from "@/data/site";

function SocialIcon({ label }: { label: (typeof site.socials)[number]["label"] }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    );
  }
  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M14.5 8.5V6.8c0-.8.5-1 1-1H18V2.2c-.8-.1-1.8-.2-3-.2-3 0-5 1.8-5 5.2v1.3H7v4h3V22h4.5v-9.5h3.1l.6-4h-3.7Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M16.7 2c.3 2.3 1.6 3.7 3.8 3.9v3.5a9 9 0 0 1-3.7-1.1v6.5a7.2 7.2 0 1 1-6.2-7.1v3.6a3.7 3.7 0 1 0 2.5 3.5V2h3.6Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-primary pt-16 text-primary-foreground">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[50%] border-[3px] border-secondary/50" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="The Skinny Bean Cafe logo"
            className="h-20 w-20 object-contain"
          />
          <p className="mt-4 max-w-xs text-sm opacity-85">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm tracking-widest uppercase opacity-70">Visit</h3>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-lg leading-snug hover:underline"
          >
            {site.address}
          </a>
          <a href={site.phoneHref} className="mt-3 block hover:underline">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="block break-all hover:underline">
            {site.email}
          </a>
        </div>

        <div>
          <h3 className="text-sm tracking-widest uppercase opacity-70">Hours</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span className="opacity-80">{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-widest uppercase opacity-70">Follow</h3>
          <ul className="mt-4 flex gap-3">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary-foreground/40 transition-colors hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
                  aria-label={`Follow The Skinny Bean Cafe on ${s.label}`}
                  title={s.label}
                >
                  <SocialIcon label={s.label} />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground"
          >
            Leave us a Google review
          </a>
          <nav className="mt-6 space-y-2 text-sm opacity-85" aria-label="Footer">
            <Link to="/menu" className="block hover:underline">
              Menu
            </Link>
            <Link to="/about" className="block hover:underline">
              About
            </Link>
            <Link to="/contact" className="block hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
