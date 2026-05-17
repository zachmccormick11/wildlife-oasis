import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white font-bold text-xl">
          Wildlife Oasis
        </h1>

        <div className="flex gap-6 text-sm text-slate-200">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/pond">Pond</Link>
          <Link href="/collection">Collection</Link>
        </div>
      </div>
    </nav>
  );
}