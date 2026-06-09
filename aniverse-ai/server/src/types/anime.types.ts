export interface CreateAnimeInput {
  title: string;
  description: string;
  coverImage: string;
  bannerImage?: string;
  releaseYear: number;
  status: string;
  rating?: number;
}