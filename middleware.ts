import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/i18n.config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  const pathnameParts = request.nextUrl.pathname.split("/").filter(Boolean);
  let lang = pathnameParts[0];
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get("LOCALE")?.value || "en";
    request.nextUrl.pathname = request.nextUrl.pathname.replace(lang, "");
    return NextResponse.redirect(
      new URL(
        `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
