import { getSessionCookie } from 'better-auth/cookies';
import { NextRequest, NextResponse } from 'next/server';
import { PAGES } from './constants/pages';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isOnHome = pathname === '/';
  const sessionCookie = getSessionCookie(request);

  if (sessionCookie) {
    if (isOnHome) {
      return NextResponse.redirect(new URL(PAGES.SETTINGS, request.nextUrl));
    }

    return NextResponse.next();
  } else {
    if (isOnHome) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL(PAGES.LOGIN, request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - manifest.json (web app manifest)
     */
    '/((?!api|auth|_next/static|_next/image|favicon.ico|manifest.json).*)',
  ],
};
