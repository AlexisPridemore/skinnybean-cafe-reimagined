import { createFileRoute } from "@tanstack/react-router";
import { SocialStrip } from "@/components/site/SocialStrip";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | The Skinny Bean Cafe" },
      {
        name: "description",
        content:
          "Photos from The Skinny Bean Cafe in New Port Richey — signature lattes, breakfast bowls, bakery treats and the shop on Main Street.",
      },
      { property: "og:title", content: "Gallery | The Skinny Bean Cafe" },
      {
        property: "og:description",
        content: "A look inside the shop, the drinks and the food.",
      },
    ],
  }),
  component: Gallery,
});

const tiles = [
  { caption: "Signature latte of the week", tone: "bg-teal", span: "sm:col-span-2 sm:row-span-2" },
  { caption: "Breakfast bowls", tone: "bg-mustard", span: "" },
  { caption: "The bakery case", tone: "bg-coral", span: "" },
  { caption: "Main Street mornings", tone: "bg-secondary", span: "sm:col-span-2" },
  { caption: "Protein shakes", tone: "bg-muted", span: "" },
  { caption: "Cold foam close-ups", tone: "bg-teal", span: "" },
  { caption: "Behind the bar", tone: "bg-mustard", span: "" },
  { caption: "Seasonal specials", tone: "bg-coral", span: "" },
];

function Gallery() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <h1 className="text-5xl sm:text-7xl">Gallery</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          A look at the drinks, the food and the shop. Photos coming soon — send yours over and we&apos;ll
          drop them in.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl auto-rows-[200px] grid-cols-2 gap-3 px-5 pb-10 sm:grid-cols-4">
        {tiles.map((t, i) => (
          <figure
            key={i}
            className={`flex items-end rounded-3xl ${t.tone} ${t.span} p-5 transition-transform hover:-translate-y-1`}
          >
            <figcaption className="font-display text-xl leading-tight">{t.caption}</figcaption>
          </figure>
        ))}
      </section>

      <SocialStrip />
    </>
  );
}
