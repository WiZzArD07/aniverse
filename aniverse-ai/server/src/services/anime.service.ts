import prisma from "../config/prisma";

export const getAllAnime = async () => {
  return prisma.anime.findMany({
    include: {
      genres: {
        include: {
          genre: true
        }
      }
    }
  });
};