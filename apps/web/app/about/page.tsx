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
    <div className="min-h-screen flex flex-col bg-white text-[#18191E] selection:bg-[#18191E] selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 pb-24">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#18191E] tracking-tight leading-tight sm:leading-none">
            Deep Learning for the Modern World.
          </h1>

          <p className="text-sm sm:text-lg text-[#6D6B62] mt-6 leading-relaxed">
            Instructor was built to bridge the gap between theoretical knowledge and practical mastery. We believe learning shouldn&apos;t feel like memorizing abstract rules—it should empower you to build real systems, speak fluently, and excel in your craft.
          </p>
        </div>

        {/* Core Mission Card */}
        <section className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 shadow-xs mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#18191E] text-white flex items-center justify-center font-bold">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#18191E]">
                Our Mission
              </h2>
              <span className="text-xs text-neutral-400 font-medium">Clarity • Mastery • Autonomy</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#383733] leading-relaxed">
            Most modern learning platforms fall into one of two extremes: superficial gamified apps that focus on gimmicky engagement, or dense academic textbooks with no practical implementation guidance.
          </p>

          <p className="text-sm sm:text-base text-[#383733] leading-relaxed">
            <strong>Instructor</strong> takes a focused path. We combine rigorous, comprehensive curricula with clear architectural explanations, interactive quizzes, and real-world projects that prepare you for production environments.
          </p>
        </section>

        {/* The 4 Pillars */}
        <section className="mb-20 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18191E] tracking-tight">
              The 4 Pillars of the Instructor Method
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-900 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5 text-neutral-800" />
              </div>
              <h3 className="text-base font-bold text-[#18191E]">
                1. Structured Progression
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6B62] leading-relaxed">
                Every course is systematically broken down into coherent chapters and focused lessons. No gaps and no guesswork—you know exactly what skill milestones you are unlocking.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-900 flex items-center justify-center font-bold">
                <Volume2 className="w-5 h-5 text-neutral-800" />
              </div>
              <h3 className="text-base font-bold text-[#18191E]">
                2. Real-World Audio & Feedback
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6B62] leading-relaxed">
                Multi-sensory learning accelerates retention. From native audio pronunciation to interactive self-grading quizzes, you receive instant verification on your understanding.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-900 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5 text-neutral-800" />
              </div>
              <h3 className="text-base font-bold text-[#18191E]">
                3. Practical Industry Utility
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6B62] leading-relaxed">
                We prioritize high-frequency engineering patterns and practical language skills first: real data structures, production architectures, and scenarios you will actually encounter.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-900 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 text-neutral-800" />
              </div>
              <h3 className="text-base font-bold text-[#18191E]">
                4. Distraction-Free Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6B62] leading-relaxed">
                Clean, minimal, high-contrast interfaces designed for deep focus. No flashing notifications or artificial streak pressure—just uninterrupted learning.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Values */}
        <section className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 shadow-xs mb-20 space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#18191E] tracking-tight">
              Our Core Principles
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
              href="/blogs"
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
            <Link href="/blogs" className="hover:text-black transition-colors">Blogs</Link>
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
