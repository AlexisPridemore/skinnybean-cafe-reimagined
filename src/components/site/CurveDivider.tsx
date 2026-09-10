type CurveDividerProps = {
  className?: string;
  flip?: boolean;
};

export function CurveDivider({ className = "text-primary", flip = false }: CurveDividerProps) {
  return (
    <div className={`h-14 w-full overflow-hidden sm:h-20 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`h-full w-full fill-current ${flip ? "rotate-180" : ""}`}
      >
        <path d="M0 68C180 18 358 9 546 47c188 39 338 83 512 64 174-18 268-67 382-92v101H0Z" />
      </svg>
    </div>
  );
}