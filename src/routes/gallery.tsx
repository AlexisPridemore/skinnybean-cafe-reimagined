import { createFileRoute, Link } from "@tanstack/react-router";

import breakfastSandwich from "@/assets/gallery/641687637_122123635695047865_8083608877585676701_n.jpg.asset.json";
import veggieBites from "@/assets/gallery/643365990_122123753703047865_6714651895239642299_n.jpg.asset.json";
import blueEnergizer from "@/assets/gallery/blue-energizer-hq.jpg.asset.json";
import grilledSandwich from "@/assets/gallery/676783409_122129224935047865_6692104234897761876_n.jpg.asset.json";
import brownieShake from "@/assets/gallery/brownie-shake-hq.jpg.asset.json";
import savoryBites from "@/assets/gallery/egg-bites-hq.jpg.asset.json";

import caramelLatte from "@/assets/gallery/742020295_122136177555047865_5211284128769685778_n.jpg.asset.json";

import bltSandwich from "@/assets/gallery/743203873_122136441177047865_1222479054774393981_n.jpg.asset.json";
import colorfulDrinks from "@/assets/gallery/colorful-refreshers-hq.jpg.asset.json";
import bagelBreakfast from "@/assets/gallery/753702370_122137590447047865_7713288032607339885_n.jpg.asset.json";
import bagelBreakfastHalves from "@/assets/gallery/753989903_122137590435047865_3680676774123926577_n.jpg.asset.json";
import caramelFrappe1 from "@/assets/gallery/IMG_5296.jpg.asset.json";
import caramelFrappe2 from "@/assets/gallery/IMG_5293.jpg.asset.json";
import cookieShake from "@/assets/gallery/IMG_3388.jpg.asset.json";
import foamLatte from "@/assets/gallery/IMG_2597.jpg.asset.json";
import cookieCaramelShake from "@/assets/gallery/cookie-caramel-shake-hq.jpg.asset.json";
import crumbleLatte from "@/assets/gallery/FullSizeRender.jpg.asset.json";
import everythingBagel from "@/assets/gallery/IMG_5297.jpg.asset.json";
import bagelWithSauce from "@/assets/gallery/IMG_5294.jpg.asset.json";
import breakfastNachos2 from "@/assets/gallery/IMG_4678.jpg.asset.json";
import turkeyWrapHq from "@/assets/gallery/turkey-wrap-hq.jpg.asset.json";
import breakfastSandwichHq from "@/assets/gallery/breakfast-sandwich-hq.jpg.asset.json";
import cookieShakeHq from "@/assets/gallery/cookie-shake-hq.jpg.asset.json";
import icedLatteHq from "@/assets/gallery/iced-latte-hq.jpg.asset.json";
import chocolateFrappeHq from "@/assets/gallery/chocolate-frappe-hq.jpg.asset.json";
import breakfastBurritoHq from "@/assets/gallery/breakfast-burrito-hq.jpg.asset.json";
import saltedCaramelFoamHq from "@/assets/gallery/salted-caramel-foam-hq.jpg.asset.json";
import grilledBreakfastSandwichHq from "@/assets/gallery/grilled-breakfast-sandwich-hq.jpg.asset.json";
import plainBagelHq from "@/assets/gallery/plain-bagel-hq.jpg.asset.json";
import breakfastBurritoCloseupHq from "@/assets/gallery/breakfast-burrito-closeup-hq.jpg.asset.json";
import layeredLemonadeHq from "@/assets/gallery/layered-lemonade-hq.jpg.asset.json";
import aquaEnergizerHq from "@/assets/gallery/aqua-energizer-hq.jpg.asset.json";
import icedMochaHq from "@/assets/gallery/iced-mocha-latest.jpg.asset.json";
import everythingBagelSandwichHq from "@/assets/gallery/everything-bagel-sandwich-hq.jpg.asset.json";
import eggBiteBreakHq from "@/assets/gallery/egg-bite-break-hq.jpg.asset.json";
import eggBitesSideHq from "@/assets/gallery/egg-bites-side-hq.jpg.asset.json";
import pressedBreakfastSandwichHq from "@/assets/gallery/pressed-breakfast-sandwich-hq.jpg.asset.json";
import pressedBreakfastSandwichZoomed from "@/assets/gallery/pressed-breakfast-sandwich-zoomed.jpg";
import grilledCheeseHq from "@/assets/gallery/grilled-cheese-hq.jpg.asset.json";
import pressedSandwichCloseupHq from "@/assets/gallery/pressed-sandwich-closeup-hq.jpg.asset.json";
import loadedBreakfastBowlHq from "@/assets/gallery/loaded-breakfast-bowl-hq.jpg.asset.json";
import turkeyBagelSandwichHq from "@/assets/gallery/turkey-bagel-sandwich-hq.jpg.asset.json";
import chocolateBerryDrinkHq from "@/assets/gallery/chocolate-berry-drink-hq.jpg.asset.json";
import pinkLemonMintRefresherHq from "@/assets/gallery/pink-lemon-mint-refresher-hq.jpg.asset.json";
import matchaCreamHq from "@/assets/gallery/matcha-cream-hq.jpg.asset.json";
import caramelFoamCoffeeHq from "@/assets/gallery/caramel-foam-coffee-hq.jpg.asset.json";
import savoryCreamCheeseBagelHq from "@/assets/gallery/savory-cream-cheese-bagel-hq.jpg.asset.json";
import hotChocolateWhippedCreamHq from "@/assets/gallery/hot-chocolate-whipped-cream-hq.jpg.asset.json";
import turkeyMeltHq from "@/assets/gallery/turkey-melt-hq.jpg.asset.json";
import purpleEnergizer from "@/assets/gallery/purple-energizer.jpg.asset.json";
import strawberryMatcha from "@/assets/gallery/strawberry-matcha.jpg.asset.json";

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
  { image: caramelFoamCoffeeHq.url, caption: "The Salted Bee" },
  { image: purpleEnergizer.url, caption: "Purple pick-me-up" },
  { image: grilledBreakfastSandwichHq.url, caption: "Grilled to perfection" },
  { image: savoryBites.url, caption: "Savory bites" },
  { image: everythingBagelSandwichHq.url, caption: "Breakfast on a bagel" },
  { image: brownieShake.url, caption: "Go all-in" },
  { image: layeredLemonadeHq.url, caption: "Fresh & fruity" },
  { image: breakfastSandwichHq.url, caption: "Breakfast, stacked" },
  { image: matchaCreamHq.url, caption: "Made your way" },
  { image: strawberryMatcha.url, caption: "Strawberry matcha" },
  { image: saltedCaramelFoamHq.url, caption: "Caramel cloud" },
  { image: icedLatteHq.url, caption: "Latte love" },
  { image: pressedSandwichCloseupHq.url, caption: "Hot off the grill" },
  { image: turkeyMeltHq.url, caption: "Toasted & melty" },
  { image: cookieShakeHq.url, caption: "Cookie monster" },
  { image: blueEnergizer.url, caption: "Bright sips" },
  { image: plainBagelHq.url, caption: "Bagel break" },
  { image: breakfastBurritoHq.url, caption: "Rise & grind" },
  { image: chocolateFrappeHq.url, caption: "Chocolate bliss" },
  { image: aquaEnergizerHq.url, caption: "Electric refresh" },
  { image: grilledSandwich.url, caption: "Melts & more" },
  { image: pinkLemonMintRefresherHq.url, caption: "Refreshing" },
  { image: breakfastBurritoCloseupHq.url, caption: "Packed with flavor" },
  { image: turkeyBagelSandwichHq.url, caption: "Fresh & filling" },
  { image: eggBiteBreakHq.url, caption: "Bacon and cheese" },
  { image: hotChocolateWhippedCreamHq.url, caption: "Hot Chocolate" },
  { image: icedMochaHq.url, caption: "Cold brew bliss" },
  { image: pressedBreakfastSandwichHq.url, caption: "Pressed & fresh" },
  { image: breakfastSandwich.url, caption: "Egg bites" },
  { image: bltSandwich.url, caption: "Lunch done right" },
  { image: chocolateBerryDrinkHq.url, caption: "Chocolate drizzle" },
  { image: bagelBreakfast.url, caption: "Bagel mornings" },
  { image: colorfulDrinks.url, caption: "Pick your flavor" },
  { image: eggBitesSideHq.url, caption: "Protein-packed bites" },
  { image: bagelBreakfastHalves.url, caption: "Made to order" },
  { image: caramelFrappe1.url, caption: "Caramel crush" },
  { image: everythingBagel.url, caption: "Everything bagel" },
  { image: savoryCreamCheeseBagelHq.url, caption: "Simply delicious" },
  { image: cookieShake.url, caption: "Cookie cravings" },
  { image: loadedBreakfastBowlHq.url, caption: "Breakfast nachos" },
  { image: foamLatte.url, caption: "Smooth & creamy" },
  { image: bagelWithSauce.url, caption: "Dip it good" },
  { image: cookieCaramelShake.url, caption: "Sip & snack" },
  { image: grilledCheeseHq.url, caption: "Golden & gooey" },
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
