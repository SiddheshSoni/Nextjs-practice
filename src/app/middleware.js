import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request) {
  const token = request.cookies.get("token")?.value;

  try {
    const user = token ? await verifyToken(token) : null;
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*"],
};
