import type { NextRequest } from "next/server";
import { routes } from "./app/routes/routes";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (token && request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL(routes.home, request.url));
  }

  if (!token && !request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL(routes.login, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
