import { Request, Response } from "express";
import { ZodError } from "zod";

import { registerSchema }
from "../validators/auth.validator";

import { registerUser }
from "../services/auth.service";

export const register = async (
  req: Request,
  res: Response
) => {

  try {

    const validatedData =
      registerSchema.parse(req.body);

    const user =
      await registerUser(validatedData);

    res.status(201).json({
      success: true,
      message:
        "User registered successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error: any) {

      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.flatten().fieldErrors
        });
      }

      return res.status(400).json({
        success: false,
        message: error.message
      });
  }
};