import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log(request.nextUrl.pathname);

  if (token && request.nextUrl.pathname != "/") {
    return Response.redirect(new URL("/", request.url));
  }

  if (!token && !request.nextUrl.pathname.startsWith("/auth/login")) {
    return Response.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/auth/register"],
};
