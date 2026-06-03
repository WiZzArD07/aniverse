import prisma from "./prisma";

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed", error);
    process.exit(1);
  }
};