"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { habitats } from "../lib/habitats";
import { supabase } from "../lib/supabase";

type Counts = {
  [key: string]: number;
};

export default function HomePage() {
  const [counts, setCounts] = useState<Counts>({});

  async function loadCounts() {
    const { data, error } = await supabase
      .from("observations")
      .select("habitat_type");

    if (error) {
      alert(error.message);
      return;
    }

    const habitatCounts: Counts = {};

    data.forEach((observation) => {
      const habitat = observation.habitat_type;

      habitatCounts[habitat] =
        (habitatCounts[habitat] || 0) + 1;
    });

    setCounts(habitatCounts);
  }

  useEffect(() => {
    loadCounts();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-6xl font-bold mb-4">
        Wildlife Oasis
      </h1>

      <p className="text-slate-300 mb-10 text-xl">
        Explore your living wildlife habitats.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(habitats).map(
          ([key, habitat]) => (
            <Link
              key={key}
              href={`/habitat/${key}`}
              className={`rounded-3xl p-10 border border-white/10 transition hover:scale-[1.02] ${habitat.background}`}
            >
              <h2 className="text-4xl font-bold mb-4">
                {habitat.title}
              </h2>

              <p className="text-white/80 mb-2">
                Enter habitat
              </p>

              <p className="text-sm text-white/60">
                {counts[key] || 0} observations
              </p>
            </Link>
          )
        )}
      </div>
    </main>
  );
}