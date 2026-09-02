import Image from "next/image";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-20 font-sans bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Header / Badge */}
      <header className="flex w-full max-w-5xl justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/globe.svg"
            alt="Globe icon"
            width={24}
            height={24}
            className="dark:invert"
          />
          <span className="font-bold text-lg tracking-tight">Docs App</span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Tailwind CSS v4 Active
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex flex-col items-center justify-center text-center max-w-3xl my-16 gap-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-4 py-1.5 text-sm shadow-xs backdrop-blur-md">
          <span className="text-zinc-500 dark:text-zinc-400">Turborepo Monorepo</span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="font-medium text-indigo-600 dark:text-indigo-400">apps/docs</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Modern Documentation with{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tailwind CSS
          </span>
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          Tailwind CSS is now fully configured in this Next.js Turborepo workspace.
          Utility classes and shared UI components work seamlessly across apps.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left mt-4">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition">
            <h2 className="text-base font-semibold mb-1 text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-indigo-500">⚡</span> Next.js 16 + Turbopack
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Blazing fast builds with optimized production bundles.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition">
            <h2 className="text-base font-semibold mb-1 text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-purple-500">🎨</span> Tailwind CSS v4
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Zero-config CSS-first engine with full monorepo package support.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center justify-center mt-2">
          <a
            href="https://turborepo.dev/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 font-semibold text-sm hover:opacity-90 transition shadow-sm"
          >
            Read Turborepo Docs →
          </a>
          <Button
            appName="docs"
            className="rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-3 font-semibold text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition shadow-xs cursor-pointer"
          >
            Shared UI Alert Button
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          Tailwind CSS Docs
        </a>
        <span>•</span>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          Next.js Docs
        </a>
        <span>•</span>
        <span>Edit <code className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">apps/docs/app/page.tsx</code></span>
      </footer>
    </div>
  );
}
