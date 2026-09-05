"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import {
  Search,
  BookOpen,
  ArrowRight,
  Filter,
  Sparkles,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: "Development" | "AI & Data" | "Design" | "Business";
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
}

const COURSES_DATA: Course[] = [
  {
    id: "nextjs-fullstack",
    title: "Full-Stack Next.js & Modern UI Architecture",
    category: "Development",
    level: "Advanced",
    description:
      "Master production Next.js 15, server components, Tailwind CSS v4, and distributed monorepo pipelines with Turbo.",
  },
  {
    id: "applied-ai-agents",
    title: "Applied AI Systems & Autonomous Agents",
    category: "AI & Data",
    level: "Intermediate",
    description:
      "Build production agentic workflows, memory pipelines, tool-calling frameworks, and autonomous multi-agent orchestration.",
  },
  {
    id: "design-systems-glassmorphism",
    title: "Modern Design Systems & Glassmorphism UI",
    category: "Design",
    level: "Beginner",
    description:
      "Craft award-winning digital design systems, micro-interactions, responsive tokens, and aesthetic glassmorphism aesthetics.",
  },
  {
    id: "distributed-backend-go",
    title: "High-Performance Backend Engineering in Go",
    category: "Development",
    level: "Advanced",
    description:
      "Build ultra low-latency microservices, gRPC channels, concurrency patterns, and containerized cloud deployments.",
  },
  {
    id: "mlops-pipeline-production",
    title: "MLOps: Deploying & Scaling Models at Scale",
    category: "AI & Data",
    level: "Advanced",
    description:
      "Streamline ML lifecycle management, experiment tracking, automated model retraining, and Kubernetes model inference.",
  },
  {
    id: "product-strategy-growth",
    title: "Product Strategy, Metrics & SaaS Growth",
    category: "Business",
    level: "Intermediate",
    description:
      "Design growth loops, execute product-led onboarding funnels, and analyze churn cohorts for high-scale subscription platforms.",
  },
];

const CATEGORIES = ["All Courses", "Development", "AI & Data", "Design", "Business"] as const;

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory =
      selectedCategory === "All Courses" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;

    return matchesCategory && matchesSearch && matchesLevel;
  });

  return (
    <div className="relative min-h-screen w-full bg-white text-[#18191E] overflow-x-hidden font-sans selection:bg-[#18191E] selection:text-white">
      {/* Sticky Persistent Navbar */}
      <Navbar />

      {/* ========================================================================= */}
      {/* COURSES HERO BANNER                                                       */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#FFF7DF] pt-32 pb-20 sm:pb-24 border-b border-amber-200/50">
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
              <span>Open Academy Curricula</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#18191E] tracking-tight leading-[1.12]">
              Expand your expertise with curated courses.
            </h1>

            <p className="mt-5 text-[#6A685F] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Accelerate your skills with direct access to comprehensive learning paths and project curricula.
            </p>
          </div>

          {/* Search & Quick Filter Bar */}
          <div className="mt-10 max-w-4xl">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-[#7A776D] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search courses or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-neutral-200 shadow-sm text-sm text-[#18191E] placeholder:text-[#7A776D] focus:outline-none focus:ring-2 focus:ring-[#18191E] transition-all"
                />
              </div>

              {/* Level Dropdown */}
              <div className="relative w-full sm:w-48">
                <Filter className="w-4 h-4 text-[#7A776D] absolute left-4 top-1/2 -translate-y-1/2" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full pl-11 pr-8 py-4 rounded-2xl bg-white border border-neutral-200 shadow-sm text-sm font-medium text-[#18191E] focus:outline-none focus:ring-2 focus:ring-[#18191E] transition-all appearance-none cursor-pointer"
                >
                  <option value="All">All Skill Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
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
      {/* COURSES LIST SECTION                                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
            <span className="text-sm font-semibold text-[#18191E]">
              Showing <span className="font-bold">{filteredCourses.length}</span> courses
            </span>
            {(searchQuery || selectedCategory !== "All Courses" || selectedLevel !== "All") && (
              <button
                onClick={() => {
                  setSelectedCategory("All Courses");
                  setSearchQuery("");
                  setSelectedLevel("All");
                }}
                className="text-xs font-semibold text-rose-600 hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredCourses.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-neutral-50 border border-neutral-200 max-w-xl mx-auto">
              <BookOpen className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#18191E]">No courses found</h3>
              <p className="text-xs text-[#706E66] mt-1 max-w-sm mx-auto">
                Try searching with different keywords or clearing your category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Courses");
                  setSearchQuery("");
                  setSelectedLevel("All");
                }}
                className="mt-5 px-5 py-2.5 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group rounded-3xl bg-neutral-50/70 hover:bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between p-7"
                >
                  <div>
                    {/* Category & Level Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-xl bg-amber-100/90 text-amber-900 text-xs font-bold tracking-tight">
                        {course.category}
                      </span>
                      <span className="text-xs font-semibold text-[#7A776D]">
                        {course.level}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#18191E] tracking-tight group-hover:text-black leading-snug">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#706E66] mt-3 leading-relaxed font-normal">
                      {course.description}
                    </p>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#7A776D]">
                      Open curriculum
                    </span>
                    <button className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18191E] hover:bg-[#2B2D37] text-white text-xs font-bold shadow-sm active:scale-95 transition-all">
                      <span>Start Learning</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
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
