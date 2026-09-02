import { Router } from "express";
import healthRouter from "./health.route";

const router = Router();

router.get("/", (_req, res) => {
  res.type("text/plain").send(
    "Zugriff nicht gestattet: Dieser Stamm-Endpunkt ist nicht direkt öffentlich zugänglich. Hierbei handelt es sich um eine interne API-Schnittstelle. Bitte nutzen Sie die autorisierten Endpunkte oder konsultieren Sie die offizielle Dokumentation."
  );
});

// Mount modular sub-routes
router.use("/health", healthRouter);

export default router;
export { router };
