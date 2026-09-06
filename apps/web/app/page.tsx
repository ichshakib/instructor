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
      {/* 1. TOP HERO SECTION (WARM CREAM PALETTE: #FFF7DF)                        */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#FFF7DF] text-[#18191E] overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* Top Left Organic Dark Accent (Background layer - never hides content) */}
        <div
          className="pointer-events-none select-none absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-[#18191E] rounded-br-[50px] sm:rounded-br-[75px] z-0 transition-all duration-300 shadow-sm"
          aria-hidden="true"
        />

        {/* Top Right Dot Grid on Cream Canvas */}
        <div
          className="pointer-events-none absolute top-12 right-6 sm:top-16 sm:right-14 md:right-24 z-0 grid grid-cols-4 gap-2.5 sm:gap-3.5 opacity-70"
          aria-hidden="true"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`dot-top-${i}`}
              className="w-1.5 h-1.5 rounded-full bg-[#C7B283]"
            />
          ))}
        </div>

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

              {/* CTA & Social Proof Avatars Row */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
                {/* Primary Pill Button - Redirects to /courses */}
                <Link
                  href="/courses"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#18191E] rounded-2xl shadow-lg shadow-neutral-900/15 hover:bg-[#2A2B33] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Our Courses</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>

                {/* Overlapping Avatars & 29.5k+ Counter */}
                <div className="flex items-center">
                  <div className="flex -space-x-3 overflow-hidden p-0.5">
                    {/* Avatar 1 */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#FFF7DF] bg-amber-200/90 shadow-sm flex items-center justify-center text-xs font-bold text-amber-900 overflow-hidden relative"
                      title="Sarah M. - Active Learner"
                    >
                      <span className="select-none">SM</span>
                    </div>
                    {/* Avatar 2 */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#FFF7DF] bg-sky-200/90 shadow-sm flex items-center justify-center text-xs font-bold text-sky-900 overflow-hidden relative"
                      title="David K. - Fullstack Student"
                    >
                      <span className="select-none">DK</span>
                    </div>
                    {/* Avatar 3 */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#FFF7DF] bg-rose-200/90 shadow-sm flex items-center justify-center text-xs font-bold text-rose-900 overflow-hidden relative"
                      title="Elena R. - UI/UX Designer"
                    >
                      <span className="select-none">ER</span>
                    </div>
                    {/* Avatar 4 */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#FFF7DF] bg-emerald-200/90 shadow-sm flex items-center justify-center text-xs font-bold text-emerald-900 overflow-hidden relative"
                      title="Liam T. - AI Certified"
                    >
                      <span className="select-none">LT</span>
                    </div>
                  </div>

                  <div className="ml-3.5 flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-[#18191E] tracking-tight leading-none">
                      29.5k+
                    </span>
                    <span className="text-[11px] text-[#78756B] font-medium tracking-wide">
                      Enrolled Students
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- RIGHT COLUMN: HERO VISUAL & WIDGETS ----------------- */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
              {/* 1. ARTISTIC WATERCOLOR / BRUSH STROKE BACKDROP */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 600 600"
                  className="w-[120%] h-[120%] max-w-[650px] opacity-80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Organic brush splatter layers */}
                  <path
                    d="M480 260C515 340 460 440 370 480C280 520 160 490 110 410C60 330 80 210 150 140C220 70 330 90 410 130C450 150 460 210 480 260Z"
                    fill="#EFE1BB"
                    fillOpacity="0.75"
                  />
                  <path
                    d="M440 180C490 240 520 350 450 420C380 490 270 470 190 430C110 390 90 290 120 210C150 130 250 100 340 110C390 115 415 150 440 180Z"
                    fill="#F5E8C7"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M320 80C390 90 460 140 470 210C480 280 430 360 370 410C310 460 210 460 150 400C90 340 100 240 140 170C180 100 250 70 320 80Z"
                    fill="#E8D9B0"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>

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
      {/* 2. FLOATING STATS BANNER (STRADDLING CREAM & WHITE BACKGROUNDS)           */}
      {/* ========================================================================= */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 -mt-14 sm:-mt-16">
        <div className="w-full rounded-3xl bg-gradient-to-b from-white/55 via-white/35 to-white/45 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 shadow-[0_20px_45px_-15px_rgba(24,25,30,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] px-6 sm:px-12 py-7 sm:py-8 transition-all duration-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-300/40">
            {/* Stat 1: Happy Learner */}
            <div className="flex items-center gap-4 pt-4 first:pt-0 lg:pt-0 lg:px-4 first:pl-0">
              <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#18191E] shrink-0 shadow-sm shadow-black/[0.04]">
                <Smile className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#18191E] tracking-tight">
                  21k+
                </div>
                <div className="text-xs sm:text-sm text-[#706E66] font-medium mt-0.5">
                  Happy Learner
                </div>
              </div>
            </div>

            {/* Stat 2: Winning Awards */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
              <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#18191E] shrink-0 shadow-sm shadow-black/[0.04]">
                <Award className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#18191E] tracking-tight">
                  72+
                </div>
                <div className="text-xs sm:text-sm text-[#706E66] font-medium mt-0.5">
                  Winning Awards
                </div>
              </div>
            </div>

            {/* Stat 3: Online Courses */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
              <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#18191E] shrink-0 shadow-sm shadow-black/[0.04]">
                <Video className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#18191E] tracking-tight">
                  218+
                </div>
                <div className="text-xs sm:text-sm text-[#706E66] font-medium mt-0.5">
                  Online Courses
                </div>
              </div>
            </div>

            {/* Stat 4: Live Support */}
            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:px-4">
              <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#18191E] shrink-0 shadow-sm shadow-black/[0.04]">
                <Headphones className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#18191E] tracking-tight">
                  27/7
                </div>
                <div className="text-xs sm:text-sm text-[#706E66] font-medium mt-0.5">
                  Live Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. WHITE BOTTOM SECTION (PURE WHITE: #FFFFFF)                            */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white text-[#18191E] pt-14 sm:pt-18 pb-28 sm:pb-36 overflow-hidden">
        {/* Mid-Left Dot Grid placed on the white background beside Trusted By */}
        <div
          className="pointer-events-none absolute top-12 left-6 sm:left-10 md:left-16 z-0 grid grid-cols-5 gap-2.5 sm:gap-3.5 opacity-65"
          aria-hidden="true"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`dot-mid-${i}`}
              className="w-1.5 h-1.5 rounded-full bg-[#C7B283]"
            />
          ))}
        </div>

        {/* Bottom Right Organic Dark Accent (Background layer - never hides content) */}
        <div
          className="pointer-events-none select-none absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#18191E] rounded-tl-[60px] sm:rounded-tl-[90px] z-0 transition-all duration-300 shadow-sm"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* "TRUSTED BY" SECTION */}
          <div className="pt-4 pb-14">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-6 mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18191E] tracking-tight">
                Trusted By
              </h2>
              <p className="text-xs sm:text-sm text-[#7A776D] max-w-md font-normal leading-relaxed">
                Empowering leading universities, high-growth startups, and over 29,000+ ambitious learners worldwide.
              </p>
            </div>

            {/* Partner Brands Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
              {/* Logo 1: Power XR2 Module */}
              <div className="flex items-center gap-2.5 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-[#18191E] text-white font-extrabold text-sm flex items-center justify-center tracking-tighter">
                  QC
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-widest leading-none text-[#18191E]">
                    POWER
                  </span>
                  <span className="text-xs font-black tracking-tight text-[#18191E]">
                    XR2
                  </span>
                  <span className="text-[8px] font-bold tracking-widest text-[#6E6B62] leading-none">
                    MODULE
                  </span>
                </div>
              </div>

              {/* Logo 2: Logo Ipsum Plus */}
              <div className="flex items-center gap-2.5 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-[#18191E]" />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#18191E]" />
                  <div className="absolute top-1 right-0 w-2.5 h-2.5 bg-[#18191E]" />
                  <div className="absolute bottom-1 left-0 w-2.5 h-2.5 bg-[#18191E]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold text-[#18191E]">Logo</span>
                  <span className="text-xs font-bold text-[#18191E]">Ipsum</span>
                  <span className="text-[9px] font-medium text-[#7A776D]">Plus</span>
                </div>
              </div>

              {/* Logo 3: Ultra Prestigious Winner */}
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <svg
                  viewBox="0 0 120 70"
                  className="w-28 h-14 text-[#18191E] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22,35 C20,28 15,22 10,20 C12,25 15,30 18,34 C12,38 8,45 10,50 C14,46 18,41 22,35 Z" />
                  <path d="M28,24 C27,18 24,12 20,8 C21,14 24,19 26,23 Z" />
                  <path d="M28,46 C27,52 23,58 18,62 C20,56 24,51 27,45 Z" />
                  <path d="M98,35 C100,28 105,22 110,20 C108,25 105,30 102,34 C108,38 112,45 110,50 C106,46 102,41 98,35 Z" />
                  <path d="M92,24 C93,18 96,12 100,8 C99,14 96,19 94,23 Z" />
                  <path d="M92,46 C93,52 97,58 102,62 C100,56 96,51 93,45 Z" />
                  <text x="44" y="14" fontSize="8" letterSpacing="2">
                    ★★★★★
                  </text>
                  <text x="40" y="26" fontSize="9" fontWeight="900">
                    ULTRA
                  </text>
                  <text x="31" y="36" fontSize="6.5" fontWeight="700">
                    PRESTIGIOUS
                  </text>
                  <text x="33" y="44" fontSize="5" fontWeight="500">
                    BEST OF THE WORLD
                  </text>
                  <text x="40" y="54" fontSize="7" fontWeight="800">
                    WINNER
                  </text>
                </svg>
              </div>

              {/* Logo 4: Ultimate Winner */}
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <svg
                  viewBox="0 0 120 70"
                  className="w-28 h-14 text-[#18191E] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20,35 C15,25 8,28 12,38 C16,34 18,34 20,35 Z" />
                  <path d="M22,22 C18,14 12,18 16,25 C19,23 21,22 22,22 Z" />
                  <path d="M22,48 C18,56 12,52 16,45 C19,47 21,48 22,48 Z" />
                  <path d="M100,35 C105,25 112,28 108,38 C104,34 102,34 100,35 Z" />
                  <path d="M98,22 C102,14 108,18 104,25 C101,23 99,22 98,22 Z" />
                  <path d="M98,48 C102,56 108,52 104,45 C101,47 99,48 98,48 Z" />
                  <text x="44" y="15" fontSize="7" letterSpacing="2">
                    ★★★★★
                  </text>
                  <text x="35" y="27" fontSize="8" fontWeight="900">
                    ULTIMATE
                  </text>
                  <text x="39" y="37" fontSize="7.5" fontWeight="800">
                    WINNER
                  </text>
                  <text x="37" y="45" fontSize="5" fontWeight="600">
                    ULTRA BEST
                  </text>
                  <text x="33" y="52" fontSize="4.5" fontWeight="500">
                    PERFORMANCE
                  </text>
                  <text x="44" y="60" fontSize="6" letterSpacing="2">
                    ★★★★★
                  </text>
                </svg>
              </div>

              {/* Logo 5: LOGOIPSUM (Wheat Stem) */}
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <svg
                  viewBox="0 0 24 32"
                  className="w-6 h-8 text-[#18191E] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2 C10,5 9,9 12,12 C15,9 14,5 12,2 Z" />
                  <path d="M11,10 C8,12 6,15 9,18 C11,16 11,13 11,10 Z" />
                  <path d="M13,10 C16,12 18,15 15,18 C13,16 13,13 13,10 Z" />
                  <path d="M11,17 C8,19 6,22 9,25 C11,23 11,20 11,17 Z" />
                  <path d="M13,17 C16,19 18,22 15,25 C13,23 13,20 13,17 Z" />
                  <line
                    x1="12"
                    y1="10"
                    x2="12"
                    y2="30"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-sm font-black tracking-wider text-[#18191E]">
                  LOGOIPSUM
                </span>
              </div>
            </div>
          </div>

          {/* COURSE CATALOG SECTION */}
          <div id="courses-section" className="pt-10 pb-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-[#18191E] mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                Explore Academy Programs
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18191E] tracking-tight">
                Featured LMS Course Catalog
              </h2>
              <p className="mt-3 text-[#6A685F] text-sm leading-relaxed">
                Accelerate your knowledge with peer-reviewed modules created by industry experts.
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
                  <Link href="/blog" className="hover:text-[#18191E] transition-colors">
                    Articles & Blog
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
