import beanCutout from "@/assets/bean-cutout.png";
import { site } from "@/data/site";

export function ReviewCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4 pt-8">
      <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-t-[6rem] rounded-b-lg bg-mustard p-8 pt-14 sm:p-12 sm:pt-16">
        <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-64 rounded-[50%] border-[3px] border-primary/20" aria-hidden="true" />
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Leave us a Google review</h2>
          <p className="mt-3 max-w-md text-sm opacity-80">
            Loved your drink? A quick review helps our little Main Street shop more than you know.
          </p>
        </div>
        <a
          href={site.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Write a review
        </a>
      </div>
    </section>
  );
}
