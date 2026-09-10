import socialPhoto from "@/assets/skinny-bean-cafe-spread.jpg.asset.json";
import { site } from "@/data/site";

type SocialLabel = (typeof site.socials)[number]["label"];

function SocialIcon({ label, className = "h-5 w-5" }: { label: SocialLabel; className?: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
        <path d="M14.5 8.5V6.8c0-.8.5-1 1-1H18V2.2c-.8-.1-1.8-.2-3-.2-3 0-5 1.8-5 5.2v1.3H7v4h3V22h4.5v-9.5h3.1l.6-4h-3.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M16.7 2c.3 2.3 1.6 3.7 3.8 3.9v3.5a9 9 0 0 1-3.7-1.1v6.5a7.2 7.2 0 1 1-6.2-7.1v3.6a3.7 3.7 0 1 0 2.5 3.5V2h3.6Z" />
    </svg>
  );
}

const instagram = site.socials.find((social) => social.label === "Instagram");
const facebook = site.socials.find((social) => social.label === "Facebook");
const tiktok = site.socials.find((social) => social.label === "TikTok");

export function SocialGallery() {
  const facebookEmbed = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(site.facebookPostUrl)}&show_text=true&width=500`;

  return (
    <section className="relative overflow-hidden bg-secondary py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-28 top-12 h-44 w-80 rounded-[50%] border-[3px] border-primary/25" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-teal-deep">Fresh from the feed</p>
          <h2 className="mt-3 text-5xl leading-[0.95] sm:text-7xl">
            Follow us and become a Skinny Bean Fiend.
          </h2>
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
          {instagram && (
            <a
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-h-[430px] overflow-hidden rounded-t-[10rem] rounded-b-lg bg-coral text-foreground"
            >
              <img
                src={socialPhoto.url}
                alt="Skinny Bean Cafe drinks and fresh food featured on Instagram"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/30" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-coral text-foreground">
                  <SocialIcon label="Instagram" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-3xl">Instagram</h3>
                <p className="mt-2 font-semibold">@theskinnybeancafe</p>
                <p className="mt-4 text-sm">See our latest drinks, dishes, and behind-the-counter moments →</p>
              </div>
            </a>
          )}

          <article className="overflow-hidden rounded-lg bg-card shadow-sm">
            <div className="flex items-center gap-3 bg-primary px-5 py-4 text-primary-foreground">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <SocialIcon label="Facebook" />
              </span>
              <div>
                <h3 className="font-display text-2xl">From Facebook</h3>
                <p className="text-xs opacity-75">The Skinny Bean Cafe</p>
              </div>
            </div>
            <iframe
              src={facebookEmbed}
              title="The Skinny Bean Cafe Facebook post"
              width="500"
              height="520"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="h-[520px] w-full border-0 bg-card"
            />
            {facebook && (
              <a
                href={facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-t border-border px-5 py-4 font-semibold text-teal-deep hover:underline"
              >
                Visit our Facebook <span aria-hidden="true">→</span>
              </a>
            )}
          </article>

          {tiktok && (
            <a
              href={tiktok.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[430px] flex-col justify-between overflow-hidden rounded-t-[10rem] rounded-b-lg bg-mustard p-7 pt-16 text-foreground"
            >
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-foreground/25 bg-background/55 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                <SocialIcon label="TikTok" className="h-14 w-14" />
              </div>
              <div>
                <h3 className="text-4xl">TikTok</h3>
                <p className="mt-2 font-semibold">@the.skinny.bean.c</p>
                <p className="mt-5 text-sm">Watch our newest café clips, menu drops, and Skinny Bean fun →</p>
              </div>
            </a>
          )}
        </div>

        <ul className="mt-8 flex flex-wrap gap-3" aria-label="Follow The Skinny Bean Cafe">
          {site.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/20 bg-background px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              >
                <SocialIcon label={social.label} />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}