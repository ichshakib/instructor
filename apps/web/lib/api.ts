import { CourseItem } from "../components/CourseCard";

const API_BASE_URL =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL) ||
  "http://localhost:5000";

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
 * Fetches all courses or filtered courses from the backend API.
 */
export async function fetchCourses(
  options?: FetchCoursesOptions
): Promise<CourseItem[]> {
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

    const json: ApiResponse<CourseItem[]> = await response.json();
    return json.data || [];
  } catch (error) {
    console.error("Failed to fetch courses from API:", error);
    throw error;
  }
}

/**
 * Fetches a single course by ID from the backend API.
 */
export async function fetchCourseById(id: string): Promise<CourseItem | null> {
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

    const json: ApiResponse<CourseItem> = await response.json();
    return json.data || null;
  } catch (error) {
    console.error(`Failed to fetch course '${id}' from API:`, error);
    throw error;
  }
}
