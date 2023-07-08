import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(_req: NextRequest) {
  const res = NextResponse.next();

  return res;
}

// for middlewareを軽くする
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
