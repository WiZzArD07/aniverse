import bcrypt from "bcrypt";
import prisma from "../config/prisma";
import { generateToken } from "../utils/jwt";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (
  data: RegisterInput
) => {

  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(
    data.password,
    10
  );

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword
    }
  });

  return user;
};

export const loginUser = async (
  email: string,
  password: string
) => {

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(
    user.id,
    user.email,
    user.role
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};