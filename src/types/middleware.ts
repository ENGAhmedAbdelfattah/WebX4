import { langPath } from "./custom";

export interface AppNextRequest extends NextRequest {
  langPath: langPath;
}
