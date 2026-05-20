"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Observation = {
  id: string;
  image_url: string;
};

type HabitatSceneProps = {
  habitatType: string;
  title: string;
  background: string;
};

export default function HabitatScene({
  habitatType,
  title,
  background,
}: HabitatSceneProps) {
  const [observations, setObservations] = useState<Observation[]>([]);

  async function loadObservations() {
    const { data, error } = await supabase
      .from("observations")
      .select("*")
      .eq("habitat_type", habitatType);

    if (error) {
      alert(error.message);
      return;
    }

    setObservations(data || []);
  }

  useEffect(() => {
    loadObservations();
  }, []);

  return (
    <main className="min-h-screen text-white p-10 overflow-hidden">
      <h1 className="text-5xl font-bold mb-10">
        {title}
      </h1>

      <div
        className={`relative w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 ${background}`}
      >
        {observations.map((observation, index) => (
          <img
            key={observation.id}
            src={observation.image_url}
            alt="Wildlife"
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