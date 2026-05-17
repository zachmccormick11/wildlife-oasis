"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Logged in!");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="bg-white/5 p-8 rounded-2xl w-full max-w-md backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          className="w-full mb-4 p-3 rounded-lg bg-black/30 border border-white/10"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 p-3 rounded-lg bg-black/30 border border-white/10"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-sky-500 hover:bg-sky-400 transition p-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>
    </main>
  );
}