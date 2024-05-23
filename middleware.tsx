import { NextRequest, NextResponse } from "next/server";

// 1. Specify protected and public routes
const protectedRoutes = ["/"];
const publicRoutes = ["/signin", "/signup"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);

  const isPublicRoute = publicRoutes.includes(path);

  // 3. Retrieve the token from cookie
  let isUserAuthenticated = req.cookies.get("token");

  //   4. Redirect to /login if the user is not authenticated for protected routes
  if (isProtectedRoute && !isUserAuthenticated) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }
  //   5. Redirect to / if the user is authenticated for public routes
  if (
    isPublicRoute &&
    isUserAuthenticated &&
    (req.nextUrl.pathname.startsWith("/signin") ||
      req.nextUrl.pathname.startsWith("/signup"))
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
