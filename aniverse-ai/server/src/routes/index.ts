import { Router } from "express";

import authRoutes
from "./auth.routes";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "AniVerse API Running"
  });
});

router.use(
  "/api/auth",
  authRoutes
);

export default router;