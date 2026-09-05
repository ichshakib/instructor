"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  fetchCourseById,
  CourseDetail,
  CEFRLevel,
  LevelCurriculum,
  Lesson,
} from "../../../../lib/api";
import {
  BookOpen,
  Clock,
  Layers,
  FileQuestion,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  GraduationCap,
} from "lucide-react";

const CEFR_LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = typeof params?.id === "string" ? params.id : "german-language-course";
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug : typeof rawSlug === "string" ? [rawSlug] : undefined;

  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Active CEFR Level
  const [activeLevel, setActiveLevel] = useState<CEFRLevel>("A1");

  // Expanded chapters state
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  // Active Lesson ID
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // Function to sync the browser URL without full-page reload
  const syncUrl = useCallback(
    (lvl: CEFRLevel, chId?: string, lId?: string) => {
      if (typeof window === "undefined") return;
      let targetPath = `/courses/${courseId}/${lvl}`;
      if (chId && lId) {
        targetPath = `/courses/${courseId}/${lvl}/${chId}/${lId}`;
      } else if (lId) {
        targetPath = `/courses/${courseId}/${lvl}/${lId}`;
      }
      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, "", targetPath);
      }
    },
    [courseId]
  );

  // Fetch course details from API and initialize from URL slug if provided
  const loadCourse = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchCourseById(courseId);
      if (!data) {
        setError(`Course '${courseId}' not found.`);
      } else {
        setCourse(data);

        // Determine initial level and lesson from slug or fallback to A1
        let targetLevel: CEFRLevel = "A1";
        let targetLessonId: string | null = null;
        let targetChapterId: string | null = null;

        if (slug && slug.length > 0 && slug[0]) {
          const rawLevel = slug[0].toUpperCase();
          if (CEFR_LEVELS.includes(rawLevel as CEFRLevel)) {
            targetLevel = rawLevel as CEFRLevel;
          }

          const levelData = data.curriculum?.find((c) => c.level === targetLevel);
          if (levelData) {
            if (slug.length >= 3 && slug[1] && slug[2]) {
              targetChapterId = slug[1];
              targetLessonId = slug[2];
            } else if (slug.length === 2 && slug[1]) {
              const part = slug[1].toLowerCase();
              // Check if matching chapter
              const matchCh = levelData.chapters.find((ch) => ch.id.toLowerCase() === part);
              if (matchCh) {
                targetChapterId = matchCh.id;
                targetLessonId = matchCh.lessons[0]?.id ?? null;
              } else {
                // Check if matching lesson
                for (const ch of levelData.chapters) {
                  const matchL = ch.lessons.find((l) => l.id.toLowerCase() === part);
                  if (matchL) {
                    targetLessonId = matchL.id;
                    targetChapterId = ch.id;
                    break;
                  }
                }
              }
            }
          }
        }

        setActiveLevel(targetLevel);

        const currentLevelData = data.curriculum?.find((c) => c.level === targetLevel);
        if (currentLevelData && currentLevelData.chapters.length > 0) {
          // Expand all chapters in active level
          const initialExpanded: Record<string, boolean> = {};
          currentLevelData.chapters.forEach((ch) => {
            initialExpanded[ch.id] = true;
          });
          setExpandedChapters(initialExpanded);

          // If no specific lesson was targeted from slug, default to first lesson
          if (!targetLessonId) {
            const firstChapter = currentLevelData.chapters[0];
            if (firstChapter && firstChapter.lessons.length > 0) {
              const firstLesson = firstChapter.lessons[0];
              if (firstLesson) {
                targetLessonId = firstLesson.id;
                targetChapterId = firstChapter.id;
              }
            }
          }

          if (targetLessonId) {
            setActiveLessonId(targetLessonId);
            if (targetChapterId) {
              syncUrl(targetLevel, targetChapterId, targetLessonId);
            }
          }
        }
      }
    } catch (err: unknown) {
      console.error("Failed to load course details:", err);
      setError("Failed to load course details from API. Please ensure the backend server is running.");
    } finally {
      setIsLoading(false);
    }
  }, [courseId, slug, syncUrl]);

  useEffect(() => {
    loadCourse();
  }, [loadCourse]);

  // Current Level curriculum
  const currentLevelCurriculum: LevelCurriculum | undefined = useMemo(() => {
    return course?.curriculum?.find((c) => c.level === activeLevel);
  }, [course, activeLevel]);

  // Find currently active lesson and its parent chapter
  const activeLessonInfo = useMemo(() => {
    if (!currentLevelCurriculum) return null;
    for (const chapter of currentLevelCurriculum.chapters) {
      const lesson = chapter.lessons.find((l) => l.id === activeLessonId);
      if (lesson) {
        return { lesson, chapter };
      }
    }
    // Fallback to first lesson
    const firstChapter = currentLevelCurriculum.chapters[0];
    if (firstChapter && firstChapter.lessons.length > 0) {
      const firstLesson = firstChapter.lessons[0];
      if (firstLesson) {
        return { lesson: firstLesson, chapter: firstChapter };
      }
    }
    return null;
  }, [currentLevelCurriculum, activeLessonId]);

  // When active level changes (e.g. clicking A1, A2, B1, B2, C1, C2), update URL and select first lesson
  const handleLevelChange = (lvl: CEFRLevel) => {
    setActiveLevel(lvl);
    const targetLevel = course?.curriculum?.find((c) => c.level === lvl);
    if (targetLevel && targetLevel.chapters.length > 0) {
      const newExpanded: Record<string, boolean> = {};
      targetLevel.chapters.forEach((ch) => {
        newExpanded[ch.id] = true;
      });
      setExpandedChapters(newExpanded);

      const firstChapter = targetLevel.chapters[0];
      if (firstChapter && firstChapter.lessons.length > 0) {
        const firstLesson = firstChapter.lessons[0];
        if (firstLesson) {
          setActiveLessonId(firstLesson.id);
          syncUrl(lvl, firstChapter.id, firstLesson.id);
        }
      } else {
        syncUrl(lvl);
      }
    } else {
      syncUrl(lvl);
    }
  };

  // When a lesson is clicked, update active lesson and sync URL
  const handleSelectLesson = (chapterId: string, lessonId: string) => {
    setActiveLessonId(lessonId);
    syncUrl(activeLevel, chapterId, lessonId);
  };

  // Toggle chapter collapse/expand
  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  // Listen to browser Back / Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const parts = window.location.pathname.split("/").filter(Boolean);
      // Example: ["courses", "german-language-course", "A2", "a2-ch1", "a2-ch1-l1"]
      if (parts.length >= 3) {
        const lvlPart = parts[2]?.toUpperCase();
        if (CEFR_LEVELS.includes(lvlPart as CEFRLevel)) {
          setActiveLevel(lvlPart as CEFRLevel);
        }
      }
      if (parts.length >= 5 && parts[4]) {
        setActiveLessonId(parts[4]);
      } else if (parts.length === 4 && parts[3]) {
        setActiveLessonId(parts[3]);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Flattened list of lessons in current level for Next/Previous navigation
  const allLessonsInLevel: { lesson: Lesson; chapterId: string }[] = useMemo(() => {
    if (!currentLevelCurriculum) return [];
    return currentLevelCurriculum.chapters.flatMap((ch) =>
      ch.lessons.map((l) => ({ lesson: l, chapterId: ch.id }))
    );
  }, [currentLevelCurriculum]);

  const currentLessonIndex = useMemo(() => {
    if (!activeLessonInfo?.lesson) return -1;
    return allLessonsInLevel.findIndex((item) => item.lesson.id === activeLessonInfo.lesson.id);
  }, [allLessonsInLevel, activeLessonInfo]);

  const goToNextLesson = () => {
    if (currentLessonIndex >= 0 && currentLessonIndex < allLessonsInLevel.length - 1) {
      const nextItem = allLessonsInLevel[currentLessonIndex + 1];
      if (nextItem) {
        handleSelectLesson(nextItem.chapterId, nextItem.lesson.id);
      }
    }
  };

  const goToPrevLesson = () => {
    if (currentLessonIndex > 0) {
      const prevItem = allLessonsInLevel[currentLessonIndex - 1];
      if (prevItem) {
        handleSelectLesson(prevItem.chapterId, prevItem.lesson.id);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col md:flex-row bg-[#FAF9F5] text-[#18191E] overflow-hidden animate-pulse">
        {/* Left Side Skeleton */}
        <div className="w-full md:w-80 lg:w-96 border-r border-neutral-200/80 bg-white p-5 flex flex-col gap-4">
          <div className="h-8 w-3/4 bg-neutral-200/80 rounded-xl" />
          <div className="h-10 w-full bg-neutral-200/60 rounded-xl" />
          <div className="flex-1 space-y-3 pt-4">
            <div className="h-12 bg-neutral-200/70 rounded-xl" />
            <div className="h-12 bg-neutral-200/50 rounded-xl" />
            <div className="h-12 bg-neutral-200/50 rounded-xl" />
            <div className="h-12 bg-neutral-200/50 rounded-xl" />
          </div>
        </div>
        {/* Right Side Skeleton */}
        <div className="flex-1 p-8 flex flex-col gap-6">
          <div className="h-16 w-full bg-white border border-neutral-200/80 rounded-2xl" />
          <div className="flex-1 bg-white border border-neutral-200/80 rounded-3xl" />
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#FAF9F5] p-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-rose-200 shadow-sm text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-[#18191E]">Course Not Found</h2>
          <p className="text-xs text-[#706E66] mt-2 leading-relaxed">
            {error || "Could not retrieve the requested course details."}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={loadCourse}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-800 text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
            <Link
              href="/courses"
              className="px-4 py-2 rounded-xl bg-[#18191E] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-[#FAF9F5] text-[#18191E] font-sans selection:bg-[#18191E] selection:text-white overflow-hidden">
      {/* ========================================================================= */}
      {/* LEFT SIDE: Less Space (Course Title at top, A1-C2, Course Outline)        */}
      {/* ========================================================================= */}
      <aside className="w-full md:w-80 lg:w-[380px] xl:w-[410px] shrink-0 h-full bg-white border-r border-neutral-200/90 flex flex-col z-20 shadow-xs">
        {/* 1. TOP: COURSE TITLE */}
        <div className="p-4 sm:p-5 border-b border-neutral-200/80 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7A776D] hover:text-[#18191E] transition-colors group cursor-pointer"
              title="Return to courses directory"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>All Courses</span>
            </Link>
            <span className="text-neutral-300">•</span>
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
              German
            </span>
          </div>

          <h1 className="text-lg sm:text-xl font-extrabold text-[#18191E] tracking-tight leading-snug">
            {course.title}
          </h1>
        </div>

        {/* 2. A1, A2, B1, B2, C1, C2 LEVEL SELECTOR */}
        <div className="p-3 sm:p-4 border-b border-neutral-200/80 bg-neutral-50/60">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-bold text-[#7A776D] uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              CEFR Level
            </span>
            <span className="text-[10px] font-semibold text-neutral-500">
              {currentLevelCurriculum?.title.split("•")[1]?.trim() || "Beginner"}
            </span>
          </div>

          {/* Level Tabs: A1, A2, B1, B2, C1, C2 */}
          <div className="grid grid-cols-6 gap-1.5 p-1 rounded-xl bg-neutral-200/60 border border-neutral-300/60">
            {CEFR_LEVELS.map((lvl) => {
              const isActive = activeLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => handleLevelChange(lvl)}
                  className={`py-1.5 rounded-lg text-xs font-black transition-all duration-200 cursor-pointer text-center ${
                    isActive
                      ? "bg-[#18191E] text-white shadow-sm scale-[1.04]"
                      : "text-[#5F5D54] hover:text-[#18191E] hover:bg-white/70"
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. COURSE OUTLINE: CHAPTERS & LESSONS (SCROLLABLE LIST) */}
        <div className="p-3 border-b border-neutral-100 flex items-center justify-between bg-white text-xs font-bold text-[#18191E]">
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            Course Outline
          </span>
          <span className="text-[11px] font-medium text-neutral-400">
            {currentLevelCurriculum?.chapters.length || 0} Chapters
          </span>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-neutral-100">
          {!currentLevelCurriculum || currentLevelCurriculum.chapters.length === 0 ? (
            <div className="p-6 text-center text-xs text-neutral-400">
              No outline available for this level.
            </div>
          ) : (
            currentLevelCurriculum.chapters.map((chapter, chIdx) => {
              const isExpanded = expandedChapters[chapter.id] ?? true;

              return (
                <div key={chapter.id} className="transition-colors">
                  {/* Chapter Header Toggle Button */}
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-2.5 hover:bg-neutral-50 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-5 h-5 rounded bg-[#18191E] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                        {chIdx + 1}
                      </span>
                      <span className="text-xs font-bold text-[#18191E] group-hover:text-black leading-snug truncate">
                        {chapter.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-medium text-neutral-400">
                        {chapter.lessons.length}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                      )}
                    </div>
                  </button>

                  {/* Lessons Under this Chapter */}
                  {isExpanded && (
                    <div className="bg-neutral-50/60 pb-1">
                      {chapter.lessons.map((lesson, lIdx) => {
                        const isLessonActive = activeLessonId === lesson.id;

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => handleSelectLesson(chapter.id, lesson.id)}
                            className={`w-full text-left px-4 py-2.5 flex items-start gap-2.5 transition-all duration-150 cursor-pointer ${
                              isLessonActive
                                ? "bg-amber-50 text-[#18191E] border-l-4 border-amber-500 font-semibold shadow-xs"
                                : "hover:bg-neutral-100/90 text-[#5F5D54] border-l-4 border-transparent"
                            }`}
                          >
                            <div className="pt-0.5 shrink-0">
                              {isLessonActive ? (
                                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                              ) : (
                                <div className="w-3.5 h-3.5 rounded-full border border-neutral-300 flex items-center justify-center text-[9px] text-neutral-400">
                                  {lIdx + 1}
                                </div>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <p className="text-xs leading-snug line-clamp-2">
                                {lesson.title}
                              </p>
                              {lesson.duration && (
                                <div className="flex items-center gap-1 mt-0.5 text-[10px] text-neutral-400">
                                  <Clock className="w-2.5 h-2.5" />
                                  <span>{lesson.duration}</span>
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* RIGHT SIDE: More Space (Lesson Name at Top, Main Contents Area)           */}
      {/* ========================================================================= */}
      <main className="flex-1 h-full flex flex-col overflow-hidden bg-[#FAF9F5]">
        {activeLessonInfo ? (
          <>
            {/* 1. TOP HEADER: SHOWING LESSON OR CHAPTER NAME */}
            <header className="px-6 sm:px-10 py-5 bg-white border-b border-neutral-200/80 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#7A776D] mb-1">
                  <span className="px-2 py-0.5 rounded bg-[#18191E] text-white text-[10px] font-bold">
                    Level {activeLevel}
                  </span>
                  <span>•</span>
                  <span className="truncate">{activeLessonInfo.chapter.title}</span>
                </div>

                <h2 className="text-lg sm:text-2xl font-extrabold text-[#18191E] tracking-tight truncate">
                  {activeLessonInfo.lesson.title}
                </h2>
              </div>

              {activeLessonInfo.lesson.duration && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 text-neutral-700 text-xs font-medium shrink-0 self-start sm:self-center">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{activeLessonInfo.lesson.duration}</span>
                </div>
              )}
            </header>

            {/* 2. MAIN CONTENTS AREA */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col justify-between">
              <div className="max-w-3xl w-full mx-auto my-auto py-12 flex flex-col items-center justify-center text-center">
                {/* Visual Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#FFF7DF] border border-amber-200 flex items-center justify-center text-amber-700 shadow-sm mb-6">
                  <FileQuestion className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.8]" />
                </div>

                {/* Primary State - "No contents available" as requested */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18191E] tracking-tight">
                  No contents available
                </h3>

                <p className="text-sm text-[#706E66] mt-3 max-w-lg leading-relaxed">
                  The lesson materials, vocabulary lists, and practice exercises for this module are currently being prepared. Check back soon or select another lesson from the outline on the left.
                </p>

                {activeLessonInfo.lesson.description && (
                  <div className="mt-6 p-4 rounded-2xl bg-white border border-neutral-200/90 max-w-lg text-left shadow-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      Lesson Focus
                    </span>
                    <p className="text-xs text-[#18191E] leading-relaxed">
                      {activeLessonInfo.lesson.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Lesson Navigation */}
              <div className="max-w-3xl w-full mx-auto pt-6 border-t border-neutral-200/80 flex items-center justify-between gap-4">
                <button
                  onClick={goToPrevLesson}
                  disabled={currentLessonIndex <= 0}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    currentLessonIndex <= 0
                      ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                      : "bg-white border border-neutral-300 text-[#18191E] hover:bg-neutral-50 hover:border-neutral-400 active:scale-95 shadow-xs cursor-pointer"
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Lesson</span>
                </button>

                <span className="text-xs text-[#706E66] font-medium hidden sm:inline-block">
                  Lesson {currentLessonIndex + 1} of {allLessonsInLevel.length} in Level {activeLevel}
                </span>

                <button
                  onClick={goToNextLesson}
                  disabled={currentLessonIndex >= allLessonsInLevel.length - 1}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    currentLessonIndex >= allLessonsInLevel.length - 1
                      ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                      : "bg-[#18191E] text-white hover:bg-neutral-800 active:scale-95 shadow-xs cursor-pointer"
                  }`}
                >
                  <span>Next Lesson</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8 text-center">
            <div className="max-w-sm">
              <BookOpen className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#18191E]">Select a lesson</h3>
              <p className="text-xs text-neutral-500 mt-1">
                Choose a chapter and lesson from the left side outline to start learning.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
