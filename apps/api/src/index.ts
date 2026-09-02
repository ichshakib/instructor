import { PORT } from "./env";
import { app } from "./app";
import logger from "./logger/winston.logger";

export const startServer = () => {
  try {
    const server = app.listen(PORT, () => {
      logger.info(`🚀 Express server is listening at http://localhost:${PORT}`);
    });
    return server;
  } catch (error) {
    logger.error(`Failed to start server: ${String(error)}`);
    process.exit(1);
  }
};

startServer();
