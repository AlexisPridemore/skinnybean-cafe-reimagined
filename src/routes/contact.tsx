import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ReviewCta } from "@/components/site/ReviewCta";
import { hours, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Hours | The Skinny Bean Cafe" },
      {
        name: "description",
        content:
          "Find The Skinny Bean Cafe at 5333 Main St, New Port Richey, FL. Call 727-232-2042 for hours, catering and large orders.",
      },
      { property: "og:title", content: "Contact & Hours | The Skinny Bean Cafe" },
      {
        property: "og:description",
        content: "5333 Main St, New Port Richey, FL. Open Monday through Saturday.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
        >
          ← Back to home
        </Link>
        <h1 className="mt-6 text-5xl sm:text-7xl">Come see us</h1>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 lg:grid-cols-2">
        <div className="rounded-3xl bg-teal p-8">
          <h2 className="font-display text-3xl">Find us</h2>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-start gap-2 text-lg underline underline-offset-4"
          >
            <MapPin className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
            <span>{site.address}</span>
          </a>
          <div className="mt-6 space-y-1">
            <a href={site.phoneHref} className="flex items-center gap-2 text-lg font-semibold">
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 break-all underline underline-offset-4"
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{site.email}</span>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground"
            >
              Order pickup
            </a>
            <Link
              to="/faq"
              className="inline-flex rounded-full border-2 border-current px-6 py-3 font-semibold transition-colors hover:bg-black/5"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-border p-8">
          <h2 className="font-display text-3xl">Hours</h2>
          <ul className="mt-4 divide-y divide-border">
            {hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-3">
                <span className="font-medium">{h.day}</span>
                <span className="text-muted-foreground">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-4 max-w-6xl px-5">
        <iframe
          title="Map to The Skinny Bean Cafe"
          src="https://maps.google.com/maps?q=5333%20Main%20St%2C%20New%20Port%20Richey%2C%20FL%2034652&output=embed"
          className="h-96 w-full rounded-3xl border-2 border-border"
          loading="lazy"
        />
      </section>

      <div className="pt-16">
        <ReviewCta />
      </div>
    </>
  );
}
