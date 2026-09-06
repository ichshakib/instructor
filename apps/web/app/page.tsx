"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CourseCard, { CourseItem } from "../components/CourseCard";
import { fetchCourses } from "../lib/api";
import {
  Play,
  Smile,
  Award,
  Video,
  Headphones,
  X,
  Upload,
  BookOpen,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

export default function InstructorLanding() {
  // State for video modal preview
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  // Optional live preview image uploaded by the user
  const [customHeroImg, setCustomHeroImg] = useState<string | null>(null);

  // Dynamic state for featured courses fetched from API
  const [featuredCourses, setFeaturedCourses] = useState<CourseItem[]>([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState<boolean>(true);
  const [coursesError, setCoursesError] = useState<string | null>(null);

  const loadFeaturedCourses = useCallback(async () => {
    setIsLoadingCourses(true);
    setCoursesError(null);
    try {
      const courses = await fetchCourses({ featured: true });
      if (courses.length > 0) {
        setFeaturedCourses(courses);
      } else {
        const all = await fetchCourses();
        setFeaturedCourses(all.slice(0, 3));
      }
    } catch (err: unknown) {
      console.error("Failed to load featured courses from API:", err);
      setCoursesError("Could not load featured courses from the API.");
    } finally {
      setIsLoadingCourses(false);
    }
  }, []);

  useEffect(() => {
    loadFeaturedCourses();
  }, [loadFeaturedCourses]);

  return (
    <div className="relative min-h-screen w-full bg-white text-[#18191E] overflow-x-hidden font-sans selection:bg-[#18191E] selection:text-white">
      {/* Sticky Persistent Header */}
      <Navbar />

      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION (CLEAN & MINIMAL WHITE)                               */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white text-[#18191E] overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-24 border-b border-neutral-100">
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-4 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* ----------------- LEFT COLUMN: COPY & CTA ----------------- */}
            <div className="lg:col-span-6 flex flex-col items-start z-10">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#18191E] tracking-tight leading-[1.14]">
                Learn without limits.
                <br />
                Master skills that
                <br />
                <span className="inline-block">shape your future.</span>
              </h1>

              {/* Description Subtext */}
              <p className="mt-6 sm:mt-7 text-[#6A685F] text-sm sm:text-base leading-relaxed max-w-md font-normal">
                Discover interactive, expert-led courses designed to help you build in-demand skills, launch real projects, and advance your career at your own pace.
              </p>

              {/* CTA & Social Proof Row */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
                {/* Primary Pill Button - Redirects to /courses */}
                <Link
                  href="/courses"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-[#18191E] rounded-xl shadow-xs hover:bg-[#2A2B33] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Our Courses</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>

                {/* Overlapping Minimal Avatars & Counter */}
                <div className="flex items-center">
                  <div className="flex -space-x-2.5 overflow-hidden p-0.5">
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-[11px] font-bold text-neutral-700 select-none">
                      SM
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-neutral-300 flex items-center justify-center text-[11px] font-bold text-neutral-800 select-none">
                      DK
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-[11px] font-bold text-neutral-700 select-none">
                      ER
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-neutral-800 flex items-center justify-center text-[11px] font-bold text-white select-none">
                      LT
                    </div>
                  </div>

                  <div className="ml-3 flex flex-col justify-center">
                    <span className="text-lg sm:text-xl font-bold text-[#18191E] tracking-tight leading-none">
                      29.5k+
                    </span>
                    <span className="text-[11px] text-neutral-500 font-medium tracking-wide">
                      Enrolled Students
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- RIGHT COLUMN: HERO VISUAL ----------------- */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]">
              {/* MAIN HERO STUDENT IMAGE CONTAINER */}
              <div className="relative z-10 w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] h-[460px] sm:h-[520px] lg:h-[560px] flex items-center justify-center">
                {customHeroImg ? (
                  /* User previewed live uploaded image */
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={customHeroImg}
                      alt="Custom Hero Student"
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105"
                    />
                    <button
                      onClick={() => setCustomHeroImg(null)}
                      className="absolute top-2 right-2 bg-[#18191E]/80 hover:bg-[#18191E] text-white rounded-full p-1.5 shadow-md text-xs transition-colors"
                      title="Reset to default image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Student Graduate Image */
                  <div className="relative w-full h-full flex items-center justify-center group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/hero-student.png"
                      alt="Online LMS Student Graduate"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = document.getElementById("hero-fallback-placeholder");
                        if (fallback) fallback.style.display = "flex";
                      }}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] z-10 transition-transform duration-500 ease-out hover:scale-105 select-none"
                    />

                    {/* Fallback helper (only displays if image fails to load) */}
                    <div
                      id="hero-fallback-placeholder"
                      style={{ display: "none" }}
                      className="flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl border-2 border-dashed border-[#CBB78B]/70 bg-white/40 backdrop-blur-sm shadow-sm max-w-sm hover:border-[#18191E]/50 transition-colors"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#18191E]/5 flex items-center justify-center mb-3 text-[#18191E]/70">
                        <Upload className="w-8 h-8 opacity-70" />
                      </div>
                      <h3 className="text-sm font-bold text-[#18191E]">Student Photo</h3>
                      <p className="text-xs text-[#78756B] mt-1">
                        Place <code>hero-student.png</code> in <code>public/images/</code>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FLOATING STATS BANNER (MINIMAL, CLEAN)                                 */}
      {/* ========================================================================= */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12">
        <div className="w-full rounded-2xl bg-white border border-neutral-200/80 shadow-sm px-6 sm:px-10 py-6 sm:py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">
            {/* Stat 1: Happy Learner */}
            <div className="flex items-center gap-3.5 pt-4 first:pt-0 lg:pt-0 lg:px-4 first:pl-0">
              <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#18191E] shrink-0">
                <Smile className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#18191E] tracking-tight">
                  21k+
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Happy Learners
                </div>
              </div>
            </div>

            {/* Stat 2: Winning Awards */}
            <div className="flex items-center gap-3.5 pt-4 lg:pt-0 lg:px-4">
              <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#18191E] shrink-0">
                <Award className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#18191E] tracking-tight">
                  72+
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Expert Mentors
                </div>
              </div>
            </div>

            {/* Stat 3: Online Courses */}
            <div className="flex items-center gap-3.5 pt-4 lg:pt-0 lg:px-4">
              <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#18191E] shrink-0">
                <Video className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#18191E] tracking-tight">
                  200+
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Course Modules
                </div>
              </div>
            </div>

            {/* Stat 4: Live Support */}
            <div className="flex items-center gap-3.5 pt-4 lg:pt-0 lg:px-4">
              <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#18191E] shrink-0">
                <Headphones className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#18191E] tracking-tight">
                  24/7
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Live Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. WHITE BOTTOM SECTION (MINIMAL, CLEAN)                                  */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white text-[#18191E] pt-14 sm:pt-16 pb-20 sm:pb-28">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* MINIMAL "TRUSTED BY" BAR */}
          <div className="pt-2 pb-12 border-b border-neutral-100">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
              Trusted by ambitious learners from top teams & universities
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-400">
              <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-500 hover:text-[#18191E] transition-colors select-none">
                STANFORD
              </span>
              <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-500 hover:text-[#18191E] transition-colors select-none">
                MIT
              </span>
              <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-500 hover:text-[#18191E] transition-colors select-none">
                GOOGLE
              </span>
              <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-500 hover:text-[#18191E] transition-colors select-none">
                MICROSOFT
              </span>
              <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-500 hover:text-[#18191E] transition-colors select-none">
                AMAZON
              </span>
            </div>
          </div>

          {/* COURSE CATALOG SECTION */}
          <div id="courses-section" className="pt-12 pb-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-700 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-neutral-600" />
                Curated Learning Paths
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18191E] tracking-tight">
                Featured Courses
              </h2>
              <p className="mt-3 text-neutral-500 text-sm leading-relaxed">
                Accelerate your knowledge with structured, interactive courses built by industry experts.
              </p>
            </div>

            {/* Dynamic Featured Courses Grid */}
            {isLoadingCourses ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={`home-skeleton-${i}`}
                    className="rounded-2xl bg-white border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between overflow-hidden animate-pulse shadow-sm"
                  >
                    <div className="w-full h-32 sm:h-36 bg-neutral-200/70 rounded-xl mb-4" />
                    <div className="space-y-3">
                      <div className="w-24 h-3 bg-neutral-200/80 rounded" />
                      <div className="w-3/4 h-5 bg-neutral-200/90 rounded" />
                      <div className="w-full h-3 bg-neutral-200/60 rounded" />
                      <div className="flex gap-2 pt-1">
                        <div className="w-16 h-4 bg-neutral-200/70 rounded-full" />
                        <div className="w-16 h-4 bg-neutral-200/70 rounded-full" />
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div className="w-20 h-3 bg-neutral-200/70 rounded" />
                      <div className="w-14 h-7 bg-neutral-200/80 rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            ) : coursesError ? (
              <div className="py-12 text-center rounded-3xl bg-neutral-50 border border-neutral-200 max-w-lg mx-auto p-6">
                <AlertCircle className="w-10 h-10 text-rose-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-[#18191E]">Unable to Load Featured Courses</h3>
                <p className="text-xs text-[#706E66] mt-1.5 leading-relaxed">
                  {coursesError}
                </p>
                <button
                  onClick={loadFeaturedCourses}
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retry</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
                {featuredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}

            {/* View Full Directory Link */}
            <div className="mt-12 text-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#18191E] hover:bg-[#2B2D37] text-white text-sm font-semibold shadow-md shadow-neutral-900/10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Browse Full Course Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DETAILED & ORGANIZED FOOTER (WHITE BACKGROUND)                         */}
      {/* ========================================================================= */}
      <footer className="relative z-10 border-t border-neutral-200/80 bg-white text-[#18191E] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Top Row: Brand & Newsletter Subscription */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-neutral-200/80">
            {/* Brand Information */}
            <div className="lg:col-span-6 space-y-4">
              <Link href="/" className="inline-flex items-center group focus:outline-none">
                <span className="font-rochester text-3xl sm:text-4xl text-[#18191E] tracking-tight transition-transform duration-300 group-hover:scale-105 select-none">
                  instructor
                </span>
              </Link>
              <p className="text-sm text-[#706E66] max-w-md leading-relaxed font-normal">
                The modern online learning management ecosystem. Empowering instructors, institutions, and global learners to build, deliver, and scale world-class education.
              </p>
              {/* Contact Information */}
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

            {/* Newsletter Subscription */}
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
                    alert("Thank you for subscribing to Instructor updates!");
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18191E] bg-neutral-50/50"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-[#2A2B33] transition-colors shrink-0 shadow-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Middle Row: 4 Organized Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-12 border-b border-neutral-200/80">
            {/* Column 1: Featured Programs */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191E] mb-4">
                Programs & Courses
              </h4>
              <ul className="space-y-2.5 text-xs text-[#706E66]">
                <li>
                  <Link href="/courses" className="hover:text-[#18191E] transition-colors">
                    Full-Stack Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#18191E] transition-colors">
                    Artificial Intelligence & ML
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#18191E] transition-colors">
                    Cloud & Systems Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#18191E] transition-colors">
                    Modern UI/UX Design Systems
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#18191E] transition-colors">
                    Cybersecurity Fundamentals
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#18191E] transition-colors font-medium inline-flex items-center gap-1 text-[#18191E] pt-1">
                    <span>View All 200+ Courses</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Platform Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191E] mb-4">
                LMS Platform
              </h4>
              <ul className="space-y-2.5 text-xs text-[#706E66]">
                <li>
                  <Link href="#platform" className="hover:text-[#18191E] transition-colors">
                    Curriculum Builder Studio
                  </Link>
                </li>
                <li>
                  <Link href="#platform" className="hover:text-[#18191E] transition-colors">
                    Interactive Video & Quizzes
                  </Link>
                </li>
                <li>
                  <Link href="#platform" className="hover:text-[#18191E] transition-colors">
                    Student Analytics & Grades
                  </Link>
                </li>
                <li>
                  <Link href="#platform" className="hover:text-[#18191E] transition-colors">
                    Verified Digital Certificates
                  </Link>
                </li>
                <li>
                  <Link href="#platform" className="hover:text-[#18191E] transition-colors">
                    Enterprise LMS Cloud
                  </Link>
                </li>
                <li>
                  <Link href="#platform" className="hover:text-[#18191E] transition-colors">
                    Custom Domain Branding
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources & Support */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191E] mb-4">
                Resources & Help
              </h4>
              <ul className="space-y-2.5 text-xs text-[#706E66]">
                <li>
                  <Link href="/blogs" className="hover:text-[#18191E] transition-colors">
                    Articles & Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#docs" className="hover:text-[#18191E] transition-colors">
                    Documentation & Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#community" className="hover:text-[#18191E] transition-colors">
                    Community Forums
                  </Link>
                </li>
                <li>
                  <Link href="#api" className="hover:text-[#18191E] transition-colors">
                    Developer API & SDKs
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="hover:text-[#18191E] transition-colors">
                    24/7 Support Desk
                  </Link>
                </li>
                <li>
                  <Link href="#status" className="hover:text-[#18191E] transition-colors inline-flex items-center gap-1.5 pt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Systems Operational</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Company & Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191E] mb-4">
                Company & Trust
              </h4>
              <ul className="space-y-2.5 text-xs text-[#706E66]">
                <li>
                  <Link href="/about" className="hover:text-[#18191E] transition-colors">
                    About Instructor
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="hover:text-[#18191E] transition-colors inline-flex items-center gap-1.5">
                    <span>Careers</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Hiring
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="hover:text-[#18191E] transition-colors">
                    Privacy Policy & GDPR
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="hover:text-[#18191E] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="hover:text-[#18191E] transition-colors">
                    Security & Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7A776D]">
            <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
              <span className="font-semibold text-[#18191E]">Instructor</span>
              <span>•</span>
              <span>© {new Date().getFullYear()} Instructor Inc. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px]">
              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium border border-emerald-200/50">
                <ShieldCheck className="w-3 h-3" />
                SOC-2 Type II Certified
              </span>
              <span className="hover:text-[#18191E] transition-colors cursor-pointer">
                ISO 27001
              </span>
              <span className="hover:text-[#18191E] transition-colors cursor-pointer">
                GDPR Ready
              </span>
              <span className="hover:text-[#18191E] transition-colors cursor-pointer">
                Cookie Preferences
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE VIDEO PREVIEW MODAL                                        */}
      {/* ========================================================================= */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#18191E] text-white rounded-3xl p-6 shadow-2xl border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-amber-400 fill-amber-400" />
                <h3 className="text-base font-bold">Instructor Interactive Demo</h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Mock Player */}
            <div className="mt-4 aspect-video rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="w-16 h-16 rounded-full bg-amber-400/90 text-[#18191E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <span className="text-xs text-neutral-400 mt-3 font-medium">
                Click to play curriculum trailer
              </span>

              {/* Progress Bar Mock */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-neutral-800">
                <div className="h-full w-1/3 bg-amber-400" />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
              <span>Duration: 2 mins 45 secs</span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-white text-[#18191E] font-semibold hover:bg-neutral-200 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
