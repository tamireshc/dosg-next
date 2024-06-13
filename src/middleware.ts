import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value
}

export const config = {
  matcher: ["/conta/:path*", "/login/:path*"]
}