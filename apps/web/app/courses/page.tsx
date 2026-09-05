"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import CourseCard, { CourseItem } from "../../components/CourseCard";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Filter,
  Sparkles,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const ALL_COURSES: CourseItem[] = [
  {
    id: "quiz-ux-opt",
    title: "5 Steps Optimizing User Experience",
    category: "Design",
    type: "Quiz • Certified",
    typeIcon: "quiz",
    tag1: "UI/UX Design",
    tag2: "Urgent",
    badgeCount: "20 Question",
    coverVariant: "quiz-clipboard",
    buttonLabel: "View",
    description: "Learn essential usability evaluations, feedback synthesis, and quantitative heuristic testing.",
  },
  {
    id: "heuristics-10-usability",
    title: "Heuristics: 10 Usability Principles To improve UI Design",
    category: "Design",
    type: "Page",
    typeIcon: "page",
    tag1: "Learning Design",
    tag2: "Not Urgent",
    badgeCount: "12 Chapters",
    coverVariant: "video-chapters",
    buttonLabel: "Continue",
    description: "Deep-dive into Nielsen's usability principles and practical interface interaction guidelines.",
  },
  {
    id: "general-knowledge-methodology",
    title: "General Knowledge & Methodology - Layout & Spacing",
    category: "Design",
    type: "Learning Path",
    typeIcon: "path",
    tag1: "Consistency",
    tag2: "Not Urgent",
    badgeCount: "20 Path",
    coverVariant: "layout-wireframe",
    buttonLabel: "Start",
    description: "Master modern spatial systems, 8pt grid structures, rhythm, and typographic scales.",
  },
  {
    id: "nextjs-fullstack-architecture",
    title: "Full-Stack Next.js 15 & Modern UI Architecture",
    category: "Development",
    type: "Masterclass • Certified",
    typeIcon: "quiz",
    tag1: "Fullstack",
    tag2: "Recommended",
    badgeCount: "24 Lessons",
    coverVariant: "code-architecture",
    buttonLabel: "Continue",
    description: "Master server components, distributed pipelines, Tailwind CSS v4, and scalable monorepo tooling.",
  },
  {
    id: "applied-ai-systems-agents",
    title: "Applied AI Systems & Autonomous Intelligent Agents",
    category: "AI & Data",
    type: "Interactive Lab",
    typeIcon: "lab",
    tag1: "Artificial Intelligence",
    tag2: "Trending",
    badgeCount: "16 Modules",
    coverVariant: "cloud-backend",
    buttonLabel: "Start",
    description: "Build production multi-agent orchestration, tool-calling pipelines, and autonomous workflows.",
  },
  {
    id: "product-metrics-growth",
    title: "Product Analytics, Conversion Metrics & SaaS Growth",
    category: "Business",
    type: "Learning Path",
    typeIcon: "path",
    tag1: "Product Growth",
    tag2: "Not Urgent",
    badgeCount: "18 Units",
    coverVariant: "metrics-growth",
    buttonLabel: "View",
    description: "Analyze user churn cohorts, activation funnels, and design high-impact growth loops.",
  },
];

const CATEGORIES = ["All Courses", "Design", "Development", "AI & Data", "Business"] as const;

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const filteredCourses = ALL_COURSES.filter((course) => {
    const matchesCategory =
      selectedCategory === "All Courses" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tag1.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (course.description && course.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen w-full bg-[#FAF9F5] text-[#18191E] overflow-x-hidden font-sans selection:bg-[#18191E] selection:text-white">
      {/* Sticky Persistent Navbar */}
      <Navbar />

      {/* ========================================================================= */}
      {/* COURSES HERO BANNER                                                       */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#FFF7DF] pt-32 pb-16 sm:pb-20 border-b border-amber-200/50">
        {/* Subtle Decorative Grid */}
        <div
          className="pointer-events-none absolute top-12 right-6 sm:top-16 sm:right-16 grid grid-cols-4 gap-3 opacity-60"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`banner-dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#C7B283]" />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/80 text-xs font-semibold text-[#18191E] mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Interactive Learning Modules</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#18191E] tracking-tight leading-[1.12]">
              Explore All Courses & Learning Tracks
            </h1>

            <p className="mt-4 text-[#6A685F] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Direct access to interactive quizzes, design heuristics, and technical curricula. Jump in anytime.
            </p>
          </div>

          {/* Search & Quick Filter Bar */}
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-[#7A776D] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by topic, skill, or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm text-sm text-[#18191E] placeholder:text-[#7A776D] focus:outline-none focus:ring-2 focus:ring-[#18191E] transition-all"
                />
              </div>

              {/* Status Filter Dropdown */}
              <div className="relative w-full sm:w-48">
                <Filter className="w-4 h-4 text-[#7A776D] absolute left-4 top-1/2 -translate-y-1/2" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full pl-11 pr-8 py-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm text-sm font-medium text-[#18191E] focus:outline-none focus:ring-2 focus:ring-[#18191E] transition-all appearance-none cursor-pointer"
                >
                  <option value="All">All Tracks</option>
                  <option value="Quizzes">Quizzes & Certifications</option>
                  <option value="Chapters">Chapters & Lessons</option>
                  <option value="Paths">Learning Paths</option>
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#18191E] text-white shadow-md shadow-neutral-900/10 scale-105"
                      : "bg-white/80 hover:bg-white text-[#18191E] border border-neutral-200/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COURSES GRID SECTION                                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200/70">
            <span className="text-sm font-semibold text-[#18191E]">
              Showing <span className="font-bold">{filteredCourses.length}</span> learning modules
            </span>
            {(searchQuery || selectedCategory !== "All Courses") && (
              <button
                onClick={() => {
                  setSelectedCategory("All Courses");
                  setSearchQuery("");
                }}
                className="text-xs font-semibold text-rose-600 hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredCourses.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-white border border-neutral-200 max-w-xl mx-auto shadow-sm">
              <BookOpen className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#18191E]">No courses found</h3>
              <p className="text-xs text-[#706E66] mt-1 max-w-sm mx-auto">
                Try searching with different keywords or clearing your category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Courses");
                  setSearchQuery("");
                }}
                className="mt-5 px-5 py-2.5 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER                                                                    */}
      {/* ========================================================================= */}
      <footer className="relative z-10 border-t border-neutral-200/80 bg-white text-[#18191E] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-neutral-200/80">
            <div className="lg:col-span-6 space-y-4">
              <Link href="/" className="inline-flex items-center group focus:outline-none">
                <span className="font-rochester text-3xl sm:text-4xl text-[#18191E] tracking-tight transition-transform duration-300 group-hover:scale-105 select-none">
                  instructor
                </span>
              </Link>
              <p className="text-sm text-[#706E66] max-w-md leading-relaxed font-normal">
                The modern online learning management ecosystem. Empowering instructors, institutions, and global learners to build, deliver, and scale world-class education.
              </p>
              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#706E66]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#18191E]" />
                  <span>support@instructor.io</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#18191E]" />
                  <span>+1 (800) 275-3829</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#18191E]" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center lg:items-end">
              <div className="w-full max-w-md space-y-3">
                <h4 className="text-sm font-bold text-[#18191E]">
                  Subscribe to Academy Insights
                </h4>
                <p className="text-xs text-[#706E66] leading-relaxed">
                  Get the latest course releases, educational engineering updates, and instructor best practices delivered monthly.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for subscribing to Academy Insights!");
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#18191E]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706E66]">
            <div>© {new Date().getFullYear()} Instructor Inc. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <Link href="/courses" className="hover:text-black transition-colors">
                Courses
              </Link>
              <Link href="/#about" className="hover:text-black transition-colors">
                About
              </Link>
              <Link href="/#blog" className="hover:text-black transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
