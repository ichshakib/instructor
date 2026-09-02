import express, { Application } from "express";
import cors from "cors";
import morganMiddleware from "./logger/morgan.logger";
import router from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

// Routes
app.use("/", router);
app.use("/api/v1", router);

// Central Error Handling Middleware (must be registered after routes)
app.use(errorHandler);

export { app };
export default app;
