import type { NextRequest } from "next/server"; // Use import type for NextRequest
import { NextResponse } from "next/server"; // Keep NextResponse as value import
// Remove config import as i18n block is gone
// import nextConfig from "./next.config";

// Define i18n config directly in middleware
const i18nConfig = {
  locales: ["en", "vi", "yue", "cmn", "nan", "wuu"],
  defaultLocale: "yue",
};

// Removed unused getLocale function

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const defaultLocale = i18nConfig.defaultLocale;
  const locales = i18nConfig.locales;

  // 1. Check if the path starts with the default locale prefix
  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    // Construct the new path by removing the default locale prefix
    let newPath = pathname.replace(`/${defaultLocale}`, "");
    if (!newPath.startsWith("/")) {
      newPath = `/${newPath}`;
    }
    // Handle the case where the path was just /yue, should redirect to /
    if (newPath === "") newPath = "/";
    // Redirect to the path without the prefix
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // 2. Check if the path starts with a non-default locale prefix
  const pathnameLocale = locales.find(
    (locale) =>
      locale !== defaultLocale &&
      (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  );

  // If it has a non-default locale prefix, let Next.js handle it.
  if (pathnameLocale) {
    return undefined; // Proceed without middleware intervention
  }

  // 3. Pathname is missing any locale prefix. Always rewrite to the default locale.
  // We don't need to detect the locale anymore for this case.
  // Ensure pathname starts with '/' for correct URL construction
  const internalPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  // Always rewrite to the default locale ('yue') internally,
  // keeping the user-facing URL clean (without the prefix).
  return NextResponse.rewrite(
    new URL(`/${defaultLocale}${internalPath}`, request.url)
  );
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, static assets, and font files
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|audio|img|.*\\.(?:woff|woff2|ttf|otf)$).*)",
  ],
};
