"use server";

import { getUserByEmail, prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createReview = async (
  starsCount: number,
  reviewContent: string,
  email: string
) => {
  try {
    const user = await getUserByEmail(email);
    if (!user) return null;

    const res = await prisma.review.create({
      data: {
        userId: user.id,
        stars: starsCount,
        review: reviewContent,
      },
    });

    revalidatePath("/");

    return res;
  } catch (error) {
    console.log("error =", error);
  }
};
