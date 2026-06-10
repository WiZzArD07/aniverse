import { z } from "zod";

export const createAnimeSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  coverImage: z.string().url(),
  bannerImage: z.string().url().optional(),
  releaseYear: z.number(),
  status: z.string(),
  rating: z.number().optional()
});