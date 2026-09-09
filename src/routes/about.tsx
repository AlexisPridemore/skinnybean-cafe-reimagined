import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";
import { Marquee } from "@/components/site/Marquee";
import { SocialStrip } from "@/components/site/SocialStrip";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | The Skinny Bean Cafe" },
      {
        name: "description",
        content:
          "A New Port Richey cafe built on the idea that sugar free should taste just as good as indulgent. Every recipe handcrafted, tested and perfected.",
      },
      { property: "og:title", content: "Our Story | The Skinny Bean Cafe" },
      {
        property: "og:description",
        content: "Why we make coffee and food that everyone can enjoy, without feeling limited.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Made in house",
    body: "Signature sauce, chipotle sauce, sundried tomato pesto, cold foams and whipped cream — all made here.",
    color: "bg-teal",
  },
  {
    title: "Sugar free, still delicious",
    body: "Sugar free syrups and low sugar shakes that taste like the real thing, because they have to.",
    color: "bg-mustard",
  },
  {
    title: "Main Street regulars",
    body: "We know the orders, the dogs and the names. Pull up a seat downtown.",
    color: "bg-coral",
  },
];

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 pb-16 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <h1 className="text-5xl sm:text-7xl">You shouldn&apos;t have to choose.</h1>
          <p className="mt-6 max-w-xl text-lg">
            At our cafe, flavor and creativity come first. We believe you should be able to enjoy every sip
            and bite, whether you&apos;re choosing something light and sugar free or going all in on
            something rich and indulgent.
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Our owner&apos;s lifelong journey with diabetes inspired a mission to make incredible-tasting
            coffee and meals that everyone can enjoy, without feeling limited. Every recipe we serve is
            handcrafted, tested and perfected to deliver full flavor, not compromise. From top quality
            coffee to signature creations and sugar free favorites, every item is made with intention, care
            and balance.
          </p>
          <Link
            to="/menu"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground"
          >
            See what we make
          </Link>
        </div>
        <img
          src={logo.url}
          alt="The Skinny Bean Cafe logo"
          className="mx-auto w-full max-w-sm rounded-full bg-secondary"
        />
      </section>

      <Marquee words={["Handcrafted", "Sugar free friendly", "Locally loved", "Made to order"]} />

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-20 md:grid-cols-3">
        {values.map((v) => (
          <article key={v.title} className={`rounded-3xl ${v.color} p-7`}>
            <h2 className="font-display text-3xl leading-tight">{v.title}</h2>
            <p className="mt-4 text-sm opacity-80">{v.body}</p>
          </article>
        ))}
      </section>

      <SocialStrip />
    </>
  );
}
