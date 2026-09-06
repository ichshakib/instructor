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
 * Fetches all courses or filtered courses from the backend API.
 */
export async function fetchCourses(
  options?: FetchCoursesOptions
): Promise<CourseDetail[]> {
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
}

/**
 * Fetches a single course by ID from the backend API.
 */
export async function fetchCourseById(id: string): Promise<CourseDetail | null> {
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
}

export type BlogCategory =
  | "Grammar"
  | "Vocabulary"
  | "Exam Prep"
  | "German Life & Culture"
  | "Study Tips"
  | "Career";

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogSection {
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  keyTakeaway?: string;
  bulletPoints?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  sections: BlogSection[];
}

export interface FetchBlogsOptions {
  category?: string;
  search?: string;
  tag?: string;
}

/**
 * Fetches all blogs or filtered blogs from the backend API.
 * Throws an error if the API request fails.
 */
export async function fetchBlogs(
  options?: FetchBlogsOptions
): Promise<BlogPost[]> {
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

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const json: ApiResponse<BlogPost[]> = await response.json();
  return json.data || [];
}

/**
 * Fetches a single blog by ID or slug from the backend API.
 * Throws an error if the API request fails.
 */
export async function fetchBlogById(
  idOrSlug: string
): Promise<BlogPost | null> {
  const url = new URL(`/api/v1/blogs/${idOrSlug}`, API_BASE_URL);

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

  const json: ApiResponse<BlogPost> = await response.json();
  return json.data || null;
}


