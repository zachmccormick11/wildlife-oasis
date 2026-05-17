const particles = [
  { left: "12%", top: "22%", size: "h-0.5 w-0.5", color: "bg-lime-200/50", glow: false, anim: "animate-float", delay: "0s" },
  { left: "28%", top: "38%", size: "h-1 w-1", color: "bg-lime-200/60", glow: true, anim: "animate-float-slow", delay: "-6s" },
  { left: "45%", top: "18%", size: "h-0.5 w-0.5", color: "bg-emerald-200/45", glow: false, anim: "animate-float", delay: "-12s" },
  { left: "68%", top: "26%", size: "h-0.5 w-0.5", color: "bg-emerald-200/55", glow: true, anim: "animate-firefly", delay: "-3s" },
  { left: "82%", top: "44%", size: "h-0.5 w-0.5", color: "bg-lime-200/40", glow: false, anim: "animate-float-slow", delay: "-18s" },
  { left: "55%", top: "58%", size: "h-1 w-1", color: "bg-amber-100/45", glow: true, anim: "animate-float", delay: "-9s" },
  { left: "22%", top: "65%", size: "h-0.5 w-0.5", color: "bg-lime-200/40", glow: false, anim: "animate-float-slow", delay: "-14s" },
  { left: "75%", top: "72%", size: "h-0.5 w-0.5", color: "bg-emerald-200/35", glow: false, anim: "animate-float", delay: "-21s" },
] as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c1410] text-stone-100">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a2e24] via-[#0f1a14] to-[#080d0a]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-amber-950/25 via-emerald-950/10 to-transparent animate-bg-breathe"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(134,239,172,0.12),transparent_55%)] animate-bg-breathe"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_30%_80%,rgba(52,211,153,0.06),transparent_50%)] animate-bg-breathe"
        style={{ animationDelay: "-10s" }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-emerald-500/12 blur-3xl animate-drift"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-teal-400/8 blur-3xl animate-drift-slow"
        style={{ animationDelay: "-7s" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/4 blur-3xl animate-glow-pulse"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-full ${p.size} ${p.color} ${p.anim} ${p.glow ? "shadow-[0_0_8px_2px_rgba(190,242,100,0.25)]" : ""}`}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,13,10,0.55)_100%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_50%,rgba(134,239,172,0.03),transparent_70%)] animate-glow-pulse"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <p
          className="mb-5 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-emerald-200/50 animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          A quiet place to grow
        </p>

        <h1
          className="font-display text-center text-5xl font-light leading-[1.1] tracking-tight text-stone-50 sm:text-6xl md:text-7xl animate-fade-in"
          style={{ animationDelay: "0.35s" }}
        >
          Wildlife
          <span className="block bg-gradient-to-r from-emerald-200/90 via-lime-100/80 to-amber-100/70 bg-clip-text text-transparent">
            Oasis
          </span>
        </h1>

        <p
          className="mt-6 max-w-sm text-center font-sans text-base font-light leading-relaxed tracking-wide text-stone-400/90 sm:text-lg animate-fade-in"
          style={{ animationDelay: "0.55s" }}
        >
          Nurture a living ecosystem at your own gentle pace.
        </p>

        <div
          className="mt-12 flex flex-col items-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.75s" }}
        >
          <a
            href="#"
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-emerald-950 transition-transform duration-700 ease-out hover:-translate-y-0.5 active:translate-y-0"
          >
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-b from-lime-200 to-emerald-400 shadow-[0_0_20px_3px_rgba(134,239,172,0.28),0_0_40px_10px_rgba(52,211,153,0.12)] transition-all duration-700 ease-out group-hover:shadow-[0_0_28px_6px_rgba(134,239,172,0.4),0_0_56px_14px_rgba(52,211,153,0.18)] group-hover:from-lime-100 group-hover:to-emerald-300 group-hover:brightness-105"
              aria-hidden
            />
            <span
              className="absolute inset-0 rounded-full bg-lime-300/15 blur-md animate-glow-pulse"
              aria-hidden
            />
            <span className="relative transition-opacity duration-700 group-hover:opacity-95">
              Begin your sanctuary
            </span>
          </a>

          <p className="font-sans text-xs tracking-wide text-stone-500/70">
            No account needed to explore
          </p>
        </div>
      </div>
    </main>
  );
}
