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
    async signIn({ user, account, profile, credentials }) {
      if (user) {
        const res = await upsertUserForSignup(user.email, user.name);
        console.log(res);
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return baseUrl;
      return baseUrl;
    },
    async session({ session, user }) {
      session.user = user;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
  },
};
