import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { COURSES_DATA } from "../data/courses.data";

/**
 * @desc Get all courses with optional filters for category, featured, and search query
 * @route GET /courses or GET /api/v1/courses
 */
export const getAllCourses = asyncHandler(async (req: Request, res: Response) => {
  const { category, featured, search } = req.query;

  let courses = [...COURSES_DATA];

  if (typeof category === "string" && category.trim() !== "" && category.toLowerCase() !== "all courses" && category.toLowerCase() !== "all") {
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

  return res.status(200).json(
    new ApiResponse(
      200,
      courses,
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
      course,
      "Course fetched successfully"
    )
  );
});
