import { CourseItem } from "../components/CourseCard";

const API_BASE_URL =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL) ||
  "http://localhost:5000";

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface LessonPracticeQuestion {
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface LessonDialogueLine {
  speaker: string;
  german: string;
  english: string;
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
  overview: string;
  canDo: string;
  teacherNote?: string;
  sections: LessonSection[];
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
  level: CEFRLevel;
  title: string;
  description: string;
  chapters: Chapter[];
}

export type CourseStructureType =
  | "cefr-levels"
  | "chapters-and-lessons"
  | "lessons-only"
  | "chapters-only";

export interface CourseDetail extends CourseItem {
  structureType?: CourseStructureType;
  curriculum?: LevelCurriculum[];
  chapters?: Chapter[];
  lessons?: Lesson[];
}

interface FetchCoursesOptions {
  category?: string;
  featured?: boolean;
  search?: string;
}

interface ApiResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

import { FALLBACK_COURSES } from "./courses-fallback";

/**
 * Resolves a course imageUrl into an absolute URL hosted on the backend API.
 */
export function resolveCourseImageUrl(imageUrl?: string | null): string | undefined {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  const clean = imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;
  return `${API_BASE_URL}${clean}`;
}

/**
 * Fetches all courses or filtered courses from the backend API, falling back to local dataset if offline.
 */
export async function fetchCourses(
  options?: FetchCoursesOptions
): Promise<CourseDetail[]> {
  try {
    const url = new URL("/api/v1/courses", API_BASE_URL);

    if (options?.category && options.category !== "All Courses") {
      url.searchParams.append("category", options.category);
    }
    if (options?.featured !== undefined) {
      url.searchParams.append("featured", String(options.featured));
    }
    if (options?.search && options.search.trim()) {
      url.searchParams.append("search", options.search.trim());
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const json: ApiResponse<CourseDetail[]> = await response.json();
    const courses = json.data || [];
    return courses.map((c) => ({
      ...c,
      imageUrl: resolveCourseImageUrl(c.imageUrl),
    }));
  } catch (error) {
    console.warn("API unavailable, using local fallback courses dataset:", error);
    let list = [...FALLBACK_COURSES];
    if (options?.category && options.category !== "All Courses" && options.category !== "All") {
      list = list.filter((c) => c.category.toLowerCase() === options.category!.trim().toLowerCase());
    }
    if (options?.featured !== undefined) {
      list = list.filter((c) => Boolean(c.featured) === options.featured);
    }
    if (options?.search && options.search.trim()) {
      const term = options.search.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(term) ||
          c.description?.toLowerCase().includes(term) ||
          c.tag1.toLowerCase().includes(term) ||
          c.tag2.toLowerCase().includes(term)
      );
    }
    return list.map((c) => ({
      ...c,
      imageUrl: resolveCourseImageUrl(c.imageUrl),
    }));
  }
}

/**
 * Fetches a single course by ID from the backend API, falling back to local dataset if offline.
 */
export async function fetchCourseById(id: string): Promise<CourseDetail | null> {
  try {
    const url = new URL(`/api/v1/courses/${id}`, API_BASE_URL);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const json: ApiResponse<CourseDetail> = await response.json();
    const course = json.data || null;
    return course ? { ...course, imageUrl: resolveCourseImageUrl(course.imageUrl) } : null;
  } catch (error) {
    console.warn(`API unavailable, using local fallback for course '${id}':`, error);
    const fallback = FALLBACK_COURSES.find((c) => c.id === id);
    return fallback ? { ...fallback, imageUrl: resolveCourseImageUrl(fallback.imageUrl) } : null;
  }
}

export type {
  BlogPost,
  BlogCategory,
  BlogSection,
  BlogAuthor,
} from "./blogs-fallback";
import { FALLBACK_BLOGS, BlogPost } from "./blogs-fallback";

export interface FetchBlogsOptions {
  category?: string;
  search?: string;
  tag?: string;
}

/**
 * Fetches all blogs or filtered blogs from the backend API, falling back to local dataset if offline.
 */
export async function fetchBlogs(
  options?: FetchBlogsOptions
): Promise<BlogPost[]> {
  try {
    const url = new URL("/api/v1/blogs", API_BASE_URL);

    if (options?.category && options.category !== "All") {
      url.searchParams.append("category", options.category);
    }
    if (options?.search && options.search.trim()) {
      url.searchParams.append("search", options.search.trim());
    }
    if (options?.tag && options.tag.trim()) {
      url.searchParams.append("tag", options.tag.trim());
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (response.ok) {
      const json: ApiResponse<BlogPost[]> = await response.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        return json.data;
      }
    }
  } catch (error) {
    console.warn("API request for blogs failed, falling back to local dataset:", error);
  }

  // Fallback filtering
  let results: BlogPost[] = [...FALLBACK_BLOGS];
  if (options?.category && options.category !== "All") {
    results = results.filter(
      (b: BlogPost) => b.category.toLowerCase() === options.category?.toLowerCase()
    );
  }
  if (options?.search && options.search.trim()) {
    const term = options.search.trim().toLowerCase();
    results = results.filter(
      (b: BlogPost) =>
        b.title.toLowerCase().includes(term) ||
        b.excerpt.toLowerCase().includes(term) ||
        b.category.toLowerCase().includes(term) ||
        b.tags.some((t: string) => t.toLowerCase().includes(term))
    );
  }
  if (options?.tag && options.tag.trim()) {
    const term = options.tag.trim().toLowerCase();
    results = results.filter((b: BlogPost) =>
      b.tags.some((t: string) => t.toLowerCase() === term)
    );
  }
  return results;
}

/**
 * Fetches a single blog by ID or slug from the backend API, with fallback.
 */
export async function fetchBlogById(
  idOrSlug: string
): Promise<BlogPost | null> {
  try {
    const url = new URL(`/api/v1/blogs/${idOrSlug}`, API_BASE_URL);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (response.ok) {
      const json: ApiResponse<BlogPost> = await response.json();
      if (json.data) {
        return json.data;
      }
    }
  } catch (error) {
    console.warn(`API request for blog '${idOrSlug}' failed, using fallback:`, error);
  }

  const fallback = FALLBACK_BLOGS.find(
    (b: BlogPost) => b.id === idOrSlug || b.slug === idOrSlug
  );
  return fallback || null;
}

