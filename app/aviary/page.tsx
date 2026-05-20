"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Observation = {
  id: string;
  image_url: string;
};

export default function AviaryPage() {
  const [birds, setBirds] = useState<Observation[]>([]);

  async function loadBirds() {
    const { data, error } = await supabase
      .from("observations")
      .select("*")
      .eq("habitat_type", "aviary");

    if (error) {
      alert(error.message);
      return;
    }

    setBirds(data || []);
  }

  useEffect(() => {
    loadBirds();
  }, []);

  return (
    <main className="min-h-screen bg-emerald-950 text-white p-10 overflow-hidden">
      <h1 className="text-5xl font-bold mb-10">
        Your Aviary
      </h1>

      <div className="relative w-full h-[600px] rounded-3xl bg-gradient-to-b from-emerald-700 to-emerald-950 overflow-hidden border border-white/10">
        {birds.map((bird, index) => (
          <img
            key={bird.id}
            src={bird.image_url}
            alt="Bird"
            className="absolute w-28 h-28 object-cover rounded-full border-4 border-white/20 shadow-2xl fish-drift"
            style={{
              top: `${(index % 3) * 140 + 50}px`,
              left: `${(index % 5) * 180 + 50}px`,
            }}
          />
        ))}
      </div>
    </main>
  );
}