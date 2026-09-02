import Image from "next/image";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between antialiased selection:bg-cyan-500 selection:text-white">
      {/* Top Navigation */}
      <header className="border-b border-zinc-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
              W
            </div>
            <span className="font-semibold text-base tracking-tight">Web App</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Tailwind CSS v4 Active
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex-1 flex flex-col items-center justify-center text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-1 text-xs font-medium shadow-xs mb-6">
          <span className="text-zinc-500 dark:text-zinc-400">Turborepo Monorepo</span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">apps/web</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-2xl leading-tight">
          Modern Web App with{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Tailwind CSS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          Tailwind CSS v4 is configured and working with full Turbopack support, dark mode, and shared monorepo components.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
          <a
            href="https://turborepo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold shadow-xs transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Turborepo →
          </a>
          <Button
            appName="web"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 px-5 py-2.5 text-sm font-semibold shadow-xs transition hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Shared UI Alert Button
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left mt-12">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs hover:border-cyan-500/40 transition group">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition">
              🚀
            </div>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              Turbopack Fast Refresh
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Instant feedback while editing with Turbopack and Tailwind CSS v4 CSS-first engine.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs hover:border-blue-500/40 transition group">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition">
              📦
            </div>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              Shared Monorepo UI
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Tailwind utility classes are shared seamlessly between <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">@repo/ui</code>, <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">web</code>, and <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">docs</code>.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/80 py-6 bg-white/40 dark:bg-zinc-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              Tailwind CSS
            </a>
            <span>•</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              Next.js
            </a>
            <span>•</span>
            <a
              href="https://turborepo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              Turborepo
            </a>
          </div>

          <div>
            Edit <code className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">apps/web/app/page.tsx</code>
          </div>
        </div>
      </footer>
    </div>
  );
}
