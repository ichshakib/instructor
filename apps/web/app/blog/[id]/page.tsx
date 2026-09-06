"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { fetchBlogById, BlogPost } from "../../../lib/api";
import {
  ChevronLeft,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  Bookmark,
  Check,
  ArrowLeft,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const idOrSlug = params.id as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      if (!idOrSlug) return;
      try {
        setIsLoading(true);
        const data = await fetchBlogById(idOrSlug);
        if (isMounted) {
          setBlog(data);
        }
      } catch (err) {
        console.error("Failed to load blog post:", err);
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
  }, [idOrSlug]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#18191E] selection:bg-[#18191E] selection:text-white">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-10 pt-28 sm:pt-36 pb-24">
        {/* Top Back Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A776D] hover:text-[#18191E] transition-colors group cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to all articles</span>
          </Link>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 animate-pulse space-y-6">
            <div className="h-5 w-32 bg-neutral-200 rounded" />
            <div className="h-10 w-3/4 bg-neutral-200 rounded" />
            <div className="h-4 w-1/2 bg-neutral-100 rounded" />
            <div className="space-y-3 pt-6 border-t border-neutral-100">
              <div className="h-4 w-full bg-neutral-100 rounded" />
              <div className="h-4 w-5/6 bg-neutral-100 rounded" />
              <div className="h-4 w-4/6 bg-neutral-100 rounded" />
            </div>
          </div>
        ) : !blog ? (
          /* Not Found */
          <div className="text-center bg-white rounded-3xl border border-neutral-200/80 p-12 max-w-md mx-auto shadow-xs">
            <BookOpen className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-[#18191E]">Article Not Found</h2>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              The article you are looking for may have been moved or is currently unavailable.
            </p>
            <Link
              href="/blog"
              className="inline-block mt-6 px-4 py-2 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
            >
              Return to Blog
            </Link>
          </div>
        ) : (
          /* Article Card & Reader */
          <article className="bg-white rounded-3xl border border-neutral-200/90 shadow-2xs overflow-hidden">
            {/* Header Area */}
            <div className="p-6 sm:p-12 border-b border-neutral-100">
              {/* Meta row: Category, Read time, Date */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold mb-4">
                <span className="px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200/70 font-medium">
                  {blog.category}
                </span>
                <span className="text-neutral-300">•</span>
                <div className="flex items-center gap-1.5 text-[#7A776D]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{blog.readTime}</span>
                </div>
                <span className="text-neutral-300">•</span>
                <span className="text-[#7A776D] font-medium">{blog.publishedAt}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18191E] tracking-tight leading-tight sm:leading-snug">
                {blog.title}
              </h1>

              {/* Excerpt / Subtitle */}
              {blog.excerpt && (
                <p className="text-[#6D6B62] text-sm sm:text-base mt-4 leading-relaxed font-normal">
                  {blog.excerpt}
                </p>
              )}

              {/* Author Row & Actions */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#18191E] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {blog.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#18191E] leading-snug">
                      {blog.author.name}
                    </div>
                    <div className="text-[11px] text-[#7A776D] font-normal">
                      {blog.author.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-200 text-xs font-semibold text-[#18191E] hover:bg-neutral-50 transition-colors cursor-pointer"
                    title="Copy article link"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-12 space-y-10 text-[#18191E]">
              {blog.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  {section.heading && (
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#18191E] tracking-tight border-b border-neutral-100 pb-2">
                      {section.heading}
                    </h2>
                  )}

                  {section.subheading && (
                    <h3 className="text-sm sm:text-base font-bold text-[#18191E]">
                      {section.subheading}
                    </h3>
                  )}

                  {section.paragraphs &&
                    section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-[15px] text-[#383733] leading-relaxed font-normal"
                      >
                        {p}
                      </p>
                    ))}

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2.5 my-4 pl-1">
                      {section.bulletPoints.map((item, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#383733] leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Responsive Table */}
                  {section.table && (
                    <div className="my-6 overflow-x-auto rounded-2xl border border-neutral-200/90 shadow-2xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-neutral-50/90 border-b border-neutral-200/80">
                            {section.table.headers.map((h, hIdx) => (
                              <th
                                key={hIdx}
                                className="px-4 py-3 font-extrabold text-[#18191E] uppercase tracking-wider text-[10px]"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-neutral-50/50 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-4 py-3 text-neutral-800 ${
                                    cIdx === 0 ? "font-bold text-[#18191E]" : "font-normal"
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Key Takeaway Callout */}
                  {section.keyTakeaway && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 my-4">
                      <div className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                      </div>
                      <div className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                        <span className="font-bold text-amber-900 block mb-0.5 text-xs uppercase tracking-wider">
                          Key Takeaway
                        </span>
                        {section.keyTakeaway}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Article Footer: Tags & Navigation */}
            <div className="p-6 sm:p-12 bg-neutral-50/60 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-neutral-400 mr-1">Tags:</span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#18191E] font-medium bg-white px-2.5 py-1 rounded-lg border border-neutral-200/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shrink-0"
              >
                <span>View More Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
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
