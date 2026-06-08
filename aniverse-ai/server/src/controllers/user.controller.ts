import { Response } from "express";

import {
  AuthRequest
} from "../middleware/auth.middleware";

import {
  getUserProfile
} from "../services/user.service";

export const getProfile = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const profile =
      await getUserProfile(
        req.user!.userId
      );

    res.status(200).json({
      success: true,
      profile
    });

  } catch (error: any) {

    res.status(404).json({
      success: false,
      message: error.message
    });

  }

};