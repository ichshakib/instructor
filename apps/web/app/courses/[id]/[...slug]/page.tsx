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
  Target,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Eye,
  EyeOff,
} from "lucide-react";
import { getLessonContent } from "../../../../lib/lesson-contents";

const CEFR_LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

function formatLessonTitle(rawTitle: string, continuousNum: number): string {
  if (/^Lesson\s+\d+:/i.test(rawTitle)) {
    return rawTitle.replace(/^Lesson\s+\d+:/i, `Lesson ${continuousNum}:`);
  }
  return rawTitle;
}

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = typeof params?.id === "string" ? params.id : "german-language-course";
  const rawSlug = params?.slug;
  const slug = useMemo(
    () => (Array.isArray(rawSlug) ? rawSlug : typeof rawSlug === "string" ? [rawSlug] : undefined),
    [rawSlug]
  );

  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Active CEFR Level
  const [activeLevel, setActiveLevel] = useState<CEFRLevel>("A1");

  // Expanded chapters state
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  // Active Lesson ID
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // Quick practice answer reveal state
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setRevealedAnswers({});
  }, [activeLessonId]);

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

          // If targetLessonId is identified but targetChapterId was not in slug, find which chapter it belongs to
          if (targetLessonId && !targetChapterId) {
            for (const ch of currentLevelData.chapters) {
              if (ch.lessons.some((l) => l.id.toLowerCase() === targetLessonId?.toLowerCase())) {
                targetChapterId = ch.id;
                break;
              }
            }
          }

          // ONLY expand the chapter containing the active lesson; all other chapters remain collapsed
          const initialExpanded: Record<string, boolean> = {};
          if (targetChapterId) {
            initialExpanded[targetChapterId] = true;
          }
          setExpandedChapters(initialExpanded);

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

  // Resolve rich lesson content from API or fallback local library
  const currentLessonContent = useMemo(() => {
    if (!activeLessonInfo) return undefined;
    return activeLessonInfo.lesson.content || getLessonContent(activeLessonInfo.lesson.id);
  }, [activeLessonInfo]);

  // When active level changes (e.g. clicking A1, A2, B1, B2, C1, C2), update URL, select first lesson, and expand ONLY its chapter
  const handleLevelChange = (lvl: CEFRLevel) => {
    setActiveLevel(lvl);
    const targetLevel = course?.curriculum?.find((c) => c.level === lvl);
    if (targetLevel && targetLevel.chapters.length > 0) {
      const firstChapter = targetLevel.chapters[0];
      if (firstChapter && firstChapter.lessons.length > 0) {
        const firstLesson = firstChapter.lessons[0];
        if (firstLesson) {
          setActiveLessonId(firstLesson.id);
          // Only expand the chapter containing the newly activated lesson
          setExpandedChapters({ [firstChapter.id]: true });
          syncUrl(lvl, firstChapter.id, firstLesson.id);
        }
      } else {
        setExpandedChapters({});
        syncUrl(lvl);
      }
    } else {
      setExpandedChapters({});
      syncUrl(lvl);
    }
  };

  // When a lesson is clicked, activate that lesson, expand ONLY its chapter, and sync URL
  const handleSelectLesson = (chapterId: string, lessonId: string) => {
    setActiveLessonId(lessonId);
    setExpandedChapters({ [chapterId]: true });
    syncUrl(activeLevel, chapterId, lessonId);
  };

  // Toggle chapter collapse/expand when clicking chapter heading
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
      let newLevel: CEFRLevel | null = null;
      if (parts.length >= 3) {
        const lvlPart = parts[2]?.toUpperCase();
        if (CEFR_LEVELS.includes(lvlPart as CEFRLevel)) {
          newLevel = lvlPart as CEFRLevel;
          setActiveLevel(newLevel);
        }
      }

      const activeCurriculum = course?.curriculum?.find(
        (c) => c.level === (newLevel || activeLevel)
      );

      let targetLId: string | null = null;
      let targetCId: string | null = null;

      if (parts.length >= 5 && parts[4]) {
        targetCId = parts[3] ?? null;
        targetLId = parts[4] ?? null;
      } else if (parts.length === 4 && parts[3]) {
        const part = parts[3].toLowerCase();
        if (activeCurriculum) {
          for (const ch of activeCurriculum.chapters) {
            const m = ch.lessons.find((l) => l.id.toLowerCase() === part);
            if (m) {
              targetLId = m.id;
              targetCId = ch.id;
              break;
            }
          }
        }
      }

      if (targetLId) {
        setActiveLessonId(targetLId);
        if (targetCId) {
          setExpandedChapters({ [targetCId]: true });
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [course, activeLevel]);

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
              const isExpanded = Boolean(expandedChapters[chapter.id]);

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
                      {(() => {
                        const previousLessonsCount = currentLevelCurriculum.chapters
                          .slice(0, chIdx)
                          .reduce((sum, ch) => sum + ch.lessons.length, 0);

                        return chapter.lessons.map((lesson, lIdx) => {
                          const isLessonActive = activeLessonId === lesson.id;
                          const continuousLessonNumber = previousLessonsCount + lIdx + 1;

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
                                  <div className="min-w-4 h-4 px-1 rounded-full border border-neutral-300 flex items-center justify-center text-[9px] font-semibold text-neutral-500">
                                    {continuousLessonNumber}
                                  </div>
                                )}
                              </div>

                              <div className="flex-1 min-w-0">
                                <p className="text-xs leading-snug line-clamp-2">
                                  {formatLessonTitle(lesson.title, continuousLessonNumber)}
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
                        });
                      })()}
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
                  {currentLessonIndex >= 0
                    ? formatLessonTitle(activeLessonInfo.lesson.title, currentLessonIndex + 1)
                    : activeLessonInfo.lesson.title}
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
              {/* If currentLessonContent exists, render the comprehensive, humanized module */}
              {currentLessonContent ? (
                <div className="max-w-4xl w-full mx-auto space-y-8 py-2 pb-10">
                  {/* 1. Can-Do Objective & Overview */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-3.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                      <Target className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>CEFR Can-Do Milestone</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#18191E] leading-snug">
                      {currentLessonContent.canDo}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5F5D54] leading-relaxed">
                      {currentLessonContent.overview}
                    </p>
                  </div>

                  {/* 2. Der Lehrer erklärt (Teacher's Pedagogical Guidance) */}
                  {currentLessonContent.teacherNote && (
                    <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFBEB] border border-amber-300/80 shadow-xs flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-5 h-5 text-amber-700" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 block">
                          Der Lehrer erklärt • Instructor Guidance
                        </span>
                        <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed font-medium">
                          {currentLessonContent.teacherNote}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 3. Core Lesson Sections (Rules, Tables & Vocabulary) */}
                  {currentLessonContent.sections.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-5"
                    >
                      <div className="border-b border-neutral-100 pb-3.5">
                        <h4 className="text-base sm:text-lg font-extrabold text-[#18191E] tracking-tight">
                          {section.title}
                        </h4>
                        {section.description && (
                          <p className="text-xs sm:text-sm text-[#706E66] mt-1.5 leading-relaxed">
                            {section.description}
                          </p>
                        )}
                      </div>

                      {/* Section Table */}
                      {section.table && (
                        <div className="overflow-x-auto rounded-2xl border border-neutral-200/80 shadow-2xs">
                          <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                              <tr className="bg-neutral-50/90 border-b border-neutral-200/80 text-neutral-600 font-bold">
                                {section.table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="py-3 px-4 font-extrabold">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                              {section.table.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className="hover:bg-amber-50/30 transition-colors"
                                >
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`py-3 px-4 ${
                                        cIdx === 0
                                          ? "font-bold text-[#18191E]"
                                          : "font-normal text-[#5F5D54]"
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

                      {/* Section Items / Vocabulary */}
                      {section.items && section.items.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          {section.items.map((item, iIdx) => (
                            <div
                              key={iIdx}
                              className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-neutral-300 transition-colors space-y-1.5"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-extrabold text-sm text-[#18191E]">
                                  {item.term}
                                </span>
                                {item.pronunciation && (
                                  <span className="text-[10px] font-mono font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                                    [{item.pronunciation}]
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[#5F5D54] leading-relaxed">
                                {item.meaning}
                              </p>
                              {item.example && (
                                <p className="text-xs italic text-neutral-500 pt-0.5">
                                  &ldquo;{item.example}&rdquo;
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section Notes */}
                      {section.notes && section.notes.length > 0 && (
                        <ul className="space-y-1.5 text-xs text-[#706E66] list-disc list-inside pt-1">
                          {section.notes.map((n, nIdx) => (
                            <li key={nIdx}>{n}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* 4. Authentic German Dialogue (Praxis-Dialog) */}
                  {currentLessonContent.dialogue && (
                    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-4">
                      <div className="flex items-center gap-2 border-b border-neutral-100 pb-3.5">
                        <MessageSquare className="w-4 h-4 text-amber-600 shrink-0" />
                        <h4 className="text-base font-extrabold text-[#18191E]">
                          Praxis-Dialog (Real-World Conversation)
                        </h4>
                      </div>
                      <p className="text-xs text-[#706E66] italic">
                        📍 {currentLessonContent.dialogue.context}
                      </p>
                      <div className="space-y-3 pt-2">
                        {currentLessonContent.dialogue.lines.map((line, lIdx) => (
                          <div
                            key={lIdx}
                            className={`p-4 rounded-2xl border transition-all ${
                              lIdx % 2 === 0
                                ? "bg-neutral-50 border-neutral-200/80"
                                : "bg-amber-50/40 border-amber-200/70 ml-3 sm:ml-8"
                            }`}
                          >
                            <div className="text-[10px] font-bold text-[#7A776D] uppercase tracking-wider mb-1">
                              {line.speaker}
                            </div>
                            <div className="text-sm font-bold text-[#18191E]">
                              {line.german}
                            </div>
                            <div className="text-xs text-[#706E66] mt-1">
                              {line.english}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 5. Kultur-Spotlight & Fun Fact */}
                  {currentLessonContent.funFact && (
                    <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#FFFBF0] via-[#FFF6E5] to-[#FFECD1] border border-amber-300/90 shadow-xs space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇩🇪</span>
                        <span className="text-xs font-black uppercase tracking-wider text-amber-900">
                          Kultur-Spotlight & Fun Fact
                        </span>
                      </div>
                      <h4 className="text-base font-extrabold text-amber-950">
                        {currentLessonContent.funFact.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed">
                        {currentLessonContent.funFact.content}
                      </p>
                    </div>
                  )}

                  {/* 6. Quick Practice / Selbsttest & Übung */}
                  {currentLessonContent.practice &&
                    currentLessonContent.practice.length > 0 && (
                      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-5">
                        <div className="flex items-center gap-2 border-b border-neutral-100 pb-3.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <h4 className="text-base font-extrabold text-[#18191E]">
                            Selbsttest & Übung (Quick Self-Check)
                          </h4>
                        </div>
                        <div className="space-y-4">
                          {currentLessonContent.practice.map((item, qIdx) => {
                            const isRevealed = Boolean(revealedAnswers[qIdx]);
                            return (
                              <div
                                key={qIdx}
                                className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-3"
                              >
                                <div className="flex items-start gap-2.5">
                                  <span className="w-5 h-5 rounded-full bg-[#18191E] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {qIdx + 1}
                                  </span>
                                  <p className="text-xs sm:text-sm font-bold text-[#18191E] leading-relaxed">
                                    {item.question}
                                  </p>
                                </div>

                                {item.options && (
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pl-7">
                                    {item.options.map((opt, oIdx) => (
                                      <div
                                        key={oIdx}
                                        className="px-3 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-medium text-neutral-700"
                                      >
                                        {opt}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <div className="pl-7 pt-1">
                                  <button
                                    onClick={() =>
                                      setRevealedAnswers((prev) => ({
                                        ...prev,
                                        [qIdx]: !prev[qIdx],
                                      }))
                                    }
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
                                  >
                                    {isRevealed ? (
                                      <>
                                        <EyeOff className="w-3.5 h-3.5" />
                                        <span>Hide Solution</span>
                                      </>
                                    ) : (
                                      <>
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>Show Solution &amp; Explanation</span>
                                      </>
                                    )}
                                  </button>

                                  {isRevealed && (
                                    <div className="mt-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                                      <div className="font-bold text-emerald-900">
                                        ✓ Correct Answer: {item.answer}
                                      </div>
                                      <div className="text-emerald-800 leading-relaxed">
                                        {item.explanation}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <div className="max-w-3xl w-full mx-auto my-auto py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#FFF7DF] border border-amber-200 flex items-center justify-center text-amber-700 shadow-sm mb-6">
                    <FileQuestion className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.8]" />
                  </div>

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
              )}

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
