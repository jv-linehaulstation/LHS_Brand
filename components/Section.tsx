import ParallaxImage from "@/components/motion/ParallaxImage";

type Variant = "ink" | "carbon" | "panel" | "blueprint" | "image" | "gradient";

/**
 * One wrapper that enforces the background rhythm. Give adjacent sections
 * different `variant`s so no two neighbors look alike (the whole point):
 *   ink       → flat #0B0B0B
 *   carbon    → #111 with a faint top/bottom hairline
 *   panel     → slightly lifted #141414 slab
 *   blueprint → carbon + faint engineering grid
 *   image     → parallax photo + darkened overlay (pass `image`)
 *   gradient  → accent-tinted diagonal wash (pass `accent`)
 */
export default function Section({
  children,
  variant = "ink",
  image,
  accent = "#F07820",
  parallax = true,
  className = "",
  id,
}: {
  children: React.ReactNode;
  variant?: Variant;
  image?: string;
  accent?: string;
  parallax?: boolean;
  className?: string;
  id?: string;
}) {
  const base = "relative overflow-hidden px-5 sm:px-8";

  if (variant === "image" && image) {
    return (
      <section id={id} className={`${base} ${className}`}>
        {parallax ? (
          <ParallaxImage src={image} />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.82),rgba(11,11,11,0.92))]" />
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
        />
        <div className="relative mx-auto max-w-site">{children}</div>
      </section>
    );
  }

  if (variant === "gradient") {
    return (
      <section
        id={id}
        className={`${base} ${className}`}
        style={{ background: `linear-gradient(135deg, ${accent}22, #0B0B0B 62%)` }}
      >
        <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_60px)]" />
        <div className="relative mx-auto max-w-site">{children}</div>
      </section>
    );
  }

  const bg =
    variant === "carbon"
      ? "bg-[#101010] border-y border-chrome/10"
      : variant === "panel"
      ? "bg-[#141414] border-y border-chrome/10"
      : "bg-ink";

  return (
    <section id={id} className={`${base} ${bg} ${className}`}>
      {variant === "blueprint" && (
        <div className="blueprint pointer-events-none absolute inset-0 opacity-60" />
      )}
      <div className="relative mx-auto max-w-site">{children}</div>
    </section>
  );
}
