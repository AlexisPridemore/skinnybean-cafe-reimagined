export function Marquee({ words, className = "" }: { words: string[]; className?: string }) {
  // Repeat words until the track is comfortably wider than any viewport,
  // then duplicate it so the loop resets seamlessly with no visible gap.
  const repeated = words.length ? Array.from({ length: Math.max(4, Math.ceil(12 / words.length)) }, (_, i) => words[i % words.length]).flat() : [];
  const track = [...repeated, ...repeated];
  return (
    <div className={`overflow-hidden border-y border-border py-3 ${className}`}>
      <div className="marquee-track flex items-center">
        {track.map((w, i) => (
          <span key={i} className="mx-6 shrink-0 font-display text-2xl sm:text-3xl">
            {w}
            <span className="ml-6 text-teal-deep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
