import { NextResponse } from "next/server";
export const middleware = (request) => {
  //   if any url user want to hit redirect to the login
  // if (request.nextUrl.pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  if (request.nextUrl.pathname !== "/about") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};
export const config = {
  matcher: ["/about/aboutcollege:path*", "/studentlist/:path*"],
};
