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
async (_req: Request, res: Response) => {

  const anime =
    await getAllAnime();

  return res.json({
    success: true,
    anime
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