"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

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
    }
  }

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
        className="bg-emerald-500 hover:bg-emerald-400 transition px-5 py-3 rounded-lg font-semibold"
      >
        Upload Image
      </button>
    </main>
  );
}