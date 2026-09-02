import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "API server is running",
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "healthy" });
});

export { app };
export default app;
