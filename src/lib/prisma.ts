import { PrismaClient } from "@prisma/client";
import { cache } from "react";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const upsertUserForSignup = async (
  email: string | null | undefined,
  name: string | null | undefined
) => {
  const res = await prisma.user.upsert({
    create: { email: email ?? "", name: name ?? "" },
    update: {},
    where: { email: email ?? "" },
  });

  return res;
};

export const getUserByEmail = cache(async (email: string) => {
  const res = await prisma.user.findUnique({
    where: { email },
  });

  return res;
});

export const getReviews = cache(async () => {
  const res = await prisma.review.findMany({
    select: {
      id: true,
      review: true,
      stars: true,
      createdAt: true,
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res;
});

export const getYourReviews = cache(async (email: string) => {
  const user = await getUserByEmail(email);
  const res = await prisma.review.findMany({
    select: {
      id: true,
      review: true,
      stars: true,
      createdAt: true,
      author: true,
    },
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res;
});
