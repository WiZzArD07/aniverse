import prisma from "../config/prisma";

export const createAnime = async (data: any) => {
  return prisma.anime.create({
    data
  });
};

export const getAllAnime = async (
  page: number,
  limit: number,
  status?: string,
  year?: number
) => {

  const skip =
    (page - 1) * limit;

  const where = {
    ...(status && { status }),
    ...(year && { releaseYear: year })
  };

  const anime =
    await prisma.anime.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc"
      }
    });

  const total =
    await prisma.anime.count({
      where
    });

  return {
    anime,
    total
  };
};

export const getAnimeById = async (
  id: string
) => {

  const anime =
    await prisma.anime.findUnique({
      where: { id }
    });

  if (!anime) {
    throw new Error("Anime not found");
  }

  return anime;
};

export const updateAnime = async (
  id: string,
  data: any
) => {

  return prisma.anime.update({
    where: { id },
    data
  });

};

export const deleteAnime = async (
  id: string
) => {

  return prisma.anime.delete({
    where: { id }
  });

};