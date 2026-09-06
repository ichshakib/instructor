import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { BLOGS_DATA } from "../data/blogs.data";

/**
 * @desc Get all blog articles with optional category and search filters
 * @route GET /blogs or GET /api/v1/blogs
 */
export const getAllBlogs = asyncHandler(async (req: Request, res: Response) => {
  const { category, search, tag } = req.query;

  let blogs = [...BLOGS_DATA];

  if (
    typeof category === "string" &&
    category.trim() !== "" &&
    category.toLowerCase() !== "all"
  ) {
    blogs = blogs.filter(
      (b) => b.category.toLowerCase() === category.trim().toLowerCase()
    );
  }

  if (typeof tag === "string" && tag.trim() !== "") {
    const searchTag = tag.trim().toLowerCase();
    blogs = blogs.filter((b) =>
      b.tags.some((t) => t.toLowerCase() === searchTag)
    );
  }

  if (typeof search === "string" && search.trim() !== "") {
    const term = search.trim().toLowerCase();
    blogs = blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(term) ||
        b.excerpt.toLowerCase().includes(term) ||
        b.category.toLowerCase().includes(term) ||
        b.tags.some((t) => t.toLowerCase().includes(term))
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      blogs,
      "Blogs fetched successfully"
    )
  );
});

/**
 * @desc Get single blog article by ID or slug
 * @route GET /blogs/:idOrSlug or GET /api/v1/blogs/:idOrSlug
 */
export const getBlogByIdOrSlug = asyncHandler(async (req: Request, res: Response) => {
  const { idOrSlug } = req.params;

  const blog = BLOGS_DATA.find(
    (b) => b.id === idOrSlug || b.slug === idOrSlug
  );

  if (!blog) {
    throw new ApiError(404, `Blog post with identifier '${idOrSlug}' was not found`);
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      blog,
      "Blog post fetched successfully"
    )
  );
});
