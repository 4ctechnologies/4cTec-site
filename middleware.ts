// export { auth as middleware } from "@/auth"\
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: Request) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // If no token is found, redirect to the sign-in page
  if (!token) {
    const url = new URL("/api/auth/signin", req.url);
    url.searchParams.set("callbackUrl", req.url); // Redirect back to the original URL after sign-in
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed if the user is authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to all dashboard routes
};

