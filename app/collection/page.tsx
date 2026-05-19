"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function CollectionPage() {
  const [images, setImages] = useState<string[]>([]);

  async function loadImages() {
    const { data, error } = await supabase.storage
      .from("wildlife-images")
      .list();

    if (error) {
      alert(error.message);
      return;
    }

    const urls = data.map((item) => {
      const { data } = supabase.storage
        .from("wildlife-images")
        .getPublicUrl(item.name);

      return data.publicUrl;
    });

    setImages(urls);
  }

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <main className="min-h-screen bg-emerald-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Wildlife Collection
      </h1>

      {images.length === 0 ? (
        <p className="text-emerald-200">
          No wildlife uploaded yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((url) => (
            <div
              key={url}
              className="bg-black/20 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
            >
              <img
                src={url}
                alt="Wildlife"
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <p className="text-sm text-emerald-200">
                  Wildlife Observation
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}