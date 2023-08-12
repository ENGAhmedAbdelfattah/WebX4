import { AppNextRequest } from '@/types/middleware';
import { NextMiddlewareResult } from 'next/dist/server/web/types';
import { NextFetchEvent, NextResponse } from 'next/server'
// import type { NextMiddleware } from 'next/server'
export type NextMiddleware = (request: AppNextRequest, event: NextFetchEvent) => NextMiddlewareResult | Promise<NextMiddlewareResult>;
type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

export function chain(
  functions: any,
  index = 0,
): NextMiddleware {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next)
  }

  return () => NextResponse.next();
}
