import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";
import { Marquee } from "@/components/site/Marquee";
import { SocialStrip } from "@/components/site/SocialStrip";
import { SocialFeed } from "@/components/site/SocialFeed";
import { ReviewCta } from "@/components/site/ReviewCta";
import { hours, site } from "@/data/site";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Skinny Bean Cafe | Coffee & Kitchen in New Port Richey" },
      {
        name: "description",
        content:
          "Handcrafted coffee, signature lattes and made-to-order breakfast on Main Street in New Port Richey. Sugar free favorites and full-flavor indulgence.",
      },
      { property: "og:title", content: "The Skinny Bean Cafe | New Port Richey" },
      {
        property: "og:description",
        content: "Signature lattes, protein shakes and pressed breakfast sandwiches on Main Street.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  {
    title: "The Salted Bee",
    note: "Salted honey espresso, vanilla cold foam",
    color: "bg-teal",
  },
  { title: "Not So Skinny Bowl", note: "Potatoes, chorizo, eggs, all the sauces", color: "bg-mustard" },
  { title: "Espresso Brownie Shake", note: "32 oz, low in sugar, high in flavor", color: "bg-coral" },
];

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-teal-deep">
            New Port Richey · Main Street
          </p>
          <h1 className="mt-5 text-5xl leading-[0.95] sm:text-7xl">
            SKINNY BEAN.
            <br />
            BIG FLAVOR.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Sugar-free or loaded with all the good stuff. Every latte, bowl, and sandwich is handcrafted,
            made your way, and packed with flavor. Sugar-free, extra sweet, or somewhere in between —
            everything is customizable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Order pickup or delivery
            </a>
            <Link
              to="/menu"
              className="rounded-full border-2 border-primary px-7 py-3.5 font-semibold transition-colors hover:bg-secondary"
            >
              See the menu
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-full bg-secondary" aria-hidden="true" />
          <img
            src={logo.url}
            alt="The Skinny Bean Cafe logo"
            className="relative mx-auto w-full max-w-md rounded-full"
          />
        </div>
      </section>

      <Marquee
        words={["Signature lattes", "Protein shakes", "Pressed sandwiches", "Sugar free syrups", "Matcha"]}
        className="bg-secondary"
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl sm:text-5xl">What people come back for</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className={`flex min-h-56 flex-col justify-between rounded-3xl ${h.color} p-7`}
            >
              <h3 className="font-display text-3xl leading-tight">{h.title}</h3>
              <p className="mt-6 text-sm font-medium opacity-80">{h.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl sm:text-5xl">Built by someone who had to read every label</h2>
            <p className="mt-6 max-w-lg opacity-85">
              Our owner&apos;s lifelong journey with diabetes started this cafe. Every recipe is handcrafted
              and perfected so that light and sugar free tastes as good as rich and indulgent.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex rounded-full bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground"
            >
              Our story
            </Link>
          </div>
          <ul className="divide-y divide-primary-foreground/15">
            {hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-3">
                <span className="font-display text-xl">{h.day}</span>
                <span className="opacity-80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl sm:text-5xl">On the menu</h2>
          <Link to="/menu" className="font-semibold text-teal-deep underline underline-offset-4">
            View the full menu →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((section) => (
            <Link
              key={section.id}
              to="/menu"
              hash={section.id}
              className="rounded-3xl border-2 border-border p-7 transition-colors hover:border-teal-deep hover:bg-card"
            >
              <h3 className="font-display text-2xl">{section.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{section.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <SocialFeed />

      <ReviewCta />

      <SocialStrip />
    </>
  );
}
