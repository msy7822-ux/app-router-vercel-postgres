import "next-auth";
import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user: {
      id: string;
    };
  }
}

// declare module "next-auth" {
//   interface Session {
//     user: {};
//   }
// }
