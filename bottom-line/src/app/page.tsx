Here’s the full corrected page.tsx you can drop in. This version keeps CHURCH.TECH, removes Sermons.Tech, removes the Help Center link, and keeps the simpler description.

"use client";

import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sermonNotes: notes }),
    });
    const data = await res.json();
    setResult(data.text || data.error || "");
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold tracking-tight text-xl">
              CHURCH.TECH
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Bottom Line Generator
        </h1>
        <p className="text-gray-600 mb-6">
          Paste your sermon notes. The app returns ten bottom line statements.
        </p>

        <form onSubmit={generate} className="space-y-4">
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">
              Sermon notes
            </span>
            <textarea
              className="mt-1 w-full h-64 rounded-xl border border-gray-300 bg-white p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Paste notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading || !notes.trim()}
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
            <button
              type="button"
              onClick={() => {
                setNotes("");
                setResult("");
              }}
              className="rounded-xl border px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Clear
            </button>
          </div>
        </form>

        {result && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Results
            </h2>
            <div className="rounded-xl border bg-white p-4 shadow-sm whitespace-pre-wrap">
              {result}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

Paste this into src/app/page.tsx, commit, and Vercel will redeploy with CHURCH.TECH as the only header text.

Do you also want me to add a small “beta” tag next to CHURCH.TECH (like a subtle pill badge), or just leave the plain text?
