"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Search, ArrowUpRight } from "lucide-react";
import { Roadmap } from "@/types/roadmap";
import RoadmapCard from "./RoadmapCard";

interface RoadmapsPageProps {
  initialRoadmaps: Roadmap[];
}

const difficultyOptions = ["All", "Beginner", "Intermediate", "Advanced"];
const categoryOptions = ["All", "Frontend", "Backend", "Full Stack", "DevOps", "AI/ML"];

export default function RoadmapsPage({ initialRoadmaps }: RoadmapsPageProps) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [category, setCategory] = useState("All");

  const fuse = useMemo(
    () =>
      new Fuse(initialRoadmaps, {
        keys: ["title", "description", "skills", "category"],
        threshold: 0.35,
      }),
    [initialRoadmaps]
  );

  const filteredRoadmaps = useMemo(() => {
    const results = query ? fuse.search(query).map((item) => item.item) : initialRoadmaps;
    return results.filter((roadmap) => {
      const matchesDifficulty = difficulty === "All" || roadmap.difficulty === difficulty;
      const matchesCategory = category === "All" || roadmap.category === category;
      return matchesDifficulty && matchesCategory;
    });
  }, [category, difficulty, fuse, initialRoadmaps, query]);

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm dark:border-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Developer Roadmaps</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Explore curated learning paths for modern developers.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Find the best roadmap for your next career move with searchable, category-filtered learning paths for frontend, backend, full stack, DevOps, and AI/ML.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span>{initialRoadmaps.length} roadmaps ready to explore</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>Contribute your own roadmap via GitHub PR</span>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(280px,360px)_1fr]">
        <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
          <div className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Search size={18} />
              <span className="text-sm font-semibold">Search roadmaps</span>
            </div>
            <div className="mt-4">
              <label className="relative block">
                <span className="sr-only">Search roadmaps</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by title, category, skill..."
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-500/20"
                />
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">Filters</h2>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                  setDifficulty("All");
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Reset
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="category-filter" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Category</label>
                <select
                  id="category-filter"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-500/20"
                >
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="difficulty-filter" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Difficulty</label>
                <select
                  id="difficulty-filter"
                  value={difficulty}
                  onChange={(event) => setDifficulty(event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-500/20"
                >
                  {difficultyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          {filteredRoadmaps.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-950">
              <p className="text-lg font-semibold text-slate-900 dark:text-white">No roadmaps found.</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Try adjusting your search or filters to find the right roadmap.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRoadmaps.map((roadmap) => (
                <RoadmapCard key={roadmap.title} roadmap={roadmap} />
              ))}
            </div>
          )}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-white">Want to contribute a roadmap?</p>
            <p className="mt-2">Open a pull request on GitHub and help expand the resource hub with new learning paths.</p>
            <a
              href="https://github.com/saikirantechy/dev-resource-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Contribute a Roadmap
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
