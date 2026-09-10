import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";
import { Marquee } from "@/components/site/Marquee";
import { CurveDivider } from "@/components/site/CurveDivider";

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
          <h1 className="text-5xl sm:text-7xl">Our Story</h1>
          <p className="mt-6 max-w-xl text-lg">
            Our owner&apos;s lifelong journey with diabetes started this cafe.
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Our owner, Sarah, is a Florida native who has called New Port Richey home for most of her life.
            After years of going to cafés and restaurants where sugar-free and lighter options were few and far
            between, she knew there had to be a better way.
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">
            She wanted to create a place where everyone could find something they genuinely loved, whether that
            meant sugar-free, skinny, or rich. So, she brought that idea home to the community she knows and
            loves.
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

      <CurveDivider className="-mb-px text-background" />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-20 md:grid-cols-3">
        {values.map((v) => (
          <article key={v.title} className={`rounded-t-[6rem] rounded-b-lg ${v.color} p-7 pt-12`}>
            <h2 className="font-display text-3xl leading-tight">{v.title}</h2>
            <p className="mt-4 text-sm opacity-80">{v.body}</p>
          </article>
        ))}
      </section>

    </>
  );
}
