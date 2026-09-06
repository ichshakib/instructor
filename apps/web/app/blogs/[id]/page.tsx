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
  Share2,
  Check,
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
    <div className="min-h-screen flex flex-col bg-white text-[#18191E] selection:bg-[#18191E] selection:text-white">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-10 pt-28 sm:pt-32 pb-24">
        {/* Top Back Navigation */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A776D] hover:text-[#18191E] transition-colors group cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to all blogs</span>
          </Link>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 animate-pulse space-y-6">
            <div className="h-4 w-32 bg-neutral-200 rounded" />
            <div className="h-8 w-3/4 bg-neutral-200 rounded" />
            <div className="h-4 w-1/2 bg-neutral-100 rounded" />
            <div className="space-y-3 pt-6 border-t border-neutral-100">
              <div className="h-4 w-full bg-neutral-100 rounded" />
              <div className="h-4 w-5/6 bg-neutral-100 rounded" />
              <div className="h-4 w-4/6 bg-neutral-100 rounded" />
            </div>
          </div>
        ) : !blog ? (
          /* Not Found */
          <div className="text-center bg-white rounded-2xl border border-neutral-200 p-12 max-w-md mx-auto shadow-xs">
            <BookOpen className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-[#18191E]">Article Not Found</h2>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              The article you are looking for may have been moved or is currently unavailable.
            </p>
            <Link
              href="/blogs"
              className="inline-block mt-6 px-4 py-2 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
            >
              Back to Blogs
            </Link>
          </div>
        ) : (
          /* Article Content */
          <article className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
            {/* Header Area */}
            <div className="p-6 sm:p-10 border-b border-neutral-100">
              {/* Meta row: Category, Read time, Date */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold mb-4">
                <span className="px-2.5 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-neutral-200 font-medium">
                  {blog.category}
                </span>
                <span className="text-neutral-300">•</span>
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{blog.readTime}</span>
                </div>
                <span className="text-neutral-300">•</span>
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{blog.publishedAt}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#18191E] tracking-tight leading-tight sm:leading-snug">
                {blog.title}
              </h1>

              {/* Excerpt / Subtitle */}
              {blog.excerpt && (
                <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                  {blog.excerpt}
                </p>
              )}

              {/* Share Action (NO AUTHOR) */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-neutral-500 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200/70"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
                  title="Copy article link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
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

            {/* Content Body */}
            <div className="p-6 sm:p-10 space-y-8 text-[#18191E]">
              {blog.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  {section.heading && (
                    <h2 className="text-lg sm:text-xl font-bold text-[#18191E] tracking-tight border-b border-neutral-100 pb-2">
                      {section.heading}
                    </h2>
                  )}

                  {section.subheading && (
                    <h3 className="text-sm sm:text-base font-semibold text-[#18191E]">
                      {section.subheading}
                    </h3>
                  )}

                  {section.paragraphs &&
                    section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed font-normal"
                      >
                        {p}
                      </p>
                    ))}

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2 my-4 pl-1">
                      {section.bulletPoints.map((item, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Responsive Table */}
                  {section.table && (
                    <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-neutral-50 border-b border-neutral-200">
                            {section.table.headers.map((h, hIdx) => (
                              <th
                                key={hIdx}
                                className="px-4 py-2.5 font-bold text-neutral-800"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-neutral-50/50">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className="px-4 py-2.5 text-neutral-700"
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
                    <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm leading-relaxed text-neutral-800">
                      <span className="font-bold text-[#18191E] mr-1.5">Takeaway:</span>
                      {section.keyTakeaway}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 bg-white text-[#18191E] py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-rochester text-3xl text-[#18191E] select-none">
            instructor
          </Link>
          <div className="flex items-center gap-6 text-xs text-[#7A776D]">
            <Link href="/courses" className="hover:text-black transition-colors">Courses</Link>
            <Link href="/blogs" className="hover:text-black font-semibold text-black transition-colors">Blogs</Link>
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
