export interface LessonPracticeQuestion {
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface LessonDialogueLine {
  speaker: string;
  german?: string;
  text?: string;
  english?: string;
  notes?: string;
}

export interface LessonSectionItem {
  term: string;
  pronunciation?: string;
  meaning: string;
  example?: string;
}

export interface LessonTable {
  headers: string[];
  rows: string[][];
}

export interface LessonSection {
  title: string;
  description?: string;
  table?: LessonTable;
  items?: LessonSectionItem[];
  notes?: string[];
}

export interface LessonContent {
  overview?: string;
  canDo?: string;
  teacherNote?: string;
  sections?: LessonSection[];
  dialogue?: {
    context: string;
    lines: LessonDialogueLine[];
  };
  funFact?: {
    title: string;
    content: string;
  };
  practice?: LessonPracticeQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  duration?: string;
  description?: string;
  content?: LessonContent;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface LevelCurriculum {
  level: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

export interface CourseItem {
  id: string;
  title: string;
  category: string;
  type: string;
  typeIcon: "quiz" | "page" | "path" | "lab" | string;
  tag1: string;
  tag2: string;
  badgeCount: string;
  coverVariant: string;
  imageUrl?: string;
  buttonLabel: string;
  description: string;
  featured?: boolean;
  totalChapters?: number;
  totalLessons?: number;
  curriculum?: LevelCurriculum[];
  chapters?: Chapter[];
  progressStatus?: {
    type: "points" | "progress" | "status";
    statusText?: string;
  };
}

export const API_BASE_URL = "http://192.168.0.105:5000";

// Fast In-Memory Course & Lesson Cache for Instant Page Transitions
const COURSE_CACHE = new Map<string, CourseItem>();

export function getCachedCourse(id: string): CourseItem | null {
  return COURSE_CACHE.get(id) || null;
}

export function setCachedCourse(course: CourseItem) {
  if (course && course.id) {
    COURSE_CACHE.set(course.id, course);
  }
}

export function getCachedLesson(
  courseId: string,
  lessonId: string
): { lesson: Lesson; chapter?: Chapter; course?: CourseItem } | null {
  const course = getCachedCourse(courseId);
  if (!course) return null;

  let foundLesson: Lesson | null = null;
  let foundChapter: Chapter | undefined;

  if (Array.isArray(course.curriculum)) {
    for (const level of course.curriculum) {
      if (Array.isArray(level.chapters)) {
        for (const chapter of level.chapters) {
          const match = chapter.lessons?.find((l) => l.id === lessonId);
          if (match) {
            foundLesson = match;
            foundChapter = chapter;
            break;
          }
        }
      }
      if (foundLesson) break;
    }
  }

  if (!foundLesson && Array.isArray(course.chapters)) {
    for (const chapter of course.chapters) {
      const match = chapter.lessons?.find((l) => l.id === lessonId);
      if (match) {
        foundLesson = match;
        foundChapter = chapter;
        break;
      }
    }
  }

  if (foundLesson) {
    return { lesson: foundLesson, chapter: foundChapter, course };
  }
  return null;
}

export async function fetchCourses(options?: {
  category?: string;
  featured?: boolean;
  search?: string;
}): Promise<CourseItem[]> {
  const params = new URLSearchParams();
  if (options?.category && options.category !== "All" && options.category !== "All Courses") {
    params.set("category", options.category);
  }
  if (options?.featured !== undefined) {
    params.set("featured", String(options.featured));
  }
  if (options?.search) {
    params.set("search", options.search);
  }

  const queryString = params.toString();
  const url = `${API_BASE_URL}/courses${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const courses: CourseItem[] = json.data || json;
  if (Array.isArray(courses)) {
    courses.forEach((c) => setCachedCourse(c));
  }
  return courses;
}

export async function fetchCourseById(id: string): Promise<CourseItem | null> {
  const cached = getCachedCourse(id);
  if (cached && (cached.curriculum?.length || cached.chapters?.length)) {
    return cached;
  }

  const url = `${API_BASE_URL}/courses/${id}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const course: CourseItem = json.data || json;
  if (course && course.id) {
    setCachedCourse(course);
    return course;
  }
  return null;
}

export async function fetchLessonById(
  courseId: string,
  lessonId: string
): Promise<{ lesson: Lesson; chapter?: Chapter; course?: CourseItem } | null> {
  const cached = getCachedLesson(courseId, lessonId);
  if (cached && cached.lesson?.content) {
    return cached;
  }

  const course = await fetchCourseById(courseId);
  if (!course) return null;
  return getCachedLesson(courseId, lessonId);
};
