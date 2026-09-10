import { createFileRoute } from "@tanstack/react-router";
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
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <h1 className="text-5xl sm:text-7xl">Come see us</h1>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 lg:grid-cols-2">
        <div className="rounded-3xl bg-teal p-8">
          <h2 className="font-display text-3xl">Find us</h2>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-lg underline underline-offset-4"
          >
            {site.address}
          </a>
          <div className="mt-6 space-y-1">
            <a href={site.phoneHref} className="block text-lg font-semibold">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block break-all underline underline-offset-4">
              {site.email}
            </a>
          </div>
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground"
          >
            Order pickup
          </a>
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
