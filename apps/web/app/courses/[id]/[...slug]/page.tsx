"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  fetchCourseById,
  resolveCourseImageUrl,
  CourseDetail,
  CEFRLevel,
  LevelCurriculum,
  Chapter,
  Lesson,
} from "../../../../lib/api";
import {
  BookOpen,
  Layers,
  FileQuestion,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  GraduationCap,
  Sparkles,
  Play,
} from "lucide-react";

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

  // View mode: either "overview" (Course Details) or "lesson" (Lesson Details & Contents)
  const [viewMode, setViewMode] = useState<"overview" | "lesson">("overview");

  // Active CEFR Level
  const [activeLevel, setActiveLevel] = useState<CEFRLevel>("A1");

  // Expanded chapters state
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  // Active Lesson ID
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // Track whether initial level and lesson have been loaded from URL
  const isInitializedRef = useRef<boolean>(false);

  // Function to sync the browser URL without full-page reload
  const syncUrl = useCallback(
    (mode: "overview" | "lesson", lvl?: CEFRLevel, chId?: string, lId?: string) => {
      if (typeof window === "undefined") return;
      let targetPath = `/courses/${courseId}`;
      if (mode === "overview") {
        if (lvl) {
          targetPath = `/courses/${courseId}/${lvl}`;
        }
      } else {
        if (lvl) {
          targetPath = `/courses/${courseId}/${lvl}`;
          if (chId && lId) {
            targetPath = `/courses/${courseId}/${lvl}/${chId}/${lId}`;
          } else if (lId) {
            targetPath = `/courses/${courseId}/${lvl}/${lId}`;
          }
        } else if (chId && lId) {
          targetPath = `/courses/${courseId}/${chId}/${lId}`;
        } else if (lId) {
          targetPath = `/courses/${courseId}/${lId}`;
        }
      }
      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, "", targetPath);
      }
    },
    [courseId]
  );

  // Guard: ONLY German language course has audio speech enabled
  const isGermanCourse = useMemo(() => {
    const id = (courseId || course?.id || "").toLowerCase();
    const title = (course?.title || "").toLowerCase();
    return id.includes("german") || title.includes("german");
  }, [courseId, course]);

  // Fetch course details from API and initialize from URL slug if provided
  const loadCourse = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchCourseById(courseId);
      if (!data) {
        setError(`Course '${courseId}' not found.`);
        return;
      }
      setCourse(data);

      if (!isInitializedRef.current) {
        isInitializedRef.current = true;

        let parts: string[] = [];
        if (typeof window !== "undefined") {
          const prefix = `/courses/${courseId}/`;
          const pIndex = window.location.pathname.indexOf(prefix);
          if (pIndex !== -1) {
            parts = window.location.pathname.slice(pIndex + prefix.length).split("/").filter(Boolean);
          }
        }
        if (parts.length === 0 && slug) {
          parts = slug;
        }

        const isLeveled =
          data.structureType === "cefr-levels" ||
          (data.structureType as any) === "european-levels" ||
          (!data.structureType && Boolean(data.curriculum && data.curriculum.length > 0));

        const isLessonsOnly =
          data.structureType === "lessons-only" ||
          (!isLeveled && (!data.chapters || data.chapters.length === 0) && Boolean(data.lessons && data.lessons.length > 0));

        let targetLessonId: string | null = null;
        let targetChapterId: string | null = null;
        let targetLevel: CEFRLevel = "A1";

        // If specific lesson parts exist in the URL, open lesson view
        if (parts.length > 0) {
          if (isLeveled) {
            const rawLevel = parts[0]?.toUpperCase();
            if (CEFR_LEVELS.includes(rawLevel as CEFRLevel)) {
              targetLevel = rawLevel as CEFRLevel;
            }

            const levelData = data.curriculum?.find((c) => c.level === targetLevel);
            if (levelData && levelData.chapters.length > 0) {
              if (parts.length >= 3 && parts[1] && parts[2]) {
                targetChapterId = parts[1];
                targetLessonId = parts[2];
              } else if (parts.length === 2 && parts[1]) {
                const part = parts[1].toLowerCase();
                const matchCh = levelData.chapters.find((ch) => ch.id.toLowerCase() === part);
                if (matchCh) {
                  targetChapterId = matchCh.id;
                  targetLessonId = matchCh.lessons[0]?.id ?? null;
                } else {
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

              if (targetLessonId) {
                setViewMode("lesson");
                setActiveLevel(targetLevel);
                setActiveLessonId(targetLessonId);
                if (targetChapterId) {
                  setExpandedChapters({ [targetChapterId]: true });
                }
              } else {
                setViewMode("overview");
                setActiveLevel(targetLevel);
              }
            }
          } else if (isLessonsOnly) {
            const rawLessons: Lesson[] = data.lessons || [];
            if (parts.length >= 1 && parts[0]) {
              const part = parts[0].toLowerCase();
              const matchL = rawLessons.find((l) => l.id.toLowerCase() === part);
              if (matchL) {
                targetLessonId = matchL.id;
                setViewMode("lesson");
                setActiveLessonId(targetLessonId);
              }
            }
          } else {
            const rawChapters: Chapter[] = data.chapters || [];
            if (parts.length >= 2 && parts[0] && parts[1]) {
              targetChapterId = parts[0];
              targetLessonId = parts[1];
            } else if (parts.length === 1 && parts[0]) {
              const part = parts[0].toLowerCase();
              const matchCh = rawChapters.find((ch) => ch.id.toLowerCase() === part);
              if (matchCh) {
                targetChapterId = matchCh.id;
                targetLessonId = matchCh.lessons[0]?.id ?? null;
              }
            }

            if (targetLessonId) {
              setViewMode("lesson");
              setActiveLessonId(targetLessonId);
              if (targetChapterId) {
                setExpandedChapters({ [targetChapterId]: true });
              }
            } else {
              setViewMode("overview");
            }
          }
        } else {
          // No lesson in URL -> start on clean Course Details Overview page
          setViewMode("overview");
          if (isLeveled && data.curriculum?.[0]?.chapters?.[0]?.id) {
            setExpandedChapters({ [data.curriculum[0].chapters[0].id]: true });
          } else if (data.chapters?.[0]?.id) {
            setExpandedChapters({ [data.chapters[0].id]: true });
          }
        }
      }
    } catch (err: unknown) {
      console.error("Failed to load course details:", err);
      setError("Failed to load course details from API. Please ensure the backend server is running.");
    } finally {
      setIsLoading(false);
    }
  }, [courseId, slug]);

  useEffect(() => {
    isInitializedRef.current = false;
    loadCourse();
  }, [courseId, loadCourse]);

  // Determine course structure type
  const isLeveledCourse = useMemo(() => {
    if (!course) return true;
    if (
      course.structureType === "lessons-only" ||
      course.structureType === "chapters-and-lessons" ||
      course.structureType === "chapters-only"
    ) {
      return false;
    }
    if (course.structureType === "cefr-levels" || (course.structureType as any) === "european-levels") {
      return true;
    }
    return Boolean(course.curriculum && course.curriculum.length > 0);
  }, [course]);

  const isLessonsOnlyCourse = useMemo(() => {
    if (!course) return false;
    if (course.structureType === "lessons-only") return true;
    return (
      !isLeveledCourse &&
      (!course.chapters || course.chapters.length === 0) &&
      Boolean(course.lessons && course.lessons.length > 0)
    );
  }, [course, isLeveledCourse]);

  const directLessons: Lesson[] = useMemo(() => {
    return course?.lessons || [];
  }, [course]);

  const currentLevelCurriculum: LevelCurriculum | undefined = useMemo(() => {
    if (!isLeveledCourse) return undefined;
    return course?.curriculum?.find((c) => c.level === activeLevel);
  }, [course, activeLevel, isLeveledCourse]);

  const activeChapters: Chapter[] = useMemo(() => {
    if (isLessonsOnlyCourse) return [];
    if (isLeveledCourse) {
      return currentLevelCurriculum?.chapters || [];
    }
    return course?.chapters || course?.curriculum?.[0]?.chapters || [];
  }, [isLessonsOnlyCourse, isLeveledCourse, currentLevelCurriculum, course]);

  // Find currently active lesson and its parent chapter
  const activeLessonInfo: { lesson: Lesson; chapter: Chapter | null } | null = useMemo(() => {
    if (isLessonsOnlyCourse) {
      if (directLessons.length === 0) return null;
      const match = directLessons.find((l) => l.id === activeLessonId);
      if (match) return { lesson: match, chapter: null };
      const first = directLessons[0];
      return first ? { lesson: first, chapter: null } : null;
    }

    if (activeChapters.length === 0) return null;
    for (const chapter of activeChapters) {
      const lesson = chapter.lessons.find((l) => l.id === activeLessonId);
      if (lesson) {
        return { lesson, chapter };
      }
    }
    // Fallback to first lesson
    const firstChapter = activeChapters[0];
    if (firstChapter && firstChapter.lessons.length > 0) {
      const firstLesson = firstChapter.lessons[0];
      if (firstLesson) {
        return { lesson: firstLesson, chapter: firstChapter };
      }
    }
    return null;
  }, [isLessonsOnlyCourse, directLessons, activeChapters, activeLessonId]);

  const currentLessonContent = useMemo(() => {
    if (!activeLessonInfo) return undefined;
    return activeLessonInfo.lesson.content;
  }, [activeLessonInfo]);

  const handleLevelChange = (lvl: CEFRLevel) => {
    setActiveLevel(lvl);
    const targetLevel = course?.curriculum?.find((c) => c.level === lvl);
    if (targetLevel && targetLevel.chapters.length > 0) {
      const firstChapter = targetLevel.chapters[0];
      if (firstChapter) {
        setExpandedChapters({ [firstChapter.id]: true });
      }
    }
    syncUrl(viewMode, lvl);
  };

  const handleSelectLesson = (chapterId?: string, lessonId?: string) => {
    if (!lessonId) return;
    setActiveLessonId(lessonId);
    setViewMode("lesson");
    if (chapterId) {
      setExpandedChapters((prev) => ({ ...prev, [chapterId]: true }));
    }
    if (isLeveledCourse && chapterId) {
      syncUrl("lesson", activeLevel, chapterId, lessonId);
    } else if (chapterId) {
      syncUrl("lesson", undefined, chapterId, lessonId);
    } else {
      syncUrl("lesson", undefined, undefined, lessonId);
    }
  };

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  // Flattened list of lessons for Next/Previous navigation
  const allLessonsInLevel: { lesson: Lesson; chapterId?: string }[] = useMemo(() => {
    if (isLessonsOnlyCourse) {
      return directLessons.map((l) => ({ lesson: l }));
    }
    return activeChapters.flatMap((ch) =>
      ch.lessons.map((l) => ({ lesson: l, chapterId: ch.id }))
    );
  }, [isLessonsOnlyCourse, directLessons, activeChapters]);

  const currentLessonIndex = useMemo(() => {
    if (!activeLessonInfo?.lesson) return -1;
    return allLessonsInLevel.findIndex((item) => item.lesson.id === activeLessonInfo.lesson.id);
  }, [allLessonsInLevel, activeLessonInfo]);

  const currentChapterNumber = useMemo(() => {
    const chapter = activeLessonInfo?.chapter;
    if (!chapter) return 1;
    const match = chapter.title.match(/Chapter\s+(\d+)/i);
    if (match) return match[1];
    const idx = activeChapters.findIndex((c) => c.id === chapter.id);
    if (idx >= 0) return idx + 1;
    return 1;
  }, [activeLessonInfo, activeChapters]);

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

  const totalChapters = useMemo(() => {
    if (course?.totalChapters) return course.totalChapters;
    if (Array.isArray(course?.curriculum)) {
      return course.curriculum.reduce(
        (acc, lvl) => acc + (Array.isArray(lvl.chapters) ? lvl.chapters.length : 0),
        0
      );
    }
    return activeChapters.length;
  }, [course, activeChapters]);

  const totalLessons = useMemo(() => {
    if (course?.totalLessons) return course.totalLessons;
    if (Array.isArray(course?.curriculum)) {
      return course.curriculum.reduce(
        (acc, lvl) =>
          acc +
          (Array.isArray(lvl.chapters)
            ? lvl.chapters.reduce(
                (cAcc, ch) => cAcc + (Array.isArray(ch.lessons) ? ch.lessons.length : 0),
                0
              )
            : 0),
        0
      );
    }
    return allLessonsInLevel.length;
  }, [course, allLessonsInLevel]);

  const resolvedImageUrl = useMemo(() => {
    return resolveCourseImageUrl(course?.imageUrl);
  }, [course]);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col md:flex-row bg-white text-[#18191E] overflow-hidden animate-pulse">
        <div className="w-full md:w-80 lg:w-96 border-r border-neutral-200/80 bg-white p-5 flex flex-col gap-4">
          <div className="h-8 w-3/4 bg-neutral-100 rounded-xl" />
          <div className="h-10 w-full bg-neutral-100 rounded-xl" />
          <div className="flex-1 space-y-3 pt-4">
            <div className="h-12 bg-neutral-100 rounded-xl" />
            <div className="h-12 bg-neutral-100 rounded-xl" />
            <div className="h-12 bg-neutral-100 rounded-xl" />
          </div>
        </div>
        <div className="flex-1 p-8 flex flex-col gap-6">
          <div className="h-16 w-full bg-white border border-neutral-200 rounded-2xl" />
          <div className="flex-1 bg-white border border-neutral-200 rounded-3xl" />
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white p-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-[#18191E]">Course Not Found</h2>
          <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
            {error || "Could not retrieve the requested course details."}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => {
                isInitializedRef.current = false;
                loadCourse();
              }}
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
    <div className="h-screen w-full flex flex-col md:flex-row bg-white text-[#18191E] font-sans selection:bg-[#18191E] selection:text-white overflow-hidden">
      {/* ========================================================================= */}
      {/* LEFT SIDEBAR: Minimal, structured course outline                          */}
      {/* ========================================================================= */}
      <aside className="w-full md:w-80 lg:w-[360px] xl:w-[390px] shrink-0 h-full bg-white border-r border-neutral-200 flex flex-col z-20 shadow-2xs">
        {/* 1. Top Header with Back to Courses Link & Title */}
        <div className="p-3.5 sm:p-4 border-b border-neutral-200 bg-white flex items-center gap-2.5 min-h-[61px]">
          <Link
            href="/courses"
            className="text-neutral-500 hover:text-[#18191E] transition-colors shrink-0 cursor-pointer flex items-center justify-center group p-0.5"
            title="Return to courses directory"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </Link>

          <h1
            className="text-sm font-bold text-[#18191E] tracking-tight leading-snug line-clamp-1"
            title={course.title}
          >
            {course.title}
          </h1>
        </div>

        {/* 2. COURSE DETAILS & OVERVIEW BUTTON */}
        <div className="p-2 border-b border-neutral-100 bg-neutral-50/50">
          <button
            type="button"
            onClick={() => {
              setViewMode("overview");
              syncUrl("overview", isLeveledCourse ? activeLevel : undefined);
            }}
            className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between gap-2 text-xs font-bold transition-all cursor-pointer ${
              viewMode === "overview"
                ? "bg-[#18191E] text-white shadow-xs"
                : "text-neutral-700 hover:bg-neutral-200/70"
            }`}
          >
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Course Details &amp; Overview</span>
            </span>
            <span className="text-[10px] font-semibold opacity-70">
              {isLessonsOnlyCourse ? `${directLessons.length} lessons` : `${activeChapters.length} chapters`}
            </span>
          </button>
        </div>

        {/* 3. CEFR Level Selector (Rendered ONLY if leveled course, e.g. German A1-C2) */}
        {isLeveledCourse && (
          <div className="p-3 sm:p-3.5 border-b border-neutral-200 bg-neutral-50/60">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                CEFR Level
              </span>
              <span className="text-[10px] font-semibold text-neutral-500 truncate max-w-[170px]">
                {currentLevelCurriculum?.title.split("•")[1]?.trim() || "Beginner"}
              </span>
            </div>

            <div className="grid grid-cols-6 gap-1 p-1 rounded-xl bg-neutral-200/60 border border-neutral-200">
              {CEFR_LEVELS.map((lvl) => {
                const isActive = activeLevel === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => handleLevelChange(lvl)}
                    className={`py-1 rounded-lg text-xs font-black transition-all cursor-pointer text-center ${
                      isActive
                        ? "bg-[#18191E] text-white shadow-xs scale-[1.03]"
                        : "text-neutral-600 hover:text-[#18191E] hover:bg-white"
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Scrollable Chapters & Lessons Outline */}
        <div className="p-3 border-b border-neutral-100 flex items-center justify-between bg-white text-xs font-bold text-[#18191E]">
          <span className="flex items-center gap-1.5 text-neutral-600">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Outline</span>
          </span>
          <span className="text-[11px] font-medium text-neutral-400">
            {isLessonsOnlyCourse ? `${directLessons.length} Lessons` : `${activeChapters.length} Chapters`}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-neutral-100">
          {isLessonsOnlyCourse ? (
            <div className="py-1">
              {directLessons.map((lesson, lIdx) => {
                const isLessonActive = viewMode === "lesson" && activeLessonId === lesson.id;
                const lessonNumber = lIdx + 1;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => handleSelectLesson(undefined, lesson.id)}
                    className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-all cursor-pointer ${
                      isLessonActive
                        ? "bg-neutral-100 text-[#18191E] border-l-4 border-[#18191E] font-bold"
                        : "hover:bg-neutral-50 text-neutral-700 border-l-4 border-transparent"
                    }`}
                  >
                    <span className="min-w-4 h-4 px-1 rounded border border-neutral-300 flex items-center justify-center text-[9px] font-bold text-neutral-600 shrink-0 mt-0.5">
                      {lessonNumber}
                    </span>
                    <p className="text-xs leading-snug line-clamp-2">
                      {formatLessonTitle(lesson.title, lessonNumber)}
                    </p>
                  </button>
                );
              })}
            </div>
          ) : (
            activeChapters.map((chapter, chIdx) => {
              const isExpanded = Boolean(expandedChapters[chapter.id]);

              return (
                <div key={chapter.id} className="transition-colors">
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-2.5 hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-5 h-5 rounded bg-neutral-100 text-neutral-800 text-[10px] font-bold flex items-center justify-center shrink-0 border border-neutral-200">
                        {chIdx + 1}
                      </span>
                      <span className="text-xs font-bold text-[#18191E] truncate">
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

                  {isExpanded && (
                    <div className="bg-neutral-50/60 pb-1">
                      {(() => {
                        const previousLessonsCount = activeChapters
                          .slice(0, chIdx)
                          .reduce((sum, ch) => sum + ch.lessons.length, 0);

                        return chapter.lessons.map((lesson, lIdx) => {
                          const isLessonActive = viewMode === "lesson" && activeLessonId === lesson.id;
                          const continuousLessonNumber = previousLessonsCount + lIdx + 1;

                          return (
                            <button
                              key={lesson.id}
                              onClick={() => handleSelectLesson(chapter.id, lesson.id)}
                              className={`w-full text-left px-4 py-2.5 flex items-start gap-2.5 transition-all cursor-pointer ${
                                isLessonActive
                                  ? "bg-neutral-200/80 text-[#18191E] border-l-4 border-[#18191E] font-bold"
                                  : "hover:bg-neutral-100/90 text-neutral-600 border-l-4 border-transparent"
                              }`}
                            >
                              <span className="min-w-4 h-4 px-1 rounded border border-neutral-300 flex items-center justify-center text-[9px] font-semibold text-neutral-500 shrink-0 mt-0.5">
                                {continuousLessonNumber}
                              </span>
                              <p className="text-xs leading-snug line-clamp-2">
                                {formatLessonTitle(lesson.title, continuousLessonNumber)}
                              </p>
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
      {/* MAIN CONTENT AREA: Course Overview OR Lesson Details                      */}
      {/* ========================================================================= */}
      <main className="flex-1 h-full flex flex-col overflow-hidden bg-white">
        {viewMode === "overview" ? (
          /* ===================================================================== */
          /* 1. MINIMAL, CLEAN COURSE DETAILS & OVERVIEW PAGE                      */
          /* ===================================================================== */
          <div className="flex-1 overflow-y-auto p-6 sm:p-10">
            <div className="max-w-4xl mx-auto space-y-8 pb-16">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 font-semibold">
                <Link href="/courses" className="hover:text-black hover:underline">
                  Courses
                </Link>
                <span>/</span>
                <span>{course.category}</span>
                <span>/</span>
                <span className="text-[#18191E] font-bold truncate max-w-xs">{course.title}</span>
              </div>

              {/* Course Hero Banner Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-2xs space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {resolvedImageUrl && (
                    <div className="w-full md:w-56 lg:w-64 h-44 rounded-2xl overflow-hidden border border-neutral-200 shrink-0 bg-neutral-100">
                      <img
                        src={resolvedImageUrl}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-neutral-200 text-[#18191E] text-xs font-bold">
                        {course.category}
                      </span>
                      {course.tag1 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs font-medium">
                          {course.tag1}
                        </span>
                      )}
                      {course.tag2 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs font-medium">
                          {course.tag2}
                        </span>
                      )}
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#18191E] tracking-tight leading-tight">
                      {course.title}
                    </h1>

                    {course.description && (
                      <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                        {course.description}
                      </p>
                    )}

                    {/* Quick Metrics Bar */}
                    <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-neutral-200/80 text-xs text-neutral-600">
                      <div className="flex items-center gap-1.5 font-bold text-[#18191E]">
                        <Layers className="w-4 h-4 text-neutral-400" />
                        <span>{totalChapters} Chapters</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-[#18191E]">
                        <BookOpen className="w-4 h-4 text-neutral-400" />
                        <span>{totalLessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium text-neutral-500">
                        <GraduationCap className="w-4 h-4 text-neutral-400" />
                        <span>{isLeveledCourse ? "CEFR A1–C2 Levels" : course.type}</span>
                      </div>
                    </div>

                    {/* Primary Action Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          const firstLesson = allLessonsInLevel[0];
                          if (firstLesson) {
                            handleSelectLesson(firstLesson.chapterId, firstLesson.lesson.id);
                          }
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18191E] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Start Learning ({allLessonsInLevel[0]?.lesson.title ? "Lesson 1" : "Start Course"})</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Curriculum Overview Section */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#18191E]">
                      Course Curriculum
                    </h2>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {isLeveledCourse ? `Level ${activeLevel} • ` : ""}{activeChapters.length} Chapters • {allLessonsInLevel.length} Lessons
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {activeChapters.map((chapter, chIdx) => (
                    <div key={chapter.id} className="rounded-2xl border border-neutral-200 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleChapter(chapter.id)}
                        className="w-full p-4 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-[#18191E] text-white text-xs font-bold flex items-center justify-center">
                            {chIdx + 1}
                          </span>
                          <span className="font-bold text-sm text-[#18191E]">
                            {chapter.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                          <span>{chapter.lessons.length} {chapter.lessons.length === 1 ? "lesson" : "lessons"}</span>
                          {expandedChapters[chapter.id] ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      {expandedChapters[chapter.id] && (
                        <div className="divide-y divide-neutral-100 bg-white">
                          {chapter.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="p-3.5 sm:p-4 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
                            >
                              <div className="flex items-start gap-3 min-w-0">
                                <div className="pt-0.5">
                                  <BookOpen className="w-4 h-4 text-neutral-400 shrink-0" />
                                </div>
                                <div className="min-w-0">
                                  <h3 className="text-xs sm:text-sm font-bold text-[#18191E]">
                                    {lesson.title}
                                  </h3>
                                  {lesson.description && (
                                    <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                                      {lesson.description}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleSelectLesson(chapter.id, lesson.id)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-[#18191E] text-neutral-800 hover:text-white text-xs font-bold transition-all shrink-0 cursor-pointer"
                              >
                                <span>Open Lesson</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ===================================================================== */
          /* 2. MINIMAL, CLEAN LESSON DETAILS & CONTENTS PAGE                      */
          /* ===================================================================== */
          activeLessonInfo ? (
            <>
              {/* Header Bar */}
              <header className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white border-b border-neutral-200 shrink-0 flex items-center justify-between gap-4 min-h-[61px] shadow-2xs">
                <div className="min-w-0 flex-1 flex items-center">
                  <h2
                    className="text-base sm:text-lg font-bold text-[#18191E] tracking-tight truncate"
                    title={activeLessonInfo.lesson.title}
                  >
                    {activeLessonInfo.lesson.title}
                  </h2>
                </div>

                {/* Next / Prev Shortcuts */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={goToPrevLesson}
                    disabled={currentLessonIndex <= 0}
                    className="p-1.5 rounded-lg border border-neutral-200 text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
                    title="Previous Lesson"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNextLesson}
                    disabled={currentLessonIndex >= allLessonsInLevel.length - 1}
                    className="p-1.5 rounded-lg border border-neutral-200 text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
                    title="Next Lesson"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </header>

              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col justify-between bg-white">
                {currentLessonContent ? (
                  <div className="max-w-4xl w-full mx-auto space-y-8 py-2 pb-16">
                    {/* Lesson Overview & Objectives */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
                      <div className="border-b border-neutral-200 pb-2">
                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                          Lesson Overview
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                        {currentLessonContent.overview}
                      </p>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#18191E] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </div>
                        <div>
                          <span className="font-bold text-[#18191E] text-xs uppercase tracking-wider block">
                            Learning Objective
                          </span>
                          <p className="text-xs sm:text-sm text-neutral-700 mt-0.5 font-medium">
                            {currentLessonContent.canDo.replace(/^Can\s+/i, "Learn to ")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Teacher / Key Concept Note (if present) */}
                    {currentLessonContent.teacherNote && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200 flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                            Key Concept &amp; Strategy
                          </span>
                          <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                            {currentLessonContent.teacherNote}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Core Lesson Sections (Clean Tables WITHOUT Audio Columns) */}
                    {currentLessonContent.sections.map((section, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-4"
                      >
                        <div className="border-b border-neutral-100 pb-3">
                          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Section {sIdx + 1}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-[#18191E]">
                            {section.title}
                          </h3>
                          {section.description && (
                            <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                              {section.description}
                            </p>
                          )}
                        </div>

                        {/* Clean Table with Standard Headers - ZERO AUDIO COLUMNS */}
                        {section.table && (
                          <div className="overflow-x-auto rounded-xl border border-neutral-200">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                              <thead>
                                <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-700 font-bold">
                                  {section.table.headers.map((h, hIdx) => (
                                    <th key={hIdx} className="py-2.5 px-3.5 font-bold">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-neutral-100">
                                {section.table.rows.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-neutral-50 transition-colors">
                                    {row.map((cell, cIdx) => (
                                      <td
                                        key={cIdx}
                                        className={`py-2.5 px-3.5 ${
                                          cIdx === 0
                                            ? "font-bold text-[#18191E]"
                                            : "font-normal text-neutral-600"
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

                        {/* Section Items (Concept & Vocabulary Cards - ZERO AUDIO) */}
                        {section.items && section.items.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            {section.items.map((item, iIdx) => (
                              <div
                                key={iIdx}
                                className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 flex flex-col justify-between"
                              >
                                <div className="space-y-1.5">
                                  <div className="flex items-center justify-between gap-2 border-b border-neutral-200/70 pb-1.5">
                                    <span className="font-bold text-xs sm:text-sm text-[#18191E]">
                                      {item.term}
                                    </span>
                                    {item.pronunciation && (
                                      <span className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-600 bg-neutral-200/70 px-2 py-0.5 rounded">
                                        [{item.pronunciation}]
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-neutral-600 leading-relaxed">
                                    {item.meaning}
                                  </p>
                                </div>
                                {item.example && (
                                  <div className="pt-2 border-t border-neutral-200/60 text-xs">
                                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                                      Examples:
                                    </span>
                                    <p className="font-medium text-[#18191E] leading-relaxed">
                                      {item.example}
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Section Notes */}
                        {section.notes && section.notes.length > 0 && (
                          <ul className="space-y-1 text-xs text-neutral-600 list-disc list-inside pt-1">
                            {section.notes.map((n, nIdx) => (
                              <li key={nIdx}>{n}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Conversational Dialogue Flow (Praxis-Dialog with Direct English) */}
                    {currentLessonContent.dialogue && currentLessonContent.dialogue.lines && currentLessonContent.dialogue.lines.length > 0 && (
                      <div className="p-5 sm:p-7 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-4">
                        <div className="border-b border-neutral-100 pb-3">
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                            {isGermanCourse ? "Praxis-Dialog" : "Practical Dialogue"}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-[#18191E] mt-0.5">
                            {currentLessonContent.dialogue.context || (isGermanCourse ? "Dialogue Flow • German with Direct English Translation" : "Conversational Dialogue Flow")}
                          </h3>
                        </div>

                        <div className="space-y-3 pt-1">
                          {currentLessonContent.dialogue.lines.map((line, lIdx) => {
                            const primaryText = line.text || line.german;
                            const secondaryText = line.notes || (line.english !== primaryText ? line.english : undefined);
                            return (
                              <div
                                key={lIdx}
                                className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/80 transition-colors hover:bg-neutral-50"
                              >
                                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-xs font-bold text-[#18191E] shrink-0 shadow-2xs">
                                  {line.speaker.slice(0, 2).toUpperCase()}
                                </div>

                                <div className="min-w-0 flex-1 space-y-1">
                                  <span className="text-xs font-bold text-[#18191E]">
                                    {line.speaker}
                                  </span>

                                  <p className="text-sm sm:text-base font-bold text-[#18191E] leading-snug">
                                    {primaryText}
                                  </p>

                                  {secondaryText && (
                                    <p className="text-xs sm:text-sm text-neutral-600 leading-snug font-normal">
                                      {secondaryText}
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Fun Fact / Cultural Spotlight */}
                    {currentLessonContent.funFact && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                          Insight &amp; Context
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#18191E]">
                          {currentLessonContent.funFact.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {currentLessonContent.funFact.content}
                        </p>
                      </div>
                    )}

                  </div>
                ) : (
                  /* Empty state if content is being prepared */
                  <div className="max-w-md w-full mx-auto my-auto py-12 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500 mb-4">
                      <FileQuestion className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold text-[#18191E]">
                      Lesson Content in Preparation
                    </h2>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                      {activeLessonInfo.lesson.description ||
                        "This lesson is part of the curriculum and the study materials are being structured."}
                    </p>
                  </div>
                )}

                {/* Bottom Lesson Navigation */}
                <div className="max-w-4xl w-full mx-auto pt-6 border-t border-neutral-200 flex items-center justify-between gap-4">
                  <button
                    onClick={goToPrevLesson}
                    disabled={currentLessonIndex <= 0}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Lesson</span>
                  </button>

                  <span className="text-xs text-neutral-500 font-medium hidden sm:inline-block">
                    Lesson {currentLessonIndex + 1} of {allLessonsInLevel.length}
                  </span>

                  <button
                    onClick={goToNextLesson}
                    disabled={currentLessonIndex >= allLessonsInLevel.length - 1}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all bg-[#18191E] text-white hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>Next Lesson</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </>
          ) : null
        )}
      </main>
    </div>
  );
}
