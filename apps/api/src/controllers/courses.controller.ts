import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { COURSES_DATA } from "../data/courses.data";
import { Course } from "../types/course.types";

/**
 * Ensures course image URLs are absolute URLs hosted directly by this API.
 */
export const withAbsoluteImageUrl = (req: Request, course: Course): Course => {
  if (!course.imageUrl) {
    return course;
  }

  // Already an absolute URL
  if (course.imageUrl.startsWith("http://") || course.imageUrl.startsWith("https://")) {
    return course;
  }

  const protocol = (req.headers["x-forwarded-proto"] as string) || req.protocol || "http";
  const host = req.get("host") || `localhost:${process.env.PORT || 5000}`;
  const baseUrl = process.env.API_BASE_URL || `${protocol}://${host}`;
  const cleanPath = course.imageUrl.startsWith("/") ? course.imageUrl : `/${course.imageUrl}`;

  return {
    ...course,
    imageUrl: `${baseUrl}${cleanPath}`,
  };
};

/**
 * @desc Get all courses with optional filters for category, featured, and search query
 * @route GET /courses or GET /api/v1/courses
 */
export const getAllCourses = asyncHandler(async (req: Request, res: Response) => {
  const { category, featured, search } = req.query;

  let courses = [...COURSES_DATA];

  if (
    typeof category === "string" &&
    category.trim() !== "" &&
    category.toLowerCase() !== "all courses" &&
    category.toLowerCase() !== "all"
  ) {
    courses = courses.filter(
      (c) => c.category.toLowerCase() === category.trim().toLowerCase()
    );
  }

  if (typeof featured === "string") {
    const isFeatured = featured.toLowerCase() === "true" || featured === "1";
    courses = courses.filter((c) => Boolean(c.featured) === isFeatured);
  }

  if (typeof search === "string" && search.trim() !== "") {
    const term = search.trim().toLowerCase();
    courses = courses.filter(
      (c) =>
        c.title.toLowerCase().includes(term) ||
        c.description?.toLowerCase().includes(term) ||
        c.tag1.toLowerCase().includes(term) ||
        c.tag2.toLowerCase().includes(term) ||
        c.type.toLowerCase().includes(term)
    );
  }

  const formattedCourses = courses.map((c) => withAbsoluteImageUrl(req, c));

  return res.status(200).json(
    new ApiResponse(
      200,
      formattedCourses,
      "Courses fetched successfully"
    )
  );
});

/**
 * @desc Get single course by ID
 * @route GET /courses/:id or GET /api/v1/courses/:id
 */
export const getCourseById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const course = COURSES_DATA.find((c) => c.id === id);

  if (!course) {
    throw new ApiError(404, `Course with ID '${id}' was not found`);
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      withAbsoluteImageUrl(req, course),
      "Course fetched successfully"
    )
  );
});
