export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c1410] text-stone-100">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a2e24] via-[#0f1a14] to-[#080d0a]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-amber-950/25 via-emerald-950/10 to-transparent"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(134,239,172,0.12),transparent_55%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl animate-drift"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl animate-drift-slow [animation-delay:-7s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/5 blur-3xl animate-glow-pulse"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <span className="absolute left-[18%] top-[32%] h-1 w-1 rounded-full bg-lime-200/80 shadow-[0_0_8px_2px_rgba(190,242,100,0.5)] animate-firefly" />
        <span className="absolute left-[72%] top-[28%] h-0.5 w-0.5 rounded-full bg-emerald-200/70 shadow-[0_0_6px_1px_rgba(167,243,208,0.4)] animate-firefly [animation-delay:-2.5s]" />
        <span className="absolute left-[58%] top-[62%] h-1 w-1 rounded-full bg-amber-100/60 shadow-[0_0_8px_2px_rgba(253,230,138,0.35)] animate-firefly [animation-delay:-5s]" />
        <span className="absolute left-[35%] top-[70%] h-0.5 w-0.5 rounded-full bg-lime-200/50 animate-firefly [animation-delay:-8s]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,13,10,0.55)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <p className="mb-5 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-emerald-200/50">
          A quiet place to grow
        </p>

        <h1 className="font-display text-center text-5xl font-light leading-[1.1] tracking-tight text-stone-50 sm:text-6xl md:text-7xl">
          Wildlife
          <span className="block bg-gradient-to-r from-emerald-200/90 via-lime-100/80 to-amber-100/70 bg-clip-text text-transparent">
            Oasis
          </span>
        </h1>

        <p className="mt-6 max-w-sm text-center font-sans text-base font-light leading-relaxed tracking-wide text-stone-400/90 sm:text-lg">
          Nurture a living ecosystem at your own gentle pace.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="#"
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-emerald-950 transition-all duration-500"
          >
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-b from-lime-200 to-emerald-400 shadow-[0_0_24px_4px_rgba(134,239,172,0.35),0_0_48px_12px_rgba(52,211,153,0.15)] transition-all duration-500 group-hover:shadow-[0_0_32px_8px_rgba(134,239,172,0.5),0_0_64px_16px_rgba(52,211,153,0.25)] group-hover:from-lime-100 group-hover:to-emerald-300"
              aria-hidden
            />
            <span
              className="absolute inset-0 rounded-full bg-lime-300/20 blur-md animate-glow-pulse"
              aria-hidden
            />
            <span className="relative">Begin your sanctuary</span>
          </a>

          <p className="font-sans text-xs tracking-wide text-stone-500/70">
            No account needed to explore
          </p>
        </div>
      </div>
    </main>
  );
}
