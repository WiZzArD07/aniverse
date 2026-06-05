import bcrypt from "bcrypt";
import prisma from "../config/prisma";

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