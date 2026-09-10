import { createFileRoute, Link } from "@tanstack/react-router";
import wrap from "@/assets/gallery/515438855_122105594151047865_2488906264752341974_n.jpg.asset.json";
import turkeyMelt from "@/assets/gallery/632235115_122121907941047865_9110609238818243263_n.jpg.asset.json";
import vanillaShake from "@/assets/gallery/633778457_122122181517047865_8606579653814694951_n.jpg.asset.json";
import breakfastSandwich from "@/assets/gallery/641687637_122123635695047865_8083608877585676701_n.jpg.asset.json";
import veggieBites from "@/assets/gallery/643365990_122123753703047865_6714651895239642299_n.jpg.asset.json";
import matcha from "@/assets/gallery/656302309_122126504265047865_353112649416893683_n.jpg.asset.json";
import savoryBites from "@/assets/gallery/678612908_122129224551047865_9163356602874272603_n.jpg.asset.json";
import blueEnergizer from "@/assets/gallery/675099380_122129055165047865_7753529397803972989_n.jpg.asset.json";
import brownieShake from "@/assets/gallery/678356130_122129224785047865_3617853435761789769_n.jpg.asset.json";
import bagelSandwich from "@/assets/gallery/676813170_122129224851047865_7721759819651222331_n.jpg.asset.json";

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
        content: "A colorful look at handcrafted drinks, breakfast, lunch, and bakery favorites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const tiles = [
  { image: wrap.url, caption: "Wrapped fresh", span: "md:col-span-7 md:row-span-2", position: "object-center" },
  { image: matcha.url, caption: "Made your way", span: "md:col-span-5 md:row-span-2", position: "object-center" },
  { image: turkeyMelt.url, caption: "Hot off the grill", span: "md:col-span-5 md:row-span-2", position: "object-[50%_46%]" },
  { image: vanillaShake.url, caption: "A little extra", span: "md:col-span-3 md:row-span-2", position: "object-center" },
  { image: breakfastSandwich.url, caption: "Breakfast, stacked", span: "md:col-span-4", position: "object-center" },
  { image: veggieBites.url, caption: "Savory bites", span: "md:col-span-4", position: "object-center" },
  { image: blueEnergizer.url, caption: "Bright sips", span: "md:col-span-4 md:row-span-2", position: "object-center" },
  { image: bagelSandwich.url, caption: "Lunch is served", span: "md:col-span-8 md:row-span-2", position: "object-center" },
  { image: brownieShake.url, caption: "Go all-in", span: "md:col-span-5 md:row-span-2", position: "object-center" },
  { image: savoryBites.url, caption: "Handcrafted here", span: "md:col-span-7 md:row-span-2", position: "object-center" },
];

function Gallery() {
  return (
    <main className="overflow-hidden">
      <section className="border-b border-foreground/15 bg-teal px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-teal-deep">Fresh from our counter</p>
            <h1 className="mt-3 text-6xl leading-none sm:text-8xl">The good stuff.</h1>
          </div>
          <p className="max-w-sm text-lg leading-relaxed">
            Handcrafted drinks, breakfast, lunch, and sweet treats made right here in Downtown New Port Richey.
          </p>
        </div>
      </section>

      <section className="bg-background px-3 py-3 sm:px-5 sm:py-5" aria-label="Cafe food and drinks">
        <div className="mx-auto grid max-w-7xl auto-rows-[13rem] grid-cols-2 gap-3 md:auto-rows-[16rem] md:grid-cols-12 md:gap-5">
          {tiles.map((tile, index) => (
            <figure
              key={tile.caption}
              className={`group relative col-span-2 overflow-hidden rounded-md bg-muted ${tile.span}`}
            >
              <img
                src={tile.image}
                alt={tile.caption}
                loading={index < 2 ? "eager" : "lazy"}
                className={`h-full w-full object-cover ${tile.position} contrast-[1.04] saturate-[1.06] transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.035]`}
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/75 to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-4 left-4 font-display text-xl text-primary-foreground sm:bottom-5 sm:left-5 sm:text-2xl">
                {tile.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-coral px-5 py-14 text-center sm:py-16">
        <p className="font-display text-4xl leading-tight sm:text-5xl">See something you&apos;re craving?</p>
        <Link
          to="/menu"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Explore the menu
        </Link>
      </section>
    </main>
  );
}
