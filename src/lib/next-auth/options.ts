import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { upsertUserForSignup } from "../prisma";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (user && account) {
        const createdUser = await upsertUserForSignup(user.email, user.name);
        user.id = createdUser.id;
        account.userId = createdUser.id;
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return baseUrl;
      return baseUrl;
    },
    async session({ session, user }) {
      if (user) {
        session.user = user;
      }

      return Promise.resolve(session);
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.account = account;
      }

      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
