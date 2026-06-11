import { Request, Response } from "express";

import {
  createAnime,
  getAllAnime,
  getAnimeById,
  updateAnime,
  deleteAnime
} from "../services/anime.service";

export const createAnimeController =
async (req: Request, res: Response) => {

  try {

    const anime =
      await createAnime(req.body);

    return res.status(201).json({
      success: true,
      anime
    });

  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

export const getAllAnimeController =
async (req: Request, res: Response) => {

  console.log(req.query);

  const page =
    Number(req.query.page) || 1;

  const limit =
    Number(req.query.limit) || 10;

  const status =
    req.query.status as string;

  const year =
    req.query.year
      ? Number(req.query.year)
      : undefined;

  const result =
  await getAllAnime(
    page,
    limit,
    status,
    year
  );

  return res.json({
  success: true,
  page,
  limit,
  total: result.total,
  anime: result.anime
  });
  
};

export const getAnimeByIdController =
async (req: Request, res: Response) => {

  try {

    const anime =
      await getAnimeById(
        req.params.id as string
      );

    return res.json({
      success: true,
      anime
    });

  } catch (error: any) {

    return res.status(404).json({
      success: false,
      message: error.message
    });

  }

};

export const updateAnimeController =
async (req: Request, res: Response) => {

  try {

    const anime =
      await updateAnime(
        req.params.id as string,
        req.body
      );

    return res.json({
      success: true,
      anime
    });

  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

export const deleteAnimeController =
async (req: Request, res: Response) => {

  try {

    await deleteAnime(
      req.params.id as string
    );

    return res.json({
      success: true,
      message: "Anime deleted"
    });

  } catch (error: any) {

    return res.status(400).json({
      success: false,
      message: error.message
    });

  }

};