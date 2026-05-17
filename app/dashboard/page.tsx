"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function DashboardPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setEmail(data.user?.email ?? null);
    }

    getUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setEmail(null);
    alert("Logged out!");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

      {email ? (
        <div>
          <p className="text-emerald-300 mb-6">Signed in as {email}</p>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 transition px-5 py-3 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-slate-300">You are not signed in.</p>
      )}
    </main>
  );
}