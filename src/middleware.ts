import { NextResponse, type NextRequest } from "next/server";
import { routes } from "./app/routes/routes";
import { isTokenExpired } from "./app/utils/jwt.util";

export function middleware(request: NextRequest) {
  let token = request.cookies.get("token")?.value;
  console.log(token);

  if (token && isTokenExpired(token)) {
    const response = NextResponse.next();
    request.cookies.delete("token");
    response.cookies.delete("token");
    token = "";
  }

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
