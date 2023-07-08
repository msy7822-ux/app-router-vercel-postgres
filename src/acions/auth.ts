"use server";

import { prisma } from "@/lib/prisma";

export const createUser = async (email: string, name: string) => {
  await prisma.user.create({
    data: {
      name: name,
      email,
    },
  });
};
