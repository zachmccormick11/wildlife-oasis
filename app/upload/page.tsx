"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [habitatType, setHabitatType] = useState("pond");
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

    const { error: uploadError } = await supabase.storage
      .from("wildlife-images")
      .upload(filePath, file);

    if (uploadError) {
      alert(`Upload error: ${uploadError.message}`);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("wildlife-images")
      .getPublicUrl(filePath);

      const imageUrl = publicUrlData.publicUrl;

const {
  data: { user },
} = await supabase.auth.getUser();

const { error: dbError } = await supabase
  .from("observations")
  .insert([
    {
      image_url: imageUrl,
      species_name: null,
      habitat_type: habitatType,
      user_id: user?.id ?? null,
    },
  ]);

if (dbError) {
  alert(`Database error: ${dbError.message}`);
  return;
}


    alert("Storage upload succeeded");

    setFile(null);
    loadImages();
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

<select
  value={habitatType}
  onChange={(e) => setHabitatType(e.target.value)}
  className="mb-6 p-3 rounded-lg bg-black/30 border border-white/10"
>
  <option value="pond">Pond</option>
  <option value="aviary">Aviary</option>
  <option value="fossil">Fossil Cave</option>
  <option value="terrarium">Terrarium</option>
</select>

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