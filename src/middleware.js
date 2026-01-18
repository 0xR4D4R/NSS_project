import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // If the user is trying to access /admin...
    if (req.nextUrl.pathname.startsWith("/admin")) {
      // ...and they are NOT an admin...
      if (req.nextauth.token?.role !== "admin") {
        // ...redirect them back to user dashboard (or home)
        return NextResponse.rewrite(new URL("/user/dashboard", req.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Ensure user is logged in first
    },
  }
);

export const config = {
  matcher: ["/user/:path*", "/admin/:path*"],
};