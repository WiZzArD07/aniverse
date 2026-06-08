import prisma from "../config/prisma";

export const getUserProfile = async (
  userId: string
) => {

  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true
    }
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};