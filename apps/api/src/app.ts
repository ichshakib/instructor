import express, { Application } from "express";
import cors from "cors";
import path from "path";
import morganMiddleware from "./logger/morgan.logger";
import router from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

// Serve static assets from public folder
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use("/course-images", express.static(path.join(__dirname, "../public/course-images")));

// Routes
app.use("/", router);
app.use("/api/v1", router);

// Central Error Handling Middleware (must be registered after routes)
app.use(errorHandler);

export { app };
export default app;
