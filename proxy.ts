import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Hosting sits behind a reverse proxy that terminates SSL and forwards
// the original protocol via the x-forwarded-proto header. Force HTTPS
// there; skip entirely on localhost so local dev keeps working over http.
export function proxy(request: NextRequest) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isLocalhost = request.nextUrl.hostname === "localhost";

  if (!isLocalhost && forwardedProto === "http") {
    const httpsUrl = new URL(request.nextUrl);
    httpsUrl.protocol = "https:";

    return NextResponse.redirect(httpsUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
