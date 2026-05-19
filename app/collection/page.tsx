"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Observation = {
  id: string;
  image_url: string;
  habitat_type: string;
  species_name: string | null;
};

export default function CollectionPage() {
  const [observations, setObservations] = useState<Observation[]>([]);

  async function loadObservations() {
    const { data, error } = await supabase
      .from("observations")
      .select("*")
      .order("created_at", { ascending: false });

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
    <main className="min-h-screen bg-emerald-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Wildlife Collection
      </h1>

      {observations.length === 0 ? (
        <p>No observations yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {observations.map((observation) => (
            <div
              key={observation.id}
              className="bg-black/20 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
            >
              <img
                src={observation.image_url}
                alt="Wildlife"
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <p className="text-sm text-emerald-200 mb-2">
                  Habitat: {observation.habitat_type}
                </p>

                <p className="text-xs text-slate-300">
                  {observation.species_name || "Unknown Species"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}