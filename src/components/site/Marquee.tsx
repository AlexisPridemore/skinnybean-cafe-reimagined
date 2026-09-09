export function Marquee({ words, className = "" }: { words: string[]; className?: string }) {
  const line = [...words, ...words];
  return (
    <div className={`overflow-hidden border-y border-border py-3 ${className}`}>
      <div className="marquee-track whitespace-nowrap">
        {line.map((w, i) => (
          <span key={i} className="mx-6 font-display text-2xl sm:text-3xl">
            {w}
            <span className="ml-6 text-teal-deep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
