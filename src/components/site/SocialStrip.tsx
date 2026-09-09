import { site } from "@/data/site";

const swatch = ["bg-teal", "bg-mustard", "bg-coral", "bg-secondary"];

export function SocialStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-4xl sm:text-5xl">Follow the bean</h2>
        <p className="max-w-sm text-muted-foreground">
          New drinks, daily specials and Main Street mornings — we post it all first on social.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {site.socials.map((s, i) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex aspect-square flex-col justify-between rounded-3xl ${swatch[i % swatch.length]} p-6 transition-transform hover:-translate-y-1`}
          >
            <span className="font-display text-2xl">{s.label}</span>
            <span className="text-sm font-semibold tracking-widest uppercase opacity-70 group-hover:opacity-100">
              Follow →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
