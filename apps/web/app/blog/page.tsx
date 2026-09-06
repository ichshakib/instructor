"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { fetchBlogs, BlogPost } from "../../lib/api";
import { Search, BookOpen, Clock, Calendar, ArrowRight, Tag, Sparkles } from "lucide-react";

const CATEGORIES = [
  "All",
  "Grammar",
  "Vocabulary",
  "Exam Prep",
  "German Life & Culture",
  "Study Tips",
  "Career",
] as const;

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setIsLoading(true);
        const data = await fetchBlogs();
        if (isMounted) {
          setBlogs(data);
        }
      } catch (err) {
        console.error("Failed to load blogs:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        blog.category.toLowerCase() === selectedCategory.toLowerCase();

      const term = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !term ||
        blog.title.toLowerCase().includes(term) ||
        blog.excerpt.toLowerCase().includes(term) ||
        blog.tags.some((t) => t.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#18191E] selection:bg-[#18191E] selection:text-white">
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 pb-20">
        {/* Header Section: Minimal & Clean */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-amber-900 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Instructor Journal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#18191E] tracking-tight leading-tight">
            Articles, Guides & Cultural Insights
          </h1>

          <p className="text-[#6D6B62] text-sm sm:text-base mt-3 leading-relaxed">
            Practical linguistic breakdowns, CEFR exam strategies, and real-world German cultural guides written for serious learners.
          </p>
        </div>

        {/* Filter Bar: Search + Category Pills */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword, or grammar point..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs text-sm text-[#18191E] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#18191E] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#18191E] text-white shadow-2xs"
                      : "bg-white border border-neutral-200/80 text-[#68665E] hover:text-[#18191E] hover:border-neutral-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="text-xs text-[#7A776D] font-medium pt-1">
            Showing <span className="font-bold text-[#18191E]">{filteredBlogs.length}</span> articles
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
          </div>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-neutral-200/80 p-6 animate-pulse space-y-4"
              >
                <div className="h-4 w-24 bg-neutral-200 rounded" />
                <div className="h-6 w-5/6 bg-neutral-200 rounded" />
                <div className="h-12 w-full bg-neutral-100 rounded" />
                <div className="h-4 w-32 bg-neutral-200 rounded" />
              </div>
            ))}
          </div>
        ) : filteredBlogs.length === 0 ? (
          /* Empty State */
          <div className="p-12 text-center bg-white rounded-3xl border border-neutral-200/80 max-w-md mx-auto my-12 shadow-xs">
            <BookOpen className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#18191E]">No articles found</h3>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              We couldn&apos;t find any articles matching your search criteria. Try a different term or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-5 px-4 py-2 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Blog Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6">
                  {/* Category & Read Time Row */}
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200/60 font-medium">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-base sm:text-lg font-bold text-[#18191E] leading-snug tracking-tight group-hover:text-black line-clamp-2">
                    <Link
                      href={`/blog/${blog.slug || blog.id}`}
                      className="hover:underline decoration-[#18191E] decoration-2 underline-offset-2"
                    >
                      {blog.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-[#6D6B62] mt-2.5 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-neutral-100">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-neutral-500 font-medium bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Row: Author & Read Link */}
                <div className="px-6 py-3.5 bg-neutral-50/70 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-[#18191E] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {blog.author.name.charAt(0)}
                    </div>
                    <span className="text-xs font-semibold text-[#18191E] truncate">
                      {blog.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${blog.slug || blog.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#18191E] hover:text-amber-700 transition-colors shrink-0 group-hover:translate-x-0.5"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 bg-white text-[#18191E] py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-rochester text-3xl text-[#18191E] select-none">
            instructor
          </Link>
          <div className="flex items-center gap-6 text-xs text-[#7A776D]">
            <Link href="/courses" className="hover:text-black transition-colors">Courses</Link>
            <Link href="/blog" className="hover:text-black font-semibold text-black transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
          </div>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Instructor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
