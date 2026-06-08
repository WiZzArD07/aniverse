import { Response } from "express";

import {
  AuthRequest
} from "../middleware/auth.middleware";

export const getProfile = async (
  req: AuthRequest,
  res: Response
) => {

  res.status(200).json({
    success: true,
    user: req.user
  });

};