import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";
import sarahPhoto from "@/assets/about-sarah.jpg.asset.json";
import teamPhoto from "@/assets/about-team.jpg.asset.json";
import ribbonPhoto from "@/assets/about-ribbon.jpg.asset.json";
import ribbonWidePhoto from "@/assets/about-ribbon-wide.jpg.asset.json";
import collagePhoto from "@/assets/about-collage.jpg.asset.json";
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
    body: "Signature sauce, chipotle sauce, sundried tomato pesto, Tuscan cream cheese, cold foams and whipped cream all made here.",
    color: "bg-teal",
  },
  {
    title: "Sugar free, still delicious",
    body: "Sugar free syrups and low sugar shakes that taste like the real thing, because they have to.",
    color: "bg-mustard",
  },
  {
    title: "Main Street regulars",
    body: "We know your order, your dog’s name, and probably your coffee order by heart. Come pull up a seat, we'd love to chat.\u00a0\u00a0",
    color: "bg-coral",
  },
];

function About() {
  return (
    <>
      {/* Story hero — Sarah's photo beside the story */}
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 pt-14 pb-16 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <h1 className="text-5xl sm:text-7xl">Our Story</h1>
          <p className="mt-6 max-w-xl text-lg">
            A personal journey inspired The Skinny Bean.
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Our owner, Sarah, is a Florida native who has called New Port Richey home for most of her life.
            Living with diabetes showed her firsthand how hard it can be to find delicious sugar-free and lighter
            options. She knew there had to be a better way.
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">
             She wanted to create a place where everyone could find something they genuinely love, whether that
             means sugar-free, skinny, or rich. So, she brought that idea home to the community she knows and
             loves.&nbsp;



             At The Skinny Bean, everyone has a seat at the table and something delicious in their cup!
          </p>
          <Link
            to="/menu"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground"
          >
            See what we make
          </Link>
        </div>
        <figure className="relative mx-auto w-full max-w-sm lg:-mt-10">
          <div className="absolute -inset-3 -rotate-2 rounded-t-[10rem] rounded-b-2xl bg-teal" aria-hidden />
          <div className="relative rotate-1 overflow-hidden rounded-t-[10rem] rounded-b-2xl border-4 border-background shadow-xl">
            <img
              src={sarahPhoto.url}
              alt="Sarah, owner of The Skinny Bean Cafe, holding an iced latte in front of the Welcome to New Port Richey mural"
              className="aspect-[3/4] w-full scale-125 object-cover object-center"
            />
          </div>
          <figcaption className="mt-4 text-center font-logo text-2xl text-teal-deep">
            Sarah, our owner
          </figcaption>
        </figure>
      </section>

      <Marquee words={["Handcrafted", "Sugar free friendly", "Locally loved", "Made to order"]} />

      {/* Faded black-and-white ribbon cutting band */}
      <section className="relative overflow-hidden">
        <img
          src={ribbonWidePhoto.url}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-15 grayscale"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1fr]">
          <img
            src={ribbonPhoto.url}
            alt="The Skinny Bean Cafe team cutting the ribbon on opening day in front of the shop"
            className="w-full -rotate-1 rounded-t-[5rem] rounded-b-lg border-4 border-background object-cover shadow-xl grayscale transition duration-500 hover:rotate-0 hover:grayscale-0"
          />
          <div>
            <h2 className="text-4xl sm:text-5xl">From an idea to Main Street</h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              What started as a frustration with limited options became a ribbon cutting in Downtown Main Street, a
              neighborhood coffee shop where nobody has to settle.
            </p>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Every drink, bowl and sandwich is still made the way it was on day one: by hand, to order, and
              exactly the way you like it.
            </p>
          </div>
        </div>
      </section>

      <CurveDivider className="-mb-px text-background" />

      {/* Values */}
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-20 md:grid-cols-3">
        {values.map((v) => (
          <article key={v.title} className={`rounded-t-[6rem] rounded-b-lg ${v.color} p-7 pt-12`}>
            <h2 className="text-center font-display text-3xl leading-tight">{v.title}</h2>
            <p className="mt-4 text-sm opacity-80">{v.body}</p>
          </article>
        ))}
      </section>

      {/* Photo gallery — mix of color and black & white */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="text-center text-4xl sm:text-5xl">Inside the shop</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          The people, the counter and the moments that make this place ours.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <figure className="group relative overflow-hidden rounded-t-[6rem] rounded-b-lg">
            <img
              src={teamPhoto.url}
              alt="Three members of The Skinny Bean Cafe team smiling inside the shop"
              className="h-105 w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-12 font-display text-xl text-cream">
              The crew
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-t-[6rem] rounded-b-lg sm:mt-10">
            <img
              src={collagePhoto.url}
              alt="Behind the counter at The Skinny Bean Cafe — drinks, the register and the panini press"
              className="h-105 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-12 font-display text-xl text-cream">
              Behind the bar
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden rounded-t-[6rem] rounded-b-lg">
            <iframe
              src="https://www.instagram.com/reel/DXPQd1XjuHJ/embed/"
              title="Instagram Reel from The Skinny Bean Cafe"
              className="h-105 w-full bg-secondary"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-12 font-display text-xl text-cream">
              The bean itself
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
