import { createFileRoute, Link } from "@tanstack/react-router";
import wrap from "@/assets/gallery/515438855_122105594151047865_2488906264752341974_n.jpg.asset.json";
import turkeyMelt from "@/assets/gallery/632235115_122121907941047865_9110609238818243263_n.jpg.asset.json";
import vanillaShake from "@/assets/gallery/633778457_122122181517047865_8606579653814694951_n.jpg.asset.json";
import breakfastSandwich from "@/assets/gallery/641687637_122123635695047865_8083608877585676701_n.jpg.asset.json";
import veggieBites from "@/assets/gallery/643365990_122123753703047865_6714651895239642299_n.jpg.asset.json";
import matcha from "@/assets/gallery/656302309_122126504265047865_353112649416893683_n.jpg.asset.json";
import blueEnergizer from "@/assets/gallery/675099380_122129055165047865_7753529397803972989_n.jpg.asset.json";
import bagelSandwich from "@/assets/gallery/676813170_122129224851047865_7721759819651222331_n.jpg.asset.json";
import grilledSandwich from "@/assets/gallery/676783409_122129224935047865_6692104234897761876_n.jpg.asset.json";
import brownieShake from "@/assets/gallery/brownie-shake-hq.jpg.asset.json";
import chocolateColdBrew from "@/assets/gallery/678442817_122129224833047865_6967948380064706155_n.jpg.asset.json";
import savoryBites from "@/assets/gallery/egg-bites-hq.jpg.asset.json";
import pinkLemonade from "@/assets/gallery/678970085_122129225253047865_2596317205431663028_n.jpg.asset.json";
import loadedBrownieShake from "@/assets/gallery/679780229_122129745435047865_2647455656970702403_n.jpg.asset.json";
import caramelLatte from "@/assets/gallery/742020295_122136177555047865_5211284128769685778_n.jpg.asset.json";
import layeredRefresher from "@/assets/gallery/742684196_122136177531047865_7244582707569140478_n.jpg.asset.json";
import bltSandwich from "@/assets/gallery/743203873_122136441177047865_1222479054774393981_n.jpg.asset.json";
import colorfulDrinks from "@/assets/gallery/756342239_122137747947047865_2966611130877632136_n.jpg.asset.json";
import bagelBreakfast from "@/assets/gallery/753702370_122137590447047865_7713288032607339885_n.jpg.asset.json";
import bagelBreakfastHalves from "@/assets/gallery/753989903_122137590435047865_3680676774123926577_n.jpg.asset.json";
import caramelFrappe1 from "@/assets/gallery/IMG_5296.jpg.asset.json";
import caramelFrappe2 from "@/assets/gallery/IMG_5293.jpg.asset.json";
import cookieShake from "@/assets/gallery/IMG_3388.jpg.asset.json";
import foamLatte from "@/assets/gallery/IMG_2597.jpg.asset.json";
import cookieCaramelShake from "@/assets/gallery/IMG_8735.jpg.asset.json";
import crumbleLatte from "@/assets/gallery/FullSizeRender.jpg.asset.json";
import everythingBagel from "@/assets/gallery/IMG_5297.jpg.asset.json";
import breakfastNachos1 from "@/assets/gallery/IMG_5295.jpg.asset.json";
import bagelWithSauce from "@/assets/gallery/IMG_5294.jpg.asset.json";
import breakfastNachos2 from "@/assets/gallery/IMG_4678.jpg.asset.json";
import turkeyWrapHq from "@/assets/gallery/turkey-wrap-hq.jpg.asset.json";
import caramelColdBrewHq from "@/assets/gallery/caramel-cold-brew-hq.jpg.asset.json";
import breakfastSandwichHq from "@/assets/gallery/breakfast-sandwich-hq.jpg.asset.json";
import cookieShakeHq from "@/assets/gallery/cookie-shake-hq.jpg.asset.json";
import icedLatteHq from "@/assets/gallery/iced-latte-hq.jpg.asset.json";
import chocolateFrappeHq from "@/assets/gallery/chocolate-frappe-hq.jpg.asset.json";
import breakfastBurritoHq from "@/assets/gallery/breakfast-burrito-hq.jpg.asset.json";

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
  { image: turkeyWrapHq.url, caption: "Wrapped fresh" },
  { image: caramelColdBrewHq.url, caption: "Cold brew bliss" },
  { image: savoryBites.url, caption: "Savory bites" },
  { image: brownieShake.url, caption: "Go all-in" },
  { image: breakfastSandwichHq.url, caption: "Breakfast, stacked" },
  { image: matcha.url, caption: "Made your way" },
  { image: wrap.url, caption: "Lunch is served" },
  { image: icedLatteHq.url, caption: "Latte love" },
  { image: turkeyMelt.url, caption: "Hot off the grill" },
  { image: cookieShakeHq.url, caption: "Cookie monster" },
  { image: blueEnergizer.url, caption: "Bright sips" },
  { image: breakfastBurritoHq.url, caption: "Rise & grind" },
  { image: chocolateFrappeHq.url, caption: "Chocolate bliss" },
  { image: grilledSandwich.url, caption: "Melts & more" },
  { image: pinkLemonade.url, caption: "Refreshing" },
  { image: bagelSandwich.url, caption: "Fresh & filling" },
  { image: vanillaShake.url, caption: "A little extra" },
  { image: veggieBites.url, caption: "Baked fresh" },
  { image: loadedBrownieShake.url, caption: "Treat yourself" },
  { image: breakfastSandwich.url, caption: "Breakfast favorites" },
  { image: layeredRefresher.url, caption: "Colorful sips" },
  { image: bltSandwich.url, caption: "Lunch done right" },
  { image: chocolateColdBrew.url, caption: "Chocolate drizzle" },
  { image: bagelBreakfast.url, caption: "Bagel mornings" },
  { image: colorfulDrinks.url, caption: "Pick your flavor" },
  { image: bagelBreakfastHalves.url, caption: "Made to order" },
  { image: caramelFrappe1.url, caption: "Caramel crush" },
  { image: everythingBagel.url, caption: "Everything bagel" },
  { image: cookieShake.url, caption: "Cookie cravings" },
  { image: breakfastNachos1.url, caption: "Breakfast nachos" },
  { image: foamLatte.url, caption: "Smooth & creamy" },
  { image: bagelWithSauce.url, caption: "Dip it good" },
  { image: cookieCaramelShake.url, caption: "Sip & snack" },
  { image: breakfastNachos2.url, caption: "Loaded up" },
  { image: crumbleLatte.url, caption: "Crunchy topping" },
  { image: caramelFrappe2.url, caption: "Extra caramel" },
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
        <div className="mx-auto max-w-7xl columns-2 gap-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 sm:gap-3">
          {tiles.map((tile, index) => (
            <figure
              key={tile.caption + index}
              className="group relative mb-2 break-inside-avoid overflow-hidden rounded-md bg-muted sm:mb-3"
            >
              <img
                src={tile.image}
                alt={tile.caption}
                loading={index < 8 ? "eager" : "lazy"}
                className="h-auto w-full contrast-[1.03] saturate-[1.04] transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.025]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/70 to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-2 left-2 text-sm font-bold text-primary-foreground md:bottom-2 md:left-2 md:text-base">
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
