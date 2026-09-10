import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | The Skinny Bean Cafe" },
      {
        name: "description",
        content:
          "Got questions? We've got answers. Learn about sugar-free options, custom orders, dairy-free milk, catering, seating and more at The Skinny Bean Cafe.",
      },
      { property: "og:title", content: "FAQ | The Skinny Bean Cafe" },
      {
        property: "og:description",
        content:
          "Got questions? We've got answers about sugar-free options, custom orders, catering and more.",
      },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    question: "DO YOU HAVE SUGAR-FREE OPTIONS?",
    answer:
      "Absolutely. Sugar-free and lighter options are a big part of why The Skinny Bean exists. We offer sugar-free choices for many of our drinks and menu items, so you can enjoy your favorites without sacrificing flavor.",
  },
  {
    question: "CAN I CUSTOMIZE MY ORDER?",
    answer:
      "That's kind of our thing. You can customize many of our drinks and food items to make them exactly how you like them. Want it sugar-free, extra sweet, lighter, loaded, dairy-free, or something completely different? Just ask!",
  },
  {
    question: "DO YOU ONLY SERVE “SKINNY” FOOD?",
    answer:
      "Not at all. Skinny is in our name, not a rule. We have sugar-free and lighter options, but we also have plenty of rich, indulgent, and sweet options when you're ready to go all in.",
  },
  {
    question: "DO YOU OFFER DAIRY-FREE MILK?",
    answer:
      "Yes! We offer alternative milk options such as oat, almond, and coconut milk.",
  },
  {
    question: "CAN I ORDER AHEAD?",
    answer:
      "If you're in a hurry, call in an order or place it online for pick up!",
  },
  {
    question: "DO YOU OFFER CATERING?",
    answer:
      "We offer food and drink options that can be great for gatherings, meetings, and events. Reach out to our team to see what we can put together for you.",
  },
  {
    question: "DO YOU OFFER NON-COFFEE DRINKS?",
    answer:
      "Yes! We have options beyond coffee, including other specialty drinks and refreshing choices.",
  },
  {
    question: "DO YOU HAVE SEATING?",
    answer:
      "Yes! Pull up a seat inside or outside, grab your favorite drink, and stay awhile. We're always happy to have you.",
  },
];

function Faq() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
      >
        ← Back to home
      </Link>

      <div className="mt-10 text-center">
        <h1 className="font-display text-5xl sm:text-6xl">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="mt-4 text-lg font-medium text-muted-foreground">
          GOT QUESTIONS? WE'VE GOT ANSWERS.
        </p>
      </div>

      <Accordion type="single" collapsible className="mt-12">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base font-bold uppercase tracking-wide">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
