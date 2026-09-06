"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import {
  Sparkles,
  BookOpen,
  Volume2,
  Layers,
  GraduationCap,
  Globe2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#18191E] selection:bg-[#18191E] selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 pb-24">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-amber-900 text-xs font-semibold mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>About The Platform</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#18191E] tracking-tight leading-tight sm:leading-none">
            Humanized Language Learning for the Modern World.
          </h1>

          <p className="text-sm sm:text-lg text-[#6D6B62] mt-6 leading-relaxed">
            Instructor was built to bridge the gap between abstract grammar rules and natural spoken fluency. We believe learning a language shouldn&apos;t feel like memorizing a telephone book—it should feel like stepping into a vibrant culture with a trusted mentor by your side.
          </p>
        </div>

        {/* Core Mission Card */}
        <section className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-12 shadow-2xs mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#18191E] text-white flex items-center justify-center font-bold">
              <Globe2 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#18191E]">
                Our Mission
              </h2>
              <span className="text-xs text-neutral-400 font-medium">Clarity • Immersion • Autonomy</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#383733] leading-relaxed">
            Most language platforms fall into one of two extremes: gamified apps that teach isolated words without coherent grammar, or dry academic textbooks filled with jargon that leave you terrified to speak out loud.
          </p>

          <p className="text-sm sm:text-base text-[#383733] leading-relaxed">
            <strong>Instructor</strong> takes a third path. We pair comprehensive, CEFR-aligned curricula (from complete A1 beginner through advanced C2 mastery) with clear linguistic explanations, real-time native pronunciation audio, and realistic conversational dialogues you will actually use on the streets of Berlin, Munich, Vienna, or Zurich.
          </p>
        </section>

        {/* The 4 Pillars */}
        <section className="mb-20 space-y-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
              The Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18191E] mt-1 tracking-tight">
              The 4 Pillars of the Instructor Method
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-7 shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-base font-bold text-[#18191E]">
                1. CEFR-Aligned Progression
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6B62] leading-relaxed">
                Every chapter and lesson is systematically mapped to the Common European Framework of Reference. No gaps, no guesswork—you know exactly what skill milestones you are unlocking.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-7 shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 flex items-center justify-center font-bold">
                <Volume2 className="w-5 h-5 text-[#18191E]" />
              </div>
              <h3 className="text-base font-bold text-[#18191E]">
                2. Integrated Native Audio
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6B62] leading-relaxed">
                Reading without hearing creates flawed inner pronunciation habits. Every vocabulary item, example sentence, and dialogue line in Instructor features interactive audio playback at the touch of a button.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-7 shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5 text-[#18191E]" />
              </div>
              <h3 className="text-base font-bold text-[#18191E]">
                3. Real-World Practicality
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6B62] leading-relaxed">
                We prioritize high-frequency survival language first: registering your address at the Bürgeramt, shopping at the supermarket, navigating Deutsche Bahn, and succeeding in job interviews.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-7 shadow-2xs space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-base font-bold text-[#18191E]">
                4. Cross-Platform Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6B62] leading-relaxed">
                Whether you prefer in-depth study sessions on your desktop web browser or quick 10-minute reviews on your mobile device on the train, your learning materials and progress remain harmonized.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Values */}
        <section className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-12 shadow-2xs mb-20 space-y-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
              Our Principles
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#18191E] mt-1 tracking-tight">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#18191E]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Dark Patterns</span>
              </div>
              <p className="text-xs text-[#6D6B62] leading-relaxed">
                No punitive heart counters, no manipulative streak anxiety. We focus purely on deliberate, stress-free competence.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#18191E]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Cultural Context</span>
              </div>
              <p className="text-xs text-[#6D6B62] leading-relaxed">
                Language cannot be separated from culture. Every module explores cultural nuances, etiquette, and social customs.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#18191E]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Accessible Design</span>
              </div>
              <p className="text-xs text-[#6D6B62] leading-relaxed">
                High-contrast typography, distraction-free reading modes, and responsive interfaces engineered for focused learning.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action Banner */}
        <div className="rounded-3xl bg-[#18191E] text-white p-8 sm:p-14 text-center space-y-6 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Ready to Begin Your German Mastery?
          </h2>
          <p className="text-xs sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Explore our comprehensive course curriculum or read in-depth linguistic articles in our knowledge journal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/courses"
              className="px-6 py-3.5 rounded-2xl bg-white text-[#18191E] text-xs sm:text-sm font-bold hover:bg-neutral-100 transition-all hover:scale-105 shadow-sm"
            >
              Explore Courses
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 bg-white text-[#18191E] py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-rochester text-3xl text-[#18191E] select-none">
            instructor
          </Link>
          <div className="flex items-center gap-6 text-xs text-[#7A776D]">
            <Link href="/courses" className="hover:text-black transition-colors">Courses</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-black font-semibold text-black transition-colors">About</Link>
          </div>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Instructor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
