import { langPath } from "@/types/custom";
import { AppNextRequest } from "@/types/middleware";
import {
  NextResponse,
  type NextFetchEvent,
  type NextMiddleware,
  type NextRequest,
} from "next/server";

export function responseMiddleware(middleware: NextMiddleware) {
  return async (req: any, event: NextFetchEvent) => {
    const newHeaders = new Headers(req.headers);
    newHeaders.set("x-lang", "123");
    if (req.langPath) return NextResponse.redirect(req.langPath as URL);
    return middleware(req, event);
  };
}
// string | NextURL | URL
