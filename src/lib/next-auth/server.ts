import { getServerSession } from "next-auth/next";
import { cache } from "react";
import { authOptions } from "./options";

export const getSession = cache(
  async () => await getServerSession(authOptions)
);
