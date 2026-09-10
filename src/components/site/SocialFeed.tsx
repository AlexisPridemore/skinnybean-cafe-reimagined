import { site } from "@/data/site";

export function SocialFeed() {
  const fbSrc = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
    site.facebookPostUrl,
  )}&show_text=true&width=500`;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-4xl sm:text-5xl">Straight from our feed</h2>
        <p className="max-w-sm text-muted-foreground">
          Latest posts and videos from Facebook, TikTok and Instagram.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <div className="overflow-hidden rounded-3xl border-2 border-border bg-card p-3">
          <h3 className="px-2 pt-2 pb-3 font-display text-2xl">Facebook</h3>
          <iframe
            title="Latest Facebook post from The Skinny Bean Cafe"
            src={fbSrc}
            className="h-[520px] w-full rounded-2xl"
            loading="lazy"
            allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        <div className="overflow-hidden rounded-3xl border-2 border-border bg-card p-3">
          <h3 className="px-2 pt-2 pb-3 font-display text-2xl">TikTok</h3>
          <iframe
            title="TikTok videos from The Skinny Bean Cafe"
            src="https://www.tiktok.com/embed/@the.skinny.bean.c"
            className="h-[520px] w-full rounded-2xl"
            loading="lazy"
            allow="encrypted-media; picture-in-picture; web-share"
          />
        </div>

        <a
          href="https://www.instagram.com/theskinnybeancafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[420px] flex-col justify-between rounded-3xl bg-coral p-8 transition-transform hover:-translate-y-1"
        >
          <div>
            <h3 className="font-display text-3xl">Instagram</h3>
            <p className="mt-3 text-sm opacity-80">
              Daily drinks, specials and behind-the-bar reels at @theskinnybeancafe.
            </p>
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase">Open Instagram →</span>
        </a>
      </div>
    </section>
  );
}
