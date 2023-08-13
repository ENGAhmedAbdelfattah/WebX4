import { NextResponse, type NextFetchEvent, type NextMiddleware } from 'next/server';
import { type NextRequest } from 'next/server';

export function responseMiddleware(middleware: NextMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const newHeaders = new Headers(req.headers)
    newHeaders.set('x-lang', '123')
    if(req.langPath) return NextResponse.redirect(req.langPath);
    return middleware(req, event);
  }
}
