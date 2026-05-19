"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
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

  async function handleUpload() {
    if (!file) {
      alert("Choose an image first.");
      return;
    }

    const filePath = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("wildlife-images")
      .upload(filePath, file);

    if (error) {
      alert(error.message);
    } else {
      alert("Image uploaded!");
      setFile(null);
      loadImages();
    }
  }

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <main className="min-h-screen bg-emerald-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Upload Wildlife</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="mb-6 block"
      />

      <button
        onClick={handleUpload}
        className="bg-emerald-500 hover:bg-emerald-400 transition px-5 py-3 rounded-lg font-semibold mb-10"
      >
        Upload Image
      </button>

      <h2 className="text-2xl font-bold mb-4">Uploaded Images</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((url) => (
          <img
            key={url}
            src={url}
            alt="Uploaded wildlife"
            className="w-full h-40 object-cover rounded-xl border border-white/10"
          />
        ))}
      </div>
    </main>
  );
}