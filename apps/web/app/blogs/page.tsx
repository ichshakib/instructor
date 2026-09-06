"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { fetchBlogs, BlogPost } from "../../lib/api";
import {
  Search,
  BookOpen,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Grammar",
  "Vocabulary",
  "Exam Prep",
  "German Life & Culture",
  "Study Tips",
  "Career",
] as const;

const POSTS_PER_PAGE = 5;

export default function BlogsListPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  // Filter blogs by category and search query
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

  // Reset to page 1 on search or category filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = Math.min(startIndex + POSTS_PER_PAGE, filteredBlogs.length);
  const paginatedBlogs = useMemo(() => {
    return filteredBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredBlogs, startIndex]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#18191E] selection:bg-[#18191E] selection:text-white">
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 pb-20">
        {/* Header Section: Minimal & Clean */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18191E] tracking-tight leading-tight">
            Blogs
          </h1>

          <p className="text-[#6D6B62] text-base mt-3 leading-relaxed">
            In-depth guides, practical breakdowns, and technical articles designed for focused learning.
          </p>
        </div>

        {/* Filter Bar: Search + Category Pills */}
        <div className="space-y-4 mb-10 pb-6 border-b border-neutral-100">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blogs by title, topic, or keyword..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm text-[#18191E] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#18191E] transition-all"
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#18191E] text-white"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results Count Summary */}
          <div className="text-xs text-neutral-500 font-medium pt-1">
            Showing <span className="font-semibold text-[#18191E]">{filteredBlogs.length}</span> articles
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
          </div>
        </div>

        {/* Loading Skeletons */}
        {isLoading ? (
          <div className="space-y-8 divide-y divide-neutral-100">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={`blog-skel-${i}`} className="pt-6 first:pt-0 animate-pulse space-y-3">
                <div className="h-4 w-32 bg-neutral-200 rounded" />
                <div className="h-6 w-3/4 bg-neutral-200 rounded" />
                <div className="h-4 w-full bg-neutral-100 rounded" />
                <div className="h-4 w-2/3 bg-neutral-100 rounded" />
              </div>
            ))}
          </div>
        ) : filteredBlogs.length === 0 ? (
          /* Empty State */
          <div className="p-12 text-center bg-white rounded-2xl border border-neutral-200 max-w-md mx-auto my-12 shadow-xs">
            <BookOpen className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#18191E]">No articles found</h3>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
              We couldn&apos;t find any blogs matching your search criteria. Try another keyword or clear filters.
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
          /* One-by-One Vertical Blog List (No Cards, No Author, No Read Button, Click Title to Read) */
          <div className="space-y-0 divide-y divide-neutral-200/80">
            {paginatedBlogs.map((blog) => (
              <article
                key={blog.id}
                className="py-7 sm:py-9 first:pt-0 group transition-colors"
              >
                {/* Meta Row: Category, Read Time & Date */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded bg-neutral-100 text-neutral-700 font-medium">
                    {blog.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1.5 text-neutral-500">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{blog.readTime}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5 text-neutral-500">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{blog.publishedAt}</span>
                  </div>
                </div>

                {/* Clickable Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#18191E] tracking-tight leading-snug">
                  <Link
                    href={`/blogs/${blog.slug || blog.id}`}
                    className="hover:underline decoration-[#18191E] decoration-2 underline-offset-4 transition-all block"
                  >
                    {blog.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-neutral-600 mt-2.5 leading-relaxed max-w-4xl font-normal">
                  {blog.excerpt}
                </p>

                {/* Tag Pills */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 mt-3.5">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-neutral-500 bg-neutral-50 px-2.5 py-0.5 rounded border border-neutral-200/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Pagination System */}
        {!isLoading && totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500 order-2 sm:order-1">
              Showing <span className="font-semibold text-[#18191E]">{startIndex + 1}</span> to{" "}
              <span className="font-semibold text-[#18191E]">{endIndex}</span> of{" "}
              <span className="font-semibold text-[#18191E]">{filteredBlogs.length}</span> articles
            </span>

            <div className="flex items-center gap-1.5 order-1 sm:order-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNumber = idx + 1;
                  const isCurrent = pageNumber === currentPage;
                  return (
                    <button
                      key={`page-${pageNumber}`}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`min-w-8 h-8 px-2 rounded-lg text-xs font-semibold transition-all ${
                        isCurrent
                          ? "bg-[#18191E] text-white"
                          : "text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label="Next Page"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-neutral-200/80 bg-white text-[#18191E] pt-16 pb-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-100">
            <div className="lg:col-span-6 space-y-3">
              <Link href="/" className="inline-flex items-center group focus:outline-none">
                <span className="font-rochester text-3xl sm:text-4xl text-[#18191E] tracking-tight select-none">
                  instructor
                </span>
              </Link>
              <p className="text-xs text-[#706E66] max-w-sm leading-relaxed font-normal">
                The modern online learning management ecosystem. Empowering instructors and global learners to build, deliver, and scale world-class education.
              </p>
              <div className="pt-1 flex flex-wrap gap-y-2 gap-x-5 text-xs text-[#706E66]">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#18191E]" />
                  <span>support@instructor.io</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#18191E]" />
                  <span>+1 (800) 275-3829</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center lg:items-end">
              <div className="w-full max-w-sm space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191E]">
                  Subscribe to Updates
                </h4>
                <p className="text-xs text-[#706E66] leading-relaxed">
                  Monthly articles and learning resources delivered to your inbox.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for subscribing!");
                  }}
                  className="flex gap-2 pt-1"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18191E]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#706E66]">
            <div>© {new Date().getFullYear()} Instructor Inc. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <Link href="/courses" className="hover:text-black transition-colors">
                Courses
              </Link>
              <Link href="/blogs" className="hover:text-black font-semibold text-black transition-colors">
                Blogs
              </Link>
              <Link href="/about" className="hover:text-black transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
