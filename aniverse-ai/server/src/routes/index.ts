import { Router } from "express";

import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import animeRoutes
from "./anime.routes";

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

router.use(
  "/api/users",
  userRoutes
);

router.use(
  "/api/anime",
  animeRoutes
);

export default router;