import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { menu } from "@/data/menu";
import { site } from "@/data/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | The Skinny Bean Cafe, New Port Richey" },
      {
        name: "description",
        content:
          "Signature lattes, matcha, protein shakes, pressed breakfast sandwiches, wraps, bowls and bakery treats at The Skinny Bean Cafe.",
      },
      { property: "og:title", content: "Menu | The Skinny Bean Cafe" },
      {
        property: "og:description",
        content: "Signature lattes, protein shakes, sandwiches, wraps, bowls and bakery treats.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const first = menu[0]!;
  const [active, setActive] = useState(first.id);
  const section = menu.find((s) => s.id === active) ?? first;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
        >
          ← Back to home
        </Link>
        <h1 className="mt-6 text-5xl sm:text-7xl">Menu</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Everything is made to order. Milk swaps, sugar free syrups and size changes are always welcome.
        </p>
      </section>

      <div className="sticky top-[68px] z-40 border-y border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3">
          {menu.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                s.id === active
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:bg-secondary"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <section id={section.id} className="mx-auto max-w-4xl px-5 py-14">
        <p className="font-display text-2xl text-teal-deep">{section.blurb}</p>

        {section.groups.map((group) => (
          <div key={group.name} className="mt-14">
            <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              {group.name}
            </h2>
            <ul className="mt-6 space-y-7">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-end">
                    <h3 className="font-[family-name:var(--font-item)] text-[1.65rem] leading-tight text-brown">{item.name}</h3>
                    <span className="dotted-lead" aria-hidden="true" />
                    <span className="font-display text-2xl">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <a
          href={site.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 inline-flex rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground"
        >
          Order pickup
        </a>
      </section>
    </>
  );
}
