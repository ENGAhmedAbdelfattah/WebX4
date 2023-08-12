import {
  type NextRequest,
  type NextFetchEvent,
  type NextMiddleware,
} from "next/server";
import getLocale, { locales } from "@/utils/getLocale";
import { langPath } from "@/types/custom";

// interface AppNextRequest extends NextRequest {
//   langPath: langPath;
// }

export function internationalizationMiddleware(middleware: NextMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );
    if (pathnameIsMissingLocale) {
      const locale = getLocale(req);
      // I add langPath in NextRequest type globally by click on it "NextRequest" and add type in interface
      req.langPath = new URL(`/${locale}/${pathname}`, req.url);
    }
    return middleware(req, event);
  };
}

