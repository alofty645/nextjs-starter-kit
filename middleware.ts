import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import config from "./config";

export default clerkMiddleware({
  publicRoutes: ["/", "/api/payments/webhook", "/api/auth/webhook"],
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return auth.isApiRoute
        ? new NextResponse("Unauthorized", { status: 401 })
        : NextResponse.redirect(new URL("/sign-in", req.url));
    }

    if (auth.userId && !auth.isPublicRoute) {
      const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");
      if (isProtectedRoute && !config.auth.enabled) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return NextResponse.next();
  },
});

export const middlewareConfig = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
