import { Router } from "express";

import {
  createAnimeController,
  getAllAnimeController,
  getAnimeByIdController,
  updateAnimeController,
  deleteAnimeController
} from "../controllers/anime.controller";

import {
  authenticate
} from "../middleware/auth.middleware";

import {
  isAdmin
} from "../middleware/admin.middleware";

const router = Router();

router.get(
  "/",
  getAllAnimeController
);

router.get(
  "/:id",
  getAnimeByIdController
);

router.post(
  "/",
  authenticate,
  isAdmin,
  createAnimeController
);

router.put(
  "/:id",
  authenticate,
  isAdmin,
  updateAnimeController
);

router.delete(
  "/:id",
  authenticate,
  isAdmin,
  deleteAnimeController
);

export default router;