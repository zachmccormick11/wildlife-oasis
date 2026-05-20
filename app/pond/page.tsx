"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Observation = {
  id: string;
  image_url: string;
  habitat_type: string;
};

export default function PondPage() {
  const [fish, setFish] = useState<Observation[]>([]);

  async function loadPondLife() {
    const { data, error } = await supabase
      .from("observations")
      .select("*")
      .eq("habitat_type", "pond");

    if (error) {
      alert(error.message);
      return;
    }

    setFish(data || []);
  }

  useEffect(() => {
    loadPondLife();
  }, []);

  return (
    <main className="min-h-screen bg-sky-950 text-white p-10 overflow-hidden">
      <h1 className="text-5xl font-bold mb-10">
        Your Pond
      </h1>

      <div className="relative w-full h-[600px] rounded-3xl bg-gradient-to-b from-sky-700 to-sky-950 overflow-hidden border border-white/10">
        {fish.map((observation, index) => (
          <img
            key={observation.id}
            src={observation.image_url}
            alt="Fish"
            className="absolute w-32 h-32 object-cover rounded-full border-4 border-white/20 shadow-2xl fish-drift"
            style={{
              top: `${(index % 4) * 120 + 50}px`,
              left: `${(index % 5) * 180 + 50}px`,
            }}
          />
        ))}
      </div>
    </main>
  );
}