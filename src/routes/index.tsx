import { createFileRoute, Link } from "@tanstack/react-router";
import heroImageAsset from "@/assets/skinny-bean-cafe-spread.jpg.asset.json";
import sarahStoryAsset from "@/assets/sarah-story.jpg.asset.json";

import logoCupCutout from "@/assets/logo-cup-cutout.png";
import beanCutout from "@/assets/bean-cutout.png";
import saltedBeeImage from "@/assets/fan-fav-salted-bee.png";
import burritoImage from "@/assets/fan-fav-burrito.png";
import espressoBrownieImage from "@/assets/fan-fav-espresso-brownie.png";
import breakfastNachosImage from "@/assets/fan-fav-breakfast-nachos.png";
import strawberryCheesecakeImage from "@/assets/fan-fav-strawberry-cheesecake-latte.png";
import { CurveDivider } from "@/components/site/CurveDivider";
import { Marquee } from "@/components/site/Marquee";
import { ReviewCta } from "@/components/site/ReviewCta";
import { SocialGallery } from "@/components/site/SocialGallery";
import { site } from "@/data/site";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

type Highlight = {
  title: string;
  note: string;
  color: string;
  image: string;
  imageAlt: string;
};

const highlights: Highlight[] = [
  {
    title: "The Salted Bee",
    note: "Locally sourced honey, sea salt, oat milk, and vanilla cold foam",
    color: "bg-teal",
    image: saltedBeeImage,
    imageAlt: "The Salted Bee iced latte with vanilla cold foam",
  },
  {
    title: "Breakfast Nachos",
    note: "Chips filled with egg, cheese, chorizo, bacon, pico de gallo, drizzled with Sour Cream & oChipotle sauce",
    color: "bg-mustard",
    image: breakfastNachosImage,
    imageAlt: "Breakfast nachos loaded with egg, cheese, and sauces",
  },
  {
    title: "Espresso Brownie Shake",
    note: "32 oz, low in sugar, high in flavor",
    color: "bg-coral",
    image: espressoBrownieImage,
    imageAlt: "Espresso Brownie Shake with whipped cream and chocolate drizzle",
  },
  {
    title: "Strawberry Cheesecake Latte",
    note: "Sweet strawberry espresso with strawberry cheesecake cold foam, white chocolate drizzle, and graham cracker pieces.",
    color: "bg-teal",
    image: strawberryCheesecakeImage,
    imageAlt: "Strawberry Cheesecake Latte with cold foam and graham cracker topping",
  },
  {
    title: "The Not So Skinny Burrito",
    note: "Egg, cheese, chorizo, bacon, sausage, and potatoes drizzled with our Signature & Chipotle sauces",
    color: "bg-mustard",
    image: burritoImage,
    imageAlt: "The Not So Skinny Burrito cut in half",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-primary text-primary-foreground sm:min-h-[640px]">
        <img
          src={heroImageAsset.url}
          alt="Skinny Bean Cafe drinks, sandwiches, bagels, and a fresh salad"
          width={960}
          height={719}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-primary/45" aria-hidden="true" />
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-secondary">
            New Port Richey · Main Street
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] sm:text-7xl">
            SKINNY BEAN.
            <br />
            BIG FLAVOR.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/90">
            Sugar-free or loaded with all the good stuff. Every latte, bowl, and sandwich is handcrafted,
            made your way, and packed with flavor. Sugar-free, extra sweet, or somewhere in between.
            Everything is customizable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground transition-transform hover:-translate-y-0.5"
            >
              Order pickup
            </a>
            <Link
              to="/menu"
              className="rounded-full border-2 border-primary-foreground px-7 py-3.5 font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              See the menu
            </Link>
          </div>
        </div>
      </section>

      <Marquee
        words={["Signature lattes", "Protein shakes", "Pressed sandwiches", "Sugar free syrups", "Matcha"]}
        className="bg-secondary"
      />

      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="pointer-events-none absolute top-16 left-5 flex items-end gap-1" aria-hidden="true">
          <img src={beanCutout} alt="" loading="lazy" className="h-9 w-9 -rotate-12 object-contain opacity-90 drop-shadow-md sm:h-11 sm:w-11" />
          <img src={beanCutout} alt="" loading="lazy" className="h-7 w-7 rotate-6 object-contain opacity-80 drop-shadow-md sm:h-8 sm:w-8" />
          <img src={beanCutout} alt="" loading="lazy" className="h-5 w-5 rotate-[30deg] object-contain opacity-70 drop-shadow-md sm:h-6 sm:w-6" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <h2 className="text-5xl tracking-wide sm:text-6xl" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>FAN FAVS</h2>
          <img
            src={logoCupCutout}
            alt=""
            loading="lazy"
            className="h-24 w-auto object-contain -rotate-3 drop-shadow-md sm:h-28 lg:mr-10"
          />
        </div>
        <p className="mt-2 max-w-xl text-lg opacity-80">The ones you always come back for.</p>
        <div className="mt-7 grid grid-cols-2 items-start gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {highlights.map((h, index) => (
            <article
              key={h.title}
              className={`flex min-h-[17rem] flex-col rounded-t-[4.5rem] rounded-b-lg ${h.color} px-3 pb-4 pt-6 transition-transform hover:-translate-y-1 sm:min-h-[18rem] sm:px-4 ${index % 2 === 1 ? "sm:mt-7" : ""}`}
            >
              <h3 className="text-center font-display text-2xl leading-none">{h.title}</h3>
              <div className="flex h-28 items-center justify-center py-2 sm:h-32">
                <img
                  src={h.image}
                  alt={h.imageAlt}
                  loading="lazy"
                  className={`max-h-full max-w-full object-contain ${h.title === "The Not So Skinny Burrito" ? "w-[9.5rem]" : h.title === "Breakfast Nachos" ? "w-[9rem] scale-110" : h.title === "Espresso Brownie Shake" ? "w-[7.5rem] scale-110" : h.title === "The Salted Bee" ? "w-[6.5rem] scale-110 translate-y-1.5" : "w-[6.5rem] scale-110"}`}
                />
              </div>
              <p className="mt-auto pt-2 text-center text-xs font-medium leading-snug opacity-80">{h.note}</p>
            </article>
          ))}
        </div>
      </section>

      <CurveDivider className="-mb-px text-primary" />
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1fr_0.5fr]">
          <div>
            <h2 className="max-w-2xl text-4xl sm:text-5xl">Built by someone who had to read every label</h2>
            <p className="mt-6 max-w-xl opacity-85">
              Our owner's lifelong journey with diabetes started this cafe. Every recipe is handcrafted and perfected so that light and sugar free tastes just as good.&nbsp;
              <br /><br />
              The Skinny Bean was created to bring New Port Richey more choices, more flavor, and the freedom to customize your order exactly how you want it.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex rounded-full bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground"
            >
              Our story
            </Link>
          </div>
          <figure className="relative mx-auto w-full max-w-[14rem] lg:max-w-xs">
            <div className="absolute -inset-3 rotate-2 rounded-t-[8rem] rounded-b-2xl bg-secondary" aria-hidden />
            <div className="relative overflow-hidden rounded-t-[8rem] rounded-b-2xl border-4 border-background shadow-xl">
              <img
                src={sarahStoryAsset.url}
                alt="Sarah holding an iced latte in front of the Welcome to New Port Richey mural"
                className="aspect-[3/4] w-full scale-110 object-cover object-center"
              />
            </div>
          </figure>
        </div>
      </section>
      <div className="relative mb-8 h-14 w-full sm:h-20" aria-hidden="true">
        <CurveDivider className="-mt-px text-primary" flip />
        {[
          [[0, 68], [180, 18], [358, 9], [546, 47]],
          [[546, 47], [734, 86], [884, 130], [1058, 111]],
          [[1058, 111], [1232, 93], [1326, 44], [1440, 19]],
        ].flatMap((points, segment) =>
          Array.from({ length: 10 }, (_, index) => {
            const t = (index + 0.5) / 10;
            const weights = [(1 - t) ** 3, 3 * (1 - t) ** 2 * t, 3 * (1 - t) * t ** 2, t ** 3];
            const x = points.reduce((sum, point, i) => sum + (point[0] ?? 0) * (weights[i] ?? 0), 0);
            const y = points.reduce((sum, point, i) => sum + (point[1] ?? 0) * (weights[i] ?? 0), 0);
            return (
              <img
                key={`${segment}-${index}`}
                src={beanCutout}
                alt=""
                loading="lazy"
                className={`pointer-events-none absolute h-5 w-5 -translate-x-1/2 translate-y-3 object-contain sm:h-6 sm:w-6 ${index % 2 ? "rotate-12" : "-rotate-12"} ${index % 2 ? "hidden sm:block" : ""}`}
                style={{ left: `${(1 - x / 1440) * 100}%`, top: `${(1 - y / 120) * 100}%` }}
              />
            );
          }),
        )}
      </div>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-20">
        <div className="pointer-events-none absolute -left-20 bottom-4 h-40 w-80 rounded-[50%] border-[3px] border-teal-deep/40" aria-hidden="true" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-4xl sm:text-5xl">On the menu</h2>
          <div className="flex items-center gap-5">
            <img
              src={logoCupCutout}
              alt=""
              loading="lazy"
              className="h-24 w-auto rotate-2 object-contain drop-shadow-md sm:h-28"
            />
            <Link to="/menu" className="font-semibold text-teal-deep underline underline-offset-4">
              View the full menu →
            </Link>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((section) => (
            <Link
              key={section.id}
              to="/menu"
              hash={section.id}
               className="relative rounded-lg border-2 border-border p-7 transition-colors before:absolute before:-top-2 before:left-8 before:h-3 before:w-16 before:rounded-full before:bg-secondary hover:border-teal-deep hover:bg-card"
            >
              <h3 className="font-display text-2xl">{section.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{section.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <SocialGallery />
      <ReviewCta />
    </>
  );
}
