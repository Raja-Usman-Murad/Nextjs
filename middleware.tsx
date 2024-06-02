import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;

  const isPublicRoute =
    path.startsWith("/signin") || path.startsWith("/signup");

  // 3. Retrieve the token from cookie
  let isUserAuthenticated = req.cookies.get("token");

  if (isPublicRoute && isUserAuthenticated) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (!isPublicRoute && !isUserAuthenticated) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
