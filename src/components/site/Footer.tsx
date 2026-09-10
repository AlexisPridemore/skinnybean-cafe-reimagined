import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";
import { hours, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo.url}
            alt="The Skinny Bean Cafe logo"
            className="h-20 w-20 rounded-full bg-background"
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
          <ul className="mt-3 space-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary hover:underline"
                >
                  {s.label}
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
