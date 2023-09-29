import { withAuth } from "next-auth/middleware";
import { authOptions } from "@/lib/authOptions";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = withAuth(
  async function middleware(request) {
    const token = await getToken({ req: request });
    const isAuth = !!token;
    const isAuthPage = request.nextUrl.pathname.startsWith("/auth/signIn");
    const isLandingPage = request.nextUrl.pathname === "/";
    if (isAuthPage || isLandingPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }

      return null;
    }

    if (!isAuth) {
      let from = request.nextUrl.pathname;
      if (request.nextUrl.search) {
        from += request.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`auth/signIn?from=${encodeURIComponent(from)}`, request.url)
      );
    }
  },
  {
    callbacks: {
      authorized: async (_) => true,
    },
    pages: authOptions.pages,
  }
);

export const config = {
  matcher: [
    "/auth/signIn",
    "/dashboard/:path*",
    "/stats/:path*",
    "/groups/:path*",
  ],
};
