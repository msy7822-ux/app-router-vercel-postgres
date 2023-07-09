import { PrismaClient } from "@prisma/client";
import { cache } from "react";

export const prisma = new PrismaClient();

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
