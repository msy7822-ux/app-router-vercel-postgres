"use server";

import { prisma } from "@/lib/prisma";

export const createReview = async (
  starsCount: number,
  reviewContent: string,
  userId: string
) => {
  const res = await prisma.review.create({
    data: {
      userId,
      stars: starsCount,
      review: reviewContent,
    },
  });

  return res;
};
