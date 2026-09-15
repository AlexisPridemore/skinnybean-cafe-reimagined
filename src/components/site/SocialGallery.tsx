import ig1 from "@/assets/social/ig-1.jpg";
import ig2 from "@/assets/social/ig-2.jpg";
import ig3 from "@/assets/social/ig-3.jpg";
import ig4 from "@/assets/social/ig-4.jpg";
import ig5 from "@/assets/social/ig-5.jpg";
import ig6 from "@/assets/social/ig-6.jpg";
import ig7 from "@/assets/social/ig-7.jpg";
import ig8 from "@/assets/social/ig-8.jpg";
import beanCutout from "@/assets/bean-cutout.png";
import { site } from "@/data/site";

type SocialLabel = (typeof site.socials)[number]["label"];

type SocialPost = {
  href: string;
  image: string;
  label: string;
  isVideo?: boolean;
};

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

const instagramPosts: SocialPost[] = [
  { href: "https://www.instagram.com/reel/DdDKm6wJ5D-/", image: ig1, label: "Making our new Breakfast Nachos", isVideo: true },
  { href: "https://www.instagram.com/reel/Dc6Qhw2OsP6/", image: ig2, label: "Risking my life for the Skinny Bean", isVideo: true },
  { href: "https://www.instagram.com/reel/Dc44hAMN5rT/", image: ig3, label: "An Asiago Avenue moment", isVideo: true },
  { href: "https://www.instagram.com/reel/DcRaLPyJF6W/", image: ig4, label: "Mic in front of the owner", isVideo: true },
  { href: "https://www.instagram.com/reel/DcRaBkaJ9Kf/", image: ig5, label: "Do you see these Breakfast Nachos?!", isVideo: true },
  { href: "https://www.instagram.com/p/DbI0Qx_Dl5m/", image: ig6, label: "Introducing the Asiago Avenue", isVideo: true },
  { href: "https://www.instagram.com/reel/DZbNWP7Netj/", image: ig7, label: "Obsessed with the Skinny Bean", isVideo: true },
  { href: "https://www.instagram.com/reel/DZa4FW4S2xi/", image: ig8, label: "The video my employees begged for", isVideo: true },
];

const facebookEmbed =
  "https://www.facebook.com/plugins/page.php?href=" +
  encodeURIComponent("https://www.facebook.com/profile.php?id=61581435957724") +
  "&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false";

const tiktokEmbed = "https://www.tiktok.com/embed/@the.skinny.bean.c";

type Row = {
  label: SocialLabel;
  handle: string;
  color: string;
  posts?: SocialPost[];
  embed?: string;
  embedHeight?: number;
  linkLabel?: string;
};

const rows: Row[] = [
  { label: "Instagram", handle: "@theskinnybeancafe", posts: instagramPosts, color: "bg-coral" },
  { label: "Facebook", handle: "The Skinny Bean Cafe", embed: facebookEmbed, embedHeight: 700, color: "bg-primary text-primary-foreground" },
  { label: "TikTok", handle: "@the.skinny.bean.c", embed: tiktokEmbed, embedHeight: 478, linkLabel: "Open TikTok", color: "bg-mustard" },
];

function PostRow({ label, handle, posts, embed, embedHeight = 700, linkLabel, color }: Row) {
  const account = site.socials.find((social) => social.label === label);

  return (
    <article className="border-t-2 border-foreground/15 py-8 first:border-t-0">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`flex h-11 w-11 items-center justify-center rounded-full ${color}`}>
            <SocialIcon label={label} className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-3xl leading-none">{label}</h3>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">{handle}</p>
          </div>
        </div>
        {account && (
          <a href={account.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-deep underline decoration-2 underline-offset-4">
            {linkLabel ?? "View profile"} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      {embed && (
        <div className="overflow-hidden rounded-xl border-2 border-foreground/10 bg-card shadow-sm">
          <iframe
            src={embed}
            title={`${label} posts from The Skinny Bean Cafe`}
            loading="lazy"
            className="w-full"
            style={{ height: `${embedHeight}px` }}
            scrolling="yes"
            frameBorder="0"
            allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0" aria-label={`${label} posts`}>
        {(posts ?? []).map((post, index) => (
          <a
            key={`${post.href}-${index}`}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${post.label} on ${label}`}
            className="group relative aspect-[4/5] w-[72vw] max-w-[270px] shrink-0 snap-start overflow-hidden rounded-lg bg-card shadow-sm sm:w-[240px]"
          >
            <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" aria-hidden="true" />
            {post.isVideo && (
              <span className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-transform group-hover:scale-110" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current"><path d="M8 5v14l11-7z" /></svg>
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
              <p className="font-semibold leading-tight">{post.label}</p>
              <p className="mt-1 text-xs opacity-80">Open on {label} ↗</p>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}

export function SocialGallery() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-20 pb-10 sm:pt-24 sm:pb-12">
      <div className="pointer-events-none absolute -right-28 top-12 h-44 w-80 rounded-[50%] border-[3px] border-primary/25" aria-hidden="true" />
      <div className="pointer-events-none absolute right-6 top-20 flex items-end gap-1 sm:right-16" aria-hidden="true">
        <img src={beanCutout} alt="" loading="lazy" className="h-10 w-10 rotate-12 object-contain opacity-90 drop-shadow-md sm:h-12 sm:w-12" />
        <img src={beanCutout} alt="" loading="lazy" className="h-7 w-7 -rotate-6 object-contain opacity-80 drop-shadow-md sm:h-9 sm:w-9" />
        <img src={beanCutout} alt="" loading="lazy" className="h-5 w-5 -rotate-[30deg] object-contain opacity-70 drop-shadow-md sm:h-6 sm:w-6" />
      </div>
      <div className="pointer-events-none absolute bottom-16 left-4 flex items-end gap-1 sm:left-10" aria-hidden="true">
        <img src={beanCutout} alt="" loading="lazy" className="h-9 w-9 -rotate-45 object-contain opacity-80 drop-shadow-md sm:h-11 sm:w-11" />
        <img src={beanCutout} alt="" loading="lazy" className="h-7 w-7 rotate-12 object-contain opacity-70 drop-shadow-md sm:h-8 sm:w-8" />
        <img src={beanCutout} alt="" loading="lazy" className="h-5 w-5 rotate-[25deg] object-contain opacity-60 drop-shadow-md sm:h-6 sm:w-6" />
      </div>
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-teal-deep">Fresh from the feed</p>
          <h2 className="mt-3 text-5xl leading-[0.95] sm:text-7xl">Follow us and become a Skinny Bean Fiend.</h2>
        </div>
        <div className="mt-10">
          {rows.map((row) => <PostRow key={row.label} {...row} />)}
        </div>
      </div>
    </section>
  );
}