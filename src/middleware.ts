import { chain } from "@/middlewares/chain";
import { internationalizationMiddleware } from "./middlewares/internationalizationMW";
import { responseMiddleware } from "./middlewares/responseMW";

export default chain([internationalizationMiddleware, responseMiddleware]);

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|apple-icon.png|icon.png).*)"],
};
