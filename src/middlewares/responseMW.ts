import { langPath } from "@/types/custom";
import {
  NextResponse,
  type NextFetchEvent,
  type NextMiddleware,
  type NextRequest,
} from "next/server";

// interface NextRequest {
// }

// declare module 'next' {
//   interface NextRequest {
//     langPath: langPath; // You can adjust the type of langPath accordingly
//   }
// }
export function responseMiddleware(middleware: NextMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const newHeaders = new Headers(req.headers);
    newHeaders.set("x-lang", "123");
    if (req.langPath) return NextResponse.redirect(req.langPath);
    return middleware(req, event);
  };
}
