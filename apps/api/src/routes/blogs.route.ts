import { Router } from "express";
import {
  getAllBlogs,
  getBlogByIdOrSlug,
} from "../controllers/blogs.controller";

const router = Router();

router.route("/").get(getAllBlogs);
router.route("/:idOrSlug").get(getBlogByIdOrSlug);

export default router;
