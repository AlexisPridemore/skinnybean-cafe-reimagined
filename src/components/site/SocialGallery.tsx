import instagramOne from "@/assets/social/instagram-1.jpg";
import instagramTwo from "@/assets/social/instagram-2.jpg";
import instagramThree from "@/assets/social/instagram-3.jpg";
import instagramFour from "@/assets/social/instagram-4.jpg";
import facebookFallback from "@/assets/skinny-bean-cafe-spread.jpg.asset.json";
import tiktokOne from "@/assets/social/tiktok-1.jpg";
import tiktokTwo from "@/assets/social/tiktok-2.jpg";
import tiktokThree from "@/assets/social/tiktok-3.jpg";
import tiktokFour from "@/assets/social/tiktok-4.jpg";
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
  { href: "https://www.instagram.com/reel/DdDKm6wJ5D-/", image: instagramOne, label: "Breakfast nachos", isVideo: true },
  { href: "https://www.instagram.com/reel/Dc6Qhw2OsP6/", image: instagramTwo, label: "Behind the scenes", isVideo: true },
  { href: "https://www.instagram.com/reel/Dc44hAMN5rT/", image: instagramThree, label: "Asiago Avenue", isVideo: true },
  { href: "https://www.instagram.com/reel/DcRaLPyJF6W/", image: instagramFour, label: "Skinny Bean interview", isVideo: true },
  { href: "https://www.instagram.com/theskinnybeancafe/reels/", image: instagramTwo, label: "All our reels", isVideo: true },
  { href: "https://www.instagram.com/theskinnybeancafe/", image: facebookFallback.url, label: "Cafe favorites" },
  { href: "https://www.instagram.com/theskinnybeancafe/tagged/", image: instagramThree, label: "Tagged by you" },
];

const facebookPosts: SocialPost[] = [
  { href: site.facebookPostUrl, image: facebookFallback.url, label: "Latest Skinny Bean post" },
  { href: "https://www.facebook.com/reel/28695292163441307/", image: instagramOne, label: "Breakfast nachos reel", isVideo: true },
  { href: "https://www.facebook.com/reel/1564212755387509/", image: instagramTwo, label: "Behind the scenes reel", isVideo: true },
  { href: "https://www.facebook.com/reel/2213058186152637/", image: instagramThree, label: "Cafe reel", isVideo: true },
  { href: "https://www.facebook.com/61581435957724/videos", image: tiktokOne, label: "All our videos", isVideo: true },
  { href: "https://www.facebook.com/61581435957724/photos", image: instagramFour, label: "Photo album" },
  { href: "https://www.facebook.com/61581435957724/reviews", image: tiktokTwo, label: "What guests say" },
];

const tiktokPosts: SocialPost[] = [
  { href: "https://www.tiktok.com/@the.skinny.bean.c/video/7642904680061881614", image: tiktokOne, label: "Skinny Bean TikTok", isVideo: true },
  { href: "https://www.tiktok.com/@the.skinny.bean.c/video/7640123337473035534", image: tiktokTwo, label: "Cafe TikTok", isVideo: true },
  { href: "https://www.tiktok.com/@the.skinny.bean.c/video/7632354294661958926", image: tiktokThree, label: "Menu TikTok", isVideo: true },
  { href: "https://www.tiktok.com/@the.skinny.bean.c/video/7683139704954506509", image: tiktokFour, label: "Latest cafe TikTok", isVideo: true },
  { href: "https://www.tiktok.com/@the.skinny.bean.c", image: instagramOne, label: "More from the shop", isVideo: true },
  { href: "https://www.tiktok.com/@the.skinny.bean.c", image: instagramThree, label: "Drink of the week", isVideo: true },
  { href: "https://www.tiktok.com/@the.skinny.bean.c", image: facebookFallback.url, label: "Behind the counter", isVideo: true },
];

const rows = [
  { label: "Instagram" as const, handle: "@theskinnybeancafe", posts: instagramPosts, color: "bg-coral" },
  { label: "Facebook" as const, handle: "The Skinny Bean Cafe", posts: facebookPosts, color: "bg-primary text-primary-foreground" },
  { label: "TikTok" as const, handle: "@the.skinny.bean.c", posts: tiktokPosts, color: "bg-mustard" },
];

function PostRow({ label, handle, posts, color }: (typeof rows)[number]) {
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
            View profile <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0" aria-label={`${label} posts`}>
        {posts.map((post, index) => (
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
    <section className="relative overflow-hidden bg-secondary py-20 sm:py-24">
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