import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const port = process.env.PORT || 5000;

export const startServer = () => {
  try {
    const server = app.listen(port, () => {
      console.log(`🚀 Express server is listening at http://localhost:${port}`);
    });
    return server;
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
