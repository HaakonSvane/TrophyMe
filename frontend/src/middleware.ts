import { NextAuthMiddlewareOptions, NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { authOptions } from "./lib/authOptions";
import type { NextRequest } from "next/server";

const options: NextAuthMiddlewareOptions = {
    pages: authOptions.pages,
};

export const middleware = (request: NextRequest) => {
    if (request.nextUrl.pathname === "/") {
        return;
    }
    return withAuth(request as NextRequestWithAuth);
};

export const config = {
    matcher: ["/", "/dashboard/:path*", "/stats/:path*", "/groups/:path*"],
};
